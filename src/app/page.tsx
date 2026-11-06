import { pageMetadata } from '@/lib/metadata'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import HeroMedia from '@/components/HeroMedia'
import { HomeHeader, HomeFooter } from '@/components/HomeChrome'

const inter = localFont({
  src: '../../public/fonts/InterVariable.woff2',
  display: 'swap',
  weight: '100 900',
})

export const metadata = pageMetadata('/', 'PathSix Solutions | Web Design, CRM & AI Consulting', 'Custom websites, SEO, CRM solutions, custom applications, and practical AI consulting for small businesses.')

// Schema markup for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PathSix Solutions',
  url: 'https://www.pathsixsolutions.com',
  logo: 'https://www.pathsixsolutions.com/images/pathsix_logo_optimized.png',
  description: 'Web design, SEO, CRM solutions, custom development, and AI consulting for small businesses.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10 Ave K E',
    addressLocality: 'Haskell',
    addressRegion: 'TX',
    postalCode: '79521',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '33.1576',
    longitude: '-99.7342',
  },
  telephone: '+1-325-305-9446',
  email: 'support@pathsixsolutions.com',
  priceRange: '$$',
  areaServed: {
    '@type': 'State',
    name: 'Texas',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+1-325-305-9446',
    email: 'support@pathsixsolutions.com',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://pathsixdesigns.com',
  ],
}

/**
 * Hero video: a designer and a shop owner at a laptop, dissolving to the owner smiling at his phone.
 * Phones get the 720p cut; desktops get WebM, with MP4 as the fallback.
 * The poster is the video's first frame and is shown on its own whenever the video can't or shouldn't play.
 */
const heroVideo = [
  { src: '/videos/home-hero-720.mp4', type: 'video/mp4', media: '(max-width: 767px)' },
  { src: '/videos/home-hero.webm', type: 'video/webm' },
  { src: '/videos/home-hero.mp4', type: 'video/mp4' },
]

const projects = [
  { name: 'ASFI Construction', type: 'Construction & infrastructure', image: '/images/asfi.jpg', href: 'https://asficonstruction.com', tint: 'peach' },
  { name: 'Center for Social Success', type: 'Therapy & family services', image: '/images/cssdallas.jpg', href: 'https://cssdallas.com', tint: 'sky' },
  { name: 'All Seasons Foam', type: 'Insulation & building services', image: '/images/allseasons.jpg', href: 'https://allseasonsfoam.com', tint: 'butter' },
  { name: 'Lone Star Glass & Shower', type: 'Glass & shower installation', image: '/images/lonestar.jpg', href: 'https://lsglassandshower.com', tint: 'sage' },
]

const services = [
  { name: 'Web design', href: '/web-design', description: 'A custom website that represents you well, with hosting, maintenance, and updates handled for you.' },
  { name: 'SEO & local search', href: '/seo', description: 'Help the right customers find your business and understand what you offer.' },
  { name: 'CRM solutions', href: '/crm', description: 'Keep your leads, follow-ups, and projects in a system that fits your team.' },
  { name: 'Custom applications', href: '/build', description: 'Purpose-built software for the work your spreadsheets and existing tools cannot handle.' },
  { name: 'AI consulting', href: '/ai-consulting', description: 'Choose useful AI tools, put them to work, and help your team use them confidently.' },
]

function Arrow({ direction = 'up-right' }: { direction?: 'up-right' | 'down' }) {
  return <span aria-hidden="true" className="home-arrow">{direction === 'down' ? '↓' : '↗'}</span>
}

function Hero() {
  return (
    <section className="home-hero relative isolate">
      <HeroMedia
        poster="/images/home-hero-poster.webp"
        posterAlt="A web designer and a shop owner looking at a laptop together at a sunlit workbench."
        sources={heroVideo}
        className="home-hero-frame"
      />
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="home-container home-hero-content relative flex flex-col items-start">
        <p className="home-eyebrow home-eyebrow-light">Custom websites · Fully managed</p>
        <h1 className="mt-6 max-w-[15ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          Websites for small businesses, <span className="home-gold">built with care.</span>
        </h1>
        <p className="mt-6 max-w-[40ch] text-pretty text-lg text-[#e9ebe4] md:text-xl">
          We design it, host it, and keep it up to date, so you can get back to running your business.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link href="/contact" className="home-primary">Request your free preview <Arrow /></Link>
          <a href="#selected-work" className="home-text-link">See our work <Arrow direction="down" /></a>
        </div>
        <p className="mt-8 text-sm text-[#d5d9d0]">Managed websites from $159/month · No upfront cost</p>
      </div>
      <p className="home-hero-caption" aria-hidden="true"><span />Built for people who build things.</p>
    </section>
  )
}

function PromiseStrip() {
  return (
    <div className="home-promise">
      <div className="home-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5">
        <p className="font-medium">You run your business. We&apos;ll handle the website.</p>
        <p className="home-eyebrow">Design · Hosting · Ongoing care</p>
      </div>
    </div>
  )
}

