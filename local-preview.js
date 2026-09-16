(function(){
  'use strict';
  if(location.protocol !== 'file:') return;

  // 以這支共用檔案的位置作為站台根目錄；不猜使用者把專案放在哪裡。
  var current = document.currentScript;
  if(!current || !current.src) return;
  var siteRoot = new URL('.', current.src);

  function localUrl(raw){
    if(!raw || raw.charAt(0) !== '/' || raw.indexOf('//') === 0) return raw;
    var parsed = new URL(raw, 'https://gc-local.invalid');
    var relative = parsed.pathname.replace(/^\/+/, '');
    if(!relative || /\/$/.test(relative)) relative += 'index.html';
    return new URL(relative + parsed.search + parsed.hash, siteRoot).href;
  }

  // 提供給語言切換等以 JavaScript 導航的功能使用。
  window.gcLocalPreviewUrl = localUrl;
  window.gcLocalPreviewRoot = siteRoot.href;

  function rewrite(root){
    root = root || document;
    var anchors = Array.prototype.slice.call(root.querySelectorAll('a[href^="/"]'));
    var forms = Array.prototype.slice.call(root.querySelectorAll('form[action^="/"]'));
    var media = Array.prototype.slice.call(root.querySelectorAll('img[src^="/"],source[src^="/"],video[src^="/"]'));
    // MutationObserver 收到的 root 可能就是新插入的元素本身。
    if(root.matches && root.matches('a[href^="/"]')) anchors.unshift(root);
    if(root.matches && root.matches('form[action^="/"]')) forms.unshift(root);
    if(root.matches && root.matches('img[src^="/"],source[src^="/"],video[src^="/"]')) media.unshift(root);

    anchors.forEach(function(a){
      var raw = a.getAttribute('href');
      if(raw && raw.indexOf('//') !== 0) a.setAttribute('href', localUrl(raw));
    });
    forms.forEach(function(form){
      var raw = form.getAttribute('action');
      if(raw && raw.indexOf('//') !== 0) form.setAttribute('action', localUrl(raw));
    });
    media.forEach(function(el){
      var raw = el.getAttribute('src');
      if(raw && raw.indexOf('//') !== 0) el.setAttribute('src', localUrl(raw));
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ rewrite(document); });
  else rewrite(document);

  // 動態產生的文章卡片、商品列與選單也要套用同一規則。
  new MutationObserver(function(records){
    records.forEach(function(record){
      record.addedNodes.forEach(function(node){
        if(node.nodeType === 1) rewrite(node);
      });
    });
  }).observe(document.documentElement, {childList:true, subtree:true});

  // 捕捉尚未被 observer 處理就立刻點擊的根目錄連結。
  document.addEventListener('click', function(event){
    var anchor = event.target.closest && event.target.closest('a');
    if(!anchor) return;
    var raw = anchor.getAttribute('href') || '';
    if(raw.charAt(0) === '/' && raw.indexOf('//') !== 0){
      event.preventDefault();
      location.href = localUrl(raw);
    }
  }, true);
})();
