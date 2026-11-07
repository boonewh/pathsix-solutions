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

export const metadata = pageMetadata('/crm', 'Custom CRM Solutions | PathSix Solutions', 'Lean, focused CRM built for your workflow. No bloat, no complexity - just the features your business actually needs.')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PathSix CRM',
  url: 'https://www.pathsixsolutions.com/crm',
  applicationCategory: 'BusinessApplication',
  description: 'The CRM You Actually Need - Focused, lean, custom CRM solution with essential features and no bloat.',
  offers: {
    '@type': 'Offer',
    category: 'Custom Pricing',
  },
}

/** Product screenshots of PathSix CRM (sample data). */
const shots = {
  dashboard: { src: '/images/crm-dashboard.webp', width: 1915, height: 920, alt: 'PathSix CRM dashboard showing overdue, today, and upcoming follow-ups and recently touched records.' },
  leads: { src: '/images/crm-leads.webp', width: 1900, height: 917, alt: 'PathSix CRM leads table with status, type, source, contact details, and owner.' },
  calendar: { src: '/images/crm-calendar.webp', width: 1917, height: 915, alt: 'PathSix CRM month calendar with color-coded follow-ups for accounts, leads, and projects.' },
  projects: { src: '/images/crm-projects.webp', width: 1916, height: 893, alt: 'PathSix CRM projects table with status, type, value, and linked account.' },
  leadMobile: { src: '/images/crm-lead-mobile.webp', width: 360, height: 722, alt: 'A lead record in PathSix CRM on a phone, with status, source, owner, and contact details.' },
  calendarMobile: { src: '/images/crm-calendar-mobile.webp', width: 355, height: 710, alt: 'PathSix CRM calendar in list view on a phone.' },
  reports: { src: '/images/crm-reports.webp', width: 1901, height: 913, alt: 'PathSix CRM reports page showing sales team activity by salesperson.' },
}

type Shot = { src: string; width: number; height: number; alt: string }

const features: { eyebrow: string; title: string; description: string; shot: Shot; phone?: Shot; tint: string }[] = [
  {
    eyebrow: 'Lead management',
    title: 'Know exactly who needs a follow-up.',
    description: 'Every lead in one place with its status, source, contact details, and owner. Filter by stage, switch between cards and a table, and convert a lead to an account when they say yes.',
    shot: shots.leads,
    phone: shots.leadMobile,
    tint: 'sky',
  },
  {
    eyebrow: 'Calendar',
    title: 'Every follow-up on one calendar.',
    description: 'Accounts, leads, and projects, color-coded on a month, week, day, or list view. See what is overdue, what is due today, and what is coming up.',
    shot: shots.calendar,
    phone: shots.calendarMobile,
    tint: 'butter',
  },
  {
    eyebrow: 'Projects & accounts',
    title: 'Track every job from start to finish.',
    description: 'Projects carry their status, type, and value, and link straight to the company account they belong to, so the whole relationship is one click away.',
    shot: shots.projects,
    tint: 'sage',
  },
  {
    eyebrow: 'Reports',
    title: 'Reports that actually matter.',
    description: 'Pipeline, lead sources, conversion, revenue, and team activity, filtered by date. These are starting points: tell us what you need to see and we build it.',
    shot: shots.reports,
    tint: 'peach',
  },
]

const builtIn = [
  { title: 'Activity logs', description: 'Full accountability. See who touched a record, who called a client, and when it happened.' },
  { title: 'Role management', description: 'Secure access control. Assign work and limit visibility based on team roles.' },
  { title: 'Files', description: 'Keep your team\'s documents in the same place as the rest of your customer records.' },
  { title: 'Data import', description: 'Bring your existing contacts and records with you instead of starting from scratch.' },
]

function Arrow({ direction = 'up-right' }: { direction?: 'up-right' | 'down' }) {
  return <span aria-hidden="true" className="site-arrow">{direction === 'down' ? '↓' : '↗'}</span>
}

function Screenshot({ shot, priority = false, sizes }: { shot: Shot; priority?: boolean; sizes: string }) {
  return (
    <figure className="crm-shot">
      <div className="crm-shot-bar" aria-hidden="true"><span /><span /><span /></div>
      <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} priority={priority} sizes={sizes} className="block h-auto w-full" />
    </figure>
  )
}

