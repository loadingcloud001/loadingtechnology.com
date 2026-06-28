import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getCaseStudies } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: '客戶案例',
  description: '看看 Loading Technology 如何在不同工地場景落地。',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  const cases = getCaseStudies()

  return (
    <section className="section-spacing">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="mb-4">客戶案例</h1>
          <p className="text-ink-500">
            從建築工地到基礎設施案場,看看 Loading Technology 如何實際落地。
          </p>
        </div>

        {cases.length === 0 ? (
          <div className="text-center py-16 text-ink-500">
            <p>案例內容準備中。</p>
            <p className="text-sm mt-2">
              請於 <code className="px-2 py-1 bg-ink-100 rounded">content/case-studies/</code> 加入 .md 檔案。
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map(c => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="card">
                <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-ink-500">{c.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}