import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: '聯絡我們',
  description: '聯絡 Loading Technology 業務團隊。',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <section className="section-spacing">
      <div className="container-page max-w-2xl">
        <h1 className="mb-4">聯絡我們</h1>
        <p className="text-ink-500 mb-12">
          想了解更多產品方案或預約現場示範,請透過以下方式聯絡我們。
        </p>

        <div className="card">
          <h2 className="text-lg font-bold mb-4">業務查詢</h2>
          <ul className="space-y-3 text-ink-700">
            <li>
              <span className="text-ink-500 text-sm">Email</span>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="text-ink-500 text-sm">地區</span>
              <br />
              香港 (Hong Kong)
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-card bg-ink-50 text-sm text-ink-500">
          <p>
            <strong>Phase 0:</strong> 聯絡表單功能即將上線。Phase 1 將整合線上預約系統,
            可即時挑選示範時段。
          </p>
        </div>
      </div>
    </section>
  )
}