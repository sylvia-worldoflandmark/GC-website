#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════
   build-blog.js — 部落格的部署前預渲染
   用法（Netlify build command）：node build-seo.js && node build-blog.js

   做三件事：
     1. 把每篇已發佈文章產成實體靜態頁 blog/<slug>/index.html
        （Netlify 服務實體檔案的優先序高於 redirects，所以這些網址會直接
         吃到含完整內容與 JSON-LD 的 HTML；還沒重建的新文章則會落到
         netlify.toml 的 /blog/* rewrite，由前端即時載入，不會 404）
     2. 把列表頁 blog.html 的第一頁文章與 ItemList JSON-LD 灌進去
     3. 更新 sitemap.xml（在標記之間重寫，可重複執行）

   刻意不使用 build-seo.js 的 GC_PRERENDER_* 標記，改用 GC_BLOG* 開頭，
   避免兩支腳本搶同一組註解。

   抓不到資料時一律「不中斷部署」（exit 0）—— 前端本來就會即時載入。
   ═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');

const SB_URL = 'https://rtzfeoahpsutyikutsys.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0emZlb2FocHN1dHlpa3V0c3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5ODU2NTAsImV4cCI6MjA5NjU2MTY1MH0.1ouoDmHrmetOc_qsvPrXiKsKx8eDEebbsXr2Fk2Sy-o';
const SITE = 'https://worldoflandmark.com';

const LIST_FILE = process.env.GC_BLOG_LIST || 'blog.html';
const POST_FILE = process.env.GC_BLOG_POST || 'blog-post.html';
const OUT_DIR   = process.env.GC_BLOG_DIR  || 'blog';
const SITEMAP   = process.env.GC_SITEMAP   || 'sitemap.xml';
const LIST_COUNT = 10;   // 與 blog.html 的 PAGE_SIZE 一致，預渲染剛好是第一頁

const esc = s => String(s == null ? '' : s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  .replace(/"/g,'&quot;').replace(/'/g,'&#39;');

/* 內文區塊 → 純文字（給 meta description 與 JSON-LD 用） */
function plain(blocks){
  return (blocks || []).map(b=>{
    if(!b) return '';
    if(b.type === 'heading')   return b.text || '';
    if(b.type === 'paragraph') return String(b.html||'').replace(/<[^>]*>/g,'');
    if(b.type === 'quote')     return b.text || '';
    if(b.type === 'list')      return (b.items||[]).map(x=>String(x).replace(/<[^>]*>/g,'')).join('、');
    return '';
  }).filter(Boolean).join('\n\n');
}

/* 只保留白名單行內標籤 —— 與 blog-post.html 前端那份規則一致 */
const OK = ['b','strong','i','em','u','s','a','br','span','code'];
function inline(html){
  return String(html||'').replace(/<\/?([a-z0-9]+)([^>]*)>/gi, (m, tag, attrs)=>{
    tag = tag.toLowerCase();
    if(OK.indexOf(tag) < 0) return '';
    if(m[1] === '/') return '</'+tag+'>';
    let keep = '';
    const st = /style\s*=\s*"([^"]*)"/i.exec(attrs);
    if(st){
      const ok = st[1].split(';').map(x=>x.trim()).filter(x=>/^(color|background-color)\s*:\s*(#[0-9a-f]{3,8}|rgba?\([\d.\s,%]+\))$/i.test(x));
      if(ok.length) keep += ' style="'+esc(ok.join(';'))+'"';
    }
    if(tag === 'a'){
      const h = /href\s*=\s*"([^"]*)"/i.exec(attrs);
      if(h && /^https?:\/\//i.test(h[1])) keep += ' href="'+esc(h[1])+'" rel="noopener nofollow" target="_blank"';
      else return '';
    }
    return '<'+tag+keep+'>';
  });
}

function blockHtml(b){
  if(!b || !b.type) return '';
  switch(b.type){
    case 'heading': {
      const t = b.level === 3 ? 'h3' : 'h2';
      return '<'+t+'>'+(b.html ? inline(b.html) : esc(b.text||''))+'</'+t+'>';
    }
    case 'list': {
      const t = b.style === 'ol' ? 'ol' : 'ul';
      const items = (b.items||[]).map(x=>'<li>'+inline(x)+'</li>').join('');
      return items ? '<'+t+'>'+items+'</'+t+'>' : '';
    }
    case 'quote':
      return '<blockquote>'+(b.html ? inline(b.html) : esc(b.text||''))
        + (b.source ? '<cite>'+esc(b.source)+'</cite>' : '')+'</blockquote>';
    case 'divider': return '<hr>';
    case 'image':
      if(!/^https?:\/\//i.test(String(b.url||''))) return '';
      return '<figure><img src="'+esc(b.url)+'" alt="'+esc(b.caption||'')+'" loading="lazy">'
        + (b.caption ? '<figcaption>'+esc(b.caption)+'</figcaption>' : '')
        + (b.source ? '<div class="po-fsrc"><span>'+esc(b.source)+'</span></div>' : '')+'</figure>';
    case 'video': case 'carousel': return '';   // 需要互動，交給前端
    default:
      return '<p>'+inline(b.html||'')+'</p>';
  }
}

function replaceSlot(html, name, payload){
  const start = '<!-- '+name+'_START -->', end = '<!-- '+name+'_END -->';
  const wrapped = start + payload + end;
  if(html.includes(start)){
    return html.replace(new RegExp(start.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&')+'[\\s\\S]*?'+end.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&')), wrapped);
  }
  if(html.includes('<!-- '+name+'_SLOT -->')){
    return html.replace('<!-- '+name+'_SLOT -->', wrapped);
  }
  console.warn('[blog] 找不到標記 '+name+'，略過這一項注入');
  return html;
}

