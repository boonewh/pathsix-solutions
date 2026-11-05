import { CampaignHeader, CampaignFooter } from '@/components/CampaignChrome'
import { pageMetadata } from '@/lib/metadata'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import localFont from 'next/font/local'

const conceptFont = localFont({
  src: '../../public/fonts/InterVariable.woff2',
  display: 'swap',
  weight: '100 900',
})

export const metadata = pageMetadata('/', 'PathSix Solutions | Web Design, CRM & AI Consulting', 'Custom websites, SEO, CRM solutions, custom applications, and practical AI consulting for small businesses.')

function CurrentHome() {
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
            <Image src="/images/solutions_hero.jpg" alt="Developer Workspace" fill className="object-cover" priority />
            {/* Dark Overlay to unify design */}
            <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ lineHeight: '1.20' }}>
                The Technical Partner <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">for Growing Businesses.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed">
                Start with a <strong className="text-white">fully managed website</strong>. Scale with custom software when you&apos;re ready.
                <br/><br/>
                The same team that builds custom CRMs and web applications also builds affordable, professional websites starting at $159/mo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/web-design" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-lg transition-all shadow-lg shadow-amber-500/20 text-center">
                  Get Your Website ($159/mo)
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-8">

              <div className="flip-card w-60 h-60 shrink-0">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-slate-800 border-2 border-slate-700 text-center">
                    <span className="text-amber-500 font-bold text-2xl">01.</span>
                    <span className="text-white font-bold text-2xl block">Foundation</span>
                    <span className="text-slate-400 text-base">Web Design</span>
                  </div>
                  <Link href="/web-design" className="flip-card-back bg-amber-500 text-center">
                    <p className="text-slate-900 font-semibold text-base leading-snug px-4">Your site, built right. Fast, beautiful, and yours to own.</p>
                    <span className="text-slate-900 font-bold text-sm mt-3 underline">Learn More →</span>
                  </Link>
                </div>
              </div>

              <div className="text-amber-500 hidden md:block text-3xl font-bold">→</div>

              <div className="flip-card w-60 h-60 shrink-0">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-slate-800 border-2 border-slate-700 text-center">
                    <span className="text-amber-500 font-bold text-2xl">02.</span>
                    <span className="text-white font-bold text-2xl block">Growth</span>
                    <span className="text-slate-400 text-base">SEO & Traffic</span>
                  </div>
                  <Link href="/seo" className="flip-card-back bg-amber-500 text-center">
                    <p className="text-slate-900 font-semibold text-base leading-snug px-4">Get found online. Own your market before your competition does.</p>
                    <span className="text-slate-900 font-bold text-sm mt-3 underline">Learn More →</span>
                  </Link>
                </div>
              </div>

              <div className="text-amber-500 hidden md:block text-3xl font-bold">→</div>

              <div className="flip-card w-60 h-60 shrink-0">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-slate-800 border-2 border-slate-700 text-center">
                    <span className="text-amber-500 font-bold text-2xl">03.</span>
                    <span className="text-white font-bold text-2xl block">Operations</span>
                    <span className="text-slate-400 text-base">Custom CRM</span>
                  </div>
                  <Link href="/crm" className="flip-card-back bg-amber-500 text-center">
                    <p className="text-slate-900 font-semibold text-base leading-snug px-4">Stop juggling tools. Run your whole business in one place.</p>
                    <span className="text-slate-900 font-bold text-sm mt-3 underline">Learn More →</span>
                  </Link>
                </div>
              </div>

              <div className="text-amber-500 hidden md:block text-3xl font-bold">→</div>

              <div className="flip-card w-60 h-60 shrink-0">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-slate-800 border-2 border-slate-700 text-center">
                    <span className="text-amber-500 font-bold text-2xl">04.</span>
                    <span className="text-white font-bold text-2xl block">Scale</span>
                    <span className="text-slate-400 text-base">Apps & AI</span>
                  </div>
                  <Link href="/build" className="flip-card-back bg-amber-500 text-center">
                    <p className="text-slate-900 font-semibold text-base leading-snug px-4">Build smarter. Ship faster. Let AI carry the load.</p>
                    <span className="text-slate-900 font-bold text-sm mt-3 underline">Learn More →</span>
                  </Link>
                </div>
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
                Our flagship subscription model treats your website like software. We build it, host it, maintain it, and handle updates through your service plan. You don&apos;t buy a website; you subscribe to a digital department.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border-l-2 border-amber-500 pl-4">
                  <div className="text-white font-bold">Zero Upfront</div>
                  <div className="text-sm text-slate-500">Keep your cash flow</div>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <div className="text-white font-bold">Content Updates</div>
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
                  We can work directly on your website structure and content, alongside your local business information, to improve how customers find and understand your services.
                </p>
                <ul className="space-y-3 text-slate-300 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Google Business Profile Optimization
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
                    <div className="text-3xl font-bold text-white mb-2">Search</div>
                    <div className="text-sm text-slate-500">Help customers find clear answers about your services.</div>
                  </div>
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                    <div className="text-3xl font-bold text-amber-500 mb-2">Local</div>
                    <div className="text-sm text-slate-500">Keep your business information accurate across your website and Google Business Profile.</div>
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
                <p className="italic text-slate-300">Keep leads, follow-ups, and project information together in a workflow built around your team.</p>
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
              <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold mb-4">TOOLS FOR YOUR NEXT CHAPTER</div>
              <h2 className="text-4xl font-bold text-white mb-4">Make Technology Work for Your Business.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Get purpose-built software for your unique needs, or practical guidance on choosing and using AI in your everyday work.
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

              {/* AI Consulting Card */}
              <div className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="text-cyan-500 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Consulting</h3>
                <p className="text-slate-400 mb-6">
                  Find the right AI tools, put them to work, and help your team use them confidently. Practical support for small businesses, from first questions to everyday use.
                </p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>• Tool Selection & Practical Planning</li>
                  <li>• Implementation & Team Training</li>
                  <li>• Ongoing Guidance & Troubleshooting</li>
                </ul>
                <a href="/ai-consulting" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 font-semibold transition-colors">
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

