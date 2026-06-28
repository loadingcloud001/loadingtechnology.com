import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { ContactForm } from '@/components/forms/ContactForm'

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
          想了解更多產品方案或預約現場示範,請填寫以下表單,業務團隊會在一個工作天內回覆您。
        </p>

        <ContactForm />

        <div className="mt-12 pt-8 border-t border-ink-100">
          <h3 className="text-sm font-semibold mb-3 text-ink-900">其他聯絡方式</h3>
          <ul className="space-y-2 text-sm text-ink-500">
            <li>
              Email:{' '}
              <a href="mailto:sales@loadingtechnology.com" className="text-brand-600 hover:underline">
                sales@loadingtechnology.com
              </a>
            </li>
            <li>地區:香港 (Hong Kong)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}