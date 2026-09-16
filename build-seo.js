#!/usr/bin/env node
/**
 * 商品 SEO 建置：更新貨盤第一頁、建立每項商品永久頁、維護 sitemap。
 * 商品頁只描述資料庫已有的事實；不建立沒有來源的價格、庫存、評價或 Offer。
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SB_URL = 'https://rtzfeoahpsutyikutsys.supabase.co';
const SITE = 'https://worldoflandmark.com';
const FILE = process.env.GC_CATALOG || 'catalog.html';
const OUT = process.env.GC_PRODUCT_DIR || 'products';
const SITEMAP = process.env.GC_SITEMAP || 'sitemap.xml';
const PRERENDER_COUNT = 25;
const UPDATED = '2026-09-16';

// 公開 anon key 必須與前端 catalog.html 相同；從既有前端設定讀取，避免維護兩份。
const catalogSource = fs.existsSync(FILE) ? fs.readFileSync(FILE,'utf8') : '';
const keyMatch = catalogSource.match(/const\s+SB_KEY\s*=\s*['"]([^'"]+)['"]/);
const API_KEY = keyMatch ? keyMatch[1] : '';
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cleanUrl = s => /^https?:\/\/[^"'`\\\s<>]+$/i.test(String(s||'')) ? String(s) : '';
function productSlug(sku){
  const raw = String(sku || '').trim();
  let base = raw.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,72);
  if(!base) base = 'item';
  return base+'-'+crypto.createHash('sha256').update(raw).digest('hex').slice(0,8);
}
function productUrl(p){ return SITE+'/products/'+productSlug(p.sku)+'/'; }
function productPage(p){
  const name = p.name_zh || p.name_en || p.name_ja || p.sku || '商品';
  const desc = p.desc_zh || p.desc_en || `${name}${p.brand ? '，品牌 '+p.brand : ''}${p.category ? '，分類 '+p.category : ''}。查看商品基本資料並向 GC 提出跨境合作詢問。`;
  const url = productUrl(p), img = cleanUrl(p.photo_url);
  const product = {'@type':'Product','@id':url+'#product',name,sku:String(p.sku||''),url,description:desc};
  if(p.brand) product.brand={'@type':'Brand',name:p.brand};
  if(p.category) product.category=p.category;
  if(p.origin) product.countryOfOrigin={'@type':'Country',name:p.origin};
  if(img) product.image=img;
  const graph = [product,{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'首頁',item:SITE+'/'},{'@type':'ListItem',position:2,name:'商品貨盤',item:SITE+'/catalog.html'},{'@type':'ListItem',position:3,name,item:url}]}];
  const specs = [['SKU',p.sku],['品牌',p.brand],['分類',p.category],['原產地',p.origin],['保存期限',p.shelf_life_months !== null && p.shelf_life_months !== '' ? p.shelf_life_months+' 個月' : ''],['可供應地區',Array.isArray(p.stock_regions)?p.stock_regions.join('、'):'']].filter(x=>x[1]!==null&&x[1]!==undefined&&String(x[1]).trim());
  return `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="/images/favicon.png"><title>${esc(name)}${p.brand?'｜'+esc(p.brand):''}｜GC 商品貨盤</title><meta name="description" content="${esc(String(desc).replace(/\s+/g,' ').slice(0,155))}"><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="zh-Hant" href="${url}"><link rel="alternate" hreflang="x-default" href="${url}"><meta property="og:type" content="product"><meta property="og:title" content="${esc(name)}｜GC 商品貨盤"><meta property="og:description" content="${esc(String(desc).replace(/\s+/g,' ').slice(0,180))}"><meta property="og:url" content="${url}"><meta property="og:image" content="${img||SITE+'/images/og-image.png'}"><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}</script><script src="../../consent.js" defer></script><script src="../../local-preview.js"></script><style>:root{--blue:#003d79;--ink:#1e293b;--muted:#64748b}*{box-sizing:border-box}body{margin:0;color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans TC",sans-serif;line-height:1.7}a{color:var(--blue)}nav{height:72px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e2e8f0}nav a{text-decoration:none;font-weight:750}.wrap{max-width:1080px;margin:auto;padding:56px 5vw}.crumb{font-size:.8rem;color:var(--muted);margin-bottom:30px}.layout{display:grid;grid-template-columns:minmax(260px,420px) 1fr;gap:56px}.photo{aspect-ratio:1;border-radius:18px;background:#f1f5f9 center/contain no-repeat;display:flex;align-items:center;justify-content:center;font-size:4rem;border:1px solid #e2e8f0}h1{font-size:clamp(2rem,5vw,3.4rem);line-height:1.15;margin:.15em 0}.brand{color:#1460a8;font-weight:750}.desc{font-size:1.05rem;color:var(--muted)}dl{display:grid;grid-template-columns:120px 1fr;border-top:1px solid #e2e8f0;margin:28px 0}dt,dd{margin:0;padding:12px 0;border-bottom:1px solid #e2e8f0}dt{color:var(--muted)}.cta{display:inline-block;padding:12px 22px;border-radius:999px;background:var(--blue);color:white;text-decoration:none;font-weight:750}.note{font-size:.78rem;color:var(--muted);margin-top:14px}footer{padding:35px;background:#0b1f33;color:#dbeafe;text-align:center}@media(max-width:720px){.layout{grid-template-columns:1fr;gap:30px}.wrap{padding-top:30px}}</style></head><body><nav><a href="/">GC</a><a href="/catalog.html">返回商品貨盤</a></nav><main class="wrap"><div class="crumb"><a href="/">首頁</a> › <a href="/catalog.html">商品貨盤</a> › ${esc(name)}</div><div class="layout"><div class="photo"${img?` style="background-image:url('${esc(img)}')"`:''}>${img?'':'📦'}</div><article>${p.brand?'<div class="brand">'+esc(p.brand)+'</div>':''}<h1>${esc(name)}</h1><p class="desc">${esc(desc)}</p><dl>${specs.map(([k,v])=>'<dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd>').join('')}</dl><a class="cta" href="/catalog.html?sku=${encodeURIComponent(p.sku||'')}">加入詢問清單</a><p class="note">商品可供應狀態與合作條件以實際確認為準；本頁不代表即時庫存或公開售價。</p></article></div></main><footer>GC 跨境服務 · <a href="/privacy.html" style="color:#fff">隱私權政策</a></footer></body></html>`;
}

(async()=>{
  let products;
  try{
    if(!API_KEY || API_KEY.includes('...')) throw new Error('找不到 Supabase anon key');
    const cols='select=id,sku,name_zh,name_en,name_ja,desc_zh,desc_en,desc_ja,brand,category,origin,shelf_life_months,stock_regions,photo_url&order=category.asc,name_zh.asc';
    const chunk=1000; let all=[],from=0;
    while(true){
      const res=await fetch(SB_URL+'/rest/v1/public_products?'+cols+'&limit='+chunk+'&offset='+from,{headers:{apikey:API_KEY,Authorization:'Bearer '+API_KEY}});
      if(!res.ok) throw new Error('HTTP '+res.status+' '+await res.text());
      const data=await res.json(); all=all.concat(data); if(data.length<chunk) break; from+=chunk; if(from>200000) break;
    }
    products=all.filter(p=>String(p.sku||'').trim());
  }catch(e){ console.warn('[seo] 無法取得商品，略過：',e.message); process.exit(0); }
  if(!products.length||!fs.existsSync(FILE)){ console.warn('[seo] 商品為空或找不到 catalog.html，略過'); process.exit(0); }
  fs.mkdirSync(OUT,{recursive:true});
  const keep=new Set(products.map(p=>productSlug(p.sku)));
  for(const d of fs.readdirSync(OUT,{withFileTypes:true})) if(d.isDirectory()&&!keep.has(d.name)) fs.rmSync(path.join(OUT,d.name),{recursive:true,force:true});
  for(const p of products){ const dir=path.join(OUT,productSlug(p.sku)); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,'index.html'),productPage(p)); }
  let html=fs.readFileSync(FILE,'utf8');
  const rows=products.slice(0,PRERENDER_COUNT).map(p=>{
    const name=p.name_zh||p.name_en||'', img=cleanUrl(p.photo_url), url='/products/'+productSlug(p.sku)+'/';
    const regions=(p.stock_regions||[]).map(r=>`<span class="chip">${esc(r)}</span>`).join('');
    const shelf=p.shelf_life_months!==null&&p.shelf_life_months!==''?p.shelf_life_months+' 個月':'—';
    return `<div class="lrow lbody"><div class="cell c-chk"><div class="chk"></div></div><div class="cell prod"><div class="thumb"${img?` style="background-image:url('${esc(img)}')"`:''}></div><div class="pname"><b><a href="${url}">${esc(name)}</a></b><span class="deskmeta"><span class="brand">${esc(p.brand||'')}</span></span><span class="m2meta"><span class="brand">${esc(p.brand||'')}</span></span></div></div><div class="cell c-cat">${esc(p.category||'')}</div><div class="cell c-origin">${esc(p.origin||'')}</div><div class="cell c-shelf"><span class="muted">${esc(shelf)}</span></div><div class="cell c-region"><span class="chips">${regions}</span></div><div class="cell c-add"></div><div class="mob-chips"><span class="chip">分類 ${esc(p.category||'')}</span><span class="chip">原產地 ${esc(p.origin||'')}</span></div></div>`;
  }).join('');
  const jsonld={'@context':'https://schema.org','@type':'ItemList',name:'GC 商品貨盤',numberOfItems:products.length,itemListElement:products.slice(0,300).map((p,i)=>({'@type':'ListItem',position:i+1,url:productUrl(p),name:p.name_zh||p.name_en||p.sku}))};
  const wrapped='<!-- GC_PRERENDER_START --><script type="application/ld+json">'+JSON.stringify(jsonld).replace(/</g,'\\u003c')+'</script><!-- GC_PRERENDER_END -->';
  if(html.includes('<!-- GC_PRERENDER_START -->')) html=html.replace(/<!-- GC_PRERENDER_START -->[\s\S]*?<!-- GC_PRERENDER_END -->/,wrapped); else if(html.includes('<!-- GC_PRERENDER_SLOT -->')) html=html.replace('<!-- GC_PRERENDER_SLOT -->',wrapped);
  html=html.replace(/<div id="rows">[\s\S]*?<\/div>\s*(?=<\/div>\s*<div class="pager")/,`<div id="rows">${rows}</div>\n    `);
  fs.writeFileSync(FILE,html);
  if(fs.existsSync(SITEMAP)){
    let sm=fs.readFileSync(SITEMAP,'utf8');
    const entries=products.map(p=>{const u=productUrl(p);return `  <url>\n    <loc>${u}</loc>\n    <lastmod>${UPDATED}</lastmod>\n    <xhtml:link rel="alternate" hreflang="zh-Hant" href="${u}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${u}"/>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`;}).join('\n');
    const block='<!-- GC_PRODUCT_URLS_START -->\n'+entries+'\n  <!-- GC_PRODUCT_URLS_END -->';
    sm=sm.includes('<!-- GC_PRODUCT_URLS_START -->')?sm.replace(/<!-- GC_PRODUCT_URLS_START -->[\s\S]*?<!-- GC_PRODUCT_URLS_END -->/,block):sm.replace('</urlset>','  '+block+'\n</urlset>');
    fs.writeFileSync(SITEMAP,sm);
  }
  console.log('[seo] 已預渲染 '+Math.min(PRERENDER_COUNT,products.length)+' 筆貨盤列、產生 '+products.length+' 個商品永久頁並更新 sitemap');
})();
