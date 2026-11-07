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

export const metadata = pageMetadata('/build', 'Custom Software Development | PathSix Solutions', 'Replace spreadsheets with custom web applications. Client portals, internal tools, and business software built for your exact workflow.')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'PathSix Build - Custom Software Engineering',
  url: 'https://www.pathsixsolutions.com/build',
  description: 'Custom web applications and internal tools to replace spreadsheets and streamline operations.',
}

/** Page photography (prompts in design/homepage-imagery.txt). */
const images = {
  hero: { src: '/images/build-hero-spreadsheets.webp', alt: 'A cluttered desk buried in highlighted spreadsheet printouts, sticky notes, a calculator, and coffee.' },
  blueprint: { src: '/images/build-blueprint-band.webp', alt: 'Colored sticky notes arranged in tidy columns beside a hand-drawn workflow diagram on a sunlit wooden table.' },
}

const signs = [
  { title: 'Version control chaos', description: '"Who has the latest version? Is it Final_v3_REAL.xlsx or Final_v4.xlsx?" Data gets overwritten and lost.', tint: 'peach' },
  { title: 'Security nightmares', description: 'Emailing sensitive client lists or financial data as attachments. One wrong forward and your data is public.', tint: 'butter' },
  { title: 'Zero automation', description: 'Five hours a week copy-pasting data from one sheet to another just to generate a report.', tint: 'sky' },
]

const projects = [
  {
    category: 'Webhook automation',
    name: 'Booster Club Purchase Router',
    problem: 'A school athletics booster club was manually checking Stripe and forwarding every membership, yard sign, and donation notification to the right person by hand.',
    outcomes: [
      'Stripe purchases automatically route to the right inbox, with zero manual forwarding',
      'Admin dashboard with per-recipient delivery tracking, fulfillment workflow, and CSV export',
      'Passwordless admin access via magic link, with no credentials to manage',
    ],
    stack: ['Next.js', 'Supabase', 'Stripe', 'Resend'],
    caseStudy: 'https://willboone.dev/#cabc',
    tint: 'peach',
  },
  {
    category: 'Payments & registration',
    name: 'Symphony Guild Student Platform',
    problem: 'A performing arts organization was collecting student registrations on paper forms and chasing unpaid dues by email. They had a hard deadline, a parent meeting where signups were expected, and needed a fully working system in two weeks.',
    outcomes: [
      'Students register online; a QuickBooks invoice is created automatically in the background',
      'The roster marks paid the moment the QuickBooks payment clears, with no one touching a dashboard',
      'Admin panel with a real-time roster, grade filters, KPI cards, and configurable pricing',
    ],
    stack: ['Next.js', 'Supabase', 'QuickBooks API', 'Vercel'],
    caseStudy: 'https://willboone.dev/#osg',
    tint: 'sky',
  },
  {
    category: 'Custom SaaS platform',
    name: 'PathSix CRM',
    problem: 'Field services businesses were tracking leads in spreadsheets, following up by memory, and had zero visibility into their pipeline or revenue.',
    outcomes: [
      'Full lead-to-client lifecycle: capture, assignment, follow-up, conversion, and project tracking',
      '13 reporting endpoints: pipeline, revenue by client, MRR forecasting, retention, and more',
      'White-label configuration, so each tenant gets their own branding, statuses, and feature set',
    ],
    stack: ['React', 'Python', 'PostgreSQL', 'Fly.io'],
    caseStudy: 'https://willboone.dev/#crm',
    internal: { href: '/crm', label: 'See the CRM' },
    tint: 'sage',
  },
  {
    category: 'AI-powered app',
    name: 'SMS Reminder Platform',
    problem: 'Built to prove that AI-guided development could ship production-grade software. No app to download. No account to create. Just text it.',
    outcomes: [
      'Text naturally ("Call client Tue 2pm") and Claude Haiku parses the intent and schedules the reminder',
      'DST-safe scheduling, 14+ SMS commands, and consent and opt-out workflows',
      'Ships as two products (personal and group) sharing a single core package',
    ],
    stack: ['Next.js', 'Claude Haiku', 'Twilio', 'PostgreSQL'],
    caseStudy: 'https://willboone.dev/#ai-builds',
    tint: 'butter',
  },
]

const subscriptionIncludes = [
  'Dedicated development hours each month',
  'Continuous build, test, and iterate, with no disappearing acts',
  'Hosting and deployment planned as part of your build',
  'You own 100% of the code, always',
  'Priority response between sessions',
]

function Arrow({ direction = 'up-right' }: { direction?: 'up-right' | 'down' }) {
  return <span aria-hidden="true" className="site-arrow">{direction === 'down' ? '↓' : '↗'}</span>
}

function Check() {
  return <span aria-hidden="true" className="seo-check">✓</span>
}

