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

export const metadata = pageMetadata('/web-design', 'Managed Web Design Services | PathSix Solutions', 'Custom websites built, hosted, and maintained for a low monthly fee. See your site before you pay. Starting at $159/mo with zero upfront costs.')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'PathSix Web Designs - Custom Managed Websites',
  url: 'https://www.pathsixsolutions.com/web-design',
  description: 'Affordable managed web design services. Custom websites built, hosted, and maintained for a low monthly fee.',
}

/** Page photography. Prompts are recorded in design/homepage-imagery.txt. */
const images = {
  hero: { src: '/images/web-hero-worktable.webp', alt: 'A designer placing an orange color swatch on a printed website layout, beside a fan of color cards.' },
  street: { src: '/images/web-main-street.webp', alt: 'A small-town Main Street at golden hour with colorful shop awnings and a water tower.' },
  preview: { src: '/images/web-preview-meeting.webp', alt: 'A web designer and a shop owner reviewing a homepage preview on a laptop at his workbench.' },
}

const projects = [
  { name: 'ASFI Construction', type: 'Construction & infrastructure', image: '/images/asfi.jpg', href: 'https://asficonstruction.com', tint: 'peach' },
  { name: 'Center for Social Success', type: 'Therapy & family services', image: '/images/cssdallas.jpg', href: 'https://cssdallas.com', tint: 'sky' },
  { name: 'All Seasons Foam', type: 'Insulation & building services', image: '/images/allseasons.jpg', href: 'https://allseasonsfoam.com', tint: 'butter' },
  { name: 'Lone Star Glass & Shower', type: 'Glass & shower installation', image: '/images/lonestar.jpg', href: 'https://lsglassandshower.com', tint: 'sage' },
  { name: 'Permian Alliance', type: 'Business association', image: '/images/permian_alliance.jpg', href: 'https://permianalliance.com', tint: 'sage' },
  { name: 'Odessa Symphony Guild', type: 'Community & the arts', image: '/images/osg.jpg', href: 'https://odessasymphonyguild.org', tint: 'peach' },
  { name: 'Lotus RPG', type: 'Tabletop role-playing games', image: '/images/lotusrpg.jpg', href: 'https://lotusrpg.com', tint: 'sky' },
  { name: 'PathSix Games', type: 'Our own game studio', image: '/images/games.jpg', href: 'https://pathsix.games', tint: 'butter' },
]

const inclusions = [
  { title: 'Design that feels like you', description: 'Your colors, your voice, your customers. A custom layout built around your business, never a template with your logo dropped in.' },
  { title: 'Good on every screen', description: 'Responsive layouts, clear navigation, and fast load times, so customers can explore on their phone or at their desk.' },
  { title: 'Hosting & domain management', description: 'Managed hosting, domain management, and an SSL certificate. The essentials are part of the service.' },
  { title: 'Content updates', description: 'New services, updated details, or fresh photos. Monthly content updates are handled within your service plan.' },
  { title: 'Maintenance & security', description: 'Ongoing maintenance and security monitoring. No WordPress, no plugins, no headaches.' },
  { title: 'A search-ready foundation', description: 'Page titles, descriptions, structured data, and sitemap preparation, with indexing support and attention to speed.' },
]

const steps = [
  { title: 'Tell us about your business', description: 'What do you do? Who are your customers? What does your website need to help them do? We start with the answers.' },
  { title: 'See your homepage', description: 'Get a custom homepage preview in 3–5 days. Decide whether it feels right before you pay anything.' },
  { title: 'Let us take it from there', description: 'Once you decide to move forward, we build out the site, get it online, and handle the hosting and ongoing care.' },
]

const faqs = [
  { question: 'What does the free preview include?', answer: 'A custom preview of your homepage, so you can see the design direction before you pay. Turnaround is currently 3–5 days. The rest of the website is built after you decide to move forward.' },
  { question: 'Is $159 the price for every website?', answer: 'Managed websites start at $159 per month with no upfront cost. We talk through the pages, features, and ongoing work you need, and confirm the scope and price for your site before you commit.' },
  { question: 'Can you update the website after it launches?', answer: 'Yes. Monthly content updates, maintenance, hosting, and security monitoring are part of the managed service. Most updates are made within a day.' },
  { question: 'Is SEO included?', answer: 'Every site includes a technical SEO foundation. Ongoing content, Google Business Profile management, and broader local search work are a separate SEO service. No specific ranking is promised.' },
  { question: 'What if I need more than a website?', answer: 'PathSix also builds CRM systems, custom applications, and integrations, and offers AI consulting. We can talk through whether an existing tool or a custom project is the right fit.' },
]

