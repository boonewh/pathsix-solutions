import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AI Consulting for Small Businesses | PathSix Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div style={{ background: '#172B3A', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 80, color: '#F7F6F2' }}>
      <div style={{ fontSize: 24, color: '#B6D5D0', marginBottom: 42 }}>AI consulting for small businesses</div>
      <div style={{ fontSize: 76, fontWeight: 600, maxWidth: 900, lineHeight: 1.1 }}>Make AI useful in your business.</div>
      <div style={{ fontSize: 28, color: '#CDDAE2', marginTop: 30 }}>The right tools. A practical plan. Help putting it all to work.</div>
      <div style={{ display: 'flex', marginTop: 'auto', fontSize: 28 }}>Path<span style={{ color: '#FBBF24' }}>Six</span>&nbsp;Solutions</div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 12, background: '#B6D5D0' }} />
    </div>,
    size,
  )
}
