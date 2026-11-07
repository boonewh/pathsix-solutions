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

export const metadata = pageMetadata('/ai-consulting', 'AI Consulting & Strategy | PathSix Solutions', 'Practical AI strategy, implementation, and team training. Find where AI fits in your organization and put it to work, with people in control.')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Consulting & Strategy',
  serviceType: 'AI strategy, implementation, and team training',
  url: 'https://www.pathsixsolutions.com/ai-consulting',
  description: 'Practical AI strategy, implementation, and team training. Find where AI fits in your organization and put it to work, with people in control.',
  provider: { '@type': 'Organization', name: 'PathSix Solutions', url: 'https://www.pathsixsolutions.com' },
}

/**
 * Page photography (prompts in design/homepage-imagery.txt). The hero is a
 * stand-in until its commissioned photo arrives.
 */
const images = {
  hero: { src: '/images/build-blueprint-band.webp', alt: 'Colored sticky notes arranged in tidy columns beside a hand-drawn workflow diagram.' },
  horizon: { src: '/images/ai-horizon-band.webp', alt: 'A person with a coffee mug looking out an office window at sunrise over small-town rooftops and a water tower.' },
}

const whyNow = [
  { title: 'The shift is already underway', description: 'The tools your customers, competitors, and team use are changing fast. Waiting for it to settle means starting from behind.', tint: 'peach' },
  { title: 'Most teams are guessing', description: 'Scattered experiments, unclear rules, and subscriptions nobody is sure about. Effort without direction rarely adds up.', tint: 'butter' },
  { title: 'Early clarity compounds', description: 'A clear picture of where AI fits, and where it doesn’t, turns small wins into habits your whole organization can build on.', tint: 'sky' },
]

const services = [
  { title: 'Strategy & roadmap', description: 'Look at how your organization actually works. Identify where AI could help, what is worth trying now, and what can wait.' },
  { title: 'Tools & setup', description: 'Make sense of the options for your budget and existing systems, then configure accounts, reusable instructions, and repeatable workflows.' },
  { title: 'Team training', description: 'Bring people along through their own day-to-day work: asking better questions, checking results, and knowing when to trust the output.' },
  { title: 'Guardrails & oversight', description: 'Decide what information can be shared, who has access, and when a person needs to review an AI-generated result.' },
]

const engagements = [
  { label: 'Get a clear direction', title: 'AI Assessment', description: 'For organizations deciding where AI belongs and what to do first.', items: ['Review of your goals, work, and current tools', 'Prioritized opportunities and recommendations', 'A practical roadmap for your next steps'], tint: 'peach' },
  { label: 'Make it part of the work', title: 'Implementation & Training', description: 'For teams ready to put a specific idea into practice.', items: ['Tool configuration and workflow setup', 'Testing with real, everyday tasks', 'Team training and written guidance'], tint: 'butter', featured: true },
  { label: 'Have someone to turn to', title: 'Ongoing Support', description: 'For organizations that want a guide as tools and needs keep changing.', items: ['Troubleshooting and workflow improvements', 'Guidance as new tools arrive', 'Follow-up training as your team grows'], tint: 'sky' },
]

function Arrow({ direction = 'up-right' }: { direction?: 'up-right' | 'down' }) {
  return <span aria-hidden="true" className="site-arrow">{direction === 'down' ? '↓' : '↗'}</span>
}

function Check() {
  return <span aria-hidden="true" className="seo-check">✓</span>
}