export default function CRMPage() {
  return (
    <div className={inter.className + ' site-page antialiased'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <section className="site-dark crm-hero">
          <div className="site-container pt-14 md:pt-20 lg:pt-24">
            <div className="grid items-end gap-10 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col items-start">
                <p className="site-eyebrow site-gold">PathSix CRM · Focused, lean, custom</p>
                <h1 className="mt-6 max-w-[14ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                  The CRM you <span className="site-gold">actually need.</span>
                </h1>
              </div>
              <div className="flex flex-col items-start gap-8 lg:pb-3">
                <p className="site-muted max-w-[40ch] text-pretty text-lg">
                  Tired of CRM bloat? PathSix CRM starts with the essentials and builds from there. Only what you need, nothing you don&apos;t.
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
                  <Link href="/contact" className="site-primary">Talk about your CRM <Arrow /></Link>
                  <a href="#features" className="site-text-link">See what&apos;s inside <Arrow direction="down" /></a>
                </div>
              </div>
            </div>
            <div className="crm-hero-shot mt-14 md:mt-16">
              <Screenshot shot={shots.dashboard} priority sizes="(min-width: 1320px) 1192px, 92vw" />
            </div>
          </div>
        </section>

        <div className="site-promise crm-promise">
          <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5">
            <p className="font-medium">Only what you need. Nothing you don&apos;t.</p>
            <p className="site-eyebrow">Leads · Accounts · Projects · Reports</p>
          </div>
        </div>

        <section id="features" className="scroll-mt-8 py-20 md:py-28">
          <div className="site-container">
            <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-5">
                <p className="site-eyebrow site-eyebrow-accent">Intuitive. Effective. Fast.</p>
                <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  A clean foundation that <span className="site-orange-ink">works for you.</span>
                </h2>
              </div>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">Forget CRMs packed with features you&apos;ll never touch. Your CRM should work for you, not the other way around.</p>
            </div>
            <div className="mt-16 flex flex-col gap-20 md:gap-28">
              {features.map((feature, index) => (
                <div key={feature.title} className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
                  <div className={'flex flex-col items-start gap-5 ' + (index % 2 === 1 ? 'lg:order-2' : '')}>
                    <p className="site-eyebrow site-eyebrow-accent">{feature.eyebrow}</p>
                    <h3 className="max-w-[18ch] text-balance text-3xl font-semibold tracking-tight md:text-4xl">{feature.title}</h3>
                    <p className="site-muted max-w-[44ch] text-pretty text-lg">{feature.description}</p>
                  </div>
                  <div className={'crm-shot-frame site-tint-' + feature.tint + ' ' + (index % 2 === 1 ? 'lg:order-1' : '')}>
                    <div className="relative">
                      <Screenshot shot={feature.shot} sizes="(min-width: 1024px) 60vw, 92vw" />
                      {feature.phone && (
                        <figure className="crm-phone">
                          <Image src={feature.phone.src} alt={feature.phone.alt} width={feature.phone.width} height={feature.phone.height} sizes="(min-width: 1024px) 180px, 30vw" className="block h-auto w-full" />
                        </figure>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="built-in" className="site-dark scroll-mt-8 py-20 md:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div className="flex flex-col items-start gap-6">
              <p className="site-eyebrow site-gold">Also built in</p>
              <h2 className="max-w-[16ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">The essentials, done properly.</h2>
              <p className="site-muted max-w-[38ch] text-pretty text-lg">No bloat, no unnecessary reports. Just what a small team needs to stay organized and accountable.</p>
            </div>
            <ul className="site-service-list">
              {builtIn.map((item, index) => (
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

        <section className="py-20 md:py-28">
          <div className="site-container grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col items-start gap-5">
              <p className="site-eyebrow site-eyebrow-accent">Custom reports</p>
              <h2 className="max-w-[20ch] text-balance text-3xl font-semibold tracking-tight md:text-4xl">Tell us what you need to see. We&apos;ll build it.</h2>
              <p className="site-muted max-w-[52ch] text-pretty text-lg">The reports above are just starting points. Your business is unique, and your reports should be too.</p>
            </div>
            <div className="site-tint-butter crm-pricing flex flex-col items-start gap-3 p-8">
              <p className="site-eyebrow">Pricing</p>
              <p className="text-2xl font-semibold tracking-tight">Custom pricing based on your needs.</p>
              <p className="site-muted">Tell us what your team needs and we&apos;ll put together a plan around it.</p>
            </div>
          </div>
        </section>

        <section className="site-dark site-offer py-20 md:py-24">
          <div className="site-container grid items-end gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col items-start gap-6">
              <p className="site-eyebrow site-gold">Your CRM. Your way.</p>
              <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s build something that works for your business.</h2>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">Tell us how your team works today and where things fall through the cracks.</p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link href="/contact" className="site-primary">Talk about your CRM <Arrow /></Link>
              <a href="mailto:crm@pathsixsolutions.com" className="site-text-link break-all">crm@pathsixsolutions.com</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
