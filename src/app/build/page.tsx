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

        {/* Solutions / Use Cases */}
        <section id="solutions" className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">What We Build</h2>
              <div className="h-1 w-20 bg-cyan-500 rounded"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Use Case 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Client Portals</h3>
                  <p className="text-slate-400 mb-4">Stop emailing PDFs. Give your clients a secure login to view their project status, download invoices, and upload files directly.</p>
                  <div className="w-full h-48 bg-slate-800 rounded border border-slate-700 overflow-hidden relative group">
                    <Image
                      src="/images/portal.jpg"
                      alt="Client Portal UI"
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <span className="bg-black/50 text-white px-3 py-1 rounded text-xs backdrop-blur-sm">Secure Client Access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Internal Tools & Calculators</h3>
                  <p className="text-slate-400 mb-4">Do you have a complex pricing formula only one person understands? We turn that logic into an easy-to-use web form for your sales team.</p>
                  <div className="w-full h-48 bg-slate-800 rounded border border-slate-700 overflow-hidden relative group">
                    <Image
                      src="/images/internal_tools.jpg"
                      alt="Internal Tool UI"
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <span className="bg-black/50 text-white px-3 py-1 rounded text-xs backdrop-blur-sm">Complex Logic Simplified</span>
                    </div>
                  </div>
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

              {/* Step 2: MVP */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500 shadow-xl shadow-cyan-500/10 flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-[13px]">POPULAR</div>
                <h3 className="text-xl font-bold text-white mb-2">02. MVP Sprint</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">Starts at $2,500</div>
                <p className="text-xs text-cyan-600 font-bold uppercase mb-6">2-Week Turnaround</p>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  We build the &quot;Minimum Viable Product.&quot; The core feature you need to solve the immediate problem. Fast, functional, and extendable.
                </p>
                <ul className="text-sm text-slate-300 space-y-2 mb-8">
                  <li>✓ Database Setup</li>
                  <li>✓ User Authentication</li>
                  <li>✓ Core Business Logic</li>
                  <li>✓ Hosted & Secure</li>
                </ul>
                <a href="/contact" className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-bold transition-colors text-center">Start Build</a>
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