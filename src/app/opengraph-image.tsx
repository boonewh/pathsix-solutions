import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'PathSix Solutions | Digital Tools for Growing Businesses'
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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 30,
          }}
        >
          Path<span style={{ color: '#f59e0b' }}>Six</span> Solutions
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            color: '#cbd5e1',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          The Full-Stack Growth Partner
        </div>

        {/* Services */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 50,
            fontSize: 24,
            color: '#94a3b8',
          }}
        >
          <span>Web Design</span>
          <span style={{ color: '#f59e0b' }}>•</span>
          <span>SEO</span>
          <span style={{ color: '#f59e0b' }}>•</span>
          <span>CRM</span>
          <span style={{ color: '#f59e0b' }}>•</span>
          <span>Custom Development</span>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#f59e0b',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}