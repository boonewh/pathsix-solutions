import type { Metadata } from 'next'
import Link from 'next/link'
import localFont from 'next/font/local'
import { SiteHeader, SiteFooter } from '@/components/SiteChrome'

const inter = localFont({
  src: '../../public/fonts/InterVariable.woff2',
  display: 'swap',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Page not found | PathSix Solutions',
  robots: { index: false },
}

const destinations = [
  { title: 'Web Design', description: 'Websites built, hosted and looked after for you.', href: '/web-design', tint: 'peach' },
  { title: 'SEO', description: 'Help nearby customers find your business.', href: '/seo', tint: 'sage' },
  { title: 'CRM', description: 'A lean CRM built around how your team works.', href: '/crm', tint: 'sky' },
  { title: 'Custom Apps', description: 'Purpose-built software for the work in between.', href: '/build', tint: 'butter' },
  { title: 'AI Consulting', description: 'See where AI fits, then put it to work.', href: '/ai-consulting', tint: 'peach' },
  { title: 'Resources', description: 'Practical guides, written plainly.', href: '/resources', tint: 'sage' },
]

function Arrow() {
  return <span aria-hidden="true" className="site-arrow">↗</span>
}

export default function NotFound() {
  return (
    <div className={inter.className + ' site-page antialiased'}>
      <SiteHeader />
      <main>
        <section className="site-dark py-20 md:py-28">
          <div className="site-container flex flex-col items-start">
            <p className="site-eyebrow site-gold">404 · Page not found</p>
            <h1 className="mt-6 max-w-[16ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl">
              This page took a <span className="site-gold">wrong turn.</span>
            </h1>
            <p className="site-muted mt-6 max-w-[46ch] text-pretty text-lg md:text-xl">
              The link may be old, or the page may have moved. Here are the best places to pick things back up.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/" className="site-primary">Back to the homepage <Arrow /></Link>
              <Link href="/contact" className="site-text-link">Contact us <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="site-container">
            <p className="site-eyebrow site-eyebrow-accent">Where to next</p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className={'resource-card flex h-full flex-col p-7 site-tint-' + item.tint}>
                    <span className="text-xl font-semibold tracking-tight">{item.title}</span>
                    <span className="resource-card-text mt-2 text-pretty">{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