(async function main(){
  let posts;
  try{
    const cols = 'id,slug,title,summary,cover_url,cover_source,category,category_name,tags,gallery,gallery_ratio,content,is_pinned,published_at,last_published_at,meta_title,meta_description';
    const res = await fetch(SB_URL+'/rest/v1/public_blog_posts?select='+cols+'&order=is_pinned.desc,published_at.desc&limit=1000',
      { headers: { apikey: SB_KEY, Authorization: 'Bearer '+SB_KEY } });
    if(!res.ok) throw new Error('HTTP '+res.status+' '+(await res.text()));
    posts = await res.json();
  }catch(e){
    console.warn('[blog] 無法取得文章，略過預渲染（前端仍會即時載入）：', e.message);
    process.exit(0);
  }
  if(!Array.isArray(posts)){ console.warn('[blog] 回傳格式不正確，略過'); process.exit(0); }
  console.log('[blog] 取得 '+posts.length+' 篇已發佈文章');

  if(!fs.existsSync(LIST_FILE)){ console.warn('[blog] 找不到 '+LIST_FILE+'，略過'); process.exit(0); }
  if(!fs.existsSync(POST_FILE)){ console.warn('[blog] 找不到 '+POST_FILE+'，略過'); process.exit(0); }

  /* ── 1. 列表頁 ─────────────────────────────────────────────── */
  let listHtml = fs.readFileSync(LIST_FILE, 'utf8');
  const itemList = {
    '@context':'https://schema.org', '@type':'ItemList',
    name:'GC 洞察文章',
    itemListElement: posts.slice(0,50).map((p,i)=>({
      '@type':'ListItem', position:i+1,
      url: SITE+'/blog/'+encodeURIComponent(p.slug)+'/',
      name: p.title || ''
    }))
  };
  const bootstrap = posts.slice(0, LIST_COUNT).map(p=>({
    id:p.id, slug:p.slug, title:p.title, summary:p.summary, cover_url:p.cover_url,
    category:p.category, category_name:p.category_name, tags:p.tags,
    is_pinned:p.is_pinned, published_at:p.published_at
  }));
  const listPayload =
    '<script type="application/ld+json">'+JSON.stringify(itemList)+'</script>'
    + '<script>window.GC_POSTS_BOOTSTRAP='+JSON.stringify(bootstrap).replace(/</g,'\\u003c')+';</script>';
  listHtml = replaceSlot(listHtml, 'GC_BLOGLIST', listPayload);
  fs.writeFileSync(LIST_FILE, listHtml);
  console.log('[blog] 已更新 '+LIST_FILE);

  /* ── 2. 每篇文章的實體靜態頁 ──────────────────────────────── */
  const tpl = fs.readFileSync(POST_FILE, 'utf8');
  fs.mkdirSync(OUT_DIR, { recursive:true });

  // 先清掉上一次產生、但這次已不在清單裡的文章（下架／刪除的要跟著消失）
  const keep = new Set(posts.map(p=>p.slug));
  try{
    fs.readdirSync(OUT_DIR, { withFileTypes:true }).forEach(d=>{
      if(d.isDirectory() && !keep.has(d.name)){
        fs.rmSync(path.join(OUT_DIR, d.name), { recursive:true, force:true });
        console.log('[blog] 移除已下架的靜態頁：'+d.name);
      }
    });
  }catch(e){}

  posts.forEach(p=>{
    const url = SITE+'/blog/'+encodeURIComponent(p.slug)+'/';
    const title = (p.meta_title || p.title || '') + ' — GC 跨境服務';
    const desc = (p.meta_description || p.summary || plain((p.content||{}).blocks).slice(0,120)).replace(/\s+/g,' ').trim();
    const img = /^https?:\/\//i.test(String(p.cover_url||'')) ? p.cover_url : SITE+'/images/logo.png';

    const ld = {
      '@context':'https://schema.org', '@type':'BlogPosting',
      headline: p.title || '', description: desc, image: img,
      datePublished: p.published_at || undefined,
      dateModified: p.last_published_at || p.published_at || undefined,
      inLanguage: 'zh-Hant',
      mainEntityOfPage: { '@type':'WebPage', '@id': url },
      publisher: { '@type':'Organization', name:'GC 跨境服務', logo:{ '@type':'ImageObject', url: SITE+'/images/logo.png' } },
      author: { '@type':'Organization', name:'GC 跨境服務' },
      keywords: (p.tags||[]).join(', ') || undefined,
      articleSection: p.category_name || undefined
    };

    const head =
      '<script type="application/ld+json">'+JSON.stringify(ld)+'</script>'
      + '<script>window.GC_POST_BOOTSTRAP='+JSON.stringify(p).replace(/</g,'\\u003c')+';</script>';

    // 靜態內文：讓不執行 JS 的爬蟲也讀得到全文；前端載入後會整段換掉
    const body = '<div id="poPrerender" style="max-width:1180px;margin:0 auto;padding:118px 5vw 40px;">'
      + '<h1 class="po-h1">'+esc(p.title||'')+'</h1>'
      + ((p.tags||[]).length ? '<div class="po-tags">'+(p.tags||[]).map(x=>'<span>#'+esc(x)+'</span>').join('')+'</div>' : '')
      + (p.summary ? '<div class="po-sum">'+esc(p.summary)+'</div>' : '')
      + '<div class="po-body">'+((p.content||{}).blocks||[]).map(blockHtml).join('')+'</div>'
      + '</div>';

    let h = tpl;
    h = replaceSlot(h, 'GC_BLOGPOST', head);
    h = h.replace(/<title>[\s\S]*?<\/title>/, '<title>'+esc(title)+'</title>');
    h = h.replace(/(<meta name="description" content=")[^"]*(")/, '$1'+esc(desc)+'$2');
    h = h.replace(/(<meta property="og:title" content=")[^"]*(")/, '$1'+esc(p.meta_title||p.title||'')+'$2');
    h = h.replace(/(<meta property="og:description" content=")[^"]*(")/, '$1'+esc(desc)+'$2');
    h = h.replace(/(<meta property="og:url" content=")[^"]*(")/, '$1'+esc(url)+'$2');
    h = h.replace(/(<meta property="og:image" content=")[^"]*(")/, '$1'+esc(img)+'$2');
    h = h.replace(/(<meta name="twitter:title" content=")[^"]*(")/, '$1'+esc(p.meta_title||p.title||'')+'$2');
    h = h.replace(/(<meta name="twitter:description" content=")[^"]*(")/, '$1'+esc(desc)+'$2');
    h = h.replace(/<link rel="canonical" href="[^"]*">/,
      '<link rel="canonical" href="'+esc(url)+'">\n'
      + '<link rel="alternate" hreflang="zh-Hant" href="'+esc(url)+'">\n'
      + '<link rel="alternate" hreflang="en" href="'+esc(url)+'?lang=en">\n'
      + '<link rel="alternate" hreflang="ja" href="'+esc(url)+'?lang=ja">\n'
      + '<link rel="alternate" hreflang="x-default" href="'+esc(url)+'">');
    h = h.replace('<div id="poState" class="po-state" style="display:none;"></div>',
                  '<div id="poState" class="po-state" style="display:none;"></div>\n'+body);

    const dir = path.join(OUT_DIR, p.slug);
    fs.mkdirSync(dir, { recursive:true });
    fs.writeFileSync(path.join(dir, 'index.html'), h);
  });
  console.log('[blog] 已產生 '+posts.length+' 篇靜態文章頁於 '+OUT_DIR+'/');

  /* ── 3. sitemap ────────────────────────────────────────────── */
  try{
    if(fs.existsSync(SITEMAP)){
      let sm = fs.readFileSync(SITEMAP, 'utf8');
      const entries = posts.map(p=>{
        const u = SITE+'/blog/'+encodeURIComponent(p.slug)+'/';
        const lm = (p.last_published_at || p.published_at || '').slice(0,10);
        return '  <url>\n'
          + '    <loc>'+u+'</loc>\n'
          + (lm ? '    <lastmod>'+lm+'</lastmod>\n' : '')
          + '    <xhtml:link rel="alternate" hreflang="zh-Hant" href="'+u+'"/>\n'
          + '    <xhtml:link rel="alternate" hreflang="en" href="'+u+'?lang=en"/>\n'
          + '    <xhtml:link rel="alternate" hreflang="ja" href="'+u+'?lang=ja"/>\n'
          + '    <xhtml:link rel="alternate" hreflang="x-default" href="'+u+'"/>\n'
          + '    <changefreq>monthly</changefreq>\n'
          + '    <priority>0.7</priority>\n'
          + '  </url>';
      }).join('\n');
      const block = '\n'+entries+'\n';
      if(sm.includes('<!-- GC_BLOG_URLS_START -->')){
        sm = sm.replace(/<!-- GC_BLOG_URLS_START -->[\s\S]*?<!-- GC_BLOG_URLS_END -->/,
          '<!-- GC_BLOG_URLS_START -->'+block+'  <!-- GC_BLOG_URLS_END -->');
      }else{
        sm = sm.replace('</urlset>', '  <!-- GC_BLOG_URLS_START -->'+block+'  <!-- GC_BLOG_URLS_END -->\n</urlset>');
      }
      fs.writeFileSync(SITEMAP, sm);
      console.log('[blog] 已更新 '+SITEMAP+'（'+posts.length+' 筆文章網址）');
    }
  }catch(e){ console.warn('[blog] sitemap 更新失敗，略過：', e.message); }
})();
