#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════
   build-schema.js — 首頁結構化資料的部署前產生
   用法（Netlify build command 的最後一棒）：
     node build-seo.js && node build-blog.js && node build-schema.js

   為什麼要用產生的、不直接寫死在 index.html：
   常見問題與顧問服務的文案會改，寫死一份 JSON-LD 等於維護兩處，
   遲早不同步——而「結構化資料跟畫面說的不一樣」比沒有結構化資料更糟。
   這支腳本直接從 index.html 的實際 DOM 取題目、答案與服務清單，
   所以只要改畫面，這裡自動跟著走。

   產生的 @graph：
     Organization  ← 告訴機器「GC 是誰」（法人名稱、統編、地址、社群、服務範圍）
     WebSite       ← 站台本身
     FAQPage       ← 首頁 8 組問答，AI 引擎可直接抽取
     OfferCatalog  ← 八項顧問服務，掛在 Organization 底下

   抓不到內容時一律「不中斷部署」（exit 0）——index.html 內建的保底
   Organization/WebSite 仍然有效。
   ═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');

const SITE = 'https://worldoflandmark.com';
const FILE = process.env.GC_INDEX || 'index.html';

/* HTML 片段 → 純文字。<li> 前面補頓號，條列讀起來才不會黏成一團 */
function plain(html) {
  return String(html || '')
    .replace(/<li>/gi, '、')
    .replace(/<\/(p|div|li|ol|ul)>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\s*、\s*/g, '、')          // 條列項之間不留空白
    .replace(/([：:，。])、/g, '$1')       // 「流程非常簡單：、提交需求」→「：提交需求」
    .replace(/^、/, '')
    .trim();
}

/* 題目前綴的「Q1：」對機器沒有意義，去掉 */
function cleanQ(t) {
  return plain(t).replace(/^Q\s*\d+\s*[：:.、]\s*/, '');
}

if (!fs.existsSync(FILE)) {
  console.warn('[schema] 找不到 ' + FILE + '，略過');
  process.exit(0);
}
let html = fs.readFileSync(FILE, 'utf8');

/* ── 1. 常見問題 ─────────────────────────────────────────────── */
const faq = [];
const faqRe = /<span data-i18n="index\.faq\.q(\d+)">([\s\S]*?)<\/span>[\s\S]*?data-i18n-html="index\.faq\.a\1">([\s\S]*?)<\/div>/g;
let m;
while ((m = faqRe.exec(html))) {
  const q = cleanQ(m[2]), a = plain(m[3]);
  if (q && a) faq.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } });
}

/* ── 2. 顧問服務 ─────────────────────────────────────────────── */
const services = [];
const svcTitles = {}, svcDescs = {};
let t;
const tRe = /data-i18n="index\.svc(\d+)\.title">([\s\S]*?)</g;
while ((t = tRe.exec(html))) svcTitles[t[1]] = plain(t[2]);
const dRe = /data-i18n="index\.svc(\d+)\.desc">([\s\S]*?)</g;
while ((t = dRe.exec(html))) svcDescs[t[1]] = plain(t[2]);
Object.keys(svcTitles).sort((a, b) => a - b).forEach(k => {
  if (!svcTitles[k]) return;
  services.push({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: svcTitles[k],
      description: svcDescs[k] || undefined,
      serviceType: svcTitles[k],
      provider: { '@id': SITE + '/#organization' },
      areaServed: [
        { '@type': 'Place', name: '台灣' }, { '@type': 'Place', name: '日本' },
        { '@type': 'Place', name: '東南亞' }, { '@type': 'Place', name: '北美' }
      ]
    }
  });
});

console.log('[schema] 取得常見問題 ' + faq.length + ' 題、顧問服務 ' + services.length + ' 項');

/* ── 3. 組 @graph ────────────────────────────────────────────── */
const org = {
  '@type': 'Organization', '@id': SITE + '/#organization',
  name: 'GC 跨境服務',
  alternateName: ['GC Cross-Border Services', 'GC 跨境電商顧問'],
  legalName: '世界之地標有限公司',
  taxID: '52341471',
  url: SITE + '/',
  logo: { '@type': 'ImageObject', url: SITE + '/images/og-image.png', width: 1200, height: 1200 },
  image: SITE + '/images/og-image.png',
  email: 'support@worldoflandmark.com',
  description: 'GC 是一站式全球跨境拓銷服務平台，協助品牌、企業及創業團隊快速找到適合的專業服務商，涵蓋市場拓展、品牌行銷、電商營運、通路開發與數位推廣。採「統包管理＋專業服務商執行」模式，由 GC 負責專案管理與品質把關。',
  address: {
    '@type': 'PostalAddress', streetAddress: '民族東路 679 之 1 號 6 樓',
    addressLocality: '松山區', addressRegion: '臺北市',
    postalCode: '105001', addressCountry: 'TW'
  },
  areaServed: [
    { '@type': 'Place', name: '台灣' }, { '@type': 'Place', name: '日本' },
    { '@type': 'Place', name: '東南亞' }, { '@type': 'Place', name: '北美' }
  ],
  knowsAbout: ['跨境電商', '海外拓銷', '國際物流', '品牌在地化', '通路開發', '市場調研', '供應鏈整合', '數位行銷'],
  sameAs: [
    'https://www.facebook.com/gcosc.co',
    'https://www.instagram.com/gcosc.co',
    'https://www.threads.com/@gcosc.co'
  ]
};
if (services.length) {
  org.hasOfferCatalog = { '@type': 'OfferCatalog', name: 'GC 顧問服務', itemListElement: services };
}

const graph = [
  org,
  {
    '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/',
    name: 'GC 跨境服務', inLanguage: 'zh-Hant',
    publisher: { '@id': SITE + '/#organization' }
  }
];
if (faq.length) {
  graph.push({
    '@type': 'FAQPage', '@id': SITE + '/#faq',
    inLanguage: 'zh-Hant',
    isPartOf: { '@id': SITE + '/#website' },
    mainEntity: faq
  });
}

const payload = '<script type="application/ld+json">'
  + JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
  + '</script>';

/* ── 4. 寫回標記之間（可重複執行）───────────────────────────── */
const START = '<!-- GC_SCHEMA_START -->', END = '<!-- GC_SCHEMA_END -->';
if (html.includes(START) && html.includes(END)) {
  const esc = s => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  html = html.replace(new RegExp(esc(START) + '[\\s\\S]*?' + esc(END)), START + payload + END);
} else if (html.includes('<!-- GC_SCHEMA_SLOT -->')) {
  html = html.replace('<!-- GC_SCHEMA_SLOT -->', START + payload + END);
} else {
  console.warn('[schema] 找不到 GC_SCHEMA 標記，略過注入');
  process.exit(0);
}
fs.writeFileSync(FILE, html);
console.log('[schema] 已更新 ' + FILE + '（' + payload.length + ' 位元組）');
