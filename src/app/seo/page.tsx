import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced SEO & Local Search Services | PathSix Solutions',
  description: 'Dominate Google Maps and local search rankings. Advanced SEO services focused on getting your business to the top of local search results.',
  openGraph: {
    title: 'SEO & Local Search Dominance | PathSix Solutions',
    description: 'Turn your website into a lead-generating machine by capturing the top spots on Google Maps.',
    url: 'https://pathsixsolutions.com/seo',
  },
}

export default function SEOPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'PathSix Growth - Advanced SEO & Local Search',
    url: 'https://pathsixsolutions.com/seo',
    description: 'Advanced SEO services focused on Google Maps dominance and local search rankings.',
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
          {/* Background Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }}></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Traffic & Authority
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                  Don&apos;t just launch. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Dominate Local.</span>
                </h1>
                <p className="text-xl text-slate-400 mb-8 font-light leading-relaxed">
                  A beautiful website is the engine. SEO is the fuel. <br/>
                  We turn your new site into a lead-generating machine by capturing the top spots on Google Maps.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#pricing" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/20 text-center">
                    View Growth Plans
                  </a>
                  <a href="#map-pack" className="px-8 py-4 bg-transparent border border-slate-700 hover:border-emerald-500 hover:text-white text-slate-300 font-medium rounded-lg transition-all text-center">
                    What is the Map Pack?
                  </a>
                </div>
              </div>

              {/* Hero Graphic: The "Rank 1" visual */}
              <div className="lg:w-1/2 relative">
                <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  {/* Mockup of Google Search Result */}
                  <div className="mb-4 flex items-center gap-4 bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <div className="w-6 h-6 rounded-full border-2 border-emerald-500"></div>
                    <div className="h-2 w-32 bg-slate-700 rounded"></div>
                  </div>
                  {/* The Map Visual */}
                  <div className="bg-slate-800 rounded-lg h-64 w-full relative overflow-hidden mb-4 opacity-80">
                    <Image
                      src="/images/seo-map.jpg"
                      alt="Google Maps Ranking"
                      fill
                      className="object-cover opacity-50"
                    />

                    {/* Floating Pin 1 */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-xl font-bold z-10 animate-bounce">
                      #1 Your Business
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-slate-700 rounded"></div>
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem / Difference */}
        <section id="map-pack" className="py-24 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">&quot;Wait, isn&apos;t SEO included in my website?&quot;</h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-lg">
                Yes and No. We build your website with perfect <strong>Technical SEO</strong> (speed, structure, tags). That&apos;s like building a race car. <br/><br/>
                <strong>Advanced SEO</strong> is the pit crew, the fuel, and the driver. It&apos;s the ongoing work required to beat the competitors who are also driving race cars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Included Column */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 opacity-70">
                <h3 className="text-xl font-bold text-slate-400 mb-6 border-b border-slate-800 pb-4">Included in Web Design</h3>
                <ul className="space-y-4 text-slate-500">
                  <li className="flex items-center">✓ Fast Page Load Speeds</li>
                  <li className="flex items-center">✓ Mobile Responsiveness</li>
                  <li className="flex items-center">✓ Proper Meta Titles & Descriptions</li>
                  <li className="flex items-center">✓ Schema Markup (Structured Data)</li>
                  <li className="flex items-center">✓ Sitemap Submission</li>
                </ul>
              </div>

              {/* Growth Column */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-emerald-500 shadow-lg shadow-emerald-500/10 relative">
                <div className="absolute -top-4 right-8 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded">THIS SERVICE</div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">PathSix Growth Plan</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">➜</span> Monthly Blog/Content Writing</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">➜</span> Google Map Pack Aggression</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">➜</span> Review Generation Campaigns</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">➜</span> Backlink Building (Authority)</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">➜</span> Competitor Tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Breakdown */}
        <section id="strategy" className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">How We Rank You</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="group p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 transition-all">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500 mb-4 text-2xl">📍</div>
                <h3 className="text-xl font-bold text-white mb-2">Google Maps First</h3>
                <p className="text-slate-400 text-sm">
                  Most local searches happen on mobile. We optimize your Google Business Profile (photos, posts, categories) to get you into the &quot;Top 3 Pack.&quot;
                </p>
              </div>

              {/* Step 2 */}
              <div className="group p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 transition-all">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500 mb-4 text-2xl">✍️</div>
                <h3 className="text-xl font-bold text-white mb-2">Content That Ranks</h3>
                <p className="text-slate-400 text-sm">
                  Google loves fresh content. We write localized blog posts and service pages (e.g., &quot;Plumber in [City Name]&quot;) to catch specific search traffic.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 transition-all">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500 mb-4 text-2xl">⭐</div>
                <h3 className="text-xl font-bold text-white mb-2">Reputation Engine</h3>
                <p className="text-slate-400 text-sm">
                  Reviews are a ranking factor. We set up automated email/SMS campaigns to ask your happy clients for 5-star reviews on autopilot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Simple Monthly Growth</h2>
              <p className="text-slate-400">No lock-in contracts. Cancel anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:w-3/4 mx-auto gap-8">
              {/* Plan 1: Local Booster */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-700 flex flex-col hover:border-slate-500 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Maps Booster</h3>
                <div className="text-4xl font-bold text-emerald-500 mb-2">$299<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                <p className="text-sm text-slate-400 mb-6 flex-grow">Perfect for local service businesses who just want to show up on the map.</p>

                <ul className="space-y-4 text-slate-300 mb-8 text-sm">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Google Business Profile Management</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Weekly &quot;Google Posts&quot; Updates</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Review Request System (SMS/Email)</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> 10 Local Citations / Month</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2">✓</span> Monthly Ranking Report</li>
                </ul>
                <a href="/contact" className="w-full py-3 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded font-bold transition-colors text-center">Start Boosting</a>
              </div>

              {/* Plan 2: Authority */}
              <div className="bg-slate-800 p-8 rounded-2xl border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 flex flex-col relative">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                <h3 className="text-xl font-bold text-white mb-2">Total Domination</h3>
                <div className="text-4xl font-bold text-emerald-500 mb-2">$799<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                <p className="text-sm text-slate-400 mb-6 flex-grow">For businesses who want to expand their service area and crush competitors.</p>

                <ul className="space-y-4 text-white mb-8 text-sm font-medium">
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> <strong>Everything in Maps Booster</strong></li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> 2 SEO-Optimized Blog Posts / Month</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Advanced Competitor Spy Reports</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Backlink Outreach Campaign</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Dedicated Account Manager</li>
                </ul>
                <a href="/contact" className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition-colors text-center">Get Domination Plan</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to climb the ranks?</h2>
            <p className="text-slate-400 mb-8">SEO isn&apos;t magic. It&apos;s consistency. Let us handle the grind while you handle the leads.</p>
            <a href="/contact" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40">Contact Growth Team</a>

            <p className="mt-6 text-slate-500 text-sm">
              Or email directly: <a href="mailto:growth@pathsixsolutions.com" className="text-emerald-500 hover:text-emerald-400 underline">growth@pathsixsolutions.com</a>
            </p>

            <div className="mt-16 pt-8 border-t border-slate-900 text-slate-600 text-sm">
              © 2025 PathSix Solutions LLC.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}