'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'

type SearchItem = {
  slug: string
  title: string
  description: string
  category: string
  href: string
}

export function Search({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState('')

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: ['title', 'description', 'category'],
        threshold: 0.4,
        includeScore: true,
      }),
    [items]
  )

  const results = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query).slice(0, 8).map(r => r.item)
  }, [query, fuse])

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="搜尋產品、方案、案例..."
        className="w-full px-4 py-2.5 pl-10 rounded-full border border-ink-200 dark:border-ink-200
                   bg-white dark:bg-ink-100 text-ink-900 dark:text-ink-900
                   placeholder:text-ink-300 focus:outline-none focus:border-brand-500
                   focus:ring-2 focus:ring-brand-500/20 transition-all"
      />
      <svg
        className="absolute left-3.5 top-3 text-ink-300"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      {query && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-ink-100
                        border border-ink-100 dark:border-ink-200 rounded-card
                        shadow-lg overflow-hidden z-50 max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-4 text-sm text-ink-500">找不到結果</div>
          ) : (
            results.map(r => (
              <Link
                key={r.href}
                href={r.href}
                onClick={() => setQuery('')}
                className="block p-3 hover:bg-ink-50 dark:hover:bg-ink-200 border-b border-ink-100 dark:border-ink-200 last:border-0"
              >
                <div className="text-xs font-medium text-brand-600 mb-0.5">
                  {r.category}
                </div>
                <div className="text-sm font-semibold text-ink-900">
                  {r.title}
                </div>
                <div className="text-xs text-ink-500 line-clamp-1">
                  {r.description}
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  )
}