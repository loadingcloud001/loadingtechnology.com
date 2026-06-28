import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.enum(['sky', 'human', 'ground', 'cloud', 'demo']),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // n8n webhook(之後接)
    const n8nUrl = process.env.N8N_WEBHOOK_URL
    if (n8nUrl) {
      await fetch(n8nUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'website-contact-form',
          ...data,
          timestamp: new Date().toISOString(),
        }),
      }).catch(err => console.error('n8n webhook failed:', err))
    }

    // 預設:log 到 console(Phase 1 沒接 n8n 也能驗證)
    console.log('[Contact Form]', data)

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: '資料格式錯誤', issues: err.issues },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { success: false, error: '伺服器錯誤' },
      { status: 500 }
    )
  }
}