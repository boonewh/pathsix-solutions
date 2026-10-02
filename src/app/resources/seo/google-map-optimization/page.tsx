import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = pageMetadata('/resources/seo/google-map-optimization', 'Google Maps Optimization: The Complete Guide | PathSix Solutions', 'A practical guide to Google Business Profiles, accurate business information, website content, and honest customer reviews.')

// Simple SVG Icons components to avoid external dependencies
const MapIcon = () => (
  <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const TargetIcon = () => (
  <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const ShieldIcon = () => (
  <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);

export default function GoogleMapsGuide() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen selection:bg-blue-100">
        {/* Breadcrumb */}
        <div className="bg-slate-900 pt-28 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/resources" className="hover:text-amber-500 transition-colors">
                Resources
              </Link>
              <span>/</span>
              <Link href="/resources/seo" className="hover:text-amber-500 transition-colors">
                SEO
              </Link>
              <span>/</span>
              <span className="text-slate-400">Google Maps Optimization</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative bg-slate-900 text-white py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Google Maps Optimization: <br />
              <span className="text-blue-400">The Complete Guide</span>
            </h1>
            <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Practical Steps to Improve Your Local Search Presence
            </p>
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-lg font-medium text-slate-200">
                By Will Boone
              </p>
              <p className="text-sm text-slate-400 uppercase tracking-widest border-t border-slate-700 pt-2 mt-1">
                Technical Director, PathSix Solutions
              </p>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-slate-800">
            <p className="font-semibold text-2xl text-slate-900 mb-8 border-l-4 border-blue-600 pl-6">
              In today&apos;s digital economy, visibility is not a marketing bonus — it is <span className="text-blue-700">infrastructure</span>.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              Local results can help people find nearby businesses. The <strong className="text-slate-900">Google Maps local pack</strong> often highlights three businesses, with results that vary by search, location, and context.
            </p>

            <div className="my-12 bg-slate-50 shadow-xl rounded-xl p-8 border border-slate-200">
              <p className="text-slate-900 uppercase tracking-widest text-sm font-bold mb-4">The Decision Engine</p>
              <div className="space-y-3 font-medium text-slate-800">
                <div className="flex items-center gap-3"><span className="text-blue-500">&#128269;</span> &quot;plumber near me&quot;</div>
                <div className="flex items-center gap-3"><span className="text-blue-500">&#128269;</span> &quot;HVAC repair Abilene&quot;</div>
                <div className="flex items-center gap-3"><span className="text-blue-500">&#128269;</span> &quot;web design Dallas&quot;</div>
                <div className="flex items-center gap-3"><span className="text-blue-500">&#128269;</span> &quot;dentist open now&quot;</div>
              </div>
            </div>

            <p className="leading-relaxed text-slate-600 mb-6">
              Local customers need accurate answers about services, locations, and availability. Rankings can change, so focus on useful information and measure relevant inquiries as well as search visibility.
            </p>
            <p className="font-bold text-slate-900">
              No provider can guarantee a particular Maps position. Start with accurate information, a useful website, and genuine customer feedback.
            </p>
          </div>
        </section>

        {/* Section I: The Triad */}
        <section className="bg-slate-50 py-20 px-6 md:px-12 border-y border-slate-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-slate-900">I. Understand Local Search</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="mb-4 text-slate-700 leading-relaxed">Local results and website search results overlap, but location has a distinct role in local search.</p>
                <p className="mb-4 text-slate-700 leading-relaxed">Google describes local results in terms of relevance, distance, and prominence. Useful website content and legitimate links can support the wider picture.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 text-sm">
                <p className="font-bold text-slate-700 uppercase mb-2">Website Foundations</p>
                <ul className="list-disc list-inside text-slate-700 mb-6 space-y-1">
                  <li>Backlinks</li>
                  <li>Useful, accessible content</li>
                  <li>Clear service information</li>
                </ul>
                <p className="font-bold text-slate-900 uppercase mb-2">Local SEO Signals</p>
                <ul className="list-disc list-inside text-blue-700 font-medium space-y-1">
                  <li>Proximity</li>
                  <li>Relevance</li>
                  <li>Prominence</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-10 text-slate-900">The Local SEO Ranking Triad</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center"><MapIcon /></div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">Proximity</h4>
                <p className="text-slate-700 text-sm">How physically close your business is to the searcher.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center"><TargetIcon /></div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">Relevance</h4>
                <p className="text-slate-700 text-sm">How closely your Google Business Profile matches the user&apos;s search intent.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center"><ShieldIcon /></div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">Prominence</h4>
                <p className="text-slate-700 text-sm">How credible and established your business appears online and offline.</p>
              </div>
            </div>
            <p className="text-center mt-8 text-slate-700 font-medium">
              Improve the factors you can influence, while recognizing that distance and competition also affect results. See <a href="https://support.google.com/business/answer/7091" className="underline">Google&apos;s local ranking guidance</a>.
            </p>
          </div>
        </section>

        {/* Section II: Comparison Table */}
        <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">II. DIY vs. Managed Optimization</h2>
          <p className="mb-10 text-lg max-w-2xl text-slate-600 leading-relaxed">
            You can manage a Business Profile yourself or hire help. The difference is who does the work and how much time and expertise you can commit, not a guaranteed ranking outcome.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold text-slate-400">Manage It Yourself</th>
                  <th className="p-4 font-semibold text-blue-300">Path Six Managed Model</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Data Consistency</td>
                  <td className="p-4 text-slate-700">You check and update your business listings</td>
                  <td className="p-4 font-medium text-blue-700">Help checking important business listings</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Technical Integration</td>
                  <td className="p-4 text-slate-700">You coordinate website and profile information</td>
                  <td className="p-4 font-medium text-blue-700">Help aligning website and profile information</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Risk Profile</td>
                  <td className="p-4 text-slate-700">You monitor access and suggested edits</td>
                  <td className="p-4 font-medium text-blue-700">Help monitoring access and suggested edits</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Cost Structure</td>
                  <td className="p-4 text-slate-700">Your time and any tools you choose</td>
                  <td className="p-4 font-medium text-blue-700">Service subscription ($299/mo)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">Performance</td>
                  <td className="p-4 text-slate-700">Measure visibility and inquiries</td>
                  <td className="p-4 font-medium text-blue-700">Reporting and follow-up improvements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-lg text-blue-900 font-medium text-center">
            The goal is not temporary improvement. The goal is durable infrastructure.
          </div>
        </section>

        {/* Sections III & IV: NAP & Tech */}
        <section className="bg-slate-50 py-20 px-6 md:px-12 border-t border-slate-200">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Step 1 */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">III. Step 1: NAP Consistency (Database Integrity)</h2>
              <p className="mb-6 text-slate-700 leading-relaxed">Keep your business name, address where appropriate, phone, and hours accurate. Focus on substantive conflicts such as an old phone number or wrong location; punctuation and common abbreviations alone are not evidence of a ranking problem.</p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-red-50 p-6 rounded border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">Conflicting Records (Bad)</h4>
                  <ul className="text-sm space-y-2 text-red-700 font-mono">
                    <li>An old address after a move</li>
                    <li>A disconnected phone number</li>
                    <li>Incorrect opening hours</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">Authoritative Record (Good)</h4>
                  <p className="text-sm text-green-700">
                    Use current business records to keep your website, Business Profile, and relevant directories accurate. Respect the address-display rules for service-area businesses.
                  </p>
                </div>
              </div>
              <p className="text-slate-800"><strong>Why This Matters:</strong> Customers need reliable information to reach you and understand what you offer.</p>
            </div>

            {/* Step 2 */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">IV. Step 2: Website Integration</h2>
              <p className="mb-6 text-slate-700 leading-relaxed">
                Your website and Business Profile should describe the same business, services, and operating area. Put important information in readable page content as well as appropriate markup.
              </p>

              <div className="bg-slate-900 text-slate-300 p-8 rounded-lg font-mono text-sm relative shadow-2xl">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-blue-400 mb-2">{'// Example information for appropriate LocalBusiness markup'}</p>
                <p className="mb-4">
                  Structured data can describe verified business details that match the page. Appropriate properties may include:
                </p>
                <ul className="space-y-1 ml-4 text-green-400">
                  <li>+ name</li>
                  <li>+ geo</li>
                  <li>+ description</li>
                  <li>+ openingHoursSpecification</li>
                  <li>+ areaServed</li>
                </ul>
                <p className="mt-4 text-slate-400">
                  {'/* Structured data describes the business. It does not verify a location or guarantee rankings. */'}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-lg mb-2 text-slate-900">Separation of Concerns</h4>
                <p className="text-slate-700 leading-relaxed">Create a location page only when you have distinct, useful information about serving that area, such as relevant work and service details. Avoid pages that simply swap city names. <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" className="underline">Google&apos;s structured data guidance</a> explains how markup should reflect page content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sections V - VIII: Rapid Fire Steps */}
        <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">V. Step 3: Performance (Speed Matters)</h2>
            <p className="mb-4 text-slate-700 leading-relaxed">A responsive, usable site helps visitors read your services and contact you. Measure performance on real devices; speed improvements alone do not guarantee a local ranking.</p>
            <p className="text-slate-700 italic">Check image sizes, unnecessary scripts, layout stability, and the response time of your actual hosting setup.</p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">VI. Step 4: Honest Customer Reviews</h2>
            <p className="mb-4 text-slate-700 leading-relaxed">Invite customers to share honest feedback about their genuine experience. Do not filter requests to happy customers or offer rewards for reviews.</p>
            <div className="bg-blue-50 p-6 border-l-4 border-blue-500 rounded-r-lg">
              <p className="font-bold mb-2 text-slate-900">A Neutral Review Request</p>
              <p className="italic text-slate-700 mb-2">&quot;Thank you for working with us. If you would like to leave an honest review of your experience, here is our review link.&quot;</p>
              <p className="text-sm text-blue-800 font-semibold">Let customers choose their rating and wording. Do not request specific keywords, names, or results. See <a href="https://support.google.com/contributionpolicy/answer/7400114" className="underline">Google&apos;s review policy</a>.</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">VII. Step 5: Media Optimization</h2>
            <p className="mb-4 text-slate-700 leading-relaxed">Your profile is a digital storefront. A profile with no photos looks abandoned.</p>
            <p className="text-slate-700 leading-relaxed">Use accurate photos of your team, premises where appropriate, and completed work to help people assess your business. Measure their usefulness without assuming clicks directly produce higher rankings.</p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">VIII. Step 6: Security and Defense</h2>
            <p className="mb-4 text-slate-700 leading-relaxed">People can suggest edits to a Business Profile, so review changes for accuracy. Use individual account access and appropriate permissions rather than shared passwords.</p>
            <p className="font-semibold text-slate-900">We treat GBP security like application security: Access control, auditability, and proactive monitoring.</p>
          </div>

        </section>

        {/* TCO & CTA Section */}
        <section className="bg-slate-900 text-white py-24 px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ongoing Help with Local Search</h2>
            <p className="text-slate-400 text-lg mb-12">
              Business details and customer needs change. Ongoing support can help you maintain accurate information, review performance, and decide what to improve next.
            </p>

            <div className="bg-gradient-to-br from-blue-900 to-slate-800 p-10 rounded-2xl border border-blue-700 shadow-2xl transform md:hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Maps Booster</h3>
              <p className="text-slate-400 text-sm mb-4">Perfect for local service businesses who just want to show up on the map.</p>
              <div className="flex justify-center items-baseline gap-1 my-6">
                <span className="text-5xl font-extrabold text-blue-400">$299</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="text-left max-w-sm mx-auto space-y-3 text-slate-300 mb-8">
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> Google Business Profile Management</li>
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> Weekly &quot;Google Posts&quot; Updates</li>
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> Review Request System (SMS/Email)</li>
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> 10 Local Citations / Month</li>
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> Monthly Ranking Report</li>
              </ul>
              <Link href="/seo" className="inline-block bg-white text-slate-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg shadow-lg text-lg transition-colors">
                Start Boosting
              </Link>
            </div>

            <div className="mt-16 text-left max-w-2xl mx-auto">
              <p className="text-xl font-semibold mb-4 text-center">Final Question</p>
              <p className="text-slate-300 text-center mb-8">
                Is your Google Business Profile operating like a stable piece of infrastructure... or is it accumulating technical debt?
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="text-blue-400 hover:text-white transition-colors border-b border-blue-400 hover:border-white pb-1">
                  Contact Path Six Solutions &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
