import Link from 'next/link'
import { siteConfig } from '@/lib/seo'
import { ThemeToggle } from '@/components/theme/ThemeProvider'
import { Search } from '@/components/search/Search'
import { LocaleSwitcher } from '@/components/i18n/LocaleProvider'
import { getProducts, getSolutions, getCaseStudies } from '@/lib/content'

const NAV_ITEMS = [
  { href: '/', label: '首頁' },
  { href: '/solutions', label: '方案' },
  { href: '/products', label: '產品' },
  { href: '/case-studies', label: '案例' },
  { href: '/about', label: '關於我們' },
  { href: '/contact', label: '聯絡' },
]

function buildSearchItems() {
  const items: Array<{ slug: string; title: string; description: string; category: string; href: string }> = []

  for (const p of getProducts()) {
    items.push({
      slug: p.slug,
      title: p.title,
      description: p.description,
      category: '產品',
      href: `/products/${p.slug}`,
    })
  }
  for (const s of getSolutions()) {
    items.push({
      slug: s.slug,
      title: s.title,
      description: s.description,
      category: '方案',
      href: `/solutions/${s.slug}`,
    })
  }
  for (const c of getCaseStudies()) {
    items.push({
      slug: c.slug,
      title: c.title,
      description: c.description,
      category: '案例',
      href: `/case-studies/${c.slug}`,
    })
  }
  return items
}

export function Header() {
  const searchItems = buildSearchItems()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink-100 dark:border-ink-200 bg-white/80 dark:bg-ink-950/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
          <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-sky-500" />
          <span className="hidden sm:inline">Loading Technology</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 dark:text-ink-700 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 flex-1 justify-end">
          <div className="hidden md:block">
            <Search items={searchItems} />
          </div>
          <LocaleSwitcher />
          <ThemeToggle />
          <Link href="/contact" className="btn-primary text-sm py-2 px-4 hidden md:inline-flex">
            預約示範
          </Link>
          <Link href="/contact" className="md:hidden text-sm font-medium text-brand-600">
            聯絡
          </Link>
        </div>
      </div>
    </header>
  )
}