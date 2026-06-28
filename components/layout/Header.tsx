import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

const NAV_ITEMS = [
  { href: '/', label: '首頁' },
  { href: '/solutions', label: '方案' },
  { href: '/products', label: '產品' },
  { href: '/case-studies', label: '案例' },
  { href: '/about', label: '關於我們' },
  { href: '/contact', label: '聯絡' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink-100 bg-white/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-sky-500" />
          <span>Loading Technology</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary text-sm py-2 px-4 hidden md:inline-flex">
          預約示範
        </Link>

        {/* Mobile menu placeholder */}
        <Link href="/contact" className="md:hidden text-sm font-medium text-brand-600">
          聯絡
        </Link>
      </div>
    </header>
  )
}