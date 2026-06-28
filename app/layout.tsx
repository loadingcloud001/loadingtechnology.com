import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_TC, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { siteConfig, buildMetadata } from '@/lib/seo'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-tc',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata()

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7C3AED',
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.png`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hong Kong',
    addressCountry: 'HK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: siteConfig.email,
    availableLanguage: ['zh-Hant', 'en'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="zh-HK"
      className={`${inter.variable} ${notoTC.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <JsonLd data={organizationLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}