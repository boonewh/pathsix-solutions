import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managed Web Design Services | PathSix Solutions',
  description: 'Custom websites built, hosted, and maintained for a low monthly fee. See your site before you pay. Starting at $159/mo with zero upfront costs.',
  openGraph: {
    title: 'Affordable Managed Web Design | PathSix Solutions',
    description: 'Custom websites you can actually afford. Build, host, and maintain your professional website for $159/mo.',
    url: 'https://pathsixsolutions.com/web-design',
    images: [{ url: 'https://pathsixsolutions.com/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function WebDesignPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'PathSix Web Designs - Custom Managed Websites',
    url: 'https://pathsixsolutions.com/web-design',
    description: 'Affordable managed web design services. Custom websites built, hosted, and maintained for a low monthly fee.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="font-sans text-slate-300 antialiased bg-slate-950">
        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-20 lg:pt-0">
          {/* THE IMAGE BACKGROUND (Portfolio Collage) */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] h-full opacity-40 lg:opacity-100 mix-blend-lighten pointer-events-none">
            <Image
              src="/images/web_hero.jpg"
              alt="Digital Workspace"
              fill
              className="object-cover object-left lg:object-center grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent lg:hidden"></div>
          </div>

          {/* CONTENT CONTAINER */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-500 text-xs font-bold uppercase tracking-widest mb-8">
                Managed Web Services
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                Custom Websites <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
                  You Can Afford.
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-lg border-l-4 border-blue-600 pl-6">
                We build, host, and maintain your professional website for a low monthly fee. See your site before you pay a cent.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a href="/contact" className="group relative px-8 py-4 bg-blue-600 rounded-xl leading-none flex items-center divide-x divide-blue-500 overflow-hidden shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all hover:-translate-y-1">
                  <span className="pr-6 text-white font-bold text-lg">Request Preview</span>
                  <span className="pl-6 text-blue-200 group-hover:text-white transition">
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </a>

                <a href="#how-it-works" className="px-8 py-4 rounded-xl text-slate-300 font-bold text-lg hover:text-white hover:bg-white/5 transition-all border border-slate-700 hover:border-white/20 flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  How it works
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Value Proposition */}
        <section id="how-it-works" className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Abstract Tech/Server Representation */}
              <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-20 rounded-full"></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                  {/* Abstract "Code/Server" Visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse"></div>
                    <div className="h-32 bg-slate-900 rounded border border-slate-700 p-4 mt-4">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span>Uptime</span>
                        <span className="text-green-500">99.99%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-full"></div>
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                        <span>Security</span>
                        <span className="text-blue-500">SSL Active</span>
                      </div>
                    </div>
                    <div className="absolute -right-6 -bottom-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg font-bold">
                      Managed Hosting
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Running a business is hard. <br/><span className="text-blue-500">Your website shouldn&apos;t be.</span></h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900/30 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Zero Upfront Cost</h3>
                      <p className="mt-2 text-slate-400">Avoid big agency fees. We operate on a subscription model so you can keep your cash flow healthy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900/30 border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Fully Managed</h3>
                      <p className="mt-2 text-slate-400">Hosting, security, updates, and maintenance are all included. You run your business, we run your site.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing / Features Grid */}
        <section id="pricing" className="py-24 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything included. One monthly price.</h2>
              <p className="text-lg text-slate-400">Stop paying for hosting, plugins, and developer hours separately.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Design</h3>
                <p className="text-slate-400">We don&apos;t use cookie-cutter templates. We design for your brand and your goals.</p>
              </div>

              {/* Card 2 (Featured - Darker/Premium) */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-blue-500 relative transform md:-translate-y-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Your Site</h3>
                <p className="text-slate-400 mb-6">Hosting, SSL security certificates, and domain management included.</p>
                <div className="text-3xl font-bold text-white"><span className="text-lg text-slate-500 font-normal">Starting at </span>$159<span className="text-lg text-slate-500 font-normal">/mo</span></div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">SEO Optimized</h3>
                <p className="text-slate-400">Google Business Profile setup, local keyword optimization, and review management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="portfolio" className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">Recent Work</h2>

            {/* Top Row - 3 Projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Project 1 */}
              <div className="group relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/asfi.jpg"
                    alt="ASFI Website"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/allseasons.jpg"
                    alt="All Seasons Website"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/cssdallas.jpg"
                    alt="CSS Dallas Website"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial - Centered */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-slate-800 p-10 md:p-12 rounded-2xl border border-slate-700 relative shadow-xl">
                <div className="text-6xl text-blue-900 absolute top-6 left-6">&quot;</div>
                <p className="text-slate-300 italic relative z-10 mb-6 text-lg md:text-xl">
                  Working with Will was easy. He was much faster than we expected and had our new website up and running quickly. He is able to make updates within a day at the most.
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="font-bold text-white">
                    Melissa <br/>
                    <span className="text-sm text-blue-500 font-normal">Center for Social Success</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - 3 Projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project 4 */}
              <div className="group relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/permian_alliance.jpg"
                    alt="Permian Alliance Website"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project 5 */}
              <div className="group relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/games.jpg"
                    alt="Games Website"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project 6 */}
              <div className="group relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/lotusrpg.jpg"
                    alt="Lotus RPG Website"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* DesignRush Banner Spot */}
            <div className="mt-20 flex justify-center">
              <a
                href="https://www.designrush.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center relative hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/verified_agencyv1.png"
                  alt="Design Rush Verified Badge"
                  width={400}
                  height={160}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See your future website.</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              We&apos;ll build a custom preview of your homepage in 3-5 days. If you don&apos;t love it, you don&apos;t pay.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-900/50 transition transform hover:-translate-y-1 hover:scale-105">
              Get Your Free Preview
            </a>
            <p className="mt-6 text-sm text-slate-500">
              Or email: <a href="mailto:design@pathsixsolutions.com" className="text-blue-500 hover:text-blue-400 underline">design@pathsixsolutions.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}