function SelectedWork() {
  return (
    <section id="selected-work" className="scroll-mt-8 py-20 md:py-28">
      <div className="home-container">
        <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-5">
            <p className="home-eyebrow home-eyebrow-accent">Selected websites</p>
            <h2 className="max-w-[20ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Your business has a personality. <span className="home-orange-ink">Your website should, too.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="home-muted max-w-[42ch] text-pretty text-lg">A construction company. A therapy practice. A local trade. Different people, different customers, each with a website that feels like their own.</p>
            <Link href="/web-design" className="home-text-link">Explore web design <Arrow /></Link>
          </div>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {projects.map(project => (
            <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="group block min-w-0" aria-label={'Visit the ' + project.name + ' website'}>
              <figure>
                <div className={'home-project-frame home-tint-' + project.tint}>
                  <div className="home-project-shot relative aspect-[16/10] overflow-hidden">
                    <Image src={project.image} alt="" fill sizes="(min-width: 1440px) 600px, (min-width: 768px) 44vw, 90vw" className="object-cover object-top" />
                  </div>
                </div>
                <figcaption className="flex items-baseline justify-between gap-6 pt-5">
                  <p className="text-lg font-semibold group-hover:underline">{project.name}</p>
                  <p className="home-muted hidden text-sm sm:block">{project.type}</p>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <>
      <div className="home-banner relative overflow-hidden">
        <Image src="/images/home-worktable-banner.webp" alt="Overhead view of two people working over floor plans with colorful material samples." fill sizes="100vw" className="object-cover" />
      </div>
      <section id="services" className="home-dark scroll-mt-8 py-20 md:py-28">
        <div className="home-container grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col items-start gap-6">
            <p className="home-eyebrow home-gold">Beyond the website</p>
            <h2 className="max-w-[17ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">Start with what your business needs.</h2>
            <p className="home-muted max-w-[38ch] text-pretty text-lg">A better website is just the beginning. When you need to get found, organize the work, or make sense of AI, you have someone to turn to.</p>
            <Link href="/contact" className="home-text-link">Talk through your next step <Arrow /></Link>
          </div>
          <ul className="home-service-list">
            {services.map((service, index) => (
              <li key={service.href}>
                <Link href={service.href} className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-4 py-7">
                  <span className="home-service-number tabular-nums">0{index + 1}</span>
                  <span>
                    <span className="block text-xl font-medium group-hover:underline md:text-2xl">{service.name}</span>
                    <span className="home-muted mt-2 block max-w-[48ch] text-pretty">{service.description}</span>
                  </span>
                  <span className="home-service-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-8 py-20 md:py-28">
      <div className="home-container grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <p className="home-eyebrow home-eyebrow-accent">The person behind PathSix</p>
          <h2 className="max-w-[20ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">Good work starts with a conversation.</h2>
          <p className="home-muted max-w-[44ch] text-pretty text-lg">I&apos;m Will. I build websites and software for small businesses, and help people make better use of the technology they already have.</p>
          <p className="home-muted max-w-[44ch] text-pretty text-lg">Tell me what you&apos;re trying to improve. I&apos;ll help you work out what makes sense, and stay involved as we put it to work.</p>
          <Link href="/contact" className="home-text-link">Let&apos;s talk <Arrow /></Link>
        </div>
        <figure className="home-quote home-tint-butter flex flex-col gap-6 p-8 md:p-12">
          <p aria-hidden="true" className="home-quote-mark">“</p>
          <blockquote><p className="max-w-[30ch] text-pretty text-2xl font-medium tracking-tight md:text-3xl">Working with Will was easy. He was much faster than we expected and had our new website up and running quickly.</p></blockquote>
          <figcaption className="flex flex-col gap-1">
            <p className="font-semibold">Melissa</p>
            <p className="home-muted">Center for Social Success</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function Offer() {
  return (
    <section id="contact" className="home-dark home-offer py-20 md:py-24">
      <div className="home-container grid items-end gap-12 lg:grid-cols-[3fr_2fr]">
        <div className="flex flex-col items-start gap-6">
          <p className="home-eyebrow home-gold">Your next chapter starts here</p>
          <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s make your business look the part.</h2>
          <p className="home-muted max-w-[44ch] text-pretty text-lg">Custom design, hosting, maintenance, and content updates. See your homepage before you pay.</p>
          <Link href="/contact" className="home-primary mt-2">Request your free preview <Arrow /></Link>
        </div>
        <div className="flex flex-col items-start gap-3 lg:items-end">
          <p className="home-muted">Managed websites from</p>
          <p className="home-price text-7xl font-semibold tracking-tight tabular-nums md:text-8xl">$159<span className="ml-2 text-xl font-normal tracking-normal text-[#d5d9d0]">/ month</span></p>
          <p className="home-muted">No upfront cost.</p>
          <Link href="/web-design" className="home-text-link mt-2">What&apos;s included <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className={inter.className + ' home-page antialiased'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHeader />
      <main>
        <Hero />
        <PromiseStrip />
        <SelectedWork />
        <Services />
        <About />
        <Offer />
      </main>
      <HomeFooter />
    </div>
  )
}
