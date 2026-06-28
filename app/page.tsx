import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { HeroAnimated } from '@/components/home/HeroAnimated'

export const metadata: Metadata = buildMetadata({
  path: '/',
})

export default function HomePage() {
  return <HeroAnimated />
}