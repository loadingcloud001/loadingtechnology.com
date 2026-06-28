import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: '關於我們',
  description: 'Loading Technology — 用科技守護每一個工地。',
  path: '/about',
})

export default function AboutPage() {
  return (
    <section className="section-spacing">
      <div className="container-page max-w-3xl">
        <h1 className="mb-6">關於 Loading Technology</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-ink-500 mb-8">
            我們相信工地安全不應該依賴運氣。
          </p>

          <p className="mb-6">
            Loading Technology 成立於香港,專注於工地智能化方案。
            透過天(空中監控)、人(工人穿戴)、地(環境感測)、雲(統一平台)
            四大支柱,提供從前端裝置到後端管理的完整方案。
          </p>

          <h2 className="mt-12 mb-4">我們的使命</h2>
          <p className="mb-6">
            讓每一個工地都能即時掌握狀況,讓每一個工人都能平安回家。
          </p>

          <h2 className="mt-12 mb-4">聯絡我們</h2>
          <p>
            業務查詢:{' '}
            <a href="mailto:sales@loadingtechnology.com" className="text-brand-600 hover:underline">
              sales@loadingtechnology.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}