function Arrow({ direction = 'up-right' }: { direction?: 'up-right' | 'down' }) {
  return <span aria-hidden="true" className="site-arrow">{direction === 'down' ? '↓' : '↗'}</span>
}

function Plus() {
  return (
    <>
      <span aria-hidden="true" className="site-expand-plus text-2xl font-light">+</span>
      <span aria-hidden="true" className="site-expand-minus text-2xl font-light">−</span>
    </>
  )
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block min-w-0" aria-label={'Visit the ' + project.name + ' website'}>
      <figure>
        <div className={'site-project-frame site-tint-' + project.tint}>
          <div className="site-project-shot relative aspect-[16/10] overflow-hidden">
            <Image src={project.image} alt="" fill sizes="(min-width: 1440px) 600px, (min-width: 768px) 44vw, 90vw" className="object-cover object-top" />
          </div>
        </div>
        <figcaption className="flex items-baseline justify-between gap-6 pt-5">
          <p className="text-lg font-semibold group-hover:underline">{project.name}</p>
          <p className="site-muted hidden text-sm sm:block">{project.type}</p>
        </figcaption>
      </figure>
    </a>
  )
}

function Hero() {
  return (
    <section className="site-dark overflow-hidden">
      <div className="site-container grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[5fr_6fr] lg:py-24">
        <div className="flex flex-col items-start">
          <p className="site-eyebrow site-gold">Web design · Fully managed</p>
          <h1 className="mt-6 max-w-[14ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            A website you&apos;re <span className="site-gold">proud to share.</span>
          </h1>
          <p className="site-muted mt-6 max-w-[40ch] text-pretty text-lg md:text-xl">
            Made to look like you. Built to work for your customers. And looked after, so you never have to babysit it.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href="/contact" className="site-primary">Request your free preview <Arrow /></Link>
            <a href="#how-it-works" className="site-text-link">How it works <Arrow direction="down" /></a>
          </div>
          <p className="mt-8 text-sm text-[#d5d9d0]">From $159/month · No upfront cost · See it before you pay</p>
        </div>
        <div className="web-hero-art">
          <div className="web-hero-photo relative overflow-hidden">
            <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
          <a href="#portfolio" className="web-hero-card group" aria-label="See our work, starting with ASFI Construction">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/asfi.jpg" alt="" fill priority sizes="(min-width: 1024px) 300px, 55vw" className="object-cover object-top" />
            </div>
            <p className="flex items-center justify-between gap-4 px-4 py-3 text-sm font-medium">
              <span>Built for ASFI Construction</span><Arrow />
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-8 py-20 md:py-28">
      <div className="site-container">
        <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-5">
            <p className="site-eyebrow site-eyebrow-accent">Recent work</p>
            <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Their business. <span className="site-orange-ink">Their own look.</span>
            </h2>
          </div>
          <p className="site-muted max-w-[42ch] text-pretty text-lg">A contractor should feel like a contractor. A therapy practice should feel welcoming. The design starts with who you are and who you&apos;re trying to reach.</p>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {projects.slice(0, 4).map(project => <ProjectCard key={project.href} project={project} />)}
        </div>
        <details className="site-disclosure mt-12 border-y">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-8 text-lg font-semibold">
            More from the portfolio <Plus />
          </summary>
          <div className="grid gap-x-8 gap-y-10 pb-10 pt-4 md:grid-cols-2">
            {projects.slice(4).map(project => <ProjectCard key={project.href} project={project} />)}
          </div>
        </details>
        <div className="mt-10 flex justify-center">
          <a href="https://www.designrush.com" target="_blank" rel="noopener noreferrer" className="opacity-90 transition-opacity hover:opacity-100">
            <Image src="/images/verified_agencyv1.png" alt="DesignRush verified agency badge" width={240} height={96} className="h-auto w-[200px] object-contain" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Included() {
  return (
    <>
      <div className="site-banner web-street-banner relative overflow-hidden">
        <Image src={images.street.src} alt={images.street.alt} fill sizes="100vw" className="object-cover" />
      </div>
      <section id="pricing" className="site-dark scroll-mt-8 py-20 md:py-28">
        <div className="site-container">
          <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col gap-5">
              <p className="site-eyebrow site-gold">One managed service</p>
              <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">A great website. Someone to look after it.</h2>
            </div>
            <p className="site-muted max-w-[42ch] text-pretty text-lg">The design gets you started. Hosting, maintenance, and ongoing updates keep your website in good hands.</p>
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div className="web-plan site-tint-butter flex flex-col items-start gap-5 self-start p-8 md:p-10">
              <p className="site-eyebrow">Managed websites from</p>
              <p className="text-7xl font-semibold tracking-tight tabular-nums md:text-8xl">$159<span className="ml-2 text-xl font-normal tracking-normal">/ month</span></p>
              <p className="text-xl font-semibold">No upfront cost.</p>
              <p className="max-w-[34ch] text-pretty">See a custom homepage preview before you pay. We agree on your site&apos;s scope and price before you move forward.</p>
              <Link href="/contact" className="site-primary mt-2">Request your free preview <Arrow /></Link>
            </div>
            <ul className="site-service-list">
              {inclusions.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-x-4 py-6">
                  <span className="site-service-number tabular-nums">0{index + 1}</span>
                  <span>
                    <span className="block text-xl font-medium">{item.title}</span>
                    <span className="site-muted mt-2 block max-w-[50ch] text-pretty">{item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="web-seo-note mt-14 flex flex-col justify-between gap-5 border-t pt-7 md:flex-row md:items-center">
            <p className="site-muted max-w-[56ch] text-pretty">Want ongoing content and local search support? That&apos;s a separate service, built on your website&apos;s technical foundation.</p>
            <Link href="/seo" className="site-text-link shrink-0">Explore SEO services <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-8 py-20 md:py-28">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/3]">
          <Image src={images.preview.src} alt={images.preview.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[68%_center]" />
        </div>
        <div>
          <p className="site-eyebrow site-eyebrow-accent">An easier way to start</p>
          <h2 className="mt-5 max-w-[16ch] text-balance text-4xl font-semibold tracking-tight md:text-5xl">See it before you commit.</h2>
          <ol className="mt-10">
            {steps.map((step, index) => (
              <li key={step.title} className="web-step grid grid-cols-[2.5rem_1fr] gap-x-4 py-6">
                <span className="web-step-number tabular-nums">{index + 1}</span>
                <span>
                  <span className="block text-xl font-semibold">{step.title}</span>
                  <span className="site-muted mt-2 block max-w-[46ch] text-pretty">{step.description}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Questions() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="site-container grid items-start gap-12 lg:grid-cols-[2fr_3fr]">
        <figure className="site-quote site-tint-peach flex flex-col gap-6 p-8 md:p-10">
          <p aria-hidden="true" className="site-quote-mark">“</p>
          <blockquote><p className="text-pretty text-2xl font-medium tracking-tight">Working with Will was easy. He was much faster than we expected and had our new website up and running quickly. He is able to make updates within a day at the most.</p></blockquote>
          <figcaption className="flex flex-col gap-1">
            <p className="font-semibold">Melissa</p>
            <p className="site-muted">Center for Social Success</p>
          </figcaption>
        </figure>
        <div>
          <p className="site-eyebrow site-eyebrow-accent">Good questions</p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">Before we get started.</h2>
          <div className="mt-8">
            {faqs.map(faq => (
              <details key={faq.question} className="site-disclosure border-t last:border-b">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-3 font-semibold">
                  {faq.question} <Plus />
                </summary>
                <p className="site-muted max-w-[56ch] pb-6 text-pretty">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Offer() {
  return (
    <section className="site-dark site-offer py-20 md:py-24">
      <div className="site-container grid items-end gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="flex flex-col items-start gap-6">
          <p className="site-eyebrow site-gold">Let&apos;s make something that feels like you</p>
          <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-6xl">Your business. Your next first impression.</h2>
          <p className="site-muted max-w-[44ch] text-pretty text-lg">Tell us a little about your business. In 3–5 days, we&apos;ll show you what your homepage could look like.</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:items-end">
          <Link href="/contact" className="site-primary">Get your free preview <Arrow /></Link>
          <a href="mailto:design@pathsixsolutions.com" className="site-text-link break-all">design@pathsixsolutions.com</a>
        </div>
      </div>
    </section>
  )
}

export default function WebDesignPage() {
  return (
    <div className={inter.className + ' site-page antialiased'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <div className="site-promise">
          <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5">
            <p className="font-medium">Your website. Off your to-do list.</p>
            <p className="site-eyebrow">Custom design · Managed hosting · Ongoing care</p>
          </div>
        </div>
        <Portfolio />
        <Included />
        <HowItWorks />
        <Questions />
        <Offer />
      </main>
      <SiteFooter />
    </div>
  )
}
