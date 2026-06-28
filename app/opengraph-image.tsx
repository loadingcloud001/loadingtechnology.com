import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export const alt = 'Loading Technology — 工地智能化方案'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          color: 'white',
          fontFamily: 'sans-serif',
          background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #0EA5E9 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              width: '60px',
              height: '60px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.5)',
            }}
          />
          <div style={{ display: 'flex', fontSize: '36px', fontWeight: 700 }}>
            Loading Technology
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ display: 'flex' }}>天・人・地・雲</span>
            <span style={{ display: 'flex' }}>工地智能化方案</span>
          </div>
          <div style={{ display: 'flex', fontSize: '28px', opacity: 0.85, marginTop: '8px' }}>
            CCTV ・ 智能頭盔 ・ 氣體偵測 ・ CMP 統一管理平台
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '24px' }}>
          <div
            style={{
              display: 'flex',
              padding: '8px 20px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            loadingtechnology.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}