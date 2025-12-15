import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  // Schema markup for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PathSix Solutions',
    url: 'https://pathsixsolutions.com',
    logo: 'https://pathsixsolutions.com/logo.png',
    description: 'The Full-Stack Growth Partner - unified web design, SEO, CRM solutions, and custom development.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@pathsixsolutions.com',
    },
    sameAs: [
      'https://pathsixdesigns.com',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-dark-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* PLACEHOLDER FOR YOUR HERO IMAGE */}
            <Image src="/images/solutions_hero.jpg" alt="Developer Workspace" fill className="object-cover" />
            {/* Dark Overlay to unify design */}
            <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ lineHeight: '1.20' }}>
                Stop piecing together <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">your digital strategy.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed">
                Most businesses hire a web designer, then an SEO guy, then buy a generic CRM, and end up with a mess.
                <br/><br/>
                <strong>PathSix Solutions</strong> unifies the stack. We build your foundation, drive your traffic, and engineer the software that runs your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-lg transition-all shadow-lg shadow-amber-500/20 text-center">
                  Start Your Project
                </a>
                <a href="#foundation" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded-lg text-lg transition-all text-center">
                  View The Ecosystem →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Logic Flow (Connector Section) */}
        <section className="py-24 bg-slate-900 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 uppercase tracking-wider">The PathSix Ecosystem</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connector Line for Desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent -z-10"></div>

              <div className="bg-slate-800 border-2 border-slate-700 hover:border-amber-500 transition-colors px-8 py-6 rounded-xl z-10 w-full md:w-auto shadow-lg">
                <span className="text-amber-500 font-bold block text-2xl mb-1">01. Foundation</span>
                <span className="text-base text-slate-300 font-medium">Web Design</span>
              </div>
              <div className="text-amber-500 hidden md:block text-3xl font-bold">→</div>
              <div className="bg-slate-800 border-2 border-slate-700 hover:border-amber-500 transition-colors px-8 py-6 rounded-xl z-10 w-full md:w-auto shadow-lg">
                <span className="text-amber-500 font-bold block text-2xl mb-1">02. Growth</span>
                <span className="text-base text-slate-300 font-medium">SEO & Traffic</span>
              </div>
              <div className="text-amber-500 hidden md:block text-3xl font-bold">→</div>
              <div className="bg-slate-800 border-2 border-slate-700 hover:border-amber-500 transition-colors px-8 py-6 rounded-xl z-10 w-full md:w-auto shadow-lg">
                <span className="text-amber-500 font-bold block text-2xl mb-1">03. Operations</span>
                <span className="text-base text-slate-300 font-medium">Custom CRM</span>
              </div>
              <div className="text-amber-500 hidden md:block text-3xl font-bold">→</div>
              <div className="bg-slate-800 border-2 border-slate-700 hover:border-amber-500 transition-colors px-8 py-6 rounded-xl z-10 w-full md:w-auto shadow-lg">
                <span className="text-amber-500 font-bold block text-2xl mb-1">04. Scale</span>
                <span className="text-base text-slate-300 font-medium">Apps & AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* 01 FOUNDATION: Web Design */}
        <section id="foundation" className="py-24 bg-slate-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="text-8xl font-bold text-slate-800 absolute -top-10 left-0 -z-10 select-none opacity-50">01</div>
              <h2 className="text-4xl font-bold text-white mb-6">The Foundation.<br/><span className="text-amber-500">Managed Web Design.</span></h2>
              <p className="text-slate-300 text-lg mb-6">
                Your website isn&apos;t a brochure; it&apos;s infrastructure. But infrastructure shouldn&apos;t cost you $5,000 upfront.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our flagship subscription model treats your website like software. We build it, host it, secure it, and update it forever. You don&apos;t buy a website; you subscribe to a digital department.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border-l-2 border-amber-500 pl-4">
                  <div className="text-white font-bold">Zero Upfront</div>
                  <div className="text-sm text-slate-500">Keep your cash flow</div>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <div className="text-white font-bold">Unlimited Updates</div>
                  <div className="text-sm text-slate-500">Never goes stale</div>
                </div>
              </div>

              <a href="/web-design" className="text-white border-b-2 border-amber-500 pb-1 hover:text-amber-500 transition-colors font-medium inline-flex items-center gap-1">
                See Pricing & Details <span className="text-xl">→</span>
              </a>
            </div>
            
            <div className="lg:w-1/2 relative">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              {/* Visual representation of website mockup */}
              <div className="relative bg-slate-800 rounded-xl p-1 border border-slate-700 shadow-2xl shadow-amber-500/20" style={{
                boxShadow: '0 0 60px rgba(245, 158, 11, 0.15), 0 20px 25px -5px rgb(0 0 0 / 0.1)'
              }}>
                <div className="bg-white rounded-lg overflow-hidden relative">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-3 flex-1 bg-white rounded px-3 py-1 text-xs text-slate-500">
                      yourbusiness.com
                    </div>
                  </div>
                  
                  {/* Website Mockup Content */}
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100">
                    {/* Mini Header */}
                    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-slate-200">
                      <div className="font-bold text-slate-800 text-sm">Your Business</div>
                      <div className="flex gap-3 text-xs text-slate-600">
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                      </div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className="px-6 py-8 text-center">
                      <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-3">
                        Professional
                      </div>
                      <div className="h-5 bg-slate-800 w-4/5 mx-auto rounded mb-2"></div>
                      <div className="h-5 bg-slate-800 w-3/5 mx-auto rounded mb-4"></div>
                      <div className="h-2 bg-slate-300 w-full rounded mb-1"></div>
                      <div className="h-2 bg-slate-300 w-5/6 mx-auto rounded mb-6"></div>
                      
                      {/* CTA Buttons */}
                      <div className="flex gap-2 justify-center mb-8">
                        <div className="px-4 py-2 bg-amber-500 text-white rounded text-xs font-semibold">
                          Get Started
                        </div>
                        <div className="px-4 py-2 border-2 border-slate-300 rounded text-xs font-semibold text-slate-600">
                          Learn More
                        </div>
                      </div>
                      
                      {/* Feature Cards */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg mb-2 mx-auto"></div>
                          <div className="h-2 bg-slate-200 rounded w-3/4 mx-auto"></div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                          <div className="w-8 h-8 bg-green-100 rounded-lg mb-2 mx-auto"></div>
                          <div className="h-2 bg-slate-200 rounded w-3/4 mx-auto"></div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg mb-2 mx-auto"></div>
                          <div className="h-2 bg-slate-200 rounded w-3/4 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 right-6 bg-amber-600 hover:bg-amber-500 hover:scale-105 text-white px-6 py-3 rounded-xl shadow-2xl transition-all" style={{
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 0 40px rgba(245, 158, 11, 0.4)'
                  }}>
                    <div className="text-xs font-medium mb-0.5 opacity-90">Starting at</div>
                    <div className="text-2xl font-bold">$159/mo</div>
                    <div className="text-xs opacity-90">All-Inclusive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 GROWTH: SEO (The Bridge) */}
        <section id="growth" className="py-24 bg-slate-800 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="text-8xl font-bold text-slate-900 absolute -top-10 right-0 -z-10 select-none">02</div>
                <h2 className="text-4xl font-bold text-white mb-6">The Fuel.<br/><span className="text-amber-500">Advanced SEO.</span></h2>
                <p className="text-slate-300 text-lg mb-6">
                  A beautiful website without traffic is an expensive diary. 
                </p>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Because we built the code, we control the technical SEO at a deeper level than any external agency can. We optimize your structure, your content, and your local presence to ensure the foundation we built actually gets seen.
                </p>
                <ul className="space-y-3 text-slate-300 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Google My Business Optimization
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Technical On-Page SEO
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Reputation Management
                  </li>
                </ul>
                <a href="/seo" className="text-white border-b-2 border-amber-500 pb-1 hover:text-amber-500 transition-colors font-medium inline-flex items-center gap-1">
                  View SEO Services <span className="text-xl">→</span>
                </a>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                    <div className="text-3xl font-bold text-white mb-2">93%</div>
                    <div className="text-sm text-slate-500">Online experiences begin with a search engine.</div>
                  </div>
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                    <div className="text-3xl font-bold text-amber-500 mb-2">#1</div>
                    <div className="text-sm text-slate-500">Goal: Get you to the top of the Google Maps search. Yes, Google MAPS.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 OPERATIONS: CRM */}
        <section id="operations" className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="text-8xl font-bold text-slate-800 absolute -top-10 left-0 -z-10 select-none opacity-50">03</div>
              <h2 className="text-4xl font-bold text-white mb-6">The Engine.<br/><span className="text-amber-500">Lean CRM Solutions.</span></h2>
              <p className="text-slate-300 text-lg mb-6">
                You have the website. You have the traffic. Now, how do you manage the business?
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Most CRMs are bloated, expensive, and confusing. We build custom, lightweight CRM solutions that fit <em>your</em> specific workflow. If you don&apos;t need it, we don&apos;t code it.
              </p>
              <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-amber-500 mb-8">
                <p className="italic text-slate-300">&quot;PathSix built us a system that tracks exactly what we care about. No more fighting with Salesforce settings.&quot;</p>
              </div>
              <a href="/crm" className="text-white border-b-2 border-amber-500 pb-1 hover:text-amber-500 transition-colors font-medium inline-flex items-center gap-1">
                Explore CRM Solutions <span className="text-xl">→</span>
              </a>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* Abstract CRM Visualization */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded border border-slate-700 opacity-50">
                  <div className="w-1/3 h-4 bg-slate-700 rounded"></div>
                  <div className="w-1/4 h-4 bg-slate-700 rounded"></div>
                </div>
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded border border-amber-500/50 shadow-lg shadow-amber-500/10 scale-105 transform transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">✓</div>
                    <div>
                      <div className="w-32 h-4 bg-white rounded mb-2"></div>
                      <div className="w-20 h-3 bg-slate-500 rounded"></div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-500 text-xs rounded-full">Lead Captured</div>
                </div>
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded border border-slate-700 opacity-50">
                  <div className="w-1/3 h-4 bg-slate-700 rounded"></div>
                  <div className="w-1/4 h-4 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 SCALE: Custom Apps / AI */}
        <section id="innovation" className="py-24 bg-gradient-to-br from-slate-900 to-slate-900 relative border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold mb-4">ADVANCED ENGINEERING</div>
              <h2 className="text-4xl font-bold text-white mb-4">And The Future is Custom.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                When off-the-shelf software stops working, we build the bridge. Whether it&apos;s a custom internal app or deploying an AI prototype you vibe-coded.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Custom Dev Card */}
              <div className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition-all">
                <div className="text-amber-500 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Custom Development</h3>
                <p className="text-slate-400 mb-6">
                  Need a client portal? A specialized calculator? An inventory system? We write clean, maintainable code to solve unique business problems.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• React / Next.js Applications</li>
                  <li>• Secure API Integrations</li>
                  <li>• Database Design</li>
                </ul>
                <a href="/build" className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>

              {/* AI Deployment Card */}
              <div className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="text-cyan-500 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Deployment Assistance</h3>
                <p className="text-slate-400 mb-6">
                  For the &quot;Vibe Coders.&quot; You used ChatGPT or Claude to build a tool, but you can&apos;t get it online safely. We professionally deploy, secure, and fix your AI-generated code.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Security Audits (API Keys)</li>
                  <li>• Hosting Configuration</li>
                  <li>• Production-Ready Refactoring</li>
                </ul>
                <a href="/vibe" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 font-semibold transition-colors">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-3xl mx-auto px-4 text-center">
            {/* Email Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-6">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Start a Conversation</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Ready to unify your digital strategy? Fill out our contact form and we&apos;ll reach out within 24 hours to discuss your needs.
            </p>

            <a href="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 text-lg">
              Get in Touch
            </a>

            <p className="mt-6 text-slate-500 text-sm">
              Or email us directly: <a href="mailto:contact@pathsixsolutions.com" className="text-amber-500 hover:text-amber-400 underline">contact@pathsixsolutions.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}