import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getSolutions } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: '方案',
  description: '天・人・地・雲 四大方案。從空中到地下,完整的工地智能化方案。',
  path: '/solutions',
})

export default function SolutionsPage() {
  const solutions = getSolutions()

  return (
    <section className="section-spacing">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="mb-4">方案</h1>
          <p className="text-ink-500">
            針對不同工地場景,我們提供四大整合方案。
          </p>
        </div>

        {solutions.length === 0 ? (
          <div className="text-center py-16 text-ink-500">
            <p>方案內容準備中。</p>
            <p className="text-sm mt-2">
              請於 <code className="px-2 py-1 bg-ink-100 rounded">content/solutions/</code> 加入 .md 檔案。
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map(s => (
              <div key={s.slug} className="card">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-ink-500 mb-4">{s.description}</p>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="text-sm font-medium text-brand-600 hover:underline"
                >
                  了解更多 →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}