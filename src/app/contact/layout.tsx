import localFont from 'next/font/local'
import { pageMetadata } from '@/lib/metadata'

const inter = localFont({
  src: '../../../public/fonts/InterVariable.woff2',
  display: 'swap',
  weight: '100 900',
})

export const metadata = pageMetadata(
  '/contact',
  'Contact PathSix Solutions | Tell Us About Your Business',
  'Talk with PathSix Solutions about web design, SEO, CRM, custom applications, or practical AI consulting for your small business.',
)

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <div className={inter.className + ' site-page antialiased'}>{children}</div>
}
