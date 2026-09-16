#!/usr/bin/env node
/* Build server-rendered English and Japanese pages from data-i18n attributes.
   Articles remain Traditional Chinese until their body content is translated. */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://worldoflandmark.com';
const LANGS = ['en', 'ja'];
const PAGES = [
  { file: 'index.html', key: 'index', route: '' },
  { file: 'catalog.html', key: 'catalog', route: 'catalog.html' },
  { file: 'partner.html', key: 'partner', route: 'partner.html' },
  { file: 'gc-form.html', key: 'form', route: 'gc-form.html' },
  { file: 'privacy.html', key: 'privacy', route: 'privacy.html' }
];

const SEO = {
  index: {
    en: ['GC Cross-Border Services — Global Market Expansion Consulting Platform', 'Expand your brand into global markets with GC. Get matched with cross-border market entry, e-commerce, retail, localization and digital marketing specialists.'],
    ja: ['GCクロスボーダーサービス — グローバル市場開拓コンサルティング', 'GCは、海外市場開拓、越境EC、小売チャネル、ローカライズ、デジタルマーケティングの専門家とブランドをつなぎます。']
  },
  catalog: {
    en: ['Product Catalog — GC Cross-Border Services', 'Browse cross-border consumer products represented by GC, select the items you are interested in, and request quotations and partnership terms.'],
    ja: ['商品カタログ — GCクロスボーダーサービス', 'GCが取り扱う越境ブランド商品をご覧いただき、関心のある商品を選んで、お見積りと取引条件をお問い合わせください。']
  },
  partner: {
    en: ['Become a GC Partner — Expanding Global Markets Together', 'Join the GC partner network, connect with qualified brand clients, and grow your cross-border service business with project support from GC.'],
    ja: ['GCサービスパートナーになる — 共にグローバル市場を拓く', 'GCパートナーネットワークに参加し、優良ブランドとの連携やプロジェクト支援を通じて越境サービス事業を拡大しましょう。']
  },
  form: {
    en: ['GC Cross-Border Service Diagnostic Form — Start Your Partnership', 'Tell GC about your brand, target markets and expansion goals. Our advisors will review your needs and contact you within three business days.'],
    ja: ['GCクロスボーダーサービス診断フォーム — 協業を始める', 'ブランドの現状、対象市場、海外展開の目標をご記入ください。GCの担当者が内容を確認し、3営業日以内にご連絡します。']
  },
  privacy: {
    en: ['Privacy Policy — GC Cross-Border Services', 'Learn what personal data GC collects, how it is used and shared, how long it is retained, and how to exercise your privacy rights.'],
    ja: ['プライバシーポリシー — GCクロスボーダーサービス', 'GCが取得する個人情報、その利用・共有方法、保存期間、お客様の権利について説明します。']
  }
};

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
  });
}

function loadTranslations() {
  const source = fs.readFileSync('i18n.js', 'utf8');
  const start = source.indexOf('const GC_I18N =');
  const end = source.indexOf('/* ══════════════════════════════════════════\n   Core engine');
  if (start < 0 || end < 0) throw new Error('Cannot locate GC_I18N in i18n.js');
  return vm.runInNewContext(source.slice(start, end) + '\nGC_I18N;', Object.create(null));
}

function translateAttributes(html, translations) {
  Object.keys(translations).forEach(function (key) {
    const safeKey = escapeRegExp(key);
    const plain = new RegExp('(<([a-zA-Z][\\w:-]*)\\b[^>]*\\bdata-i18n="' + safeKey + '"[^>]*>)([\\s\\S]*?)(</\\2>)', 'g');
    html = html.replace(plain, function (_, open, tag, old, close) {
      return open + escapeHtml(translations[key]) + close;
    });

    const rich = new RegExp('(<([a-zA-Z][\\w:-]*)\\b[^>]*\\bdata-i18n-html="' + safeKey + '"[^>]*>)([\\s\\S]*?)(</\\2>)', 'g');
    html = html.replace(rich, function (_, open, tag, old, close) {
      return open + translations[key] + close;
    });

    const placeholderTag = new RegExp('<[^>]*\\bdata-i18n-ph="' + safeKey + '"[^>]*>', 'g');
    html = html.replace(placeholderTag, function (tag) {
      return tag.replace(/placeholder="[^"]*"/, 'placeholder="' + escapeHtml(translations[key]) + '"');
    });
  });
  return html;
}

