// GC privacy choices + consent-gated GA4 loader.
// Analytics is not downloaded or initialized until the visitor opts in.
(function () {
  'use strict';

  var STORAGE_KEY = 'gc_analytics_consent_v1';
  var MEASUREMENT_ID = 'G-WMDKSQRC81';
  var loaded = false;

  var COPY = {
    zh: {
      title: '您的隱私選擇',
      body: '我們使用必要的本機儲存記住語言與隱私選擇。經您同意後，才會載入 Google Analytics，協助我們了解網站使用情況。',
      accept: '同意分析',
      reject: '僅使用必要功能',
      policy: '查看隱私權政策',
      settings: '隱私設定'
    },
    en: {
      title: 'Your privacy choices',
      body: 'We use essential local storage to remember your language and privacy choices. Google Analytics loads only after you consent, helping us understand how the site is used.',
      accept: 'Allow analytics',
      reject: 'Essential only',
      policy: 'Read our Privacy Policy',
      settings: 'Privacy settings'
    },
    ja: {
      title: 'プライバシー設定',
      body: '言語とプライバシー設定を記憶するため、必要なローカルストレージを使用します。Google Analytics は、お客様の同意後にのみ読み込まれます。',
      accept: 'アクセス解析を許可',
      reject: '必要な機能のみ',
      policy: 'プライバシーポリシーを見る',
      settings: 'プライバシー設定'
    }
  };

  function currentLang() {
    var path = location.pathname;
    if (/^\/en(?:\/|$)/.test(path)) return 'en';
    if (/^\/ja(?:\/|$)/.test(path)) return 'ja';
    try {
      var query = new URLSearchParams(location.search).get('lang');
      if (query === 'en' || query === 'ja' || query === 'zh') return query;
    } catch (e) {}
    return document.documentElement.lang === 'en' ? 'en' :
      (document.documentElement.lang === 'ja' ? 'ja' : 'zh');
  }

  function privacyUrl(lang) {
    if (lang === 'en') return '/en/privacy.html';
    if (lang === 'ja') return '/ja/privacy.html';
    return '/privacy.html';
  }

  function loadAnalytics() {
    if (loaded || window['ga-disable-' + MEASUREMENT_ID]) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('consent', 'default', { analytics_storage: 'granted' });
    window.gtag('config', MEASUREMENT_ID, { anonymize_ip: true });

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(script);
  }

  function saveChoice(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    if (value === 'granted') {
      window['ga-disable-' + MEASUREMENT_ID] = false;
      loadAnalytics();
    } else {
      window['ga-disable-' + MEASUREMENT_ID] = true;
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
      }
    }
  }

  function storedChoice() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function injectStyles() {
    if (document.getElementById('gcConsentStyles')) return;
    var style = document.createElement('style');
    style.id = 'gcConsentStyles';
    style.textContent =
      '#gcConsent{position:fixed;z-index:2147483646;right:22px;bottom:22px;width:min(390px,calc(100vw - 32px));padding:17px 18px 16px;border:1px solid rgba(255,255,255,.14);border-radius:12px;background:rgba(9,13,20,.96);color:#f8fafc;box-shadow:0 18px 48px rgba(0,0,0,.32);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);font-family:Inter,"Noto Sans TC",sans-serif}' +
      '#gcConsent[hidden],#gcPrivacyChoices[hidden]{display:none!important}' +
      '#gcConsent h2{margin:0 0 6px;color:#fff;font-size:15px;line-height:1.4;font-weight:700;letter-spacing:.01em}' +
      '#gcConsent p{margin:0;color:#aeb6c3;font-size:12.5px;line-height:1.6}' +
      '#gcConsent p+p{margin-top:5px}' +
      '#gcConsent a{color:#f8fafc;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.45);transition:border-color .18s ease}' +
      '#gcConsent a:hover{border-bottom-color:#fff}' +
      '#gcConsentActions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;margin-top:13px}' +
      '#gcConsent button{min-height:36px;padding:7px 12px;border-radius:7px;border:1px solid #f8fafc;background:#f8fafc;color:#0a0d13;font:700 12.5px/1.2 Inter,"Noto Sans TC",sans-serif;white-space:nowrap;cursor:pointer;transition:background .18s ease,color .18s ease,border-color .18s ease,transform .18s ease}' +
      '#gcConsent button:hover{background:#e5e7eb;border-color:#e5e7eb;transform:translateY(-1px)}' +
      '#gcConsent button:focus-visible,#gcPrivacyChoices:focus-visible{outline:2px solid #fff;outline-offset:3px}' +
      '#gcConsent button.gc-secondary{background:transparent;color:#d6dae1;border-color:#49515e}' +
      '#gcConsent button.gc-secondary:hover{background:rgba(255,255,255,.07);color:#fff;border-color:#747d8b}' +
      '#gcPrivacyChoices{position:fixed;z-index:2147483645;right:14px;bottom:14px;padding:7px 10px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:#0b0f16;color:#f8fafc;box-shadow:0 6px 22px rgba(0,0,0,.2);font:600 11.5px/1.2 Inter,"Noto Sans TC",sans-serif;cursor:pointer}' +
      '@media(max-width:560px){#gcConsent{right:10px;bottom:10px;width:calc(100vw - 20px);padding:15px}#gcConsentActions{justify-content:stretch}#gcConsent button{flex:1 1 auto;min-height:40px}#gcPrivacyChoices{right:10px;bottom:10px}}';
    document.head.appendChild(style);
  }

  function render() {
    injectStyles();
    var lang = currentLang();
    var copy = COPY[lang] || COPY.zh;

    var banner = document.createElement('section');
    banner.id = 'gcConsent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-labelledby', 'gcConsentTitle');
    banner.innerHTML = '<h2 id="gcConsentTitle"></h2><p id="gcConsentBody"></p>' +
      '<p><a id="gcConsentPolicy"></a></p><div id="gcConsentActions">' +
      '<button type="button" id="gcConsentAccept"></button>' +
      '<button type="button" class="gc-secondary" id="gcConsentReject"></button></div>';

    var settings = document.createElement('button');
    settings.type = 'button';
    settings.id = 'gcPrivacyChoices';
    settings.textContent = copy.settings;
    settings.hidden = true;

    document.body.appendChild(banner);
    document.body.appendChild(settings);
    banner.querySelector('#gcConsentTitle').textContent = copy.title;
    banner.querySelector('#gcConsentBody').textContent = copy.body;
    var policy = banner.querySelector('#gcConsentPolicy');
    policy.textContent = copy.policy;
    policy.href = privacyUrl(lang);
    banner.querySelector('#gcConsentAccept').textContent = copy.accept;
    banner.querySelector('#gcConsentReject').textContent = copy.reject;

    function closeWith(choice) {
      saveChoice(choice);
      banner.hidden = true;
      settings.hidden = false;
      settings.focus();
    }
    banner.querySelector('#gcConsentAccept').addEventListener('click', function () { closeWith('granted'); });
    banner.querySelector('#gcConsentReject').addEventListener('click', function () { closeWith('denied'); });
    settings.addEventListener('click', function () {
      banner.hidden = false;
      settings.hidden = true;
      banner.querySelector('#gcConsentAccept').focus();
    });
    window.gcOpenPrivacySettings = function () { settings.click(); };

    var choice = storedChoice();
    if (choice === 'granted') loadAnalytics();
    if (choice === 'granted' || choice === 'denied') {
      banner.hidden = true;
      settings.hidden = false;
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
