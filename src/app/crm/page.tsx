import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom CRM Solutions | PathSix Solutions',
  description: 'Lean, focused CRM built for your workflow. No bloat, no complexity - just the features your business actually needs.',
  openGraph: {
    title: 'Custom CRM Software | PathSix Solutions',
    description: 'The CRM you actually need. Lightweight, custom-built for your specific business processes.',
    url: 'https://pathsixsolutions.com/crm',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function CRMPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PathSix CRM',
    url: 'https://pathsixsolutions.com/crm',
    applicationCategory: 'BusinessApplication',
    description: 'The CRM You Actually Need - Focused, lean, custom CRM solution with essential features and no bloat.',
    offers: {
      '@type': 'Offer',
      category: 'Custom Pricing',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-slate-950">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl mix-blend-screen"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-500 text-xs font-bold uppercase tracking-widest mb-8">
              Focused. Lean. Custom.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              The CRM You <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Actually Need.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              Tired of CRM bloat? PathSix CRM starts with the essentials and builds from there. Only what you need, nothing you don&apos;t.
            </p>

            <div className="flex justify-center gap-4 mb-20">
              <a href="https://pathsix-crm-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-lg transition-all shadow-xl shadow-blue-600/25 transform hover:-translate-y-1">
                Try The Demo
              </a>
              <a href="#features" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-lg transition-all border border-slate-700">
                See Features
              </a>
            </div>

            {/* Dashboard Mockup Container */}
            <div className="relative mx-auto max-w-5xl">
              {/* Browser Frame */}
              <div className="rounded-xl bg-slate-900 p-2 border border-slate-700 shadow-2xl">
                {/* Browser Top Bar */}
                <div className="h-8 bg-slate-800 rounded-t-lg flex items-center px-4 gap-2 border-b border-slate-700 mb-1">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-4 flex-1 h-5 bg-slate-900 rounded text-xs flex items-center px-3 text-slate-500 font-mono">
                    crm.pathsixsolutions.com/dashboard
                  </div>
                </div>
                {/* Image Area */}
                <div className="relative rounded overflow-hidden aspect-[21/10] bg-slate-100">
                  <Image src="/images/dashboard.jpg" alt="PathSix CRM Dashboard" fill className="object-contain object-top" />
                </div>
              </div>
              {/* Decorative Elements behind screenshot */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* Philosophy / Features */}
        <section id="features" className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Intuitive. Effective. Fast.</h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-lg">
                Forget CRMs packed with features you&apos;ll never touch. We offer a clean, powerful foundation. We believe your CRM should work for <em>you</em>, not the other way around.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lead Management</h3>
                <p className="text-slate-400">Stay organized with essential contact tracking. Know exactly who needs a follow-up today.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Projects & Accounts</h3>
                <p className="text-slate-400">Track every job from start to finish. Connect leads to specific company accounts seamlessly.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Activity Logs</h3>
                <p className="text-slate-400">Full accountability. See who touched a file, who called a client, and when it happened.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Role Management</h3>
                <p className="text-slate-400">Secure access control. Assign tasks and limit visibility based on team roles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section id="reports" className="py-24 bg-slate-950 border-t border-slate-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold text-white mb-6">Reports That <br/><span className="text-blue-500">Actually Matter.</span></h2>
                <p className="text-slate-400 mb-8">
                  Most tools give you 50 charts you don&apos;t understand. We build the insights you actually need to run your business.
                </p>
                <div className="p-6 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <h4 className="text-blue-100 font-bold mb-2">Custom Reports</h4>
                  <p className="text-sm text-blue-100/70">
                    Tell us what you need—we&apos;ll build it. These are just starting points. Your business is unique, and your reports should be too.
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Report List Items */}
                  <div className="flex items-start p-4 bg-slate-800 rounded border border-slate-700">
                    <div className="flex-shrink-0 mt-1 mr-3 text-green-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Sales Pipeline Report</h4>
                      <p className="text-xs text-slate-500 mt-1">Track leads by stage and value for forecasting.</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-slate-800 rounded border border-slate-700">
                    <div className="flex-shrink-0 mt-1 mr-3 text-yellow-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Lead Source Report</h4>
                      <p className="text-xs text-slate-500 mt-1">See which sources deliver your best conversions.</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-slate-800 rounded border border-slate-700">
                    <div className="flex-shrink-0 mt-1 mr-3 text-blue-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Revenue by Project</h4>
                      <p className="text-xs text-slate-500 mt-1">Identify your highest-value client relationships.</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-slate-800 rounded border border-slate-700">
                    <div className="flex-shrink-0 mt-1 mr-3 text-red-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Follow-Up Alerts</h4>
                      <p className="text-xs text-slate-500 mt-1">Never let a lead or client go cold again.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Your CRM. Your Way.</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              No bloat. No unnecessary reports. Just a powerful, adaptable CRM built directly into your website environment.
              <br/><br/>
              <span className="font-bold text-white">Custom pricing based on your needs.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://pathsix-crm-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-xl">
                Experience The Demo
              </a>
              <a href="/contact" className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Get In Touch
              </a>
            </div>
            <p className="mt-4 text-sm text-blue-200/60">Demo version is read-only.</p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let&apos;s discuss your CRM needs and build something that actually works for your business.
            </p>

            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 text-lg"
            >
              Contact Us
            </a>

            <p className="mt-6 text-slate-500 text-sm">
              Or email directly: <a href="mailto:crm@pathsixsolutions.com" className="text-blue-500 hover:text-blue-400 underline">crm@pathsixsolutions.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}