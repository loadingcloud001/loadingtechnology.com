import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-spacing">
      <div className="container-page text-center max-w-md mx-auto">
        <h1 className="mb-4">找不到頁面</h1>
        <p className="text-ink-500 mb-8">
          抱歉,您要找的頁面不存在或已被移除。
        </p>
        <Link href="/" className="btn-primary">
          回到首頁
        </Link>
      </div>
    </section>
  )
}