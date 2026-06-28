'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import type { Locale } from '@/lib/i18n'
import { defaultLocale } from '@/lib/i18n'

type LocaleContextValue = {
  locale: Locale
  setLocale: (l: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)
const STORAGE_KEY = 'loading-tech-locale'

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored) setLocaleState(stored)
    setMounted(true)
  }, [])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {mounted ? children : children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) return { locale: defaultLocale, setLocale: () => {} }
  return ctx
}

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <select
      value={locale}
      onChange={e => setLocale(e.target.value as Locale)}
      className="px-2 py-1.5 rounded-md text-sm border border-ink-200 dark:border-ink-200
                 bg-white dark:bg-ink-100 text-ink-900 dark:text-ink-900
                 focus:outline-none focus:border-brand-500"
      aria-label="Language"
    >
      <option value="zh-HK">繁中</option>
      <option value="en">EN</option>
    </select>
  )
}