export default function BuildPage() {
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
              <p className="site-eyebrow site-gold">Custom apps · Built for your workflow</p>
              <h1 className="mt-6 max-w-[14ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Stop running your business on <span className="site-gold">spreadsheets.</span>
              </h1>
              <p className="site-muted mt-6 max-w-[42ch] text-pretty text-lg md:text-xl">
                Off-the-shelf software is too rigid. Excel is too messy. We build secure web applications tailored to the way your business actually works.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link href="/contact" className="site-primary">Start a build <Arrow /></Link>
                <a href="#process" className="site-text-link">How it works <Arrow direction="down" /></a>
              </div>
              <p className="mt-8 text-sm text-[#d5d9d0]">Start with a $499 Blueprint, credited back if you build</p>
            </div>
            <div className="build-hero-photo relative overflow-hidden">
              <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <div className="site-promise">
          <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5">
            <p className="font-medium">Client portals, internal tools, and business software. Built to fit.</p>
            <p className="site-eyebrow">You own 100% of the code</p>
          </div>
        </div>

        <section id="problems" className="scroll-mt-8 py-20 md:py-28">
          <div className="site-container">
            <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-5">
                <p className="site-eyebrow site-eyebrow-accent">Sound familiar?</p>
                <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  Signs you&apos;ve hit the <span className="site-orange-ink">spreadsheet ceiling.</span>
                </h2>
              </div>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">Spreadsheets are great for prototyping. They are terrible for running a company. If these sound familiar, it&apos;s time to build.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {signs.map(sign => (
                <div key={sign.title} className={'build-sign p-8 site-tint-' + sign.tint}>
                  <h3 className="text-xl font-semibold tracking-tight">{sign.title}</h3>
                  <p className="build-sign-text mt-3 text-pretty">{sign.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="site-dark scroll-mt-8 py-20 md:py-28">
          <div className="site-container">
            <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-5">
                <p className="site-eyebrow site-gold">What we build</p>
                <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">Real software, in production.</h2>
              </div>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">These aren&apos;t mockups. Every project below is live, handling real users and real data.</p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {projects.map(project => (
                <article key={project.name} className={'build-project flex flex-col p-7 md:p-9 site-tint-' + project.tint}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="site-eyebrow">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
                    </div>
                    <span className="build-badge">In production</span>
                  </div>
                  <p className="build-project-muted mt-5 text-pretty italic">&ldquo;{project.problem}&rdquo;</p>
                  <ul className="mt-6 flex flex-grow flex-col gap-3">
                    {project.outcomes.map(outcome => <li key={outcome} className="flex gap-3 text-pretty"><Check />{outcome}</li>)}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    {project.stack.map(tech => <span key={tech} className="build-chip">{tech}</span>)}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" className="site-text-link">Case study <Arrow /></a>
                    {project.internal && <Link href={project.internal.href} className="site-text-link">{project.internal.label} <Arrow /></Link>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="site-banner build-blueprint-banner relative overflow-hidden">
          <Image src={images.blueprint.src} alt={images.blueprint.alt} fill sizes="100vw" className="object-cover" />
        </div>

        <section id="process" className="scroll-mt-8 py-20 md:py-28">
          <div className="site-container">
            <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-5">
                <p className="site-eyebrow site-eyebrow-accent">How it works</p>
                <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">Transparent engineering.</h2>
              </div>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">Custom software is an investment. We don&apos;t do &ldquo;black box&rdquo; pricing. We start small, validate, and build.</p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.35fr_1fr]">
              <div className="seo-plan seo-plan-plain flex flex-col p-8">
                <p className="site-eyebrow">Step 01</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">The Blueprint</h3>
                <p className="mt-4 text-5xl font-semibold tracking-tight tabular-nums">$499</p>
                <p className="site-orange-ink mt-2 text-sm font-semibold">Credited back if you build</p>
                <p className="site-muted mt-5 flex-grow text-pretty">We sit down to map out your entire workflow, database structure, and user needs. You get a technical roadmap PDF.</p>
                <Link href="/contact" className="seo-secondary mt-8 justify-center">Book a session <Arrow /></Link>
              </div>
              <div className="seo-plan site-tint-butter seo-plan-featured flex flex-col p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="site-eyebrow">Step 02</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">Build Subscription</h3>
                  </div>
                  <span className="seo-plan-badge">Most popular</span>
                </div>
                <p className="mt-4 text-5xl font-semibold tracking-tight tabular-nums">$499<span className="ml-2 text-lg font-normal tracking-normal">/ month</span></p>
                <p className="site-muted mt-2 text-sm font-semibold">5-month minimum</p>
                <p className="site-muted mt-5 text-pretty">Most agencies quote a big project fee, take the money, and hand you something half-finished. One monthly rate gets you a dedicated developer in your corner, building and iterating on your software every month until it&apos;s exactly what your business needs.</p>
                <ul className="mt-6 flex flex-grow flex-col gap-3">
                  {subscriptionIncludes.map(item => <li key={item} className="flex gap-3"><Check />{item}</li>)}
                </ul>
                <Link href="/contact" className="site-primary mt-8 justify-center">Start your build <Arrow /></Link>
              </div>
              <div className="seo-plan seo-plan-plain flex flex-col p-8">
                <p className="site-eyebrow">Step 03</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">Custom Scale</h3>
                <p className="mt-4 text-3xl font-semibold tracking-tight">Custom quote</p>
                <p className="site-muted mt-2 text-sm font-semibold">Full platform build</p>
                <p className="site-muted mt-5 flex-grow text-pretty">For mature businesses needing a complete operating system. Integrations with Xero or QuickBooks, complex permissions, and mobile support.</p>
                <Link href="/contact" className="seo-secondary mt-8 justify-center">Contact us <Arrow /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="site-dark site-offer py-20 md:py-24">
          <div className="site-container grid items-end gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col items-start gap-6">
              <p className="site-eyebrow site-gold">Let&apos;s map out your solution</p>
              <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-6xl">Not sure you need a custom build?</h2>
              <p className="site-muted max-w-[46ch] text-pretty text-lg">Let&apos;s talk. If we can solve it with a $20/month off-the-shelf tool, we&apos;ll tell you to buy that instead.</p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link href="/contact" className="site-primary">Request a Blueprint session <Arrow /></Link>
              <a href="mailto:build@pathsixsolutions.com" className="site-text-link break-all">build@pathsixsolutions.com</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
