// 簡化版 i18n:支援 zh-HK / en 切換
// 之後可升級為 next-intl + [locale] route group 做 SEO 友好 i18n

export type Locale = 'zh-HK' | 'en'

export const locales: Locale[] = ['zh-HK', 'en']
export const defaultLocale: Locale = 'zh-HK'

type Dictionary = Record<string, string>

const zh: Dictionary = {
  // Header
  'nav.home': '首頁',
  'nav.solutions': '方案',
  'nav.products': '產品',
  'nav.case-studies': '案例',
  'nav.about': '關於我們',
  'nav.contact': '聯絡',
  'nav.book-demo': '預約示範',

  // Home
  'home.hero.badge': '天・人・地・雲 工地智能化方案',
  'home.hero.title': 'Loading Technology',
  'home.hero.desc': '從空中 CCTV 到地面感測,從工人穿戴到雲端平台 —— 一個系統,守護整個工地。',
  'home.hero.cta-products': '查看產品方案',
  'home.hero.cta-demo': '預約現場示範',
  'home.pillars.title': '四大支柱,一個平台',
  'home.pillars.desc': '天・人・地・雲 —— 從空中到地下,從裝置到雲端,無縫整合。',
  'home.cta.title': '準備好升級你的工地?',
  'home.cta.desc': '聯絡我們的業務團隊,預約一次免費的現場評估。',
  'home.cta.button': '預約示範',

  // Products
  'products.title': '產品',
  'products.desc': '從前端感測器到後端平台,Loading Technology 提供完整的工地智能化產品線。',
  'products.empty': '產品目錄準備中。',
  'products.empty-hint': '請於 {folder} 加入 .md 檔案。',
  'products.cta': '聯絡業務',

  // Solutions
  'solutions.title': '方案',
  'solutions.desc': '針對不同工地場景,我們提供四大整合方案。',
  'solutions.empty': '方案內容準備中。',
  'solutions.learn-more': '了解更多 →',

  // Cases
  'cases.title': '客戶案例',
  'cases.desc': '從建築工地到基礎設施案場,看看 Loading Technology 如何實際落地。',
  'cases.empty': '案例內容準備中。',

  // About
  'about.title': '關於 Loading Technology',
  'about.hero': '我們相信工地安全不應該依賴運氣。',
  'about.body': 'Loading Technology 成立於香港,專注於工地智能化方案。透過天(空中監控)、人(工人穿戴)、地(環境感測)、雲(統一平台)四大支柱,提供從前端裝置到後端管理的完整方案。',
  'about.mission-title': '我們的使命',
  'about.mission': '讓每一個工地都能即時掌握狀況,讓每一個工人都能平安回家。',
  'about.contact-title': '聯絡我們',
  'about.contact': '業務查詢',

  // Contact
  'contact.title': '聯絡我們',
  'contact.desc': '想了解更多產品方案或預約現場示範,請填寫以下表單,業務團隊會在一個工作天內回覆您。',

  // Common
  'common.back': '回到',
  'common.search-placeholder': '搜尋產品、方案、案例...',
  'common.no-results': '找不到結果',
  'common.theme-toggle-light': '切換到深色模式',
  'common.theme-toggle-dark': '切換到淺色模式',

  // Form
  'form.name': '姓名',
  'form.company': '公司名稱',
  'form.email': 'Email',
  'form.phone': '聯絡電話',
  'form.interest': '查詢類別',
  'form.message': '需求描述',
  'form.required': ' *',
  'form.submit': '送出查詢',
  'form.submitting': '送出中...',
  'form.success': '已收到您的查詢',
  'form.success-desc': '我們的業務團隊會在一個工作天內回覆您。',
  'form.privacy': '送出即代表您同意我們使用以上資訊聯絡您。我們不會將您的資料分享給第三方。',
}

const en: Dictionary = {
  'nav.home': 'Home',
  'nav.solutions': 'Solutions',
  'nav.products': 'Products',
  'nav.case-studies': 'Cases',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.book-demo': 'Book Demo',

  'home.hero.badge': 'Sky · Human · Ground · Cloud — Construction Intelligence',
  'home.hero.title': 'Loading Technology',
  'home.hero.desc': 'From aerial CCTV to ground sensors, from worker wearables to cloud platform — one system to safeguard your entire construction site.',
  'home.hero.cta-products': 'View Products',
  'home.hero.cta-demo': 'Book Site Demo',
  'home.pillars.title': 'Four Pillars, One Platform',
  'home.pillars.desc': 'Sky · Human · Ground · Cloud — seamlessly integrated from air to underground, devices to cloud.',
  'home.cta.title': 'Ready to upgrade your construction site?',
  'home.cta.desc': 'Contact our sales team to schedule a free on-site assessment.',
  'home.cta.button': 'Book Demo',

  'products.title': 'Products',
  'products.desc': 'Loading Technology offers a complete product line for construction site intelligence.',
  'products.empty': 'Product catalog coming soon.',
  'products.empty-hint': 'Please add .md files under {folder}.',
  'products.cta': 'Contact Sales',

  'solutions.title': 'Solutions',
  'solutions.desc': 'Four integrated solutions for different construction site scenarios.',
  'solutions.empty': 'Solutions coming soon.',
  'solutions.learn-more': 'Learn more →',

  'cases.title': 'Case Studies',
  'cases.desc': 'See how Loading Technology delivers across construction site scenarios.',
  'cases.empty': 'Case studies coming soon.',

  'about.title': 'About Loading Technology',
  'about.hero': 'We believe construction safety should not rely on luck.',
  'about.body': 'Loading Technology, headquartered in Hong Kong, specializes in construction site intelligence. Through our four pillars — Sky (aerial monitoring), Human (worker wearables), Ground (environmental sensors), Cloud (unified platform) — we provide end-to-end solutions from devices to backend management.',
  'about.mission-title': 'Our Mission',
  'about.mission': 'Empower every site with real-time visibility, so every worker goes home safe.',
  'about.contact-title': 'Contact Us',
  'about.contact': 'Sales Inquiries',

  'contact.title': 'Contact Us',
  'contact.desc': 'Want to learn more or book a site demo? Fill out the form below and our sales team will reply within one business day.',

  'common.back': 'Back to',
  'common.search-placeholder': 'Search products, solutions, cases...',
  'common.no-results': 'No results found',
  'common.theme-toggle-light': 'Switch to dark mode',
  'common.theme-toggle-dark': 'Switch to light mode',

  'form.name': 'Name',
  'form.company': 'Company',
  'form.email': 'Email',
  'form.phone': 'Phone',
  'form.interest': 'Interest',
  'form.message': 'Message',
  'form.required': ' *',
  'form.submit': 'Send Inquiry',
  'form.submitting': 'Sending...',
  'form.success': 'Inquiry received',
  'form.success-desc': 'Our sales team will reply within one business day.',
  'form.privacy': 'By submitting, you agree to be contacted using the information above. We never share your data with third parties.',
}

const dictionaries: Record<Locale, Dictionary> = {
  'zh-HK': zh,
  en,
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}

export function t(locale: Locale, key: string, vars?: Record<string, string>): string {
  const dict = getDictionary(locale)
  let str = dict[key] ?? key
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, v)
    }
  }
  return str
}