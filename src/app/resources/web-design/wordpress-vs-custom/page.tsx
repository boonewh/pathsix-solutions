import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architectural Decision: WordPress vs. Custom Code | PathSix Solutions',
  description: 'A comparative analysis of WordPress CMS versus Custom Software Development. Understand when to choose managed hosting and when to invest in bespoke applications.',
  openGraph: {
    title: 'Selecting the Right Foundation: WordPress vs. Custom Software',
    description: 'A comparative analysis of WordPress CMS versus Custom Software Development.',
    url: 'https://pathsixsolutions.com/resources/web-design/wordpress-vs-custom',
  },
}

export default function WordPressVsCustomArticle() {
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
              <Link href="/resources/web-design" className="hover:text-amber-500 transition-colors">
                Web Design
              </Link>
              <span>/</span>
              <span className="text-slate-400">WordPress vs. Custom Software</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">
              Technical Strategy
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Selecting the Right Foundation: <br />
              <span className="text-blue-400">WordPress vs. Custom Software</span>
            </h1>
            <div className="flex flex-col items-center justify-center space-y-2 mt-8">
              <p className="text-lg font-medium text-slate-200">
                By Will Boone
              </p>
              <p className="text-sm text-slate-400 uppercase tracking-widest border-t border-slate-700 pt-2 mt-1">
                Technical Director, PathSix Solutions
              </p>
            </div>
          </div>
        </header>

        {/* EXECUTIVE SUMMARY / INTRO */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Executive Summary</h2>
            <p className="text-xl leading-relaxed text-slate-600 mb-8">
              In the digital world, business owners often confuse a <strong className="text-slate-900">website</strong> (informational)
              with a <strong className="text-slate-900">web application</strong> (functional). While they both load in a web browser,
              they are fundamentally different tools.
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-600 p-8 my-8 shadow-sm">
              <p className="text-lg text-slate-800 leading-relaxed">
                At PathSix Solutions, we support both approaches. We do not believe in a &quot;one-size-fits-all&quot; solution.
                This guide aims to help you decide whether your business needs the broad utility of WordPress or the precision of Custom Code.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: WORDPRESS */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">1. The WordPress Ecosystem</h2>
              <p className="text-slate-600 leading-relaxed">
                WordPress powers a massive portion of the internet because it is accessible and extensible.
              </p>
            </div>

            {/* Analogy Block */}
            <div className="bg-white p-8 border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-slate-200 text-slate-600 font-bold px-4 py-2 text-xs uppercase tracking-wide rounded">
                The Analogy
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Pre-Furnished House</h3>
                <p className="text-slate-600">
                  Think of WordPress like a pre-furnished house. The structure is already built; you simply move in
                  and arrange the furniture (content) to your liking.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Optimal Use Case */}
              <div className="bg-white p-8 border-t-4 border-blue-500 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">The Optimal Use Case</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  WordPress is the judicious choice when your primary goal is <strong>communication</strong>. If you need
                  to publish articles, manage a standard online store, or update team bios without calling a developer,
                  a CMS is efficient.
                </p>
              </div>

              {/* Hidden Costs */}
              <div className="bg-white p-8 border-t-4 border-slate-400 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">The Hidden Costs</h3>
                <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">⚠</span>
                    <span><strong>Performance Drag:</strong> It carries &quot;heavy&quot; code you might never use, slowing down the site.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">⚠</span>
                    <span><strong>Security Targets:</strong> Being popular makes it a target. Cheap plugins can leave back doors open.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PathSix Approach Callout */}
            <div className="mt-8 bg-blue-100 p-6 rounded-sm border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2 text-sm uppercase">The PathSix Approach</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                We do not do &quot;set it and forget it.&quot; Our Managed Hosting treats your WordPress site like a secure vault.
                We vet every plugin, handle security updates, and optimize servers so your site loads instantly.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CUSTOM CODE */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">2. Custom Software: Precision Engineering</h2>
              <p className="text-slate-600 leading-relaxed">
                Custom development is the &quot;bespoke&quot; approach. We do not try to force a blogging platform to run your business logic.
                Instead, we architect a solution specifically for your requirements.
              </p>
            </div>

            {/* Optimal Use Case Custom */}
            <div className="bg-slate-50 p-8 border-l-4 border-slate-900 mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Optimal Use Case</h3>
              <p className="text-slate-700 leading-relaxed">
                Custom code is paramount when you are building a <strong>tool</strong> rather than a brochure.
                This includes client portals, internal dashboards, booking systems, or any software where specific functionality is vital.
              </p>
            </div>

            {/* Advantages Grid */}
            <h3 className="text-xl font-bold text-slate-900 mb-6">The Advantages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-slate-200 rounded-sm hover:border-blue-400 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2">Lean and Fast</h4>
                <p className="text-sm text-slate-600">We only build what you need. There is no excess baggage slowing down the system.</p>
              </div>
              <div className="p-6 border border-slate-200 rounded-sm hover:border-blue-400 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2">Tighter Security</h4>
                <p className="text-sm text-slate-600">By eliminating unnecessary features, there are fewer places for attackers to break in.</p>
              </div>
              <div className="p-6 border border-slate-200 rounded-sm hover:border-blue-400 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2">Scalability</h4>
                <p className="text-sm text-slate-600">Custom software grows with you. It doesn&apos;t break when your data becomes complex.</p>
              </div>
            </div>

            {/* PathSix Approach Callout */}
            <div className="mt-8 bg-slate-900 p-6 rounded-sm text-white">
              <h4 className="font-bold text-blue-400 mb-2 text-sm uppercase">The PathSix Approach</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                We bridge the gap between &quot;DIY&quot; and &quot;Enterprise.&quot; Whether we are refactoring a prototype you built with AI
                (our &quot;Vibe Coding&quot; service) or building a custom CRM from scratch, we ensure the code is professional, secure, and yours to keep.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMPARATIVE ANALYSIS */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Comparative Analysis</h2>
            <p className="text-slate-400 mb-10 max-w-2xl">
              To make the right choice, we analyze the options across three business dimensions: Flexibility, Security, and Cost.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Flexibility Card */}
              <div className="bg-slate-800 p-8 rounded border border-slate-700">
                <h3 className="text-blue-400 font-bold text-lg mb-4 uppercase tracking-wider">Functional Flexibility</h3>
                <div className="mb-4">
                  <span className="block font-bold text-white mb-1">WordPress</span>
                  <p className="text-sm text-slate-400">Excellent for visual changes and content editing. Poor for complex data logic.</p>
                </div>
                <div>
                  <span className="block font-bold text-white mb-1">Custom Code</span>
                  <p className="text-sm text-slate-400">Unlimited logic. We can make the data behave exactly how your business process requires.</p>
                </div>
              </div>

              {/* Security Card */}
              <div className="bg-slate-800 p-8 rounded border border-slate-700">
                <h3 className="text-blue-400 font-bold text-lg mb-4 uppercase tracking-wider">Security Posture</h3>
                <div className="mb-4">
                  <span className="block font-bold text-white mb-1">WordPress</span>
                  <p className="text-sm text-slate-400">Reactive. Requires constant vigilance and updates to stay safe (which we handle).</p>
                </div>
                <div>
                  <span className="block font-bold text-white mb-1">Custom Code</span>
                  <p className="text-sm text-slate-400">Proactive. Security is built into the foundation, not added as an afterthought.</p>
                </div>
              </div>
            </div>

            {/* TCO Analysis */}
            <div className="mt-8 p-8 border border-slate-700 bg-slate-800/50 rounded">
              <h3 className="text-blue-400 font-bold text-lg mb-4 uppercase tracking-wider">Total Cost of Ownership (TCO)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <span className="block font-bold text-white mb-2">WordPress</span>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Generally cheaper to build upfront. However, long-term costs can rise due to premium plugin subscriptions, maintenance fees, and technical debt.
                  </p>
                </div>
                <div>
                  <span className="block font-bold text-white mb-2">Custom Code</span>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Higher upfront investment. However, long-term costs are often lower because you aren&apos;t paying monthly licensing fees for third-party add-ons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSION / CTA */}
        <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Recommendation</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              If you need a marketing site to drive sales and explain your brand, choose <strong className="text-slate-900">Managed WordPress</strong>.
              If you are building a digital product, a dashboard, or a complex tool for your team, choose <strong className="text-slate-900">Custom Software</strong>.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Regardless of the choice, the infrastructure matters. PathSix Solutions provides the professional management
              layer for both paths, ensuring your digital assets are secure, fast, and reliable.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded shadow-lg hover:shadow-xl transition duration-200"
            >
              Schedule a Technical Assessment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}