#!/usr/bin/env node
/**
 * GC 商品貨盤 SEO 預渲染
 * ------------------------------------------------------------
 * 在 Netlify build 時執行：從 Supabase 抓公開商品（public_products），
 * 把「第一頁商品列（爬蟲看得到）」＋「JSON-LD 結構化資料」灌進 catalog.html，
 * 讓 Google 等搜尋引擎收得到商品內容。前端 JS 載入後會即時覆蓋成互動版。
 *
 * 用法（Netlify build command）：node build-seo.js
 * 需 Node 18+（使用內建 fetch）。抓取失敗時「不中斷部署」，維持原檔即可
 * （官網前端仍會即時載入商品，只是這次沒有預渲染快照）。
 */
const fs = require('fs');

const SB_URL = 'https://rtzfeoahpsutyikutsys.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0emZlb2FocHN1dHlpa3V0c3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5ODU2NTAsImV4cCI6MjA5NjU2MTY1MH0.1ouoDmHrmetOc_qsvPrXiKsKx8eDEebbsXr2Fk2Sy-o';
const FILE = process.env.GC_CATALOG || 'catalog.html';
const PRERENDER_COUNT = 25;   // 可見預渲染筆數（對齊第一頁）
const JSONLD_COUNT = 300;     // 結構化資料筆數上限

const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

(async () => {
  let products;
  try {
    const cols = 'select=sku,name_zh,name_en,brand,category,origin,shelf_life_months,stock_regions,photo_url&order=category.asc,name_zh.asc';
    const chunk = 1000; let all = [], from = 0;
    while (true) {   // Supabase 單次上限 1000 筆，分批抓到抓完
      const url = SB_URL + '/rest/v1/public_products?' + cols + '&limit=' + chunk + '&offset=' + from;
      const res = await fetch(url, { headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY } });
      if (!res.ok) throw new Error('HTTP ' + res.status + ' ' + (await res.text()));
      const data = await res.json();
      all = all.concat(data);
      if (data.length < chunk) break;
      from += chunk;
      if (from > 200000) break;
    }
    products = all;
  } catch (e) {
    console.warn('[seo] 無法取得商品，略過預渲染（前端仍會即時載入）：', e.message);
    process.exit(0);
  }
  if (!Array.isArray(products) || !products.length) { console.warn('[seo] 商品為空，略過'); process.exit(0); }
  if (!fs.existsSync(FILE)) { console.warn('[seo] 找不到 ' + FILE + '，略過'); process.exit(0); }

  let html = fs.readFileSync(FILE, 'utf8');

  // 1) 可見預渲染列（第一頁）
  const rows = products.slice(0, PRERENDER_COUNT).map(p => {
    const name = p.name_zh || p.name_en || '';
    const th = p.photo_url ? ` style="background-image:url('${esc(p.photo_url)}')"` : '';
    const shelf = (p.shelf_life_months != null && p.shelf_life_months !== '') ? (p.shelf_life_months + ' 個月') : '—';
    const regions = (p.stock_regions || []).map(r => `<span class="chip">${esc(r)}</span>`).join('');
    return `<div class="lrow lbody">` +
      `<div class="cell c-chk"><div class="chk"></div></div>` +
      `<div class="cell prod"><div class="thumb"${th}></div>` +
      `<div class="pname"><b>${esc(name)}</b>` +
      `<span class="deskmeta"><span class="brand">${esc(p.brand || '')}</span></span>` +
      `<span class="m2meta"><span class="brand">${esc(p.brand || '')}</span></span></div></div>` +
      `<div class="cell c-cat">${esc(p.category || '')}</div>` +
      `<div class="cell c-origin">${esc(p.origin || '')}</div>` +
      `<div class="cell c-shelf"><span class="muted">${esc(shelf)}</span></div>` +
      `<div class="cell c-region"><span class="chips">${regions}</span></div>` +
      `<div class="cell c-add"></div>` +
      `<div class="mob-chips"><span class="chip">分類 ${esc(p.category || '')}</span><span class="chip">原產地 ${esc(p.origin || '')}</span></div>` +
      `</div>`;
  }).join('');

  // 2) JSON-LD 結構化資料
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GC 商品貨盤',
    numberOfItems: products.length,
    itemListElement: products.slice(0, JSONLD_COUNT).map((p, i) => {
      const item = { '@type': 'Product', name: p.name_zh || p.name_en || '' };
      if (p.brand) item.brand = { '@type': 'Brand', name: p.brand };
      if (p.category) item.category = p.category;
      if (p.photo_url) item.image = p.photo_url;
      return { '@type': 'ListItem', position: i + 1, item };
    })
  };
  const headInject = `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>`;
  const wrapped = `<!-- GC_PRERENDER_START -->${headInject}<!-- GC_PRERENDER_END -->`;

  // 注入 head（可重複執行）
  if (html.includes('<!-- GC_PRERENDER_START -->')) {
    html = html.replace(/<!-- GC_PRERENDER_START -->[\s\S]*?<!-- GC_PRERENDER_END -->/, wrapped);
  } else if (html.includes('<!-- GC_PRERENDER_SLOT -->')) {
    html = html.replace('<!-- GC_PRERENDER_SLOT -->', wrapped);
  } else {
    console.warn('[seo] 找不到 head 標記，JSON-LD 未注入');
  }

  // 注入 #rows（前端 JS 載入後會覆蓋）
  const loadingRows = '<div id="rows"><div class="loading" id="loadingMsg">載入商品中…</div></div>';
  if (html.includes(loadingRows)) {
    html = html.replace(loadingRows, `<div id="rows">${rows}</div>`);
  } else {
    // 若已被前次預渲染取代，改用正規式重灌
    html = html.replace(/<div id="rows">[\s\S]*?<\/div>\s*(?=<\/div>\s*<div class="pager")/, `<div id="rows">${rows}</div>\n    `);
  }

  fs.writeFileSync(FILE, html);
  console.log('[seo] 已預渲染 ' + Math.min(PRERENDER_COUNT, products.length) + ' 筆可見商品、'
    + Math.min(JSONLD_COUNT, products.length) + ' 筆結構化資料（共 ' + products.length + ' 筆）。');
})();
