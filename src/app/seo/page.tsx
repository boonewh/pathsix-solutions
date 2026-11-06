import { pageMetadata } from '@/lib/metadata'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import { SiteHeader, SiteFooter } from '@/components/SiteChrome'

const inter = localFont({
  src: '../../../public/fonts/InterVariable.woff2',
  display: 'swap',
  weight: '100 900',
})

export const metadata = pageMetadata('/seo', 'Advanced SEO & Local Search Services | PathSix Solutions', 'Local SEO services focused on accurate business information, useful content, technical improvements, and measuring search visibility.')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'PathSix Growth - Advanced SEO & Local Search',
  url: 'https://www.pathsixsolutions.com/seo',
  description: 'Local SEO services focused on business profiles, useful content, technical improvements, and search visibility.',
}

/**
 * Page photography. The hero is a stand-in and the map band stays hidden until
 * the commissioned photos exist (prompts in design/homepage-imagery.txt).
 */
const images: { hero: { src: string; alt: string }; map: { src: string; alt: string } | null } = {
  hero: { src: '/images/web-main-street.webp', alt: 'A small-town Main Street at golden hour with colorful shop awnings.' },
  map: null,
}

const included = [
  'Fast page load speeds',
  'Mobile-friendly layouts',
  'Page titles and descriptions',
  'Schema markup (structured data)',
  'Sitemap submission',
]

const growth = [
  'Google Business Profile optimization',
  'Monthly content writing',
  'Honest customer review requests',
  'Backlink building',
  'Competitor tracking',
]

const approach = [
  { title: 'Google Maps first', description: 'We improve your Google Business Profile with accurate categories, service information, photos, and updates. Local results depend on relevance, distance, and prominence.' },
  { title: 'Content that answers real questions', description: 'Useful service pages and articles that answer what your customers actually ask. Location content reflects where you really work and what you offer there.' },
  { title: 'A reputation you earn', description: 'We help you ask customers for honest feedback, without selecting only happy clients, offering incentives, or asking for a particular rating or wording.' },
]

const plans = [
  {
    name: 'Maps Booster',
    price: '$299',
    summary: 'For local service businesses that want to show up on the map.',
    features: ['Google Business Profile management', 'Weekly Google Posts updates', 'Review request system (SMS/email)', '10 local citations per month', 'Monthly ranking report'],
    cta: 'Start with Maps Booster',
    featured: false,
  },
  {
    name: 'Local Growth',
    price: '$799',
    summary: 'For businesses that need ongoing content and broader local search support.',
    features: ['Everything in Maps Booster', '2 SEO-focused blog posts per month', 'Competitor research reports', 'Backlink outreach campaign', 'Dedicated account manager'],
    cta: 'Choose Local Growth',
    featured: true,
  },
]

function Arrow({ direction = 'up-right' }: { direction?: 'up-right' | 'down' }) {
  return <span aria-hidden="true" className="site-arrow">{direction === 'down' ? '↓' : '↗'}</span>
}

function Check() {
  return <span aria-hidden="true" className="seo-check">✓</span>
}

