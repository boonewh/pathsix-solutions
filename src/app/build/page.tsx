import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software Development | PathSix Solutions',
  description: 'Replace spreadsheets with custom web applications. Client portals, internal tools, and business software built for your exact workflow.',
  openGraph: {
    title: 'Custom Software & Web Apps | PathSix Solutions',
    description: 'Custom web applications and internal tools to streamline your operations.',
    url: 'https://pathsixsolutions.com/build',
  },
}

export default function BuildPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'PathSix Build - Custom Software Engineering',
    url: 'https://pathsixsolutions.com/build',
    description: 'Custom web applications and internal tools to replace spreadsheets and streamline operations.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-slate-950 text-slate-300">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, transparent, 5%, white, 95%, transparent)'
          }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Custom Engineering
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                  Stop running your business on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200">spreadsheets.</span>
                </h1>
                <p className="text-xl text-slate-400 mb-8 font-light leading-relaxed">
                  Off-the-shelf software is too rigid. Excel is too messy. We build custom, secure web applications tailored exactly to your operational workflows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 text-center">
                    Start a Build
                  </a>
                  <a href="#process" className="px-8 py-4 bg-slate-800 border border-slate-700 hover:border-cyan-500 text-white font-medium rounded-lg transition-all text-center">
                    How It Works
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 aspect-video group">
                  <Image
                    src="/images/build_hero.jpg"
                    alt="Blueprint to Application"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 border-t border-slate-700 p-4 font-mono text-xs text-cyan-400 z-10">
                    <div className="flex gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p>&gt; Compiling solution...</p>
                    <p>&gt; Removing operational bottlenecks...</p>
                    <p className="text-white">&gt; Build Complete.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem: The Spreadsheet Ceiling */}
        <section id="problems" className="py-24 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Signs you&apos;ve hit the &quot;Spreadsheet Ceiling&quot;</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-16">
              Spreadsheets are great for prototyping. They are terrible for running a company. If these sound familiar, it&apos;s time to build.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-red-500/50 transition-colors">
                <div className="text-red-500 text-4xl mb-4 font-mono">!</div>
                <h3 className="text-xl font-bold text-white mb-2">Version Control Chaos</h3>
                <p className="text-slate-400 text-sm">&quot;Who has the latest version? Is it &apos;Final_v3_REAL.xlsx&apos; or &apos;Final_v4.xlsx&apos;?&quot; Data gets overwritten and lost.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-red-500/50 transition-colors">
                <div className="text-red-500 text-4xl mb-4 font-mono">!</div>
                <h3 className="text-xl font-bold text-white mb-2">Security Nightmares</h3>
                <p className="text-slate-400 text-sm">Emailing sensitive client lists or financial data as attachments. One wrong forward and your data is public.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-red-500/50 transition-colors">
                <div className="text-red-500 text-4xl mb-4 font-mono">!</div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Automation</h3>
                <p className="text-slate-400 text-sm">You spend 5 hours a week copy-pasting data from one sheet to another just to generate a report.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions / Real Projects */}
        <section id="solutions" className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">What We Build</h2>
              <div className="h-1 w-20 bg-cyan-500 rounded"></div>
            </div>
            <p className="text-slate-400 mb-16 max-w-2xl">These aren&apos;t mockups. Every project below is in production, handling real users and real data.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Project 1 — CABC Email Router */}
              <div className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Webhook Automation</div>
                    <h3 className="text-xl font-bold text-white">Booster Club Purchase Router</h3>
                  </div>
                  <span className="flex-shrink-0 text-xs font-bold text-slate-500 border border-slate-600 rounded px-2 py-1 uppercase tracking-wide">Production</span>
                </div>
                <p className="text-slate-400 text-sm italic border-l-2 border-slate-600 pl-4">
                  &ldquo;A school athletics booster club was manually checking Stripe and forwarding every membership, yard sign, and donation notification to the right person by hand.&rdquo;
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Stripe purchases automatically route to the right inbox — zero manual forwarding</li>
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Admin dashboard with per-recipient delivery tracking, fulfillment workflow, and CSV export</li>
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Passwordless admin access via magic link — no credentials to manage</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700">
                  {['Next.js', 'Supabase', 'Stripe', 'Resend'].map(t => (
                    <span key={t} className="text-xs text-slate-500 border border-slate-700 rounded px-2 py-0.5">{t}</span>
                  ))}
                  <a href="https://willboone.dev/#cabc" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-cyan-500 hover:text-cyan-400 font-medium transition-colors">Case study ↗</a>
                </div>
              </div>

              {/* Project 2 — OSG Belles & Beaux */}
              <div className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Payments & Registration</div>
                    <h3 className="text-xl font-bold text-white">Symphony Guild Student Platform</h3>
                  </div>
                  <span className="flex-shrink-0 text-xs font-bold text-slate-500 border border-slate-600 rounded px-2 py-1 uppercase tracking-wide">Production</span>
                </div>
                <p className="text-slate-400 text-sm italic border-l-2 border-slate-600 pl-4">
                  &ldquo;A performing arts organization was collecting student registrations on paper forms and chasing unpaid dues by email. They had a hard deadline — a parent meeting where signups were expected — and needed a fully working system in two weeks.&rdquo;
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Students register online; a QuickBooks invoice is created automatically in the background</li>
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Roster marks paid the moment QuickBooks payment clears — no one touches a dashboard</li>
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Admin panel: real-time roster, grade filters, KPI cards, and configurable pricing</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700">
                  {['Next.js', 'Supabase', 'QuickBooks API', 'Vercel'].map(t => (
                    <span key={t} className="text-xs text-slate-500 border border-slate-700 rounded px-2 py-0.5">{t}</span>
                  ))}
                  <a href="https://willboone.dev/#osg" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-cyan-500 hover:text-cyan-400 font-medium transition-colors">Case study ↗</a>
                </div>
              </div>

              {/* Project 3 — PathSix CRM */}
              <div className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Custom SaaS Platform</div>
                    <h3 className="text-xl font-bold text-white">PathSix CRM</h3>
                  </div>
                  <span className="flex-shrink-0 text-xs font-bold text-slate-500 border border-slate-600 rounded px-2 py-1 uppercase tracking-wide">Production</span>
                </div>
                <p className="text-slate-400 text-sm italic border-l-2 border-slate-600 pl-4">
                  &ldquo;Field services businesses were tracking leads in spreadsheets, following up by memory, and had zero visibility into their pipeline or revenue.&rdquo;
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Full lead → client lifecycle: capture, assignment, follow-up, conversion, and project tracking</li>
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> 13 reporting endpoints: pipeline, revenue by client, MRR forecasting, retention, and more</li>
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> White-label config — each tenant gets their own branding, statuses, and feature set</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700">
                  {['React', 'Python', 'PostgreSQL', 'Fly.io'].map(t => (
                    <span key={t} className="text-xs text-slate-500 border border-slate-700 rounded px-2 py-0.5">{t}</span>
                  ))}
                  <a href="https://willboone.dev/#crm" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-cyan-500 hover:text-cyan-400 font-medium transition-colors">Case study ↗</a>
                </div>
              </div>

              {/* Project 4 — Sunday Nudge */}
              <div className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">AI-Powered App</div>
                    <h3 className="text-xl font-bold text-white">SMS Reminder Platform</h3>
                  </div>
                  <span className="flex-shrink-0 text-xs font-bold text-slate-500 border border-slate-600 rounded px-2 py-1 uppercase tracking-wide">Production</span>
                </div>
                <p className="text-slate-400 text-sm italic border-l-2 border-slate-600 pl-4">
                  &ldquo;Wanted to prove that AI-guided development could ship production-grade software. No app to download. No account to create. Just text it.&rdquo;
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Text naturally (&ldquo;Call client Tue 2pm&rdquo;) — Claude Haiku parses intent, schedules the reminder</li>
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> DST-safe scheduling, 14+ SMS commands, full TCPA compliance built in</li>
                  <li className="flex items-start gap-3"><span className="text-cyan-500 font-bold mt-0.5">✓</span> Ships as two products (personal + group) sharing a single core package</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700">
                  {['Next.js', 'Claude Haiku', 'Twilio', 'PostgreSQL'].map(t => (
                    <span key={t} className="text-xs text-slate-500 border border-slate-700 rounded px-2 py-0.5">{t}</span>
                  ))}
                  <a href="https://willboone.dev/#ai-builds" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-cyan-500 hover:text-cyan-400 font-medium transition-colors">Case study ↗</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Strategy */}
        <section id="process" className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Transparent Engineering</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Custom software is an investment. We don&apos;t do &quot;black box&quot; pricing. We start small, validate, and build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1: Blueprint */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-700 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400"></div>
                <h3 className="text-xl font-bold text-white mb-2">01. The Blueprint</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">$499</div>
                <p className="text-xs text-cyan-600 font-bold uppercase mb-6">Credited back if you build</p>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  We sit down to map out your entire workflow, database structure, and user needs. You get a technical roadmap PDF.
                </p>
                <a href="/contact" className="w-full py-3 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 text-white rounded font-medium transition-colors text-center">Book Session</a>
              </div>

              {/* Step 2: Build Subscription */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500 shadow-xl shadow-cyan-500/10 flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-[13px]">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-white mb-2">02. Build Subscription</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-1">$499<span className="text-lg text-slate-400 font-normal">/mo</span></div>
                <p className="text-xs text-cyan-600 font-bold uppercase mb-6">5-Month Minimum Contract</p>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  Most agencies quote a big project fee, take the money, and hand you something half-finished. We work differently. One monthly rate gets you a dedicated developer in your corner — building and iterating on your software every month until it&apos;s exactly what your business needs.
                </p>
                <ul className="text-sm text-slate-300 space-y-3 mb-8">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold mt-0.5">✓</span> Dedicated development hours each month</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold mt-0.5">✓</span> Continuous build, test, and iterate — no disappearing acts</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold mt-0.5">✓</span> Hosted, deployed, and production-ready from day one</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold mt-0.5">✓</span> You own 100% of the code, always</li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold mt-0.5">✓</span> Priority response between sessions</li>
                </ul>
                <a href="/contact" className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-bold transition-colors text-center">Start Your Build</a>
              </div>

              {/* Step 3: Enterprise */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-700 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-700"></div>
                <h3 className="text-xl font-bold text-white mb-2">03. Custom Scale</h3>
                <div className="text-3xl font-bold text-white mb-2">Custom Quote</div>
                <p className="text-xs text-slate-500 font-bold uppercase mb-6">Full Platform Build</p>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  For mature businesses needing a complete operating system. Integrations with Xero/QuickBooks, complex permissions, and mobile support.
                </p>
                <a href="/contact" className="w-full py-3 border border-slate-600 hover:border-white hover:text-white text-white rounded font-medium transition-colors text-center">Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s map out your solution.</h2>
            <p className="text-slate-400 mb-8">Not sure if you need a custom build? Let&apos;s chat. If we can solve it with a $20/month off-the-shelf tool, we&apos;ll tell you to buy that instead.</p>

            <a
              href="/contact"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 text-lg"
            >
              Request Blueprint Session
            </a>

            <p className="mt-6 text-slate-500 text-sm">
              Or email: <a href="mailto:build@pathsixsolutions.com" className="text-cyan-500 hover:text-cyan-400 underline">build@pathsixsolutions.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}