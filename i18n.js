// i18n.js — GC 語系切換模組 v1.7.2
// 支援：繁中 / English / 日本語
// 使用方式：data-i18n="key" / data-i18n-ph="key" / data-i18n-html="key"

const GC_I18N = {

  /* ════════════════════════════════
     繁體中文（預設）
  ════════════════════════════════ */
  zh: {
    'footer.privacy': '隱私權政策',
    'privacy.title': '隱私權政策',
    'privacy.updated': '最後更新日期',

    /* ── H9 診斷表補譯：選項／說明／成功頁（繁體中文） ── */
    'form.tag.liquid': '含液體',
    'form.tag.alcohol': '含酒精',
    'form.tag.powder': '粉末',
    'form.tag.spray': '噴霧',
    'form.tag.glass': '玻璃包裝',
    'form.tag.expiry': '需效期管理',
    'form.tag.ingredient': '需成分標示',
    'form.tag.brandauth': '需品牌授權',
    'form.tag.battery': '含電池 / 電子元件',
    'form.tag.tempctrl': '需溫控',
    'form.mk.tw': '台灣',
    'form.mk.hk': '香港',
    'form.mk.mo': '澳門',
    'form.mk.jp': '日本',
    'form.mk.kr': '韓國',
    'form.mk.sg': '新加坡',
    'form.mk.my': '馬來西亞',
    'form.mk.th': '泰國',
    'form.mk.id': '印尼',
    'form.mk.vn': '越南',
    'form.mk.ph': '菲律賓',
    'form.mk.us': '美國',
    'form.mk.eu': '歐洲',
    'form.mk.anz': '澳洲 / 紐西蘭',
    'form.mk.other_region': '其他地區',
    'form.region.other': '其他',
    'form.lbl.product_desc': '產品整體說明',
    'form.lbl.other_notes': '其他相關困難點或補充說明',
    'form.ph.export_other': '請填寫出口國',
    'form.ph.product_desc': '簡要描述您的產品特色、目標客群或其他需要補充的資訊（最多 5,000 字）',
    'form.ph.consign_qty': '例如：每款 50 件',
    'form.ph.other_notes': '請描述目前面臨的困難或其他需要補充的資訊（最多 5,000 字）',
    'form.done.badge': '提交成功',
    'form.done.title': '診斷表單已送出',
    'form.done.desc': '感謝您提交 GC 跨境服務需求診斷表。GC 顧問團隊將於 3 個工作天內透過電子信箱或您提供的聯絡方式與您聯繫。',
    'form.done.step1': 'GC 團隊審閱診斷資料',
    'form.done.step2': '安排 GC 團隊線上確認您的狀況及實際需求',
    'form.done.step3': '確認客戶需求後，媒合適合的服務商',
    'form.done.step4': '安排服務商與客戶進行線上會議',
    'form.done.step5': '根據您的需求提供初步服務建議與報價',
    'form.done.contact': '直接聯繫 GC 業務團隊',
    'form.done.back': '返回官網',
    'form.ph.brand_name': '品牌名稱',
    // 頁面標題（與各頁 HTML 靜態 <title> 完全一致，避免 JS 覆蓋時降級 SEO 標題）
    'page.title.partner': '成為 GC 服務商夥伴 — 共同拓展全球市場',
    'page.title.index':   'GC 跨境服務 — 全球市場拓銷顧問平台',
    'page.title.form':    'GC 跨境服務需求診斷表 — 填寫需求開始合作',

    // 導覽列
    'nav.about':   '關於 GC',
    'nav.why':     '為何選擇我們',
    'nav.services':'顧問服務',
    'nav.catalog': '商品貨盤',
    'nav.partners':'服務商介紹',
    'nav.process': '合作流程',
    'nav.become':  '成為服務商',
    'nav.cta':     '立即諮詢',
    'nav.faq':     '常見問題',

    // ── partner.html ──
    'partner.hero.badge':   'JOIN GC PARTNER NETWORK',
    'partner.hero.line1':   '加入 GC，',
    'partner.hero.line2':   '拓展您的商業版圖',
    'partner.hero.desc':    'GC 跨境服務商網絡持續擴大，誠邀具備專業能力的服務商加入。與我們攜手，為品牌客戶提供最優質的跨境解決方案，共同開創更大的商業機會。',
    'partner.hero.scroll':  '向下了解更多好處並填寫申請',

    'partner.benefits.label': 'Why Partner With Us',
    'partner.benefits.title': '成為 GC 服務商的好處',
    'partner.benefits.sub':   '加入我們的合作網絡，享有穩定的客戶來源、專業的品牌背書與完整的資源支援。',

    'partner.b1.title': '精準客戶媒合',
    'partner.b1.desc':  'GC 依照您的專業領域與服務範疇，為您精準媒合有真實需求的品牌客戶，節省開發時間，提高成單機率。',
    'partner.b2.title': '跨境資源整合',
    'partner.b2.desc':  '接觸 GC 廣泛的亞洲與歐美市場網絡，與其他服務商共享資源，擴大業務規模與市場覆蓋率。',
    'partner.b3.title': '品牌信譽加持',
    'partner.b3.desc':  '成為 GC 認證合作夥伴，享有 GC 品牌背書，提升市場公信力，讓客戶對您的服務更有信心。',
    'partner.b4.title': '快速上手支援',
    'partner.b4.desc':  'GC 團隊全程協助新夥伴快速熟悉合作流程，提供完整的對接支援，讓您的服務順暢啟動。',
    'partner.b5.title': '資訊安全保障',
    'partner.b5.desc':  '嚴格保護服務商資訊，商業機密與客戶資料受到完整保護，讓您安心合作、無後顧之憂。',

    'partner.stat1.lbl': '市場覆蓋',
    'partner.stat2.lbl': '合作品牌',
    'partner.stat3.lbl': '快速對接',

    'partner.form.title':         '填寫服務商申請',
    'partner.form.subtitle':      '請填寫以下基本資訊，GC 團隊將在 3 個工作天內與您聯繫。',
    'partner.form.success.title': '申請已送出！',
    'partner.form.success.desc':  '感謝您的申請，GC 團隊將在 3 個工作天內與您聯繫。<br>期待與您攜手開創更大的商業版圖！',

    'partner.field.company':       '公司名稱',
    'partner.field.company.ph':    '請輸入公司全名',
    'partner.field.owner':         '負責人',
    'partner.field.owner.ph':      '負責人姓名',
    'partner.field.contact':       '聯絡人',
    'partner.field.contact.ph':    '主要聯絡人姓名',
    'partner.field.phone':         '聯絡電話',
    'partner.field.phone.ph':      '例：0912-345-678（選填）',
    'partner.field.email':         '電子信箱',
    'partner.field.other':         '其他聯絡方式',
    'partner.field.other.ph':      'LINE ID、WeChat、WhatsApp 等',
    'partner.field.other.hint':    '可填寫 LINE ID、WeChat ID、WhatsApp 號碼等',
    'partner.field.services':      '提供服務',
    'partner.field.services.ph':   '請描述您能提供的主要服務項目，例如：直播帶貨、海外通路開發、數位行銷、供應鏈管理…',
    'partner.form.submit':         '送出申請',
    'partner.form.submitting':     '送出中…',
    'partner.form.error':          '送出失敗，請再試一次',
    'partner.form.note':           '提交即表示您同意 GC 使用上述資訊進行服務媒合與聯繫。所有資料受到嚴格保護。',

    'footer.copy': '© 2026 GC 跨境服務. All rights reserved.',

    // ── index.html ──
    'index.hero.badge':  '全球跨境服務專家',
    'index.hero.line1':  '品牌出海，',
    'index.hero.line2':  '從這裡啟程',
    'index.hero.desc':   'GC 跨境顧問深耕亞洲與歐美市場，結合在地資源與數位行銷專業，為品牌量身打造進入全球市場的最短路徑。',
    'index.hero.cta1':   '立即填寫需求診斷表',
    'index.hero.cta2':   '瀏覽顧問服務',

    'index.why.label': 'Why GC',
    'index.why.title': '為何選擇我們',
    'index.why.sub':   '深耕跨境市場多年，擁有完整在地資源網絡與數家顧問服務商，為品牌量身打造最適合的出海策略。',
    'index.why.c1.lbl':   '覆蓋市場',
    'index.why.c1.title': '多市場覆蓋能力',
    'index.why.c1.desc':  '深耕大中華、東南亞、東北亞、歐美等市場，提供精準在地化服務，讓您的品牌找到最合適的切入策略。',
    'index.why.c2.lbl':   '快速回覆',
    'index.why.c2.title': '快速媒合服務',
    'index.why.c2.desc':  '提交需求後 3 個工作天內回覆，從合作夥伴庫精選最適合的服務商，省去尋找與篩選的時間成本。',
    'index.why.c3.lbl':   '服務品牌',
    'index.why.c3.title': '數家顧問服務商',
    'index.why.c3.desc':  '整合多家專業跨境顧問服務商，依品牌需求精準媒合，確保每個合作都由最適合的團隊執行。',
    'index.why.c4.lbl':   '資料保密',
    'index.why.c4.title': '資料安全保障',
    'index.why.c4.desc':  '嚴格執行資料保護措施，所有診斷表資料僅供服務媒合使用，確保您的商業機密不外洩。',

    'index.services.label': 'Our Services',
    'index.services.title': '我們的顧問服務',
    'index.services.sub':   '從市場評估到落地執行，GC 提供全方位跨境解決方案。',
    'index.services.cta':   '立即填寫需求診斷表，開始諮詢',
    'index.svc1.title': '直播帶貨',    'index.svc1.desc': '透過 KOL、主播、直播活動協助品牌進行即時銷售，快速打入目標市場。',
    'index.svc2.title': '海外拓銷',    'index.svc2.desc': '開發代理商、經銷商、批發商與買手，建立穩固的海外銷售網絡。',
    'index.svc3.title': '跨境電商',    'index.svc3.desc': '協助品牌上架並經營海外主流電商平台，提升線上銷售業績與品牌曝光。',
    'index.svc4.title': '實體通路',    'index.svc4.desc': '協助進入超市、藥妝店、選品店、百貨等海外實體零售通路。',
    'index.svc5.title': '市場調研',    'index.svc5.desc': '深入分析目標市場消費趨勢與競爭環境，為品牌制定精準進入策略。',
    'index.svc6.title': '品牌在地化',  'index.svc6.desc': '針對不同市場文化進行品牌包裝、文案與視覺的本土化調整。',
    'index.svc7.title': '供應鏈整合',  'index.svc7.desc': '協助品牌建立高效的跨境物流與倉儲方案，確保商品準時送達。',
    'index.svc8.title': '數位行銷',    'index.svc8.desc': '整合社群媒體、搜尋廣告與內容行銷，提升品牌在目標市場的知名度。',

    'index.partners.label': 'Our Partners',
    'index.partners.title': '精選服務商夥伴',
    'index.partners.sub':   'GC 嚴選來自各領域的專業服務商，依據品牌需求精準媒合，讓每個合作都由最懂這個市場的團隊執行。',
    'partners.svc_label':   '可提供服務',
    'partners.prob_label':  '能解決的問題',

    'index.process.label': 'How It Works',
    'index.process.title': '諮詢合作流程',
    'index.process.sub':   '從填寫需求到正式啟動，GC 全程陪伴，讓您的品牌出海之路順暢無阻。',
    'index.step1.title': '填寫需求診斷表單',
    'index.step1.desc':  '完整填寫公司資料、產品類別、目標市場與希望拓銷方式，讓 GC 顧問精準了解您的需求。',
    'index.step2.title': 'GC 團隊確認並線上會議',
    'index.step2.desc':  '顧問團隊於 3 個工作天內審閱診斷資料，安排線上視訊確認品牌現況、目標市場與實際需求。',
    'index.step3.title': '媒合適合服務商',
    'index.step3.desc':  '根據品牌需求從合作夥伴庫中精選最適合的服務商，確保資源最佳匹配。',
    'index.step4.title': '服務商與客戶線上會議',
    'index.step4.desc':  '安排您與媒合服務商進行線上會議，深入討論合作細節與執行方向。',
    'index.step5.title': '提供服務建議與報價',
    'index.step5.desc':  '根據需求提供初步服務建議與透明報價，正式啟動您的全球拓銷之旅。',

    'index.faq.title':    '常見問題',
    'index.faq.sub':      '關於 GC 平台，您最常想了解的事',
    'index.faq.q1':       'Q1：GC 是什麼樣的服務平台？',
    'index.faq.a1':       '<p>GC 是一站式全球跨境拓銷服務平台，協助品牌、企業及創業團隊快速找到適合的專業服務商，涵蓋市場拓展、品牌行銷、電商營運、通路開發、數位推廣等領域。</p><p>透過 GC，您不需要自行尋找多家供應商，只需提出需求，即可獲得整合式解決方案。</p>',
    'index.faq.q2':       'Q2：GC 自己提供服務，還是媒合合作夥伴？',
    'index.faq.a2':       '<p>GC 採用「統包管理＋專業服務商執行」模式。</p><p>我們會先了解您的需求，評估最適合的執行方案，再由 GC 或合作服務商共同提供服務，並由 GC 負責專案管理與品質把關。</p>',
    'index.faq.q3':       'Q3：我該如何開始合作？',
    'index.faq.a3':       '<p>流程非常簡單：</p><ol><li>提交需求</li><li>GC 顧問進行需求訪談</li><li>提出解決方案與報價</li><li>確認合作</li><li>專案執行與成果追蹤</li></ol><p>您只需要專注於業務發展，其餘由 GC 協助整合。</p>',
    'index.faq.q4':       'Q4：GC 可以協助哪些類型的企業？',
    'index.faq.a4':       '<p>我們服務的對象包含：</p><ul><li>新創團隊</li><li>中小企業</li><li>品牌商</li><li>電商品牌</li><li>傳統產業轉型企業</li><li>海外市場拓展企業</li></ul><p>無論是首次進軍海外市場，或是擴大既有市場規模，都可以透過 GC 找到合適資源。</p>',
    'index.faq.q5':       'Q5：如果我不知道自己需要什麼服務怎麼辦？',
    'index.faq.a5':       '<p>沒問題。許多客戶一開始只有目標，例如：</p><ul><li>想增加海外訂單</li><li>想進入某個國家市場</li><li>想提升品牌曝光</li><li>想拓展代理商或經銷商</li></ul><p>GC 顧問會協助您分析現況，並規劃最適合的執行方案。</p>',
    'index.faq.q6':       'Q6：GC 如何挑選合作服務商？',
    'index.faq.a6':       '<p>GC 會根據服務能力、專案經驗、產業背景及執行品質進行篩選。</p><p>我們希望每位客戶都能獲得穩定且專業的服務，因此合作夥伴都需經過評估與審核機制。</p>',
    'index.faq.q7':       'Q7：專案費用如何計算？',
    'index.faq.a7':       '<p>不同服務內容與專案規模會有不同報價。</p><p>GC 會在合作前提供完整報價與執行內容說明，確認雙方需求後才會正式啟動專案，不會有隱藏費用。</p>',
    'index.faq.q8':       'Q8：如果我想成為 GC 的合作夥伴怎麼加入？',
    'index.faq.a8':       '<p>GC 歡迎：</p><ul><li>專業服務提供商</li><li>商業顧問</li><li>業務開發夥伴</li><li>通路與產業資源夥伴</li></ul><p>如果您擁有專業能力或產業資源，希望與 GC 共同拓展市場，歡迎與我們聯繫洽談合作。</p>',

    'index.cta.label': 'Get Started Today',
    'index.cta.title': '正在尋找可靠且高效的跨境解決方案嗎？',
    'index.cta.sub':   '立即填寫需求診斷表，GC 顧問將為您量身規劃最適合的全球拓銷策略。',
    'index.cta.btn':   '立即填寫需求診斷表',

    // ── gc-form.html ──
    'form.nav.back':        '返回官網',
    'form.sidebar.title':   '診斷流程',
    'form.s1.name': '公司與品牌資料',    'form.s1.desc': '基本聯絡與品牌資訊',
    'form.s2.name': '產品類別與商品特性','form.s2.desc': '商品品類與出口地',
    'form.s3.name': '現況評估',          'form.s3.desc': '外銷經驗與現有狀況',
    'form.s4.name': '目標市場與銷售條件','form.s4.desc': '市場、預算與目標',
    'form.s5.name': '拓銷方式與進階問題','form.s5.desc': '拓銷管道與詳細需求',
    'form.s6.name': '診斷結果與送出',    'form.s6.desc': '確認資料並提交',

    'form.step1.title': '公司與品牌資料',
    'form.step1.desc':  '請填寫基本的公司聯絡與品牌資訊，以便 GC 顧問為您提供精準的服務評估。',
    'form.step2.title': '產品類別與商品特性',
    'form.step2.desc':  '選擇您的產品類別、商品特性標籤與預計出口國，協助我們了解您的商品條件。',
    'form.step3.title': '現況評估',
    'form.step3.desc':  '了解您目前的外銷經驗、產品 SKU 規模與現有銷售定價。',
    'form.step4.title': '目標市場與銷售條件',
    'form.step4.desc':  '選擇您希望進入的目標市場，並提供預算與營收目標相關資訊。',
    'form.step5.title': '拓銷方式與進階問題',
    'form.step5.desc':  '選擇您希望的拓銷方式，系統將顯示對應的進階問題。',
    'form.step6.title': '診斷結果與送出確認',
    'form.step6.desc':  '請確認您填寫的資料，確認無誤後勾選隱私同意並提交。',

    'form.lbl.referrer':      '介紹人（選填）',
    'form.lbl.source':        '您是從哪裡得知 GC 服務？',
    'form.lbl.source_other':  '請說明得知管道',
    'form.lbl.company':       '公司名稱',
    'form.lbl.contact':       '聯絡人姓名',
    'form.lbl.jobtitle':      '職稱',
    'form.lbl.email':         '電子信箱',
    'form.lbl.other_contact': '其他聯絡方式',
    'form.lbl.contact_acc':   '聯絡帳號 / 號碼',
    'form.lbl.reg_country':   '公司登記地',
    'form.lbl.reg_other':     '請說明登記地',
    'form.lbl.brands':        '品牌名稱（最多 5 個）',
    'form.lbl.add_brand':     '新增品牌',
    'form.lbl.product_cat':   '產品類別（可複選）',
    'form.lbl.cat_other':     '其他類別說明',
    'form.lbl.product_tags':  '商品特性標籤（可複選）',
    'form.lbl.export_dest':   '產品預計出口國 / 出貨地（可複選）',
    'form.lbl.product_desc':  '產品簡介',
    'form.lbl.export_exp':    '是否曾有外銷經驗',
    'form.lbl.exp_countries': '過去主要外銷國家',
    'form.lbl.exp_products':  '過去外銷主力產品',
    'form.lbl.exp_rev':       '過去年度外銷營收',
    'form.lbl.exp_method':    '過去外銷方式（可複選）',
    'form.lbl.sku':           '現有產品 SKU 數量',
    'form.lbl.price':         '現有產品單個平均售價',
    'form.lbl.markets':       '目標市場（可複選）',
    'form.lbl.market_other':  '其他地區說明',
    'form.lbl.distributor':   '目標市場是否已有經銷商或進口商',
    'form.lbl.opex':          '預計每月品牌項目投入預算（不含行銷費用）',
    'form.lbl.mktg':          '預計每月投入行銷預算',
    'form.lbl.rev_target':    '預估每月額外創造營收目標',
    'form.lbl.sample':        '是否可提供樣品',
    'form.lbl.launch':        '預計啟動時間',
    'form.lbl.channels':      '希望拓銷方式（可複選）',
    'form.lbl.live_exp':      '是否有直播銷售經驗',
    'form.lbl.live_rep':      '是否能提供廠商代表或助播',
    'form.lbl.overseas_exp':  '是否已有海外參展經驗',
    'form.lbl.overseas_ctry': '參展國家',
    'form.lbl.local_rep':     '公司是否有目標市場當地語言代表',
    'form.lbl.ecom_exp':      '是否有電商經驗',
    'form.lbl.ecom_plats':    '曾經營的電商平台',
    'form.lbl.ecom_team':     '是否有自己的電商營運團隊',
    'form.lbl.ecom_cert':     '是否已完成目標市場的產品認證',
    'form.lbl.retail_exp':    '是否有實體通路經驗',
    'form.lbl.retail_ctry':   '曾進入的國家',
    'form.lbl.retail_chan':   '曾合作的通路',
    'form.lbl.retail_cert':   '是否已完成目標市場的產品認證',
    'form.lbl.consign':       '是否可接受寄賣',
    'form.lbl.consign_qty':   '可提供寄賣數量',
    'form.lbl.other_notes':   '其他補充說明（選填）',

    'form.ph.referrer':      '請選擇或搜尋介紹方',
    'form.ph.source_other':  '請簡述您得知 GC 服務的管道',
    'form.ph.company':       '請輸入公司名稱',
    'form.ph.contact':       '請輸入聯絡人姓名',
    'form.ph.jobtitle':      '例如：品牌總監、業務經理',
    'form.ph.contact_acc':   '請輸入帳號或號碼',
    'form.ph.reg_other':     '請填寫公司登記地',
    'form.ph.brand1':        '品牌名稱 1',
    'form.ph.cat_other':     '請說明產品類別',
    'form.ph.export_dest':   '例如：日本、新加坡、美國',
    'form.ph.product_desc':  '請簡單描述您的主力產品與特色',
    'form.ph.exp_countries': '例如：日本、新加坡、馬來西亞',
    'form.ph.exp_products':  '請描述主力出口的產品',
    'form.ph.market_other':  '請填寫目標地區',
    'form.ph.overseas_ctry': '例如：日本、泰國',
    'form.ph.ecom_plats':    '例如：蝦皮、Lazada、Amazon',
    'form.ph.retail_ctry':   '例如：日本、新加坡',
    'form.ph.retail_chan':   '例如：唐吉訶德、屈臣氏、LOFT',
    'form.ph.consign_qty':   '請填寫可提供寄賣的數量',
    'form.ph.other_notes':   '有任何其他問題或補充說明，請填寫於此',

    'form.err.company':       '請填寫公司名稱',
    'form.err.contact':       '請填寫聯絡人姓名',
    'form.err.email':         '請填寫有效的電子信箱',
    'form.err.contact_acc':   '請填寫帳號或號碼',
    'form.err.country':       '請選擇公司登記地',
    'form.err.reg_other':     '請填寫登記地說明',
    'form.err.cat':           '請至少選擇一個產品類別',
    'form.err.cat_other':     '請填寫類別說明',
    'form.err.export_dest':   '請填寫至少一個出口國家或地區',
    'form.err.export_exp':    '請選擇是否有外銷經驗',
    'form.err.exp_countries': '請填寫外銷國家',
    'form.err.exp_products':  '請填寫主力產品',
    'form.err.exp_rev':       '請選擇年度外銷營收',
    'form.err.sku':           '請選擇 SKU 數量',
    'form.err.price':         '請選擇產品售價區間',
    'form.err.markets':       '請至少選擇一個目標市場',
    'form.err.market_other':  '請填寫目標地區說明',
    'form.err.distributor':   '請選擇經銷商狀況',
    'form.err.opex':          '請選擇營運成本',
    'form.err.mktg':          '請選擇行銷預算',
    'form.err.rev_target':    '請選擇營收目標',
    'form.err.sample':        '請選擇樣品提供方式',
    'form.err.launch':        '請選擇預計啟動時間',
    'form.err.channel':       '請至少選擇一種拓銷方式',
    'form.err.live_exp':      '請選擇',
    'form.err.live_rep':      '請選擇',
    'form.err.overseas_exp':  '請選擇',
    'form.err.overseas_ctry': '請填寫參展國家',
    'form.err.local_rep':     '請選擇',
    'form.err.ecom_exp':      '請選擇',
    'form.err.ecom_plats':    '請填寫電商平台',
    'form.err.ecom_team':     '請選擇',
    'form.err.ecom_cert':     '請選擇',
    'form.err.retail_exp':    '請選擇',
    'form.err.retail_ctry':   '請填寫',
    'form.err.retail_chan':   '請填寫',
    'form.err.retail_cert':   '請選擇',
    'form.err.consign':       '請選擇',
    'form.err.consign_qty':   '請填寫可提供寄賣數量',
    'form.err.privacy':       '請勾選同意隱私權聲明',
    'form.err.submit':        '送出失敗，請稍後再試',

    'form.opt.yes':       '有',
    'form.opt.no':        '沒有',
    'form.opt.yes_yn':    '是',
    'form.opt.no_yn':     '否',
    'form.opt.can':       '能提供',
    'form.opt.cannot':    '無法提供',

    'form.cat.food_health': '食品與健康',
    'form.cat.beauty_life': '美妝與生活',
    'form.cat.tech':        '科技與特殊商品',

    'form.region.greater_china': '大中華區',
    'form.region.ne_asia':       '東北亞',
    'form.region.se_asia':       '東南亞',
    'form.region.west':          '歐美澳',
    'form.region.other':         '其他',

    'form.ch.live.title':      '直播帶貨',
    'form.ch.live.desc':       '透過 KOL、主播、直播活動進行銷售',
    'form.ch.overseas.title':  '海外拓銷',
    'form.ch.overseas.desc':   '開發代理商、經銷商、批發商、買手',
    'form.ch.ecom.title':      '跨境電商',
    'form.ch.ecom.desc':       '協助上架與經營海外電商平台',
    'form.ch.retail.title':    '實體通路',
    'form.ch.retail.desc':     '超市、藥妝店、選品店、百貨等',
    'form.ch.undecided.title': '尚未確定，需要平台協助評估',
    'form.ch.undecided.desc':  '由平台依商品條件建議適合的拓銷模式',
    'form.ch.live.adv':        '直播帶貨 — 進階問題',
    'form.ch.overseas.adv':    '海外拓銷 — 進階問題',
    'form.ch.ecom.adv':        '跨境電商 — 進階問題',
    'form.ch.retail.adv':      '實體通路 — 進階問題',

    'form.btn.prev':       '上一步',
    'form.btn.next':       '下一步',
    'form.btn.submit':     '提交給 GC 顧問',
    'form.btn.submitting': '送出中…',
    'form.submitting':     '正在提交診斷表單...',

    'form.sum.basic':    '基本資料',
    'form.sum.product':  '產品類別與商品特性',
    'form.sum.current':  '現況評估',
    'form.sum.market':   '目標市場與銷售條件',
    'form.sum.channels': '拓銷方式與進階問題',
    'form.sum.k.referrer':      '介紹方',
    'form.sum.k.source':        '得知管道',
    'form.sum.k.company':       '公司名稱',
    'form.sum.k.contact':       '聯絡人',
    'form.sum.k.jobtitle':      '職稱',
    'form.sum.k.email':         '電子信箱',
    'form.sum.k.other_contact': '其他聯絡方式',
    'form.sum.k.reg_country':   '公司登記地',
    'form.sum.k.brands':        '品牌名稱',
    'form.sum.k.cats':          '產品類別',
    'form.sum.k.cat_other':     '類別補充說明',
    'form.sum.k.tags':          '商品特性',
    'form.sum.k.exports':       '出口國家 / 地區',
    'form.sum.k.product_desc':  '產品說明',
    'form.sum.k.exp':           '外銷經驗',
    'form.sum.k.exp_countries': '過去外銷國家',
    'form.sum.k.exp_products':  '過去外銷主力產品',
    'form.sum.k.exp_rev':       '年度外銷營收',
    'form.sum.k.exp_methods':   '外銷方式',
    'form.sum.k.sku':           'SKU 數量',
    'form.sum.k.price':         '平均售價',
    'form.sum.k.markets':       '目標市場',
    'form.sum.k.distributor':   '已有經銷商 / 進口商',
    'form.sum.k.opex':          '每月可負擔營運成本',
    'form.sum.k.mktg':          '每月行銷預算',
    'form.sum.k.rev':           '年度營收目標',
    'form.sum.k.sample':        '樣品提供',
    'form.sum.k.launch':        '啟動時間',
    'form.sum.k.channels':      '希望拓銷方式',
    'form.sum.k.live_exp':      '直播帶貨經驗',
    'form.sum.k.live_rep':      '廠商代表（直播）',
    'form.sum.k.overseas_exp':  '海外參展經驗',
    'form.sum.k.overseas_ctry': '參展國家',
    'form.sum.k.local_rep':     '當地語言代表',
    'form.sum.k.ecom_exp':      '電商經驗',
    'form.sum.k.ecom_plats':    '現有電商平台',
    'form.sum.k.ecom_team':     '電商營運團隊',
    'form.sum.k.ecom_cert':     '電商產品認證',
    'form.sum.k.retail_exp':    '實體通路經驗',
    'form.sum.k.retail_ctry':   '實體通路國家',
    'form.sum.k.retail_chan':   '合作通路類型',
    'form.sum.k.retail_cert':   '實體通路認證',
    'form.sum.k.consign':       '接受寄賣',
    'form.sum.k.consign_qty':   '可提供寄賣數量',
    'form.sum.k.other_notes':   '其他補充說明',

        'stat.days.unit': '天',
    'form.err.other_contact': '請填寫帳號或號碼',
    'form.err.country_other': '請填寫登記地說明',
    'form.err.brand': '請至少填寫一個品牌名稱',
    'form.err.export': '請至少選擇一個出口國',
    'form.err.export_other': '請填寫出口國說明',
    'form.err.ecom_platforms': '請填寫電商平台',
    'form.err.retail_countries': '請填寫',
    'form.err.retail_channels': '請填寫',
    'form.cat.item.1.name': '食品 / 飲料（常溫）',
    'form.cat.item.2.name': '食品 / 飲料（冷藏）',
    'form.cat.item.3.name': '食品 / 飲料（冷凍）',
    'form.cat.item.4.name': '保健食品 / 營養品',
    'form.cat.item.5.name': '母嬰用品',
    'form.cat.item.6.name': '寵物用品',
    'form.cat.item.7.name': '化妝品 / 美容',
    'form.cat.item.8.name': '服飾 / 配件',
    'form.cat.item.9.name': '居家 / 生活用品',
    'form.cat.item.10.name': '運動 / 戶外用品',
    'form.cat.item.11.name': '玩具 / 兒童用品',
    'form.cat.item.12.name': '書籍 / 文具 / 教育',
    'form.cat.item.13.name': '3C / 電子產品',
    'form.cat.item.14.name': '汽機車 / 工具 / 五金',
    'form.cat.item.15.name': '易碎 / 高價商品',
    'form.cat.item.16.name': '數位內容 / 虛擬商品',
    'form.cat.item.17.name': '其他類別',
    'form.cat.item.1.sub': '一般食品、零食、飲品',
    'form.cat.item.2.sub': '需低溫配送與保存',
    'form.cat.item.3.sub': '冷凍鏈、溫控需求',
    'form.cat.item.4.sub': '維他命、機能性食品',
    'form.cat.item.5.sub': '奶瓶、嬰兒用品',
    'form.cat.item.6.sub': '寵物食品、保健品',
    'form.cat.item.7.sub': '保養、彩妝、個人護理',
    'form.cat.item.8.sub': '成衣、包包、飾品',
    'form.cat.item.9.sub': '家具、廚具、清潔',
    'form.cat.item.10.sub': '健身器材、露營用品',
    'form.cat.item.11.sub': '玩具、模型、公仔',
    'form.cat.item.12.sub': '書籍、文具、教具',
    'form.cat.item.13.sub': '消費電子、周邊用品',
    'form.cat.item.14.sub': '車用配件、工具',
    'form.cat.item.15.sub': '玻璃、陶瓷、精品',
    'form.cat.item.16.sub': '票券、課程、序號',
    'form.cat.item.17.sub': '選擇後請填寫說明',
        'form.ph.referral_select': '請選擇介紹方',
    'form.chip.mobile': '手機號碼',
    'form.chip.source.friend': '朋友同業介紹',
    'form.chip.source.google': 'Google 搜尋',
    'form.chip.source.event': '展覽活動現場',
    'form.chip.source.other': '其他',
    'form.chip.country.tw': '台灣',
    'form.chip.country.cn': '中國',
    'form.chip.country.hk': '香港',
    'form.chip.country.sg': '新加坡',
    'form.chip.country.my': '馬來西亞',
    'form.chip.country.jp': '日本',
    'form.chip.country.other': '其他',
    'form.privacy': '我已閱讀並同意 GC 依據<a href="privacy.html" target="_blank" rel="noopener">隱私權政策</a>蒐集、處理及使用我所提供的公司與聯絡資料，作為跨境服務需求評估、顧問聯繫與後續服務媒合之用途。',
  },

  /* ════════════════════════════════
     English
  ════════════════════════════════ */
  en: {
    'footer.privacy': 'Privacy Policy',
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated',

    /* ── H9 診斷表補譯：選項／說明／成功頁（English） ── */
    'form.tag.liquid': 'Contains liquid',
    'form.tag.alcohol': 'Contains alcohol',
    'form.tag.powder': 'Powder',
    'form.tag.spray': 'Aerosol / spray',
    'form.tag.glass': 'Glass packaging',
    'form.tag.expiry': 'Requires expiry-date management',
    'form.tag.ingredient': 'Requires ingredient labeling',
    'form.tag.brandauth': 'Requires brand authorization',
    'form.tag.battery': 'Contains batteries / electronic components',
    'form.tag.tempctrl': 'Requires temperature control',
    'form.mk.tw': 'Taiwan',
    'form.mk.hk': 'Hong Kong',
    'form.mk.mo': 'Macau',
    'form.mk.jp': 'Japan',
    'form.mk.kr': 'South Korea',
    'form.mk.sg': 'Singapore',
    'form.mk.my': 'Malaysia',
    'form.mk.th': 'Thailand',
    'form.mk.id': 'Indonesia',
    'form.mk.vn': 'Vietnam',
    'form.mk.ph': 'Philippines',
    'form.mk.us': 'United States',
    'form.mk.eu': 'Europe',
    'form.mk.anz': 'Australia / New Zealand',
    'form.mk.other_region': 'Other region',
    'form.region.other': 'Other',
    'form.lbl.product_desc': 'Product overview',
    'form.lbl.other_notes': 'Other challenges or additional notes',
    'form.ph.export_other': 'Please enter the export country',
    'form.ph.product_desc': 'Briefly describe your product features, target customers, or any other relevant information (up to 5,000 characters)',
    'form.ph.consign_qty': 'e.g. 50 units per item',
    'form.ph.other_notes': 'Describe the challenges you are currently facing or any other relevant information (up to 5,000 characters)',
    'form.done.badge': 'Submitted',
    'form.done.title': 'Your diagnostic form has been submitted',
    'form.done.desc': 'Thank you for submitting the GC Cross-Border Service Diagnostic Form. Our consulting team will contact you within 3 business days by email or via the contact method you provided.',
    'form.done.step1': 'The GC team reviews your diagnostic information',
    'form.done.step2': 'An online session with the GC team to confirm your situation and actual needs',
    'form.done.step3': 'Once your needs are confirmed, we match you with suitable service providers',
    'form.done.step4': 'We arrange an online meeting between you and the service provider',
    'form.done.step5': 'We provide initial service recommendations and a quotation based on your needs',
    'form.done.contact': 'Contact the GC team directly',
    'form.done.back': 'Back to website',
    'form.ph.brand_name': 'Brand name',
    'page.title.partner': 'Become a GC Partner — Expanding Global Markets Together',
    'page.title.index':   'GC Cross-Border Services — Global Market Expansion Consulting Platform',
    'page.title.form':    'GC Cross-Border Service Diagnostic Form — Start Your Partnership',

    'nav.about':   'About GC',
    'nav.why':     'Why GC',
    'nav.services':'Consulting',
    'nav.catalog': 'Catalog',
    'nav.partners':'Partners',
    'nav.process': 'How It Works',
    'nav.become':  'Become a Partner',
    'nav.cta':     'Get Started',
    'nav.faq':     'FAQ',

    'partner.hero.badge':  'JOIN GC PARTNER NETWORK',
    'partner.hero.line1':  'Join GC,',
    'partner.hero.line2':  'Expand Your Business',
    'partner.hero.desc':   'The GC cross-border partner network is growing. We invite qualified service providers to join us in delivering world-class cross-border solutions and unlocking greater business opportunities together.',
    'partner.hero.scroll': 'Scroll down to learn more and apply',

    'partner.benefits.label': 'Why Partner With Us',
    'partner.benefits.title': 'Benefits of Being a GC Partner',
    'partner.benefits.sub':   'Join our partner network and enjoy a steady stream of clients, professional brand endorsement, and full resource support.',

    'partner.b1.title': 'Precise Client Matching',
    'partner.b1.desc':  'GC matches you with brand clients who have genuine needs based on your expertise and service scope — saving development time and increasing conversion.',
    'partner.b2.title': 'Cross-Border Resource Network',
    'partner.b2.desc':  'Access GC\'s broad Asia and Western market network, share resources with fellow partners, and scale your business across more markets.',
    'partner.b3.title': 'Brand Credibility Boost',
    'partner.b3.desc':  'Become a GC certified partner and benefit from GC\'s brand endorsement, boosting your market credibility and client confidence.',
    'partner.b4.title': 'Fast Onboarding Support',
    'partner.b4.desc':  'GC\'s team guides new partners through every step of the onboarding process with full integration support for a smooth start.',
    'partner.b5.title': 'Data Security Assurance',
    'partner.b5.desc':  'We strictly protect all partner information. Business secrets and client data are fully safeguarded so you can collaborate with peace of mind.',

    'partner.stat1.lbl': 'Markets Covered',
    'partner.stat2.lbl': 'Brand Partners',
    'partner.stat3.lbl': 'Fast Onboarding',

    'partner.form.title':         'Partner Application',
    'partner.form.subtitle':      'Fill in your basic information below. The GC team will contact you within 3 business days.',
    'partner.form.success.title': 'Application Submitted!',
    'partner.form.success.desc':  'Thank you for your application. The GC team will reach out within 3 business days.<br>We look forward to partnering with you!',

    'partner.field.company':       'Company Name',
    'partner.field.company.ph':    'Enter your company\'s full legal name',
    'partner.field.owner':         'Owner / Director',
    'partner.field.owner.ph':      'Owner or director\'s name',
    'partner.field.contact':       'Contact Person',
    'partner.field.contact.ph':    'Primary contact person\'s name',
    'partner.field.phone':         'Phone Number',
    'partner.field.phone.ph':      'e.g. +886-912-345-678 (optional)',
    'partner.field.email':         'Email Address',
    'partner.field.other':         'Other Contact',
    'partner.field.other.ph':      'LINE ID, WeChat, WhatsApp, etc.',
    'partner.field.other.hint':    'You may enter a LINE ID, WeChat ID, WhatsApp number, etc.',
    'partner.field.services':      'Services Offered',
    'partner.field.services.ph':   'Describe your key services, e.g. live-stream commerce, overseas channel development, digital marketing, supply chain management…',
    'partner.form.submit':         'Submit Application',
    'partner.form.submitting':     'Submitting…',
    'partner.form.error':          'Submission failed. Please try again.',
    'partner.form.note':           'By submitting you agree to GC using the above information for service matching and contact. All data is strictly protected.',

    'footer.copy': '© 2026 GC Cross-Border Services. All rights reserved.',

    // ── index.html ──
    'index.hero.badge':  'Global Cross-Border Service Experts',
    'index.hero.line1':  'Take Your Brand',
    'index.hero.line2':  'Global',
    'index.hero.desc':   'GC\'s cross-border advisors specialize in Asian and Western markets, combining local resources and digital marketing expertise to carve the shortest path to global market entry for your brand.',
    'index.hero.cta1':   'Fill in the Diagnostic Form',
    'index.hero.cta2':   'Our Services',

    'index.why.label': 'Why GC',
    'index.why.title': 'Why Choose Us',
    'index.why.sub':   'Years of cross-border expertise with a complete local resource network and consulting partners — tailoring the best go-global strategy for your brand.',
    'index.why.c1.lbl':   'Markets',
    'index.why.c1.title': 'Multi-Market Coverage',
    'index.why.c1.desc':  'Deep roots in Greater China, Southeast Asia, Northeast Asia, and Western markets — precise localization to find the best entry strategy for your brand.',
    'index.why.c2.lbl':   'Response',
    'index.why.c2.title': 'Fast Matching',
    'index.why.c2.desc':  'We reply within 3 business days of receiving your brief and handpick the best-fit partners from our network, saving you time on research and vetting.',
    'index.why.c3.lbl':   'Brands Served',
    'index.why.c3.title': 'Expert Consultant Network',
    'index.why.c3.desc':  'We integrate multiple specialized cross-border consultants and match them to your brand\'s exact needs, ensuring every engagement is led by the right team.',
    'index.why.c4.lbl':   'Confidential',
    'index.why.c4.title': 'Data Security',
    'index.why.c4.desc':  'Strict data protection across the board — your diagnostic form information is used solely for service matching, keeping your business secrets safe.',

    'index.services.label': 'Our Services',
    'index.services.title': 'Our Consulting Services',
    'index.services.sub':   'From market assessment to on-the-ground execution, GC delivers end-to-end cross-border solutions.',
    'index.services.cta':   'Fill in the Diagnostic Form to Get Started',
    'index.svc1.title': 'Live Commerce',      'index.svc1.desc': 'Drive real-time sales through KOLs, streamers, and live events to rapidly break into your target market.',
    'index.svc2.title': 'Export Promotion',   'index.svc2.desc': 'Develop agents, distributors, wholesalers, and buyers to build a solid overseas sales network.',
    'index.svc3.title': 'Cross-Border E-Commerce', 'index.svc3.desc': 'List and operate your brand on leading overseas e-commerce platforms to boost online sales and brand exposure.',
    'index.svc4.title': 'Retail Channels',    'index.svc4.desc': 'Enter supermarkets, drugstores, select shops, and department stores in overseas retail markets.',
    'index.svc5.title': 'Market Research',    'index.svc5.desc': 'Deep analysis of consumer trends and competitive landscape in target markets to craft a precise entry strategy.',
    'index.svc6.title': 'Brand Localization', 'index.svc6.desc': 'Adapt brand packaging, copy, and visuals to the cultural context of each market.',
    'index.svc7.title': 'Supply Chain',       'index.svc7.desc': 'Build efficient cross-border logistics and warehousing solutions to ensure on-time delivery.',
    'index.svc8.title': 'Digital Marketing',  'index.svc8.desc': 'Integrate social media, search ads, and content marketing to grow brand awareness in target markets.',

    'index.partners.label': 'Our Partners',
    'index.partners.title': 'Curated Service Partners',
    'index.partners.sub':   'GC rigorously selects top specialists from every field, precisely matched to your brand needs so every engagement is led by those who know the market best.',
    'partners.svc_label':   'Services Offered',
    'partners.prob_label':  'Problems We Solve',

    'index.process.label': 'How It Works',
    'index.process.title': 'Consultation Process',
    'index.process.sub':   'From submitting your brief to official launch, GC is with you every step of the way.',
    'index.step1.title': 'Fill in the Diagnostic Form',
    'index.step1.desc':  'Complete your company profile, product categories, target markets, and expansion goals so GC\'s advisors can accurately understand your needs.',
    'index.step2.title': 'GC Team Review & Online Meeting',
    'index.step2.desc':  'Our advisory team reviews your diagnostic data within 3 business days and schedules a video call to confirm your brand status, target markets, and actual needs.',
    'index.step3.title': 'Partner Matching',
    'index.step3.desc':  'We handpick the most suitable service partners from our network based on your brand\'s requirements to ensure the best resource fit.',
    'index.step4.title': 'Partner–Client Online Meeting',
    'index.step4.desc':  'We arrange an online meeting between you and the matched partner to discuss collaboration details and execution direction in depth.',
    'index.step5.title': 'Service Proposal & Quotation',
    'index.step5.desc':  'We provide an initial service proposal and transparent quotation — then officially kick off your global expansion journey.',

    'index.faq.title': 'FAQ',
    'index.faq.sub':   'The most common questions about GC',
    'index.faq.q1':    'Q1: What kind of platform is GC?',
    'index.faq.a1':    '<p>GC is a one-stop global cross-border expansion platform that helps brands, enterprises, and startups quickly find the right specialist partners across market development, brand marketing, e-commerce operations, channel development, and digital promotion.</p><p>Through GC, you don\'t need to search for multiple suppliers on your own — simply state your needs and receive an integrated solution.</p>',
    'index.faq.q2':    'Q2: Does GC provide services directly or match partners?',
    'index.faq.a2':    '<p>GC uses a "total management + specialist execution" model.</p><p>We first understand your needs and evaluate the best approach, then deliver services through GC or our partner network — with GC overseeing project management and quality control throughout.</p>',
    'index.faq.q3':    'Q3: How do I get started?',
    'index.faq.a3':    '<p>The process is straightforward:</p><ol><li>Submit your brief</li><li>GC advisor needs interview</li><li>Solution proposal & quotation</li><li>Confirm engagement</li><li>Project execution & outcome tracking</li></ol><p>You focus on growing your business — GC handles the rest.</p>',
    'index.faq.q4':    'Q4: What types of businesses does GC serve?',
    'index.faq.a4':    '<p>We work with:</p><ul><li>Startups</li><li>SMEs</li><li>Brand owners</li><li>E-commerce brands</li><li>Traditional businesses going digital</li><li>Companies expanding into overseas markets</li></ul><p>Whether you\'re entering a new market for the first time or scaling an existing one, GC can connect you with the right resources.</p>',
    'index.faq.q5':    "Q5: What if I'm not sure what services I need?",
    'index.faq.a5':    '<p>No problem. Many clients come to us with a goal rather than a specific service in mind, for example:</p><ul><li>Increase overseas orders</li><li>Enter a specific country</li><li>Boost brand exposure</li><li>Expand agent or distributor networks</li></ul><p>GC advisors will help you analyze your current situation and design the most suitable execution plan.</p>',
    'index.faq.q6':    'Q6: How does GC select its service partners?',
    'index.faq.a6':    '<p>GC vets partners based on service capability, project track record, industry background, and execution quality.</p><p>We want every client to receive consistent, professional service — so all partners go through our evaluation and review process.</p>',
    'index.faq.q7':    'Q7: How is pricing determined?',
    'index.faq.a7':    '<p>Pricing varies by service scope and project scale.</p><p>GC provides a full quote and service description before any engagement begins. Projects only kick off after both parties confirm the requirements — no hidden fees.</p>',
    'index.faq.q8':    'Q8: How can I become a GC partner?',
    'index.faq.a8':    '<p>GC welcomes:</p><ul><li>Professional service providers</li><li>Business consultants</li><li>Business development partners</li><li>Channel and industry resource partners</li></ul><p>If you have specialist expertise or industry resources and want to expand markets with GC, please reach out to discuss collaboration.</p>',

    'index.cta.label': 'Get Started Today',
    'index.cta.title': 'Looking for a reliable, high-performance cross-border solution?',
    'index.cta.sub':   'Fill in the diagnostic form now and GC advisors will craft the ideal global expansion strategy for your brand.',
    'index.cta.btn':   'Fill in the Diagnostic Form',

    // ── gc-form.html ──
    'form.nav.back':        'Back to Website',
    'form.sidebar.title':   'Diagnostic Process',
    'form.s1.name': 'Company & Brand Info',   'form.s1.desc': 'Basic contact & brand details',
    'form.s2.name': 'Product Categories',      'form.s2.desc': 'Categories & export destinations',
    'form.s3.name': 'Current Status',          'form.s3.desc': 'Export experience & status',
    'form.s4.name': 'Target Markets & Budget', 'form.s4.desc': 'Markets, budgets & goals',
    'form.s5.name': 'Channels & Advanced',     'form.s5.desc': 'Channels & detailed requirements',
    'form.s6.name': 'Review & Submit',         'form.s6.desc': 'Confirm data & submit',

    'form.step1.title': 'Company & Brand Info',
    'form.step1.desc':  'Please fill in your company contact and brand details so GC advisors can provide an accurate service assessment.',
    'form.step2.title': 'Product Categories & Characteristics',
    'form.step2.desc':  'Select your product categories, product trait tags, and planned export destinations to help us understand your product conditions.',
    'form.step3.title': 'Current Status',
    'form.step3.desc':  'Help us understand your current export experience, product SKU volume, and existing pricing.',
    'form.step4.title': 'Target Markets & Sales Conditions',
    'form.step4.desc':  'Select the target markets you want to enter and provide budget and revenue goal information.',
    'form.step5.title': 'Channels & Advanced Questions',
    'form.step5.desc':  'Select your preferred expansion channels. Relevant advanced questions will appear based on your choices.',
    'form.step6.title': 'Review & Submit',
    'form.step6.desc':  'Please review your information, check the privacy consent box, then submit.',

    'form.lbl.referrer':      'Referrer (Optional)',
    'form.lbl.source':        'How did you hear about GC?',
    'form.lbl.source_other':  'Please specify',
    'form.lbl.company':       'Company Name',
    'form.lbl.contact':       'Contact Name',
    'form.lbl.jobtitle':      'Job Title',
    'form.lbl.email':         'Email Address',
    'form.lbl.other_contact': 'Other Contact Method',
    'form.lbl.contact_acc':   'Account / Phone Number',
    'form.lbl.reg_country':   'Country of Registration',
    'form.lbl.reg_other':     'Please specify',
    'form.lbl.brands':        'Brand Name(s) (up to 5)',
    'form.lbl.add_brand':     'Add Brand',
    'form.lbl.product_cat':   'Product Categories (multiple choice)',
    'form.lbl.cat_other':     'Other Category (please describe)',
    'form.lbl.product_tags':  'Product Trait Tags (multiple choice)',
    'form.lbl.export_dest':   'Planned Export Destinations (multiple choice)',
    'form.lbl.product_desc':  'Product Overview',
    'form.lbl.export_exp':    'Any prior export experience?',
    'form.lbl.exp_countries': 'Past Main Export Countries',
    'form.lbl.exp_products':  'Past Key Export Products',
    'form.lbl.exp_rev':       'Past Annual Export Revenue',
    'form.lbl.exp_method':    'Past Export Methods (multiple choice)',
    'form.lbl.sku':           'Current Product SKU Count',
    'form.lbl.price':         'Average Unit Selling Price',
    'form.lbl.markets':       'Target Markets (multiple choice)',
    'form.lbl.market_other':  'Other Region (please describe)',
    'form.lbl.distributor':   'Existing distributors or importers in target markets?',
    'form.lbl.opex':          'Estimated Monthly Project Budget (excl. marketing)',
    'form.lbl.mktg':          'Estimated Monthly Marketing Budget',
    'form.lbl.rev_target':    'Estimated Monthly Revenue Target',
    'form.lbl.sample':        'Can you provide product samples?',
    'form.lbl.launch':        'Estimated Launch Timeline',
    'form.lbl.channels':      'Preferred Expansion Channels (multiple choice)',
    'form.lbl.live_exp':      'Any live-streaming sales experience?',
    'form.lbl.live_rep':      'Can you provide a brand representative or co-host?',
    'form.lbl.overseas_exp':  'Any overseas trade show experience?',
    'form.lbl.overseas_ctry': 'Countries Attended',
    'form.lbl.local_rep':     'Does your company have a local-language representative for the target market?',
    'form.lbl.ecom_exp':      'Any e-commerce experience?',
    'form.lbl.ecom_plats':    'Platforms Previously Operated',
    'form.lbl.ecom_team':     'Do you have an in-house e-commerce team?',
    'form.lbl.ecom_cert':     'Have you obtained product certifications for the target market?',
    'form.lbl.retail_exp':    'Any physical retail channel experience?',
    'form.lbl.retail_ctry':   'Countries Entered',
    'form.lbl.retail_chan':   'Channels Previously Worked With',
    'form.lbl.retail_cert':   'Have you obtained product certifications for the target market?',
    'form.lbl.consign':       'Open to consignment?',
    'form.lbl.consign_qty':   'Consignment Quantity Available',
    'form.lbl.other_notes':   'Additional Notes (optional)',

    'form.ph.referrer':      'Select or search referrer',
    'form.ph.source_other':  'Briefly describe how you heard about GC',
    'form.ph.company':       'Enter company name',
    'form.ph.contact':       'Enter contact name',
    'form.ph.jobtitle':      'e.g. Brand Director, Sales Manager',
    'form.ph.contact_acc':   'Enter account or phone number',
    'form.ph.reg_other':     'Please specify your country of registration',
    'form.ph.brand1':        'Brand Name 1',
    'form.ph.cat_other':     'Please describe the product category',
    'form.ph.export_dest':   'e.g. Japan, Singapore, USA',
    'form.ph.product_desc':  'Briefly describe your key products and highlights',
    'form.ph.exp_countries': 'e.g. Japan, Singapore, Malaysia',
    'form.ph.exp_products':  'Describe your main export products',
    'form.ph.market_other':  'Please specify target region',
    'form.ph.overseas_ctry': 'e.g. Japan, Thailand',
    'form.ph.ecom_plats':    'e.g. Shopee, Lazada, Amazon',
    'form.ph.retail_ctry':   'e.g. Japan, Singapore',
    'form.ph.retail_chan':   'e.g. Don Quijote, Watsons, LOFT',
    'form.ph.consign_qty':   'Enter available consignment quantity',
    'form.ph.other_notes':   'Any other questions or additional information',

    'form.err.company':       'Please fill in the company name',
    'form.err.contact':       'Please fill in the contact name',
    'form.err.email':         'Please enter a valid email address',
    'form.err.contact_acc':   'Please fill in the account or phone number',
    'form.err.country':       'Please select a country of registration',
    'form.err.reg_other':     'Please specify the country of registration',
    'form.err.cat':           'Please select at least one product category',
    'form.err.cat_other':     'Please describe the category',
    'form.err.export_dest':   'Please fill in at least one export destination',
    'form.err.export_exp':    'Please select whether you have export experience',
    'form.err.exp_countries': 'Please fill in export countries',
    'form.err.exp_products':  'Please describe key export products',
    'form.err.exp_rev':       'Please select annual export revenue',
    'form.err.sku':           'Please select SKU count',
    'form.err.price':         'Please select a price range',
    'form.err.markets':       'Please select at least one target market',
    'form.err.market_other':  'Please specify the target region',
    'form.err.distributor':   'Please select distributor status',
    'form.err.opex':          'Please select an operating budget',
    'form.err.mktg':          'Please select a marketing budget',
    'form.err.rev_target':    'Please select a revenue target',
    'form.err.sample':        'Please select a sample option',
    'form.err.launch':        'Please select a launch timeline',
    'form.err.channel':       'Please select at least one expansion channel',
    'form.err.live_exp':      'Please select',
    'form.err.live_rep':      'Please select',
    'form.err.overseas_exp':  'Please select',
    'form.err.overseas_ctry': 'Please fill in attended countries',
    'form.err.local_rep':     'Please select',
    'form.err.ecom_exp':      'Please select',
    'form.err.ecom_plats':    'Please fill in the platforms',
    'form.err.ecom_team':     'Please select',
    'form.err.ecom_cert':     'Please select',
    'form.err.retail_exp':    'Please select',
    'form.err.retail_ctry':   'Please fill in',
    'form.err.retail_chan':   'Please fill in',
    'form.err.retail_cert':   'Please select',
    'form.err.consign':       'Please select',
    'form.err.consign_qty':   'Please fill in consignment quantity',
    'form.err.privacy':       'Please check the privacy consent box',
    'form.err.submit':        'Submission failed. Please try again later.',

    'form.opt.yes':       'Yes',
    'form.opt.no':        'No',
    'form.opt.yes_yn':    'Yes',
    'form.opt.no_yn':     'No',
    'form.opt.can':       'Yes, we can',
    'form.opt.cannot':    'No, we cannot',

    'form.cat.food_health': 'Food & Health',
    'form.cat.beauty_life': 'Beauty & Lifestyle',
    'form.cat.tech':        'Tech & Specialty',

    'form.region.greater_china': 'Greater China',
    'form.region.ne_asia':       'Northeast Asia',
    'form.region.se_asia':       'Southeast Asia',
    'form.region.west':          'Americas / Europe / Oceania',
    'form.region.other':         'Other',

    'form.ch.live.title':      'Live Commerce',
    'form.ch.live.desc':       'Sales via KOLs, streamers, and live events',
    'form.ch.overseas.title':  'Export Promotion',
    'form.ch.overseas.desc':   'Develop agents, distributors, wholesalers, buyers',
    'form.ch.ecom.title':      'Cross-Border E-Commerce',
    'form.ch.ecom.desc':       'Listing and operating on overseas e-commerce platforms',
    'form.ch.retail.title':    'Physical Retail',
    'form.ch.retail.desc':     'Supermarkets, drugstores, select shops, department stores, etc.',
    'form.ch.undecided.title': 'Undecided — need platform guidance',
    'form.ch.undecided.desc':  'Platform will recommend suitable channels based on your products',
    'form.ch.live.adv':        'Live Commerce — Advanced Questions',
    'form.ch.overseas.adv':    'Export Promotion — Advanced Questions',
    'form.ch.ecom.adv':        'E-Commerce — Advanced Questions',
    'form.ch.retail.adv':      'Physical Retail — Advanced Questions',

    'form.btn.prev':       'Back',
    'form.btn.next':       'Next',
    'form.btn.submit':     'Submit to GC Advisor',
    'form.btn.submitting': 'Submitting…',
    'form.submitting':     'Submitting your diagnostic form...',

    'form.sum.basic':    'Basic Information',
    'form.sum.product':  'Product Categories & Characteristics',
    'form.sum.current':  'Current Status',
    'form.sum.market':   'Target Markets & Sales Conditions',
    'form.sum.channels': 'Channels & Advanced Questions',
    'form.sum.k.referrer':      'Referrer',
    'form.sum.k.source':        'How Heard About GC',
    'form.sum.k.company':       'Company Name',
    'form.sum.k.contact':       'Contact',
    'form.sum.k.jobtitle':      'Job Title',
    'form.sum.k.email':         'Email',
    'form.sum.k.other_contact': 'Other Contact',
    'form.sum.k.reg_country':   'Country of Registration',
    'form.sum.k.brands':        'Brand Name(s)',
    'form.sum.k.cats':          'Product Categories',
    'form.sum.k.cat_other':     'Category Notes',
    'form.sum.k.tags':          'Product Traits',
    'form.sum.k.exports':       'Export Destinations',
    'form.sum.k.product_desc':  'Product Overview',
    'form.sum.k.exp':           'Export Experience',
    'form.sum.k.exp_countries': 'Past Export Countries',
    'form.sum.k.exp_products':  'Past Key Products',
    'form.sum.k.exp_rev':       'Annual Export Revenue',
    'form.sum.k.exp_methods':   'Export Methods',
    'form.sum.k.sku':           'SKU Count',
    'form.sum.k.price':         'Avg. Unit Price',
    'form.sum.k.markets':       'Target Markets',
    'form.sum.k.distributor':   'Existing Distributors',
    'form.sum.k.opex':          'Monthly Project Budget',
    'form.sum.k.mktg':          'Monthly Marketing Budget',
    'form.sum.k.rev':           'Revenue Target',
    'form.sum.k.sample':        'Product Samples',
    'form.sum.k.launch':        'Launch Timeline',
    'form.sum.k.channels':      'Expansion Channels',
    'form.sum.k.live_exp':      'Live Commerce Experience',
    'form.sum.k.live_rep':      'Brand Rep (Live)',
    'form.sum.k.overseas_exp':  'Trade Show Experience',
    'form.sum.k.overseas_ctry': 'Countries Attended',
    'form.sum.k.local_rep':     'Local Language Rep',
    'form.sum.k.ecom_exp':      'E-Commerce Experience',
    'form.sum.k.ecom_plats':    'Platforms Used',
    'form.sum.k.ecom_team':     'In-House E-Com Team',
    'form.sum.k.ecom_cert':     'E-Com Certification',
    'form.sum.k.retail_exp':    'Retail Experience',
    'form.sum.k.retail_ctry':   'Retail Countries',
    'form.sum.k.retail_chan':   'Channel Types',
    'form.sum.k.retail_cert':   'Retail Certification',
    'form.sum.k.consign':       'Open to Consignment',
    'form.sum.k.consign_qty':   'Consignment Qty',
    'form.sum.k.other_notes':   'Additional Notes',

        'stat.days.unit': ' Days',
    'form.err.other_contact': 'Please fill in account or number',
    'form.err.country_other': 'Please describe the registration location',
    'form.err.brand': 'Please fill in at least one brand name',
    'form.err.export': 'Please select at least one export country',
    'form.err.export_other': 'Please describe the export country',
    'form.err.ecom_platforms': 'Please fill in e-commerce platforms',
    'form.err.retail_countries': 'Please fill in',
    'form.err.retail_channels': 'Please fill in',
    'form.cat.item.1.name': 'Food / Beverage (Shelf-Stable)',
    'form.cat.item.2.name': 'Food / Beverage (Refrigerated)',
    'form.cat.item.3.name': 'Food / Beverage (Frozen)',
    'form.cat.item.4.name': 'Health Food / Supplements',
    'form.cat.item.5.name': 'Mother & Baby Products',
    'form.cat.item.6.name': 'Children\'s Products',
    'form.cat.item.7.name': 'Cosmetics / Beauty',
    'form.cat.item.8.name': 'Apparel / Accessories',
    'form.cat.item.9.name': 'Home / Lifestyle Products',
    'form.cat.item.10.name': 'Sports / Outdoor Gear',
    'form.cat.item.11.name': 'Toys / Kids Products',
    'form.cat.item.12.name': 'Books / Stationery / Education',
    'form.cat.item.13.name': 'Electronics / 3C',
    'form.cat.item.14.name': 'Auto / Tools / Hardware',
    'form.cat.item.15.name': 'Fragile / High-Value Goods',
    'form.cat.item.16.name': 'Digital / Virtual Goods',
    'form.cat.item.17.name': 'Other Categories',
    'form.cat.item.1.sub': 'General food, snacks, beverages',
    'form.cat.item.2.sub': 'Cold chain storage & delivery',
    'form.cat.item.3.sub': 'Frozen chain & temperature control',
    'form.cat.item.4.sub': 'Vitamins, functional foods',
    'form.cat.item.5.sub': 'Baby bottles, infant products',
    'form.cat.item.6.sub': 'Pet food, health supplements',
    'form.cat.item.7.sub': 'Skincare, makeup, personal care',
    'form.cat.item.8.sub': 'Clothing, bags, jewelry',
    'form.cat.item.9.sub': 'Furniture, kitchenware, cleaning',
    'form.cat.item.10.sub': 'Fitness equipment, camping gear',
    'form.cat.item.11.sub': 'Toys, models, figures',
    'form.cat.item.12.sub': 'Books, stationery, teaching aids',
    'form.cat.item.13.sub': 'Consumer electronics, accessories',
    'form.cat.item.14.sub': 'Auto accessories, tools',
    'form.cat.item.15.sub': 'Glass, ceramics, luxury items',
    'form.cat.item.16.sub': 'Vouchers, courses, license keys',
    'form.cat.item.17.sub': 'Please describe after selecting',
        'form.ph.referral_select': 'Select or search',
    'form.chip.mobile': 'Mobile',
    'form.chip.source.friend': 'Referral (friend/peer)',
    'form.chip.source.google': 'Google Search',
    'form.chip.source.event': 'Trade Show / Event',
    'form.chip.source.other': 'Other',
    'form.chip.country.tw': 'Taiwan',
    'form.chip.country.cn': 'China',
    'form.chip.country.hk': 'Hong Kong',
    'form.chip.country.sg': 'Singapore',
    'form.chip.country.my': 'Malaysia',
    'form.chip.country.jp': 'Japan',
    'form.chip.country.other': 'Other',
    'form.privacy': 'I have read and agree that GC may collect, process, and use the company and contact information I have provided in accordance with its <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a>, for the purposes of cross-border service needs assessment, advisor contact, and service matching.',
  },

  /* ════════════════════════════════
     日本語
  ════════════════════════════════ */
  ja: {
    'footer.privacy': 'プライバシーポリシー',
    'privacy.title': 'プライバシーポリシー',
    'privacy.updated': '最終更新日',

    /* ── H9 診斷表補譯：選項／說明／成功頁（日本語） ── */
    'form.tag.liquid': '液体を含む',
    'form.tag.alcohol': 'アルコールを含む',
    'form.tag.powder': '粉末',
    'form.tag.spray': 'スプレー・エアゾール',
    'form.tag.glass': 'ガラス容器',
    'form.tag.expiry': '賞味期限・使用期限の管理が必要',
    'form.tag.ingredient': '成分表示が必要',
    'form.tag.brandauth': 'ブランド許諾が必要',
    'form.tag.battery': '電池・電子部品を含む',
    'form.tag.tempctrl': '温度管理が必要',
    'form.mk.tw': '台湾',
    'form.mk.hk': '香港',
    'form.mk.mo': 'マカオ',
    'form.mk.jp': '日本',
    'form.mk.kr': '韓国',
    'form.mk.sg': 'シンガポール',
    'form.mk.my': 'マレーシア',
    'form.mk.th': 'タイ',
    'form.mk.id': 'インドネシア',
    'form.mk.vn': 'ベトナム',
    'form.mk.ph': 'フィリピン',
    'form.mk.us': 'アメリカ',
    'form.mk.eu': 'ヨーロッパ',
    'form.mk.anz': 'オーストラリア・ニュージーランド',
    'form.mk.other_region': 'その他の地域',
    'form.region.other': 'その他',
    'form.lbl.product_desc': '製品の概要',
    'form.lbl.other_notes': 'その他の課題・補足事項',
    'form.ph.export_other': '輸出先の国をご記入ください',
    'form.ph.product_desc': '製品の特徴、ターゲット顧客、その他補足したい情報を簡潔にご記入ください（最大5,000文字）',
    'form.ph.consign_qty': '例：1品番あたり50個',
    'form.ph.other_notes': '現在直面している課題やその他補足したい情報をご記入ください（最大5,000文字）',
    'form.done.badge': '送信完了',
    'form.done.title': '診断フォームを送信しました',
    'form.done.desc': 'GCクロスボーダーサービス需要診断フォームにご記入いただきありがとうございます。GCコンサルティングチームより3営業日以内に、メールまたはご記入いただいた連絡先へご連絡いたします。',
    'form.done.step1': 'GCチームが診断内容を確認します',
    'form.done.step2': 'GCチームとのオンライン面談で、現状と具体的なご要望を確認します',
    'form.done.step3': 'ご要望を確認のうえ、最適なサービスプロバイダーをマッチングします',
    'form.done.step4': 'サービスプロバイダーとのオンライン会議を設定します',
    'form.done.step5': 'ご要望に基づき、初期のサービス提案とお見積りをご提示します',
    'form.done.contact': 'GC営業チームに直接問い合わせる',
    'form.done.back': 'ウェブサイトに戻る',
    'form.ph.brand_name': 'ブランド名',
    'page.title.partner': 'GCサービスパートナーになる — 共にグローバル市場を拓く',
    'page.title.index':   'GCクロスボーダーサービス — グローバル市場開拓コンサルティングプラットフォーム',
    'page.title.form':    'GCクロスボーダーサービス診断フォーム — ニーズを記入して協業を始める',

    'nav.about':   'GCについて',
    'nav.why':     'なぜGCか',
    'nav.services':'コンサルティング',
    'nav.catalog': 'カタログ',
    'nav.partners':'パートナー紹介',
    'nav.process': '流れ',
    'nav.become':  'パートナーになる',
    'nav.cta':     'お問い合わせ',
    'nav.faq':     'よくある質問',

    'partner.hero.badge':  'JOIN GC PARTNER NETWORK',
    'partner.hero.line1':  'GCに参加して、',
    'partner.hero.line2':  'ビジネスを広げよう',
    'partner.hero.desc':   'GCのクロスボーダーパートナーネットワークは拡大中です。専門スキルを持つサービスプロバイダーを歓迎します。一緒に最高のクロスボーダーソリューションを届け、ビジネスチャンスを広げましょう。',
    'partner.hero.scroll': 'スクロールして詳細を確認し、申請する',

    'partner.benefits.label': 'Why Partner With Us',
    'partner.benefits.title': 'GCパートナーになるメリット',
    'partner.benefits.sub':   'パートナーネットワークに参加して、安定した顧客獲得・ブランドの信頼・充実したサポートを享受しましょう。',

    'partner.b1.title': '精度の高いマッチング',
    'partner.b1.desc':  'あなたの専門分野とサービス範囲に合わせて、真のニーズを持つブランド顧客を精確にマッチング。開拓時間を節約し、成約率を高めます。',
    'partner.b2.title': 'クロスボーダーリソース統合',
    'partner.b2.desc':  'GCのアジア・欧米市場ネットワークにアクセスし、他のパートナーとリソースを共有してビジネス規模と市場カバレッジを拡大できます。',
    'partner.b3.title': 'ブランド信頼性の向上',
    'partner.b3.desc':  'GC認定パートナーとして、GCブランドの後ろ盾を得て市場での信頼性を高め、顧客があなたのサービスに自信を持てるようになります。',
    'partner.b4.title': 'スムーズなオンボーディング',
    'partner.b4.desc':  'GCチームが新パートナーの業務開始をフルサポート。連携フローの習得から実際の運用開始まで一緒に進めます。',
    'partner.b5.title': '情報セキュリティの保証',
    'partner.b5.desc':  'パートナーの情報を厳格に保護します。営業秘密と顧客データは完全に守られ、安心して協力いただけます。',

    'partner.stat1.lbl': '対応市場',
    'partner.stat2.lbl': '提携ブランド',
    'partner.stat3.lbl': '迅速な連携',

    'partner.form.title':         'パートナー申請フォーム',
    'partner.form.subtitle':      '以下の基本情報をご記入ください。GCチームが3営業日以内にご連絡します。',
    'partner.form.success.title': '申請完了！',
    'partner.form.success.desc':  'ご申請ありがとうございます。GCチームが3営業日以内にご連絡します。<br>一緒に大きなビジネスを築きましょう！',

    'partner.field.company':       '会社名',
    'partner.field.company.ph':    '会社の正式名称を入力してください',
    'partner.field.owner':         '代表者',
    'partner.field.owner.ph':      '代表者のお名前',
    'partner.field.contact':       '担当者',
    'partner.field.contact.ph':    '主な担当者のお名前',
    'partner.field.phone':         '電話番号',
    'partner.field.phone.ph':      '例：+81-90-1234-5678（任意）',
    'partner.field.email':         'メールアドレス',
    'partner.field.other':         'その他の連絡先',
    'partner.field.other.ph':      'LINE ID、WeChat、WhatsApp など',
    'partner.field.other.hint':    'LINE ID・WeChat ID・WhatsApp番号などをご記入いただけます',
    'partner.field.services':      '提供サービス',
    'partner.field.services.ph':   '提供できる主なサービスをご説明ください。例：ライブコマース、海外チャネル開拓、デジタルマーケティング、サプライチェーン管理…',
    'partner.form.submit':         '申請を送信',
    'partner.form.submitting':     '送信中…',
    'partner.form.error':          '送信に失敗しました。もう一度お試しください。',
    'partner.form.note':           '送信することで、GCが上記情報をサービスマッチングおよびご連絡のために使用することに同意したものとみなされます。すべてのデータは厳重に保護されます。',

    'footer.copy': '© 2026 GCクロスボーダーサービス. All rights reserved.',

    // ── index.html ──
    'index.hero.badge':  'グローバル越境サービスのエキスパート',
    'index.hero.line1':  'ブランドを、',
    'index.hero.line2':  '世界へ',
    'index.hero.desc':   'GCの越境コンサルタントはアジア・欧米市場に精通し、ローカルリソースとデジタルマーケティングの専門知識を組み合わせて、あなたのブランドに最短のグローバル市場参入ルートを切り拓きます。',
    'index.hero.cta1':   '診断フォームを記入する',
    'index.hero.cta2':   'サービスを見る',

    'index.why.label': 'Why GC',
    'index.why.title': 'なぜGCを選ぶのか',
    'index.why.sub':   '長年の越境市場経験と充実したローカルリソースネットワーク・コンサルティングパートナーで、あなたのブランドに最適な海外展開戦略を設計します。',
    'index.why.c1.lbl':   '対応市場',
    'index.why.c1.title': '多市場カバレッジ',
    'index.why.c1.desc':  '大中華・東南アジア・東北アジア・欧米市場に深く根ざし、精確なローカライズでブランドに最適な参入戦略を提供します。',
    'index.why.c2.lbl':   '返信速度',
    'index.why.c2.title': 'スピーディなマッチング',
    'index.why.c2.desc':  'ご要望受付後3営業日以内に返信し、パートナーネットワークから最適なサービス事業者を厳選。調査や選定にかかる時間を省けます。',
    'index.why.c3.lbl':   '支援ブランド',
    'index.why.c3.title': '専門コンサルタントネットワーク',
    'index.why.c3.desc':  '複数の専門越境コンサルタントを統合し、ブランドのニーズに合わせて精確にマッチング。各プロジェクトを最適なチームが担当します。',
    'index.why.c4.lbl':   '機密保持',
    'index.why.c4.title': 'データセキュリティ',
    'index.why.c4.desc':  '厳格なデータ保護を実施。診断フォームの情報はサービスマッチングのみに使用し、ビジネス上の機密を守ります。',

    'index.services.label': 'Our Services',
    'index.services.title': 'コンサルティングサービス',
    'index.services.sub':   '市場評価から現地実行まで、GCがトータルの越境ソリューションを提供します。',
    'index.services.cta':   '診断フォームを記入してご相談を始める',
    'index.svc1.title': 'ライブコマース',      'index.svc1.desc': 'KOL・配信者・ライブイベントを通じてリアルタイム販売を促進し、ターゲット市場に素早く参入します。',
    'index.svc2.title': '海外販路開拓',        'index.svc2.desc': 'エージェント・ディストリビューター・卸売業者・バイヤーを開拓し、安定した海外販売ネットワークを構築します。',
    'index.svc3.title': '越境EC',              'index.svc3.desc': '海外主要ECプラットフォームへの出品・運営を支援し、オンライン売上とブランド露出を高めます。',
    'index.svc4.title': '実店舗チャネル',      'index.svc4.desc': 'スーパー・ドラッグストア・セレクトショップ・百貨店など海外実店舗小売チャネルへの参入を支援します。',
    'index.svc5.title': '市場調査',            'index.svc5.desc': 'ターゲット市場の消費トレンドと競合環境を深く分析し、精確な参入戦略を策定します。',
    'index.svc6.title': 'ブランドローカライズ','index.svc6.desc': '各市場の文化に合わせてブランドパッケージング・コピー・ビジュアルを現地化します。',
    'index.svc7.title': 'サプライチェーン統合','index.svc7.desc': '効率的な越境物流・倉庫ソリューションを構築し、商品の確実な納品を実現します。',
    'index.svc8.title': 'デジタルマーケティング','index.svc8.desc': 'SNS・検索広告・コンテンツマーケティングを統合し、ターゲット市場でのブランド認知度を高めます。',

    'index.partners.label': 'Our Partners',
    'index.partners.title': '厳選サービスパートナー',
    'index.partners.sub':   'GCは各分野のトップ専門家を厳選し、ブランドのニーズに精確にマッチング。各プロジェクトをその市場を最もよく知るチームが担当します。',
    'partners.svc_label':   '提供サービス',
    'partners.prob_label':  '解決できる課題',

    'index.process.label': 'How It Works',
    'index.process.title': 'コンサルティングの流れ',
    'index.process.sub':   'ご要望の提出から正式なスタートまで、GCがずっとそばで伴走します。',
    'index.step1.title': '診断フォームの記入',
    'index.step1.desc':  '会社情報・製品カテゴリ・ターゲット市場・展開方針を記入して、GCアドバイザーがニーズを正確に把握できるようにします。',
    'index.step2.title': 'GCチームによる確認とオンライン面談',
    'index.step2.desc':  'アドバイザリーチームが3営業日以内に診断データを確認し、ビデオ通話でブランドの現状・ターゲット市場・実際のニーズを確認します。',
    'index.step3.title': 'パートナーマッチング',
    'index.step3.desc':  'ブランドの要件に基づいてネットワークから最適なサービスパートナーを厳選し、リソースの最適マッチングを実現します。',
    'index.step4.title': 'パートナーとクライアントのオンライン面談',
    'index.step4.desc':  'マッチングしたパートナーとのオンライン面談を設定し、協力の詳細と実行方向を深く話し合います。',
    'index.step5.title': 'サービス提案と見積もり',
    'index.step5.desc':  '初期サービス提案と透明な見積もりを提示し、正式にグローバル展開の旅を始めます。',

    'index.faq.title': 'よくある質問',
    'index.faq.sub':   'GCプラットフォームについてよく聞かれること',
    'index.faq.q1':    'Q1：GCはどんなサービスプラットフォームですか？',
    'index.faq.a1':    '<p>GCは、ブランド・企業・スタートアップが市場開拓・ブランドマーケティング・EC運営・チャネル開発・デジタルプロモーションなど各分野の専門サービス事業者を素早く見つけられる、一貫型グローバル越境展開プラットフォームです。</p><p>GCを使えば、自分で複数のサプライヤーを探す必要はありません。ニーズを伝えるだけで、統合ソリューションが得られます。</p>',
    'index.faq.q2':    'Q2：GCは自社でサービスを提供しますか、それともパートナーをマッチングしますか？',
    'index.faq.a2':    '<p>GCは「一括管理＋専門事業者実行」モデルを採用しています。</p><p>まずニーズを把握し最適な実行方針を評価した上で、GCまたはパートナー事業者が共同でサービスを提供し、GCがプロジェクト管理と品質管理を担います。</p>',
    'index.faq.q3':    'Q3：どうやって始めればいいですか？',
    'index.faq.a3':    '<p>流れはとてもシンプルです：</p><ol><li>ご要望の提出</li><li>GCアドバイザーによるヒアリング</li><li>解決策の提案と見積もり</li><li>契約の確認</li><li>プロジェクト実行と成果追跡</li></ol><p>ビジネスの成長に集中していただければ、あとはGCがまとめます。</p>',
    'index.faq.q4':    'Q4：GCはどのような企業を支援できますか？',
    'index.faq.a4':    '<p>支援対象は：</p><ul><li>スタートアップ</li><li>中小企業</li><li>ブランドオーナー</li><li>ECブランド</li><li>デジタル転換中の伝統的企業</li><li>海外市場拡大を目指す企業</li></ul><p>初めて海外市場に参入する場合でも、既存市場を拡大する場合でも、GCを通じて適切なリソースを見つけられます。</p>',
    'index.faq.q5':    'Q5：必要なサービスが分からない場合はどうすればいいですか？',
    'index.faq.a5':    '<p>大丈夫です。多くのクライアントは最初、具体的なサービスではなく目標だけを持っています。例えば：</p><ul><li>海外注文を増やしたい</li><li>特定の国の市場に参入したい</li><li>ブランドの露出を高めたい</li><li>エージェントや代理店ネットワークを広げたい</li></ul><p>GCアドバイザーが現状を分析し、最適な実行プランを設計します。</p>',
    'index.faq.q6':    'Q6：GCはどのようにサービスパートナーを選びますか？',
    'index.faq.a6':    '<p>GCはサービス能力・プロジェクト実績・業界背景・実行品質に基づいてパートナーを審査します。</p><p>すべてのクライアントが安定した専門的なサービスを受けられるよう、すべてのパートナーは評価・審査プロセスを経ています。</p>',
    'index.faq.q7':    'Q7：費用はどのように計算されますか？',
    'index.faq.a7':    '<p>サービス内容とプロジェクト規模によって異なります。</p><p>GCは契約前に完全な見積もりとサービス内容の説明を提供します。双方がニーズを確認してからプロジェクトを開始し、隠れた費用は一切ありません。</p>',
    'index.faq.q8':    'Q8：GCのパートナーになるにはどうすればいいですか？',
    'index.faq.a8':    '<p>GCは以下の方を歓迎します：</p><ul><li>専門サービスプロバイダー</li><li>ビジネスコンサルタント</li><li>事業開発パートナー</li><li>チャネル・業界リソースパートナー</li></ul><p>専門スキルや業界リソースをお持ちで、GCと共に市場を拡大したい方は、ぜひご連絡ください。</p>',

    'index.cta.label': 'Get Started Today',
    'index.cta.title': '信頼性が高く効率的な越境ソリューションをお探しですか？',
    'index.cta.sub':   '今すぐ診断フォームを記入してください。GCアドバイザーがあなたのブランドに最適なグローバル展開戦略を設計します。',
    'index.cta.btn':   '診断フォームを記入する',

    // ── gc-form.html ──
    'form.nav.back':        'サイトに戻る',
    'form.sidebar.title':   '診断の流れ',
    'form.s1.name': '会社・ブランド情報', 'form.s1.desc': '基本連絡先とブランド情報',
    'form.s2.name': '製品カテゴリと特性', 'form.s2.desc': '商品カテゴリと輸出先',
    'form.s3.name': '現状評価',           'form.s3.desc': '輸出経験と現状',
    'form.s4.name': 'ターゲット市場と条件','form.s4.desc': '市場・予算・目標',
    'form.s5.name': 'チャネルと詳細質問', 'form.s5.desc': '展開チャネルと詳細ニーズ',
    'form.s6.name': '確認と送信',         'form.s6.desc': '内容確認と送信',

    'form.step1.title': '会社・ブランド情報',
    'form.step1.desc':  '基本的な会社の連絡先とブランド情報を入力してください。GCアドバイザーが精確なサービス評価を提供するために使用します。',
    'form.step2.title': '製品カテゴリと商品特性',
    'form.step2.desc':  '製品カテゴリ、商品特性タグ、輸出予定国を選択して、商品の条件を教えてください。',
    'form.step3.title': '現状評価',
    'form.step3.desc':  '現在の輸出経験、製品SKU数、既存の販売価格についてお聞かせください。',
    'form.step4.title': 'ターゲット市場と販売条件',
    'form.step4.desc':  '参入したいターゲット市場を選択し、予算と売上目標に関する情報を提供してください。',
    'form.step5.title': 'チャネルと詳細質問',
    'form.step5.desc':  '希望する展開チャネルを選択してください。選択内容に応じた詳細質問が表示されます。',
    'form.step6.title': '確認と送信',
    'form.step6.desc':  '入力内容をご確認の上、プライバシー同意にチェックを入れて送信してください。',

    'form.lbl.referrer':      '紹介者（任意）',
    'form.lbl.source':        'GCのサービスをどこで知りましたか？',
    'form.lbl.source_other':  'ご説明ください',
    'form.lbl.company':       '会社名',
    'form.lbl.contact':       '担当者名',
    'form.lbl.jobtitle':      '役職',
    'form.lbl.email':         'メールアドレス',
    'form.lbl.other_contact': 'その他の連絡手段',
    'form.lbl.contact_acc':   'アカウント / 電話番号',
    'form.lbl.reg_country':   '会社登記国',
    'form.lbl.reg_other':     '登記国を記入してください',
    'form.lbl.brands':        'ブランド名（最大5つ）',
    'form.lbl.add_brand':     'ブランドを追加',
    'form.lbl.product_cat':   '製品カテゴリ（複数選択可）',
    'form.lbl.cat_other':     'その他カテゴリの説明',
    'form.lbl.product_tags':  '商品特性タグ（複数選択可）',
    'form.lbl.export_dest':   '輸出予定国・地域（複数選択可）',
    'form.lbl.product_desc':  '製品概要',
    'form.lbl.export_exp':    '輸出経験はありますか',
    'form.lbl.exp_countries': '過去の主要輸出先',
    'form.lbl.exp_products':  '過去の主力輸出製品',
    'form.lbl.exp_rev':       '過去の年間輸出売上',
    'form.lbl.exp_method':    '過去の輸出方法（複数選択可）',
    'form.lbl.sku':           '現在の製品SKU数',
    'form.lbl.price':         '製品の平均単価',
    'form.lbl.markets':       'ターゲット市場（複数選択可）',
    'form.lbl.market_other':  'その他の地域の説明',
    'form.lbl.distributor':   'ターゲット市場に既存の販売代理店・輸入業者はありますか',
    'form.lbl.opex':          '月間プロジェクト予算（マーケティング費用除く）',
    'form.lbl.mktg':          '月間マーケティング予算',
    'form.lbl.rev_target':    '月間売上目標',
    'form.lbl.sample':        'サンプル提供は可能ですか',
    'form.lbl.launch':        '開始予定時期',
    'form.lbl.channels':      '希望する展開チャネル（複数選択可）',
    'form.lbl.live_exp':      'ライブコマースの経験はありますか',
    'form.lbl.live_rep':      'ブランド代表者またはアシスタントの提供は可能ですか',
    'form.lbl.overseas_exp':  '海外展示会への出展経験はありますか',
    'form.lbl.overseas_ctry': '出展した国',
    'form.lbl.local_rep':     'ターゲット市場の現地語対応担当者はいますか',
    'form.lbl.ecom_exp':      'EC運営の経験はありますか',
    'form.lbl.ecom_plats':    '過去に運営したECプラットフォーム',
    'form.lbl.ecom_team':     '社内にEC運営チームはありますか',
    'form.lbl.ecom_cert':     'ターゲット市場の製品認証は取得済みですか',
    'form.lbl.retail_exp':    '実店舗チャネルの経験はありますか',
    'form.lbl.retail_ctry':   '参入した国',
    'form.lbl.retail_chan':   '過去に取引したチャネル',
    'form.lbl.retail_cert':   'ターゲット市場の製品認証は取得済みですか',
    'form.lbl.consign':       '委託販売（コンサイン）は受け入れ可能ですか',
    'form.lbl.consign_qty':   '提供可能な委託数量',
    'form.lbl.other_notes':   'その他補足事項（任意）',

    'form.ph.referrer':      '紹介者を選択または検索',
    'form.ph.source_other':  'GCを知ったきっかけを簡単にご記入ください',
    'form.ph.company':       '会社名を入力',
    'form.ph.contact':       '担当者名を入力',
    'form.ph.jobtitle':      '例：ブランドディレクター、営業マネージャー',
    'form.ph.contact_acc':   'アカウントまたは電話番号を入力',
    'form.ph.reg_other':     '会社登記国を記入してください',
    'form.ph.brand1':        'ブランド名 1',
    'form.ph.cat_other':     '製品カテゴリを説明してください',
    'form.ph.export_dest':   '例：日本、シンガポール、アメリカ',
    'form.ph.product_desc':  '主力製品とその特徴を簡単にご説明ください',
    'form.ph.exp_countries': '例：日本、シンガポール、マレーシア',
    'form.ph.exp_products':  '主要な輸出製品を説明してください',
    'form.ph.market_other':  'ターゲット地域を記入してください',
    'form.ph.overseas_ctry': '例：日本、タイ',
    'form.ph.ecom_plats':    '例：Shopee、Lazada、Amazon',
    'form.ph.retail_ctry':   '例：日本、シンガポール',
    'form.ph.retail_chan':   '例：ドン・キホーテ、ワトソンズ、LOFT',
    'form.ph.consign_qty':   '提供可能な委託数量を入力',
    'form.ph.other_notes':   'その他ご質問や補足事項があればご記入ください',

    'form.err.company':       '会社名を入力してください',
    'form.err.contact':       '担当者名を入力してください',
    'form.err.email':         '有効なメールアドレスを入力してください',
    'form.err.contact_acc':   'アカウントまたは電話番号を入力してください',
    'form.err.country':       '会社登記国を選択してください',
    'form.err.reg_other':     '登記国を記入してください',
    'form.err.cat':           '少なくとも1つの製品カテゴリを選択してください',
    'form.err.cat_other':     'カテゴリの説明を記入してください',
    'form.err.export_dest':   '少なくとも1つの輸出先を記入してください',
    'form.err.export_exp':    '輸出経験の有無を選択してください',
    'form.err.exp_countries': '輸出先の国を記入してください',
    'form.err.exp_products':  '主力製品を記入してください',
    'form.err.exp_rev':       '年間輸出売上を選択してください',
    'form.err.sku':           'SKU数を選択してください',
    'form.err.price':         '価格帯を選択してください',
    'form.err.markets':       '少なくとも1つのターゲット市場を選択してください',
    'form.err.market_other':  'ターゲット地域を記入してください',
    'form.err.distributor':   '代理店状況を選択してください',
    'form.err.opex':          '運営予算を選択してください',
    'form.err.mktg':          'マーケティング予算を選択してください',
    'form.err.rev_target':    '売上目標を選択してください',
    'form.err.sample':        'サンプル提供オプションを選択してください',
    'form.err.launch':        '開始予定時期を選択してください',
    'form.err.channel':       '少なくとも1つの展開チャネルを選択してください',
    'form.err.live_exp':      '選択してください',
    'form.err.live_rep':      '選択してください',
    'form.err.overseas_exp':  '選択してください',
    'form.err.overseas_ctry': '出展国を記入してください',
    'form.err.local_rep':     '選択してください',
    'form.err.ecom_exp':      '選択してください',
    'form.err.ecom_plats':    'プラットフォームを記入してください',
    'form.err.ecom_team':     '選択してください',
    'form.err.ecom_cert':     '選択してください',
    'form.err.retail_exp':    '選択してください',
    'form.err.retail_ctry':   '記入してください',
    'form.err.retail_chan':   '記入してください',
    'form.err.retail_cert':   '選択してください',
    'form.err.consign':       '選択してください',
    'form.err.consign_qty':   '委託数量を記入してください',
    'form.err.privacy':       'プライバシーポリシーへの同意にチェックを入れてください',
    'form.err.submit':        '送信に失敗しました。しばらくしてからもう一度お試しください。',

    'form.opt.yes':       'あり',
    'form.opt.no':        'なし',
    'form.opt.yes_yn':    'はい',
    'form.opt.no_yn':     'いいえ',
    'form.opt.can':       '提供可能',
    'form.opt.cannot':    '提供不可',

    'form.cat.food_health': '食品・健康',
    'form.cat.beauty_life': '美容・ライフスタイル',
    'form.cat.tech':        'テクノロジー・特殊商品',

    'form.region.greater_china': '大中華圏',
    'form.region.ne_asia':       '東北アジア',
    'form.region.se_asia':       '東南アジア',
    'form.region.west':          'アメリカ・欧州・オセアニア',
    'form.region.other':         'その他',

    'form.ch.live.title':      'ライブコマース',
    'form.ch.live.desc':       'KOL・配信者・ライブイベントを通じた販売',
    'form.ch.overseas.title':  '海外販路開拓',
    'form.ch.overseas.desc':   'エージェント・代理店・卸売業者・バイヤーの開拓',
    'form.ch.ecom.title':      '越境EC',
    'form.ch.ecom.desc':       '海外ECプラットフォームへの出品と運営支援',
    'form.ch.retail.title':    '実店舗チャネル',
    'form.ch.retail.desc':     'スーパー・ドラッグストア・セレクトショップ・百貨店など',
    'form.ch.undecided.title': '未定 — プラットフォームに評価を依頼',
    'form.ch.undecided.desc':  '商品条件に基づいて適切なチャネルを提案します',
    'form.ch.live.adv':        'ライブコマース — 詳細質問',
    'form.ch.overseas.adv':    '海外販路開拓 — 詳細質問',
    'form.ch.ecom.adv':        '越境EC — 詳細質問',
    'form.ch.retail.adv':      '実店舗チャネル — 詳細質問',

    'form.btn.prev':       '前へ',
    'form.btn.next':       '次へ',
    'form.btn.submit':     'GCアドバイザーに送信',
    'form.btn.submitting': '送信中…',
    'form.submitting':     '診断フォームを送信中...',

    'form.sum.basic':    '基本情報',
    'form.sum.product':  '製品カテゴリと商品特性',
    'form.sum.current':  '現状評価',
    'form.sum.market':   'ターゲット市場と販売条件',
    'form.sum.channels': 'チャネルと詳細質問',
    'form.sum.k.referrer':      '紹介者',
    'form.sum.k.source':        '認知経路',
    'form.sum.k.company':       '会社名',
    'form.sum.k.contact':       '担当者',
    'form.sum.k.jobtitle':      '役職',
    'form.sum.k.email':         'メール',
    'form.sum.k.other_contact': 'その他連絡',
    'form.sum.k.reg_country':   '登記国',
    'form.sum.k.brands':        'ブランド名',
    'form.sum.k.cats':          '製品カテゴリ',
    'form.sum.k.cat_other':     'カテゴリ補足',
    'form.sum.k.tags':          '商品特性',
    'form.sum.k.exports':       '輸出先',
    'form.sum.k.product_desc':  '製品概要',
    'form.sum.k.exp':           '輸出経験',
    'form.sum.k.exp_countries': '過去の輸出先',
    'form.sum.k.exp_products':  '過去の主力製品',
    'form.sum.k.exp_rev':       '年間輸出売上',
    'form.sum.k.exp_methods':   '輸出方法',
    'form.sum.k.sku':           'SKU数',
    'form.sum.k.price':         '平均単価',
    'form.sum.k.markets':       'ターゲット市場',
    'form.sum.k.distributor':   '既存代理店',
    'form.sum.k.opex':          '月間プロジェクト予算',
    'form.sum.k.mktg':          '月間マーケティング予算',
    'form.sum.k.rev':           '売上目標',
    'form.sum.k.sample':        'サンプル提供',
    'form.sum.k.launch':        '開始予定',
    'form.sum.k.channels':      '展開チャネル',
    'form.sum.k.live_exp':      'ライブコマース経験',
    'form.sum.k.live_rep':      'ブランド代表（ライブ）',
    'form.sum.k.overseas_exp':  '展示会経験',
    'form.sum.k.overseas_ctry': '出展国',
    'form.sum.k.local_rep':     '現地語担当者',
    'form.sum.k.ecom_exp':      'EC経験',
    'form.sum.k.ecom_plats':    '利用プラットフォーム',
    'form.sum.k.ecom_team':     '社内ECチーム',
    'form.sum.k.ecom_cert':     'EC認証',
    'form.sum.k.retail_exp':    '実店舗経験',
    'form.sum.k.retail_ctry':   '実店舗参入国',
    'form.sum.k.retail_chan':   'チャネル種別',
    'form.sum.k.retail_cert':   '実店舗認証',
    'form.sum.k.consign':       '委託販売',
    'form.sum.k.consign_qty':   '委託数量',
    'form.sum.k.other_notes':   'その他補足',

        'stat.days.unit': '日',
    'form.err.other_contact': 'アカウントまたは番号を入力してください',
    'form.err.country_other': '登記地の詳細を記入してください',
    'form.err.brand': 'ブランド名を1つ以上入力してください',
    'form.err.export': '輸出国を1つ以上選択してください',
    'form.err.export_other': '輸出国の説明を入力してください',
    'form.err.ecom_platforms': 'ECプラットフォームを入力してください',
    'form.err.retail_countries': '入力してください',
    'form.err.retail_channels': '入力してください',
    'form.cat.item.1.name': '食品・飲料（常温）',
    'form.cat.item.2.name': '食品・飲料（冷蔵）',
    'form.cat.item.3.name': '食品・飲料（冷凍）',
    'form.cat.item.4.name': '健康食品・サプリメント',
    'form.cat.item.5.name': '母子用品',
    'form.cat.item.6.name': 'ペット用品',
    'form.cat.item.7.name': '化粧品・美容',
    'form.cat.item.8.name': 'アパレル・アクセサリー',
    'form.cat.item.9.name': 'ホーム・生活用品',
    'form.cat.item.10.name': 'スポーツ・アウトドア用品',
    'form.cat.item.11.name': 'おもちゃ・子供用品',
    'form.cat.item.12.name': '書籍・文具・教育',
    'form.cat.item.13.name': '電子機器・3C製品',
    'form.cat.item.14.name': '自動車・工具・ハードウェア',
    'form.cat.item.15.name': '割れ物・高額商品',
    'form.cat.item.16.name': 'デジタルコンテンツ・仮想商品',
    'form.cat.item.17.name': 'その他のカテゴリ',
    'form.cat.item.1.sub': '一般食品・スナック・飲料',
    'form.cat.item.2.sub': '低温配送・保存が必要',
    'form.cat.item.3.sub': '冷凍チェーン・温度管理が必要',
    'form.cat.item.4.sub': 'ビタミン・機能性食品',
    'form.cat.item.5.sub': '哺乳瓶・乳幼児用品',
    'form.cat.item.6.sub': 'ペットフード・健康サプリ',
    'form.cat.item.7.sub': 'スキンケア・メイク・パーソナルケア',
    'form.cat.item.8.sub': '衣類・バッグ・ジュエリー',
    'form.cat.item.9.sub': '家具・調理器具・清潔用品',
    'form.cat.item.10.sub': 'フィットネス器具・キャンプ用品',
    'form.cat.item.11.sub': 'おもちゃ・模型・フィギュア',
    'form.cat.item.12.sub': '書籍・文具・教材',
    'form.cat.item.13.sub': '家電・周辺機器',
    'form.cat.item.14.sub': '車用アクセサリー・工具',
    'form.cat.item.15.sub': 'ガラス・陶磁器・ブランド品',
    'form.cat.item.16.sub': 'チケット・コース・シリアルキー',
    'form.cat.item.17.sub': '選択後に説明を記入してください',
        'form.ph.referral_select': '紹介者を選択',
    'form.chip.mobile': '携帯番号',
    'form.chip.source.friend': '友人・同業者の紹介',
    'form.chip.source.google': 'Google検索',
    'form.chip.source.event': '展示会・イベント会場',
    'form.chip.source.other': 'その他',
    'form.chip.country.tw': '台湾',
    'form.chip.country.cn': '中国',
    'form.chip.country.hk': '香港',
    'form.chip.country.sg': 'シンガポール',
    'form.chip.country.my': 'マレーシア',
    'form.chip.country.jp': '日本',
    'form.chip.country.other': 'その他',
    'form.privacy': '私はGCの<a href="privacy.html" target="_blank" rel="noopener">プライバシーポリシー</a>に基づき、提供した会社情報および連絡先情報が、越境サービスのニーズ評価・アドバイザーとの連絡・サービスマッチングの目的で収集・処理・利用されることを読み、同意します。',
  }
};

