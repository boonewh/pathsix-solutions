import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Advanced SEO & Local Search Services | PathSix Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Service Badge */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 8,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 30,
          }}
        >
          SEO & GROWTH
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          Dominate Local Search
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#d1fae5',
            marginBottom: 40,
          }}
        >
          Get to #1 on Google Maps
        </div>

        {/* Brand */}
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: 'white',
            opacity: 0.9,
          }}
        >
          Path<span style={{ color: '#fbbf24' }}>Six</span> Solutions
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#fbbf24',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}