import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50 mt-auto">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-sky-500" />
              <span>{siteConfig.name}</span>
            </div>
            <p className="text-sm text-ink-500 max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-ink-900">產品</h4>
            <ul className="space-y-2 text-sm text-ink-500">
              <li><Link href="/products" className="hover:text-brand-600">所有產品</Link></li>
              <li><Link href="/solutions" className="hover:text-brand-600">方案介紹</Link></li>
              <li><Link href="/case-studies" className="hover:text-brand-600">客戶案例</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-ink-900">公司</h4>
            <ul className="space-y-2 text-sm text-ink-500">
              <li><Link href="/about" className="hover:text-brand-600">關於我們</Link></li>
              <li><Link href="/contact" className="hover:text-brand-600">聯絡業務</Link></li>
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-brand-600">{siteConfig.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-200 flex flex-col md:flex-row justify-between gap-4 text-xs text-ink-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>天・人・地・雲 工地智能化方案</p>
        </div>
      </div>
    </footer>
  )
}