function pageUrl(page, lang) {
  const prefix = lang === 'zh' ? '/' : '/' + lang + '/';
  return SITE + prefix + page.route;
}

function setMeta(html, page, lang) {
  const locale = lang === 'en' ? 'en_US' : (lang === 'ja' ? 'ja_JP' : 'zh_TW');
  const title = SEO[page.key][lang][0];
  const description = SEO[page.key][lang][1];
  const canonical = pageUrl(page, lang);
  const alternates =
    '<link rel="alternate" hreflang="zh-Hant" href="' + pageUrl(page, 'zh') + '">\n' +
    '<link rel="alternate" hreflang="en" href="' + pageUrl(page, 'en') + '">\n' +
    '<link rel="alternate" hreflang="ja" href="' + pageUrl(page, 'ja') + '">\n' +
    '<link rel="alternate" hreflang="x-default" href="' + pageUrl(page, 'zh') + '">';

  html = html.replace(/<html lang="[^"]+"/, '<html lang="' + (lang === 'zh' ? 'zh-TW' : lang) + '"');
  html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>' + escapeHtml(title) + '</title>');
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, '$1' + escapeHtml(description) + '$2');
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, '$1' + escapeHtml(title) + '$2');
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, '$1' + escapeHtml(description) + '$2');
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, '$1' + canonical + '$2');
  html = html.replace(/(<meta property="og:locale" content=")[^"]*(")/, '$1' + locale + '$2');
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, '$1' + escapeHtml(title) + '$2');
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, '$1' + escapeHtml(description) + '$2');
  html = html.replace(/<link rel="alternate" hreflang="[^"]+" href="[^"]*">\s*/g, '');
  html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + canonical + '">\n' + alternates);
  return html;
}

function localizeLinks(html, lang) {
  const localized = new Set(['index', 'catalog', 'partner', 'gc-form', 'privacy']);
  html = html.replace(/(href|src)="(?:\.\/)?(index|catalog|partner|blog|gc-form|privacy)\.html(#[^"]*)?"/g,
    function (_, attr, file, hash) {
      if (localized.has(file)) return attr + '="/' + lang + '/' + (file === 'index' ? '' : file + '.html') + (hash || '') + '"';
      return attr + '="/blog.html?lang=' + lang + (hash || '') + '"';
    });
  html = html.replace(/(href|src)="(?:\.\/)?(images\/[^"?]+)"/g, '$1="/$2"');
  html = html.replace(/src="\/?i18n\.js(\?[^\"]*)?"/g, 'src="../i18n.js$1"');
  html = html.replace(/src="\/?consent\.js(\?[^\"]*)?"/g, 'src="../consent.js$1"');
  // 語系頁位於 /en、/ja 子目錄；本機預覽 helper 要回到站台根目錄。
  html = html.replace(/src="(?:\.\/)?local-preview\.js"/g, 'src="../local-preview.js"');
  html = html.replace(/(<span id="gcLangLabel">)[\s\S]*?(<\/span>)/,
    '$1' + (lang === 'en' ? 'EN' : '日本語') + '$2');
  return html;
}

function keepPolicyLanguage(html, lang) {
  ['zh', 'en', 'ja'].forEach(function (candidate) {
    const re = new RegExp('<!-- GC_POLICY_' + candidate.toUpperCase() + '_START -->[\\s\\S]*?<!-- GC_POLICY_' + candidate.toUpperCase() + '_END -->', 'g');
    if (candidate !== lang) html = html.replace(re, '');
  });
  html = html.replace(/<!-- GC_POLICY_(?:ZH|EN|JA)_(?:START|END) -->\s*/g, '');
  return html.replace(new RegExp('<div data-policy-lang="' + lang + '"(?: class="[^"]*")?>'),
    '<div data-policy-lang="' + lang + '" class="pp-on">');
}

function removeMismatchedStructuredData(html, page) {
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  if (page.key === 'catalog') {
    html = html.replace(/<!-- GC_PRERENDER_START -->[\s\S]*?<!-- GC_PRERENDER_END -->/, '<!-- GC_PRERENDER_SLOT -->');
    html = html.replace(/<div id="rows">[\s\S]*?<\/div>\s*(?=<\/div>\s*<div class="pager")/, '<div id="rows"><div class="loading" id="loadingMsg">Loading…</div></div>\n    ');
  }
  return html;
}

