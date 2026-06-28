import type { MetadataRoute } from 'next'
import { getProducts, getSolutions, getCaseStudies } from '@/lib/content'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://loadingtechnology.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`,            lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/solutions`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/products`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/case-studies`,lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${SITE_URL}/contact`,     lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
  ]

  const productPages: MetadataRoute.Sitemap = getProducts().map(p => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const solutionPages: MetadataRoute.Sitemap = getSolutions().map(s => ({
    url: `${SITE_URL}/solutions/${s.slug}`,
    lastModified: s.updatedAt ? new Date(s.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const casePages: MetadataRoute.Sitemap = getCaseStudies().map(c => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified: c.updatedAt ? new Date(c.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...productPages, ...solutionPages, ...casePages]
}