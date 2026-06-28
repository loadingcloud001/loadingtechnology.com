import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_ROOT = path.join(process.cwd(), 'content')

export type ContentCategory = 'sky' | 'human' | 'ground' | 'cloud'

export type ContentMeta = {
  slug: string
  title: string
  description: string
  category: ContentCategory
  image?: string
  order?: number
  updatedAt?: string
  published?: boolean
}

export type ContentEntry = ContentMeta & {
  content: string
}

function readDir(dir: string): ContentEntry[] {
  const full = path.join(CONTENT_ROOT, dir)
  if (!fs.existsSync(full)) return []

  return fs
    .readdirSync(full)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx?$/, '')
      const raw = fs.readFileSync(path.join(full, file), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? '',
        category: data.category ?? 'cloud',
        image: data.image,
        order: data.order ?? 99,
        updatedAt: data.updatedAt,
        published: data.published !== false,
        content,
      } satisfies ContentEntry
    })
    .filter(e => e.published)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}

export function getProducts(): ContentEntry[] {
  return readDir('products')
}

export function getSolutions(): ContentEntry[] {
  return readDir('solutions')
}

export function getCaseStudies(): ContentEntry[] {
  return readDir('case-studies')
}

export function getProductBySlug(slug: string): ContentEntry | null {
  return getProducts().find(p => p.slug === slug) ?? null
}

export function getSolutionBySlug(slug: string): ContentEntry | null {
  return getSolutions().find(p => p.slug === slug) ?? null
}

export function getCaseStudyBySlug(slug: string): ContentEntry | null {
  return getCaseStudies().find(p => p.slug === slug) ?? null
}