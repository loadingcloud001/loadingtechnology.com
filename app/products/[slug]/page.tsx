import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getProducts, getProductBySlug } from '@/lib/content'
import { JsonLd } from '@/components/seo/JsonLd'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getProducts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return buildMetadata({ title: '找不到產品' })

  return buildMetadata({
    title: product.title,
    description: product.description,
    path: `/products/${product.slug}`,
    image: product.image,
  })
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.image,
    brand: { '@type': 'Brand', name: 'Loading Technology' },
    category: product.category,
  }

  return (
    <article className="section-spacing">
      <div className="container-page max-w-3xl">
        <Link href="/products" className="text-sm text-brand-600 hover:underline mb-6 inline-block">
          ← 回到產品列表
        </Link>

        <header className="mb-12">
          <p className="text-sm font-medium text-brand-600 mb-2">
            {product.category === 'sky' && '天 Sky'}
            {product.category === 'human' && '人 Human'}
            {product.category === 'ground' && '地 Ground'}
            {product.category === 'cloud' && '雲 CMP Platform'}
          </p>
          <h1 className="mb-4">{product.title}</h1>
          <p className="text-xl text-ink-500">{product.description}</p>
        </header>

        <div className="prose prose-lg max-w-none">
          {product.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) return <h2 key={i} className="mt-8 mb-4">{line.slice(2)}</h2>
            if (line.startsWith('## ')) return <h3 key={i} className="mt-6 mb-3">{line.slice(3)}</h3>
            if (line.trim() === '') return null
            return <p key={i} className="mb-4 text-ink-700 leading-relaxed">{line}</p>
          })}
        </div>

        <div className="mt-16 p-8 rounded-card bg-ink-50 text-center">
          <h3 className="mb-3">想了解更多?</h3>
          <Link href="/contact" className="btn-primary">
            聯絡業務
          </Link>
        </div>
      </div>

      <JsonLd data={productLd} />
    </article>
  )
}