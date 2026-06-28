import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getSolutions, getSolutionBySlug } from '@/lib/content'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getSolutions().map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = getSolutionBySlug(slug)
  if (!s) return buildMetadata({ title: '找不到方案' })
  return buildMetadata({
    title: s.title,
    description: s.description,
    path: `/solutions/${s.slug}`,
  })
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params
  const s = getSolutionBySlug(slug)
  if (!s) notFound()

  return (
    <article className="section-spacing">
      <div className="container-page max-w-3xl">
        <Link href="/solutions" className="text-sm text-brand-600 hover:underline mb-6 inline-block">
          ← 回到方案列表
        </Link>
        <h1 className="mb-4">{s.title}</h1>
        <p className="text-xl text-ink-500 mb-8">{s.description}</p>
        <div className="prose prose-lg max-w-none">
          {s.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) return <h2 key={i} className="mt-8 mb-4">{line.slice(2)}</h2>
            if (line.startsWith('## ')) return <h3 key={i} className="mt-6 mb-3">{line.slice(3)}</h3>
            if (line.trim() === '') return null
            return <p key={i} className="mb-4 text-ink-700 leading-relaxed">{line}</p>
          })}
        </div>
      </div>
    </article>
  )
}