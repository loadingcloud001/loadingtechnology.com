import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getProducts } from '@/lib/content'

export const metadata: Metadata = buildMetadata({
  title: '產品',
  description: 'Loading Technology 完整產品線 — 智能頭盔、CCTV、氣體偵測、CMP 平台。',
  path: '/products',
})

const CATEGORY_LABELS = {
  sky: { label: '天', color: 'bg-sky-50 text-sky-600' },
  human: { label: '人', color: 'bg-human-400/10 text-human-600' },
  ground: { label: '地', color: 'bg-ground-700/10 text-ground-700' },
  cloud: { label: '雲', color: 'bg-brand-50 text-brand-600' },
} as const

export default function ProductsPage() {
  const products = getProducts()

  return (
    <section className="section-spacing">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="mb-4">產品</h1>
          <p className="text-ink-500">
            從前端感測器到後端平台,Loading Technology 提供完整的工地智能化產品線。
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16 text-ink-500">
            <p>產品目錄準備中。</p>
            <p className="text-sm mt-2">
              請於 <code className="px-2 py-1 bg-ink-100 rounded">content/products/</code> 加入 .md 檔案。
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map(p => {
              const cat = CATEGORY_LABELS[p.category]
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="card group"
                >
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-3 ${cat.color}`}>
                    {cat.label}
                  </span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-500">{p.description}</p>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}