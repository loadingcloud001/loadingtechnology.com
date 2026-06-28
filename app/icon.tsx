import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export const alt = 'Loading Technology'
export const size = { width: 1800, height: 1800 }
export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          fontSize: '800px',
          fontWeight: 800,
          letterSpacing: '-0.05em',
        }}
      >
        L
      </div>
    ),
    { ...size }
  )
}