const homeServices = [
  { name: 'Web design', href: '/web-design', description: 'A custom website that represents you well, with hosting, maintenance, and updates handled for you.' },
  { name: 'SEO & local search', href: '/seo', description: 'Help the right customers find your business and understand what you offer.' },
  { name: 'CRM solutions', href: '/crm', description: 'Keep your leads, follow-ups, and projects in a system that fits your team.' },
  { name: 'Custom applications', href: '/build', description: 'Purpose-built software for the work your spreadsheets and existing tools cannot handle.' },
  { name: 'AI consulting', href: '/ai-consulting', description: 'Choose useful AI tools, put them to work, and help your team use them confidently.' },
]

const homeProjects = [
  { name: 'ASFI Construction', type: 'Construction & infrastructure', image: '/images/asfi.jpg', href: 'https://asficonstruction.com', tone: 'orange' },
  { name: 'Center for Social Success', type: 'Therapy & family services', image: '/images/cssdallas.jpg', href: 'https://cssdallas.com', tone: 'blue' },
  { name: 'All Seasons Foam', type: 'Insulation & building services', image: '/images/allseasons.jpg', href: 'https://allseasonsfoam.com', tone: 'gold' },
]

function CampaignProjects() {
  return (
    <section id="selected-work" className="campaign-work scroll-mt-8 py-20 md:py-28">
      <div className="campaign-container">
        <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-5">
            <p className="campaign-eyebrow">Selected websites / Real businesses</p>
            <h2 className="max-w-[20ch] text-balance text-4xl font-medium tracking-tight md:text-6xl">Your business has a personality.<br /><span className="campaign-orange-ink">Your website should, too.</span></h2>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="campaign-muted max-w-[40ch] text-pretty text-lg">A construction company. A therapy practice. A local trade. Different people, different customers. Each with a website that feels like their own.</p>
            <Link href="/web-design" className="campaign-text-link">Explore web design <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {homeProjects.slice(0, 2).map((project, index) => (
            <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="campaign-project group block min-w-0" aria-label={'Visit ' + project.name + ' website'}>
              <figure>
                <div className={'campaign-project-frame campaign-project-' + project.tone}>
                  <div className="campaign-project-meta"><span>Website / 0{index + 1}</span><span aria-hidden="true">↗</span></div>
                  <div className="relative aspect-[19/10] outline outline-1 -outline-offset-1 outline-black/10 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-2">
                    <Image src={project.image} alt="" fill sizes="(min-width: 1280px) 560px, (min-width: 768px) 43vw, 88vw" className="object-cover object-top" />
                  </div>
                </div>
                <figcaption className="flex items-baseline justify-between gap-8 py-5">
                  <p className="text-lg font-medium group-hover:underline">{project.name}</p>
                  <p className="campaign-muted hidden text-sm sm:block">{project.type}</p>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
        <div className="campaign-more-work mt-4 flex flex-col justify-between gap-5 border-t pt-7 sm:flex-row sm:items-center">
          <p className="campaign-muted">Also built for All Seasons Foam</p>
          <a href={homeProjects[2].href} target="_blank" rel="noopener noreferrer" className="campaign-text-link">Visit the website <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

function CampaignServices() {
  return (
    <>
      <div className="campaign-banner relative overflow-hidden">
        <Image src="/images/home-worktable-banner.webp" alt="Illustrative overhead scene of hands working with plans and colorful material samples." fill sizes="100vw" className="object-cover" />
      </div>
      <section id="services" className="campaign-services scroll-mt-8 py-20 md:py-28">
        <div className="campaign-container grid gap-8 lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col items-start gap-6">
            <p className="campaign-eyebrow campaign-gold">Beyond the website</p>
            <h2 className="max-w-[17ch] text-balance text-4xl font-medium tracking-tight md:text-5xl">Start with what your business needs.</h2>
            <p className="campaign-muted max-w-[38ch] text-pretty text-lg">A better website is just the beginning. When you need to get found, organize the work, or make sense of AI, you have someone to turn to.</p>
            <Link href="/contact" className="campaign-text-link">Talk through your next step <span aria-hidden="true">↗</span></Link>
          </div>
          <dl className="campaign-service-list">
            {homeServices.map((service, index) => (
              <div key={service.href} className="py-7 first:pt-0 last:pb-0">
                <dt>
                  <Link href={service.href} className="group grid grid-cols-[1.5rem_1fr_auto] items-baseline gap-5">
                    <span className="campaign-service-number font-mono text-base tabular-nums sm:text-sm">0{index + 1}</span>
                    <span className="text-xl font-medium group-hover:underline md:text-2xl">{service.name}</span>
                    <span className="campaign-service-arrow" aria-hidden="true">↗</span>
                  </Link>
                </dt>
                <dd className="campaign-muted ml-11 mt-3 max-w-[48ch] text-pretty text-base">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}

function CampaignAbout() {
  return (
    <section id="about" className="campaign-about scroll-mt-8 py-20 md:py-28">
      <div className="campaign-container grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <p className="campaign-eyebrow">The person behind PathSix</p>
          <h2 className="max-w-[20ch] text-balance text-4xl font-medium tracking-tight md:text-5xl">Good work starts with a conversation.</h2>
          <p className="campaign-muted max-w-[44ch] text-pretty text-lg">I&apos;m Will. I build websites and software for small businesses, and help people make better use of the technology they already have.</p>
          <p className="campaign-muted max-w-[44ch] text-pretty text-lg">Tell me what you&apos;re trying to improve. I&apos;ll help you work out what makes sense—and stay involved as we put it to work.</p>
          <Link href="/contact" className="campaign-text-link">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </div>
        <figure className="campaign-quote flex flex-col gap-8 p-8 md:p-12">
          <p aria-hidden="true" className="campaign-quote-mark font-medium">“</p>
          <blockquote><p className="max-w-[30ch] text-pretty text-2xl font-medium tracking-tight md:text-3xl">Working with Will was easy. He was much faster than we expected and had our new website up and running quickly.</p></blockquote>
          <figcaption className="flex flex-col gap-1">
            <p className="font-semibold">Melissa</p>
            <p>Center for Social Success</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function PortfolioHomepage() {
  return (
    <div className={conceptFont.className + ' home-campaign isolate antialiased'}>
      <CampaignHeader />
      <main id="campaign-main">
        <section className="campaign-hero relative isolate overflow-hidden">
          <Image src="/images/home-workshop-hero.webp" alt="" fill priority sizes="100vw" className="campaign-hero-image object-cover" />
          <div className="campaign-hero-shade absolute inset-0" />
          <div className="campaign-container relative flex flex-col items-start py-16 md:py-24">
            <p className="campaign-eyebrow mb-7">Custom websites. Fully managed.</p>
            <h1 className="max-w-[13ch] text-balance text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">Your business.<br /><span className="campaign-gold">At its best.</span></h1>
            <p className="mt-8 max-w-[39ch] text-pretty text-xl text-[#eeefe8]">A website that does your business justice.<br className="hidden sm:block" /> Built with care. Managed for you.</p>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <Link href="/contact" className="campaign-primary">Request your free preview <span aria-hidden="true">↗</span></Link>
              <a href="#selected-work" className="campaign-text-link">See our work <span aria-hidden="true">↓</span></a>
            </div>
            <p className="mt-7 max-w-[40ch] text-pretty text-base text-[#eeefe8]">Managed websites from $159/month.<br className="sm:hidden" /> No upfront cost.</p>
          </div>
          <div className="campaign-hero-caption absolute bottom-7 right-8 hidden items-center gap-3 xl:flex" aria-hidden="true"><span />Built for people who build things.</div>
        </section>
        <div className="campaign-promise">
          <div className="campaign-container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-6">
            <p className="font-medium">You run your business. We&apos;ll handle the website.</p>
            <p className="font-mono text-base sm:text-sm">Design / Hosting / Ongoing care</p>
          </div>
        </div>
        <CampaignProjects />
        <CampaignServices />
        <CampaignAbout />
        <section className="campaign-offer py-16 md:py-24">
          <div className="campaign-container grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
            <div className="flex flex-col items-start gap-6">
              <p className="campaign-eyebrow">Your next chapter starts here</p>
              <h2 className="max-w-[18ch] text-balance text-4xl font-medium tracking-tight md:text-6xl">Let&apos;s make your business look the part.</h2>
              <p className="campaign-muted max-w-[44ch] text-pretty text-lg">Custom design, hosting, maintenance, and content updates. See your homepage before you pay.</p>
              <Link href="/contact" className="campaign-primary">Request your free preview <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="campaign-price flex flex-col items-start gap-4 lg:items-end">
              <p className="campaign-muted">Managed websites from</p>
              <p className="text-7xl font-medium tracking-tight tabular-nums md:text-8xl">$159<span className="text-xl font-normal tracking-normal"> / month</span></p>
              <p className="campaign-muted">No upfront cost.</p>
              <Link href="/web-design" className="campaign-text-link">What&apos;s included <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
      <CampaignFooter />
    </div>
  )
}

export default function Home() {
  // Keep the approved live homepage until this local redesign is approved.
  return process.env.NODE_ENV === 'development' ? <PortfolioHomepage /> : <CurrentHome />
}
