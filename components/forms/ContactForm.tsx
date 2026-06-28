'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, '請輸入姓名'),
  company: z.string().min(2, '請輸入公司名稱'),
  email: z.string().email('請輸入有效的 Email'),
  phone: z.string().optional(),
  interest: z.enum(['sky', 'human', 'ground', 'cloud', 'demo']),
  message: z.string().min(10, '請簡單描述需求 (至少 10 字)'),
})

type FormData = z.infer<typeof schema>

const INTERESTS = [
  { value: 'sky',    label: '天 — CCTV / AI Camera' },
  { value: 'human',  label: '人 — 智能頭盔 / 穿戴' },
  { value: 'ground', label: '地 — 氣體偵測 / 環境' },
  { value: 'cloud',  label: '雲 — CMP 平台' },
  { value: 'demo',   label: '預約現場示範' },
] as const

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  async function onSubmit(data: FormData) {
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error(await res.text())
      }

      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : '送出失敗,請稍後再試')
    }
  }

  if (status === 'success') {
    return (
      <div className="card text-center py-12">
        <div className="inline-block w-12 h-12 rounded-full bg-brand-50 text-brand-600 mb-4 leading-[3rem] text-2xl">
          ✓
        </div>
        <h3 className="text-lg font-bold mb-2">已收到您的查詢</h3>
        <p className="text-ink-500 mb-6">
          我們的業務團隊會在一個工作天內回覆您。
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-secondary"
        >
          送出另一個查詢
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="姓名 *" error={errors.name?.message}>
          <input
            {...register('name')}
            type="text"
            className="input"
            placeholder="王小明"
          />
        </Field>

        <Field label="公司名稱 *" error={errors.company?.message}>
          <input
            {...register('company')}
            type="text"
            className="input"
            placeholder="承建商 / 工程公司"
          />
        </Field>

        <Field label="Email *" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            className="input"
            placeholder="you@company.com"
          />
        </Field>

        <Field label="聯絡電話" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            className="input"
            placeholder="+852 1234 5678"
          />
        </Field>
      </div>

      <Field label="查詢類別 *" error={errors.interest?.message}>
        <select {...register('interest')} className="input">
          <option value="">請選擇</option>
          {INTERESTS.map(i => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="需求描述 *" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={5}
          className="input"
          placeholder="請簡單描述您的工地場景、目前痛點、需要評估的方案..."
        />
      </Field>

      {status === 'error' && (
        <div className="p-4 rounded-card bg-ground-600/10 text-ground-600 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? '送出中...' : '送出查詢'}
      </button>

      <p className="text-xs text-ink-500">
        送出即代表您同意我們使用以上資訊聯絡您。我們不會將您的資料分享給第三方。
      </p>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--color-ink-200);
          border-radius: 0.5rem;
          background: white;
          color: var(--color-ink-900);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-brand-500);
          box-shadow: 0 0 0 3px var(--color-brand-100);
        }
        .input::placeholder {
          color: var(--color-ink-300);
        }
      `}</style>
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink-900 mb-1.5">{label}</span>
      {children}
      {error && <span className="block text-sm text-ground-600 mt-1">{error}</span>}
    </label>
  )
}