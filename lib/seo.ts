import type { Metadata } from 'next'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://loadingtechnology.com'

export const siteConfig = {
  name: 'Loading Technology',
  shortName: 'Loading Tech',
  description:
    '天・人・地・雲 — 工地智能化方案。CCTV、智能頭盔、氣體偵測、CMP 統一管理平台。',
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image`,
  locale: 'zh-HK',
  twitter: '@loadingtech',
  email: 'sales@loadingtechnology.com',
} as const

type BuildMetadataOptions = Partial<Metadata> & {
  path?: string
  image?: string
}

export function buildMetadata({
  path,
  image,
  ...overrides
}: BuildMetadataOptions = {}): Metadata {
  const url = path ? `${SITE_URL}${path}` : SITE_URL
  const ogImage = image ?? siteConfig.ogImage

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    keywords: [
      '工地安全',
      '智能頭盔',
      'CCTV',
      'IoT',
      '智慧工地',
      'Construction Tech',
      'Loading Technology',
      'CMP Platform',
      '氣體偵測',
      'Smart Helmet',
    ],
    alternates: {
      canonical: path ?? '/',
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [ogImage],
      creator: siteConfig.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...overrides,
  }
}