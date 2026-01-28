import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Subscription Model: Treating Your Website as a Service | PathSix Solutions',
  description: 'Learn why subscription-based web design aligns with the reality of maintaining a modern digital presence. CapEx vs OpEx explained.',
  openGraph: {
    title: 'The Subscription Model: Treating Your Website as a Service',
    description: 'Learn why subscription-based web design aligns with the reality of maintaining a modern digital presence.',
    url: 'https://pathsixsolutions.com/resources/web-design/subscription-model',
  },
}

export default function SubscriptionModelArticle() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-slate-900 pt-28 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/resources" className="hover:text-amber-500 transition-colors">
                Resources
              </Link>
              <span>/</span>
              <Link href="/resources/web-design" className="hover:text-amber-500 transition-colors">
                Web Design
              </Link>
              <span>/</span>
              <span className="text-slate-400">Subscription Model</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              The Subscription Model: <br />
              <span className="text-blue-400">Treating Your Website as a Service</span>
            </h1>
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

        {/* INTRODUCTION */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-slate-800">
            <p className="text-xl leading-relaxed text-slate-600 mb-8">
              For decades, the standard approach to web development has been the
              <strong className="text-slate-900"> &quot;Project Model.&quot;</strong> A business hires an agency,
              pays a large upfront sum, and receives a finished website. The project is marked &quot;complete,&quot;
              the developers move on, and the business owner is left with a static asset.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-lg font-medium text-slate-800">
                This model is fundamentally flawed in the context of the modern internet.
              </p>
            </div>
            <p className="leading-relaxed mb-6">
              The web is not static; it is a living, evolving environment. Technologies change, security threats evolve,
              and search engine algorithms shift. A website built under the Project Model begins to depreciate the
              moment it launches, much like a new car driven off the lot.
            </p>
            <p className="leading-relaxed">
              PathSix Solutions proposes a shift to the <strong className="text-slate-900">&quot;Service Model&quot;</strong>—subscription-based
              web design that aligns with the reality of maintaining a digital presence.
            </p>
          </div>
        </section>

        {/* THE PROBLEM SECTION */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Problem with &quot;Set It and Forget It&quot;</h2>
              <p className="max-w-2xl mx-auto text-slate-600">
                Under the traditional model, a business owner might go years without touching their website code.
                During this time, several critical issues arise:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 shadow-sm border-t-4 border-slate-800">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Security Vulnerabilities</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Malicious actors are relentless. A plugin or framework that was secure in 2023 may have critical
                  vulnerabilities discovered in 2025. Without active maintenance, the server becomes a target.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-8 shadow-sm border-t-4 border-slate-800">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Performance Degradation</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  As browsers update and standards change (such as the shift to mobile-first indexing), older sites
                  often break or become slow.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-8 shadow-sm border-t-4 border-slate-800">
                <h3 className="text-xl font-bold mb-4 text-slate-900">The &quot;Redesign Cycle&quot;</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Because the site was neglected for years, it eventually becomes unusable. The business is forced
                  to pay another large lump sum for a total rebuild, restarting the cycle of depreciation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINANCIAL COMPARISON */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 border-b pb-4">Financial Considerations: CapEx vs. OpEx</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-bold text-slate-400 uppercase tracking-wide mb-3">The Old Way (CapEx)</h4>
                <p className="text-slate-600 leading-relaxed">
                  From a business management perspective, the Project Model requires a significant Capital Expenditure—a
                  large cash outlay at a single point in time. This can be a barrier to entry for small businesses or
                  a strain on cash flow for growing LLCs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-600 uppercase tracking-wide mb-3">The Subscription Model (OpEx)</h4>
                <p className="text-slate-800 leading-relaxed font-medium">
                  The Subscription Model converts this into an Operating Expense. By paying a manageable monthly fee,
                  the cost is predictable and spread out.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  This lowers the barrier to entry, allowing a business to launch a professional, high-performance
                  site immediately without draining their capital reserves. This is comparable to leasing a fleet
                  of vehicles to ensure reliability and fixed costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY / SEPARATION OF CONCERNS */}
        <section className="bg-slate-900 text-white py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Separation of Concerns: <br/><span className="text-blue-400">You Run the Business, We Run the Tech</span></h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                In software engineering, &quot;Separation of Concerns&quot; dictates that different layers of an application
                should be handled by distinct, specialized components. This philosophy applies to business management as well.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 italic text-white text-xl">
                &quot;A business owner&apos;s primary concern should be operations, sales, and growth. Their concern should
                not be updating PHP versions, renewing SSL certificates, or fixing broken CSS.&quot;
              </blockquote>

              <p>
                When a business attempts to &quot;DIY&quot; their maintenance to save money, they often violate this separation,
                spending valuable executive time on low-level technical tasks.
              </p>
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">The PathSix Service Agreement</h2>
            <p className="text-lg text-slate-600 mb-10">
              Our subscription model is not just a payment plan; it is a partnership. It ensures that the
              website remains a dynamic tool rather than a static brochure.
            </p>

            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-slate-900">Continuous Integration</h4>
                  <p className="mt-2 text-slate-600">If a new design trend emerges or a new feature is needed, it can be implemented incrementally.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-slate-900">Proactive Security</h4>
                  <p className="mt-2 text-slate-600">We handle the server-side validation, updates, and backups in the background.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-slate-900">Agility</h4>
                  <p className="mt-2 text-slate-600">As the business changes—new services, new team members, new branding—the website changes with it, without the need for a renegotiated contract.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CONCLUSION CTA */}
        <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              The internet is measured in milliseconds and changes daily. A static product cannot compete in a dynamic environment.
              By treating your website as a service, you ensure that your digital storefront is always open, always secure, and always optimized.
            </p>
            <p className="text-xl font-medium text-slate-900 mb-10">
              PathSix Solutions removes the technical burden from the business owner, allowing them to focus on what matters most: serving their customers.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded transition duration-200 ease-in-out shadow-lg hover:shadow-xl"
            >
              Contact PathSix Solutions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}