export default function SEOPage() {
  return (
    <div className={inter.className + ' site-page antialiased'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <section className="site-dark overflow-hidden">
          <div className="site-container grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[5fr_6fr] lg:py-24">
            <div className="flex flex-col items-start">
              <p className="site-eyebrow site-gold">SEO · Local search</p>
              <h1 className="mt-6 max-w-[14ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Help the right customers <span className="site-gold">find you.</span>
              </h1>
              <p className="site-muted mt-6 max-w-[42ch] text-pretty text-lg md:text-xl">
                A great website is the engine. Search is the fuel. We improve your website and Google Business Profile so nearby customers can find and understand your business.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link href="/contact" className="site-primary">Talk about local search <Arrow /></Link>
                <a href="#plans" className="site-text-link">See the plans <Arrow direction="down" /></a>
              </div>
              <p className="mt-8 text-sm text-[#d5d9d0]">Plans from $299/month · No lock-in contracts</p>
            </div>
            <div className="seo-hero-photo relative overflow-hidden">
              <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <div className="site-promise">
          <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5">
            <p className="font-medium">Get found by the people already looking for you.</p>
            <p className="site-eyebrow">Business profile · Content · Reviews</p>
          </div>
        </div>

        <section id="included" className="scroll-mt-8 py-20 md:py-28">
          <div className="site-container">
            <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-5">
                <p className="site-eyebrow site-eyebrow-accent">A common question</p>
                <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  &ldquo;Isn&apos;t SEO included in <span className="site-orange-ink">my website?&rdquo;</span>
                </h2>
              </div>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">Every website we build comes with a technical SEO foundation. Ongoing SEO adds content, business profile work, and measurement on top of it.</p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="site-tint-sage p-8 md:p-10">
                <p className="site-eyebrow">Included with web design</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">The technical foundation</h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {included.map(item => <li key={item} className="flex gap-3"><Check />{item}</li>)}
                </ul>
                <Link href="/web-design" className="site-text-link mt-8">About web design <Arrow /></Link>
              </div>
              <div className="site-tint-peach p-8 md:p-10">
                <p className="site-eyebrow">This service</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">Ongoing local growth</h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {growth.map(item => <li key={item} className="flex gap-3"><Check />{item}</li>)}
                </ul>
                <a href="#plans" className="site-text-link mt-8">See the plans <Arrow direction="down" /></a>
              </div>
            </div>
            <p className="site-muted mt-8 max-w-[70ch] text-pretty text-sm">Search positions vary by query, location, and competition. We work to improve your visibility, but no particular ranking is guaranteed.</p>
          </div>
        </section>

        {images.map && (
          <div className="site-banner relative overflow-hidden">
            <Image src={images.map.src} alt={images.map.alt} fill sizes="100vw" className="object-cover" />
          </div>
        )}

        <section id="approach" className="site-dark scroll-mt-8 py-20 md:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div className="flex flex-col items-start gap-6">
              <p className="site-eyebrow site-gold">How we work</p>
              <h2 className="max-w-[16ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">How we improve your search presence.</h2>
              <p className="site-muted max-w-[38ch] text-pretty text-lg">SEO isn&apos;t magic. It&apos;s steady, honest work on the things search engines and customers both care about.</p>
            </div>
            <ul className="site-service-list">
              {approach.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-x-4 py-7 first:pt-0">
                  <span className="site-service-number tabular-nums">0{index + 1}</span>
                  <span>
                    <span className="block text-xl font-medium md:text-2xl">{item.title}</span>
                    <span className="site-muted mt-2 block max-w-[52ch] text-pretty">{item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="plans" className="scroll-mt-8 py-20 md:py-28">
          <div className="site-container">
            <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-5">
                <p className="site-eyebrow site-eyebrow-accent">Plans</p>
                <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">Simple monthly growth.</h2>
              </div>
              <p className="site-muted max-w-[42ch] text-pretty text-lg">No lock-in contracts. Cancel anytime.</p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {plans.map(plan => (
                <div key={plan.name} className={'seo-plan flex flex-col p-8 md:p-10 ' + (plan.featured ? 'site-tint-butter seo-plan-featured' : 'seo-plan-plain')}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
                    {plan.featured && <span className="seo-plan-badge">Recommended</span>}
                  </div>
                  <p className="mt-4 text-6xl font-semibold tracking-tight tabular-nums">{plan.price}<span className="ml-2 text-lg font-normal tracking-normal">/ month</span></p>
                  <p className="site-muted mt-4 text-pretty">{plan.summary}</p>
                  <ul className="mt-8 flex flex-grow flex-col gap-3">
                    {plan.features.map(feature => <li key={feature} className="flex gap-3"><Check />{feature}</li>)}
                  </ul>
                  <Link href="/contact" className={(plan.featured ? 'site-primary' : 'seo-secondary') + ' mt-10 justify-center'}>{plan.cta} <Arrow /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-dark site-offer py-20 md:py-24">
          <div className="site-container grid items-end gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col items-start gap-6">
              <p className="site-eyebrow site-gold">Ready when you are</p>
              <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-6xl">Let us handle the steady work.</h2>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">You handle the new customers. Tell us about your business and where you want to be found.</p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link href="/contact" className="site-primary">Talk about local search <Arrow /></Link>
              <a href="mailto:growth@pathsixsolutions.com" className="site-text-link break-all">growth@pathsixsolutions.com</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