/* ══════════════════════════════════════════
   Core engine
══════════════════════════════════════════ */

/* 語言來源優先序：網址 ?lang= → localStorage → 預設繁中。
   網址參數優先，是為了讓「寄一個日文版連結給客戶」真的有效 ——
   對方即使先前看過中文版（localStorage 已存 zh），打開連結仍會看到日文。
   搜尋引擎也才有各語言各自的網址可以索引。 */
const GC_LANGS = ['zh','en','ja'];
function gcLangFromUrl(){
  try{
    const v = new URLSearchParams(location.search).get('lang');
    return (v && GC_LANGS.indexOf(v) >= 0) ? v : null;
  }catch(e){ return null; }
}
let GC_LANG = gcLangFromUrl() || localStorage.getItem('gc_lang') || 'zh';

function gcApplyLang(lang) {
  GC_LANG = lang;
  localStorage.setItem('gc_lang', lang);
  const t = GC_I18N[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Inner HTML (supports <br> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Page title
  const pageKey = document.documentElement.getAttribute('data-page');
  if (pageKey && t['page.title.' + pageKey]) {
    document.title = t['page.title.' + pageKey];
  }

  // html lang attribute
  const langMap = { zh: 'zh-TW', en: 'en', ja: 'ja' };
  document.documentElement.lang = langMap[lang] || lang;

  // canonical / og:url / og:locale 跟著目前語言走，
  // 讓每個語言版本都自我指向正確的網址（避免被判為重複內容）
  try{
    const path = location.pathname.replace(/index\.html$/, '');
    const selfUrl = location.origin + path + (lang === 'zh' ? '' : '?lang=' + lang);
    const c = document.querySelector('link[rel="canonical"]');
    if (c) c.href = selfUrl;
    const ou = document.querySelector('meta[property="og:url"]');
    if (ou) ou.setAttribute('content', selfUrl);
    const ol = document.querySelector('meta[property="og:locale"]');
    if (ol) ol.setAttribute('content', ({ zh:'zh_TW', en:'en_US', ja:'ja_JP' })[lang] || 'zh_TW');
  }catch(e){}

  // Update switcher label
  const labelEl = document.getElementById('gcLangLabel');
  const labelMap = { zh: '繁中', en: 'EN', ja: '日本語' }; // button label (short)
  if (labelEl) labelEl.textContent = labelMap[lang] || lang;

  // Update active check in dropdown
  document.querySelectorAll('.gc-lang-option').forEach(opt => {
    const active = opt.getAttribute('data-lang') === lang;
    opt.classList.toggle('gc-lang-active', active);
    const chk = opt.querySelector('.gc-lang-check');
    if (chk) chk.style.display = active ? '' : 'none';
  });

  // Re-render partner carousel if on index page
  if (typeof render === 'function') render();
}

function gcToggleLangMenu() {
  const dd   = document.getElementById('gcLangDropdown');
  const btn  = document.getElementById('gcLangBtn');
  const chev = document.getElementById('gcLangChev');
  if (!dd) return;
  const open = dd.classList.toggle('gc-open');
  btn.classList.toggle('gc-btn-active', open);
  chev.classList.toggle('gc-chev-open', open);
}

function gcSetLang(lang) {
  gcApplyLang(lang);
  // 更新網址，讓目前語言可以直接複製分享。
  // 切回繁中時移除參數，避免 base 與 ?lang=zh 兩個網址內容相同（重複內容）。
  try{
    const u = new URL(location.href);
    if (lang === 'zh') u.searchParams.delete('lang');
    else u.searchParams.set('lang', lang);
    history.replaceState(null, '', u.pathname + (u.search || '') + (u.hash || ''));
  }catch(e){}
  // Desktop dropdown
  const dd   = document.getElementById('gcLangDropdown');
  const btn  = document.getElementById('gcLangBtn');
  const chev = document.getElementById('gcLangChev');
  if (dd)   dd.classList.remove('gc-open');
  if (btn)  btn.classList.remove('gc-btn-active');
  if (chev) chev.classList.remove('gc-chev-open');
  // Notify other scripts (e.g. partner card re-render)
  document.dispatchEvent(new CustomEvent('gc:langchange', { detail: { lang } }));
}

// Close dropdown on outside click
document.addEventListener('click', function(e) {
  const sw = document.getElementById('gcLangSwitcher');
  if (sw && !sw.contains(e.target)) {
    const dd   = document.getElementById('gcLangDropdown');
    const btn  = document.getElementById('gcLangBtn');
    const chev = document.getElementById('gcLangChev');
    if (dd)   dd.classList.remove('gc-open');
    if (btn)  btn.classList.remove('gc-btn-active');
    if (chev) chev.classList.remove('gc-chev-open');
  }
});

// Init
document.addEventListener('DOMContentLoaded', function() {
  gcApplyLang(GC_LANG);
});


/* ══════════════════════════════════════════════════════════════════
   iOS 表單欄位聚焦時的自動縮放抑制
   ------------------------------------------------------------------
   iOS Safari 在「聚焦的欄位字級 < 16px」時會自動放大整個頁面,且離開
   欄位後不會縮回。常見解法是把 viewport 常駐寫上 maximum-scale=1,
   但那會連使用者「主動」的雙擊/雙指縮放也一起擋掉(Android 尤其嚴重)。

   這裡改成「只在聚焦欄位的那一瞬間」暫時套用 maximum-scale=1,
   離開欄位立刻還原 —— 自動縮放被擋掉,主動縮放完全不受影響。
   並且只在 iOS 執行,Android 與桌機不會碰到 viewport。
   ══════════════════════════════════════════════════════════════════ */
(function () {
  // iPadOS 13+ 會把 platform 報成 MacIntel,需靠 maxTouchPoints 區分真 Mac 與 iPad
  var plat  = navigator.platform || '';
  var isIOS = /iPad|iPhone|iPod/.test(plat) ||
              (plat === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!isIOS) return;

  var vp = document.querySelector('meta[name="viewport"]');
  if (!vp) return;

  var original = vp.getAttribute('content') || 'width=device-width, initial-scale=1.0';
  var locked   = original.replace(/,?\s*maximum-scale\s*=\s*[^,]*/gi, '').trim() + ', maximum-scale=1';

  // 這些 input 類型不會觸發縮放,不需要處理
  var SKIP = { checkbox:1, radio:1, button:1, submit:1, reset:1, file:1, range:1, color:1, hidden:1, image:1 };

  function needsGuard(el) {
    if (!el || !el.tagName) return false;
    var tag = el.tagName.toUpperCase();
    if (tag === 'TEXTAREA' || tag === 'SELECT') return true;
    if (tag === 'INPUT') return !SKIP[(el.type || 'text').toLowerCase()];
    return el.isContentEditable === true;
  }

  function lock(e)  { if (needsGuard(e.target)) vp.setAttribute('content', locked); }

  function unlock(e) {
    if (!needsGuard(e.target)) return;
    // 延遲還原:欄位之間切換時不要來回改寫 viewport
    setTimeout(function () {
      if (!needsGuard(document.activeElement)) vp.setAttribute('content', original);
    }, 100);
  }

  // touchstart 早於 focus 觸發,先鎖住才來得及擋掉 Safari 的縮放判斷
  document.addEventListener('touchstart', lock,   true);
  document.addEventListener('focusin',    lock,   true);
  document.addEventListener('focusout',   unlock, true);
})();


/* ══════════════════════════════════════════════════════════════════
   GA4 事件追蹤 — 跨頁共用層
   ------------------------------------------------------------------
   提供 window.gcTrack(事件名, 參數) 給五個頁面共用,並直接處理
   導覽列、CTA、下拉選單、語系切換這四類跨頁事件。

   兩個原則:
   1. 絕不傳送個資。參數只能放選項式的答案,不放姓名/信箱/公司名/
      自由輸入的文字(違反 GA4 服務條款,可能導致帳戶被停用)。
   2. 追蹤失敗絕不能影響網站功能,所有呼叫都包在 try 裡。
   ══════════════════════════════════════════════════════════════════ */
(function () {
  var MAX_LEN = 100;   // GA4 參數值上限 100 字元,超過會被截斷

  function clean(v) {
    if (v === undefined || v === null || v === '') return undefined;
    if (typeof v === 'number' || typeof v === 'boolean') return v;
    if (Array.isArray(v)) v = v.join(', ');
    v = String(v).trim();
    if (!v) return undefined;
    return v.length > MAX_LEN ? v.slice(0, MAX_LEN) : v;
  }

  window.gcTrack = function (name, params) {
    if (typeof gtag !== 'function' || !name) return;
    try {
      var out = {};
      if (params) {
        for (var k in params) {
          if (!Object.prototype.hasOwnProperty.call(params, k)) continue;
          var v = clean(params[k]);
          if (v !== undefined) out[k] = v;
        }
      }
      out.page_lang = (typeof GC_LANG !== 'undefined' ? GC_LANG : 'zh');
      gtag('event', name, out);
    } catch (e) { /* 靜默失敗 */ }
  };

  function deviceType() {
    return window.matchMedia('(max-width:900px)').matches ? 'mobile' : 'desktop';
  }
  window.gcDeviceType = deviceType;

  // 用 data-i18n 的鍵當識別字,這樣切語系不會產生不同的事件值
  function labelOf(el) {
    if (!el) return undefined;
    var k = el.getAttribute && el.getAttribute('data-i18n');
    if (k) return k;
    var inner = el.querySelector && el.querySelector('[data-i18n]');
    if (inner) return inner.getAttribute('data-i18n');
    return ((el.textContent || '').trim().slice(0, 40)) || undefined;
  }

  /* ── 導覽列點擊 + CTA 點擊 ───────────────────────────── */
  document.addEventListener('click', function (e) {
    if (!e.target || !e.target.closest) return;
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';

    if (a.closest('.nav-links, .nav-mobile-menu, .nav-dd-panel, .m-acc-panel')) {
      gcTrack('nav_click', {
        nav_item:  labelOf(a),
        nav_href:  href,
        nav_level: a.closest('.nav-dd-panel, .m-acc-panel') ? 'dropdown' : 'top',
        device:    deviceType()
      });
      return;   // 導覽列連結不重複記成 CTA
    }

    var m = href.match(/(gc-form|catalog|partner)\.html/);
    if (m) {
      var sec = a.closest('section[id]');
      gcTrack('cta_click', {
        cta_target:   m[1],
        cta_location: a.closest('footer') ? 'footer' : (sec ? sec.id : 'other'),
        cta_text:     labelOf(a),
        device:       deviceType()
      });
    }
  }, true);

  /* ── 「關於 GC」下拉開啟 ──────────────────────────────── */
  var lastDd = 0;
  function ddOpen(method) {
    var now = new Date().getTime();
    if (now - lastDd < 1500) return;   // 節流:滑鼠來回移動不重複計次
    lastDd = now;
    gcTrack('nav_dropdown_open', { method: method, device: deviceType() });
  }

  function bindNav() {
    var dd  = document.getElementById('navAboutDd');
    var btn = document.getElementById('navAboutBtn');
    if (dd)  dd.addEventListener('mouseenter', function () { ddOpen('hover'); });
    if (btn) btn.addEventListener('click',     function () { ddOpen('click'); });

    var acc = document.getElementById('mAccBtn');
    if (acc) acc.addEventListener('click', function () {
      // 只在展開時送,收合不送
      setTimeout(function () {
        var panel = document.getElementById('mAccPanel');
        if (panel && panel.classList.contains('open')) ddOpen('accordion');
      }, 0);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindNav);
  } else {
    bindNav();
  }

  /* ── 語系切換 ─────────────────────────────────────────── */
  var prevLang = (typeof GC_LANG !== 'undefined' ? GC_LANG : 'zh');
  document.addEventListener('gc:langchange', function (e) {
    var to = (e.detail && e.detail.lang) || prevLang;
    if (to === prevLang) return;   // 頁面初次套用語系時不算切換
    gcTrack('language_switch', { from_lang: prevLang, to_lang: to });
    prevLang = to;
  });
})();