export default function AIConsultingPage() {
  return (
    <div className={inter.className + ' site-page antialiased'}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <section className="site-dark overflow-hidden">
          <div className="site-container grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[5fr_6fr] lg:py-24">
            <div className="flex flex-col items-start">
              <p className="site-eyebrow site-gold">AI consulting · Strategy to everyday use</p>
              <h1 className="mt-6 max-w-[14ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                See where AI fits. <span className="site-gold">Then put it to work.</span>
              </h1>
              <p className="site-muted mt-6 max-w-[44ch] text-pretty text-lg md:text-xl">
                Practical guidance for organizations that want to get ahead of the shift, from the first strategy conversation to tools your team actually uses. No hype, and people stay in control.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link href="/contact" className="site-primary">Start the conversation <Arrow /></Link>
                <a href="#how-we-help" className="site-text-link">How we help <Arrow direction="down" /></a>
              </div>
              <p className="mt-8 text-sm text-[#d5d9d0]">No technical background or fully formed plan needed</p>
            </div>
            <div className="build-hero-photo relative overflow-hidden">
              <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <div className="site-promise">
          <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5">
            <p className="font-medium">Clarity first. Tools second. People in control.</p>
            <p className="site-eyebrow">Strategy · Setup · Training · Support</p>
          </div>
        </div>

        <section id="why-now" className="scroll-mt-8 py-20 md:py-28">
          <div className="site-container">
            <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-5">
                <p className="site-eyebrow site-eyebrow-accent">Why now</p>
                <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  The future of work is arriving <span className="site-orange-ink">one tool at a time.</span>
                </h2>
              </div>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">You don’t need to chase every headline. You need a clear view of what matters for your organization, and a sensible first step.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {whyNow.map(item => (
                <div key={item.title} className={'build-sign p-8 site-tint-' + item.tint}>
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="build-sign-text mt-3 text-pretty">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-we-help" className="site-dark scroll-mt-8 py-20 md:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div className="flex flex-col items-start gap-6">
              <p className="site-eyebrow site-gold">How we help</p>
              <h2 className="max-w-[16ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">From first questions to everyday use.</h2>
              <p className="site-muted max-w-[38ch] text-pretty text-lg">Exploring AI for the first time, getting a team on board, or wondering why current tools aren’t delivering? Start where you are.</p>
            </div>
            <ul className="site-service-list">
              {services.map((service, index) => (
                <li key={service.title} className="grid grid-cols-[2rem_1fr] gap-x-4 py-7 first:pt-0">
                  <span className="site-service-number tabular-nums">0{index + 1}</span>
                  <span>
                    <span className="block text-xl font-medium md:text-2xl">{service.title}</span>
                    <span className="site-muted mt-2 block max-w-[52ch] text-pretty">{service.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="site-banner ai-horizon-banner relative overflow-hidden">
          <Image src={images.horizon.src} alt={images.horizon.alt} fill sizes="100vw" className="object-cover" />
        </div>

        <section id="engagements" className="scroll-mt-8 py-20 md:py-28">
          <div className="site-container">
            <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-5">
                <p className="site-eyebrow site-eyebrow-accent">Ways to work together</p>
                <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">The support that fits your next step.</h2>
              </div>
              <p className="site-muted max-w-[44ch] text-pretty text-lg">A focused assessment, help putting a plan into practice, or someone to turn to along the way.</p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {engagements.map(engagement => (
                <article key={engagement.title} className={'build-project flex flex-col p-8 site-tint-' + engagement.tint}>
                  <p className="site-eyebrow">{engagement.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{engagement.title}</h3>
                  <p className="build-project-muted mt-3 text-pretty">{engagement.description}</p>
                  <ul className="mt-6 flex flex-grow flex-col gap-3">
                    {engagement.items.map(item => <li key={item} className="flex gap-3 text-pretty"><Check />{item}</li>)}
                  </ul>
                  <Link href="/contact" className={(engagement.featured ? 'site-primary' : 'seo-secondary') + ' mt-8 justify-center'}>Talk through your needs <Arrow /></Link>
                </article>
              ))}
            </div>
            <p className="site-muted mt-8 max-w-[70ch] text-pretty text-sm">We agree on the scope and price before work begins. Any paid tool subscriptions are discussed separately.</p>
          </div>
        </section>

        <section className="site-dark site-offer py-20 md:py-24">
          <div className="site-container grid items-end gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col items-start gap-6">
              <p className="site-eyebrow site-gold">Let’s find your starting point</p>
              <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-6xl">Bring us the question. We’ll help with the next step.</h2>
              <p className="site-muted max-w-[46ch] text-pretty text-lg">
                Tell us what you’re trying to improve or where you’re stuck. Need purpose-built software instead? That’s our <Link href="/build" className="underline underline-offset-4 hover:text-[var(--site-gold)]">Custom Apps</Link> service.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link href="/contact" className="site-primary">Start the conversation <Arrow /></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
