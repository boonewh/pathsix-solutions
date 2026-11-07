import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'AI Consulting & Strategy | PathSix Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div style={{ background: '#202621', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 80, color: '#FAFAF7' }}>
      <div style={{ fontSize: 24, color: '#F4C64F', marginBottom: 42, letterSpacing: 3, textTransform: 'uppercase' }}>AI consulting · Strategy to everyday use</div>
      <div style={{ fontSize: 76, fontWeight: 600, maxWidth: 940, lineHeight: 1.08 }}>See where AI fits.</div>
      <div style={{ fontSize: 76, fontWeight: 600, maxWidth: 940, lineHeight: 1.08, color: '#F4C64F' }}>Then put it to work.</div>
      <div style={{ fontSize: 28, color: '#BFC5BC', marginTop: 30 }}>Clarity first. Tools second. People in control.</div>
      <div style={{ display: 'flex', marginTop: 'auto', fontSize: 28 }}>Path<span style={{ color: '#FA7049' }}>Six</span>&nbsp;Solutions</div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 12, background: '#FA7049' }} />
    </div>,
    size,
  )
}
