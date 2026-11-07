import localFont from 'next/font/local'
import { SiteHeader, SiteFooter } from '@/components/SiteChrome'

const inter = localFont({
  src: '../../../public/fonts/InterVariable.woff2',
  display: 'swap',
  weight: '100 900',
})

/** Shared chrome for the Resources hub, topic pages, and articles. */
export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className + ' site-page antialiased'}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