function sitemapEntry(page, lang) {
  const loc = pageUrl(page, lang);
  const priority = page.key === 'index' ? (lang === 'zh' ? '1.0' : '0.9') :
    (page.key === 'catalog' ? (lang === 'zh' ? '0.9' : '0.8') :
      (page.key === 'privacy' ? '0.3' : (lang === 'zh' ? '0.8' : '0.7')));
  const freq = page.key === 'catalog' ? 'weekly' : (page.key === 'privacy' ? 'yearly' : 'monthly');
  return '  <url>\n' +
    '    <loc>' + loc + '</loc>\n' +
    '    <xhtml:link rel="alternate" hreflang="zh-Hant" href="' + pageUrl(page, 'zh') + '"/>\n' +
    '    <xhtml:link rel="alternate" hreflang="en" href="' + pageUrl(page, 'en') + '"/>\n' +
    '    <xhtml:link rel="alternate" hreflang="ja" href="' + pageUrl(page, 'ja') + '"/>\n' +
    '    <xhtml:link rel="alternate" hreflang="x-default" href="' + pageUrl(page, 'zh') + '"/>\n' +
    '    <changefreq>' + freq + '</changefreq>\n' +
    '    <priority>' + priority + '</priority>\n' +
    '    <lastmod>2026-09-16</lastmod>\n' +
    '  </url>';
}

function updateSitemap() {
  let sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  const entries = PAGES.flatMap(function (page) {
    return ['zh', 'en', 'ja'].map(function (lang) { return sitemapEntry(page, lang); });
  }).join('\n');
  sitemap = sitemap.replace(/<!-- GC_STATIC_URLS_START -->[\s\S]*?<!-- GC_STATIC_URLS_END -->/,
    '<!-- GC_STATIC_URLS_START -->\n' + entries + '\n  <!-- GC_STATIC_URLS_END -->');
  fs.writeFileSync('sitemap.xml', sitemap);
}

(function main() {
  const translations = loadTranslations();
  PAGES.forEach(function (page) {
    let source = fs.readFileSync(page.file, 'utf8');
    // Keep the source (Traditional Chinese) head aligned with the new locale URLs.
    const zhSeo = {
      index: ['GC 跨境服務 — 全球市場拓銷顧問平台', 'GC 是一站式全球跨境拓銷服務平台，協助品牌快速媒合市場拓展、品牌行銷、電商營運等專業服務商，讓出海之路順暢無阻。'],
      catalog: ['商品型錄 — GC 跨境服務', 'GC 跨境服務商品型錄 — 瀏覽 GC 代理的跨境品牌商品，勾選有興趣的品項即可向 GC 顧問索取完整報價與合作條件。'],
      partner: ['成為 GC 服務商夥伴 — 共同拓展全球市場', '加入 GC 合作夥伴網絡，與優質品牌客戶合作，拓展業務版圖。GC 提供資源對接、專案支援與品質把關。'],
      form: ['GC 跨境服務需求診斷表 — 填寫需求開始合作', '填寫 GC 需求診斷表，讓我們精準了解您的品牌現況、目標市場與拓銷方向，3 個工作天內安排顧問線上會議。'],
      privacy: ['隱私權政策 — GC 跨境服務', 'GC 跨境服務隱私權政策 — 說明本網站蒐集哪些個人資料、如何使用、與哪些服務供應商分享、保存多久，以及您可行使的權利。']
    };
    SEO[page.key].zh = zhSeo[page.key];
    source = setMeta(source, page, 'zh');
    fs.writeFileSync(page.file, source);

    LANGS.forEach(function (lang) {
      let html = translateAttributes(source, translations[lang]);
      html = setMeta(html, page, lang);
      html = localizeLinks(html, lang);
      html = keepPolicyLanguage(html, lang);
      html = removeMismatchedStructuredData(html, page);
      const outDir = path.join(lang);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, page.file), html);
      if (page.file === 'index.html') fs.writeFileSync(path.join(outDir, 'index.html'), html);
    });
  });
  updateSitemap();
  console.log('[locales] 已產生 /en/ 與 /ja/ 靜態頁，並更新 metadata、hreflang 與 sitemap');
})();
