import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = pageMetadata('/resources/crm/anti-bloat', 'The Anti-Bloat Philosophy | PathSix Solutions', 'Why your CRM is costing you more than just subscription fees. The case for right-sized, purpose-built CRM solutions.')

// Inline SVG icons
const BarChartIcon = () => (
  <svg className="h-6 w-6 text-[#202621]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
)
const ClockIcon = () => (
  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)
const ShieldAlertIcon = () => (
  <svg className="h-6 w-6 text-[#a63f26]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
)
const CheckCircleIcon = () => (
  <svg className="h-6 w-6 text-[#c4532f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)
const TrendingUpIcon = () => (
  <svg className="h-6 w-6 text-[#c4532f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
)
const DatabaseIcon = () => (
  <svg className="h-6 w-6 text-[#c4532f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
)

export default function AntiBloatArticle() {
  return (
    <>
      <main className="bg-[#fafaf7] min-h-screen selection:bg-[#f9eecb]">
        {/* Breadcrumb */}
        <div className="site-dark pt-8 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-[#bfc5bc]">
              <Link href="/resources" className="hover:text-[var(--site-gold)] transition-colors">
                Resources
              </Link>
              <span>/</span>
              <Link href="/resources/crm" className="hover:text-[var(--site-gold)] transition-colors">
                CRM
              </Link>
              <span>/</span>
              <span className="text-[#bfc5bc]">The Anti-Bloat Philosophy</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative site-dark py-16 px-6 overflow-hidden">

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-[#f4c64f]/30 bg-[#f4c64f]/10 px-3 py-1 text-sm font-medium text-[#f4c64f] mb-8">
              Technical Insight
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              The Anti-Bloat Philosophy
            </h1>
            <p className="text-xl text-[#d5d9d0] leading-relaxed mb-8">
              Why Your CRM Is Costing You More Than Just Subscription Fees
            </p>
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-lg font-medium text-[#e6e8e2]">By Will Boone</p>
              <p className="text-sm text-[#bfc5bc] uppercase tracking-widest border-t border-[#3f4740] pt-2 mt-1">
                Technical Director, PathSix Solutions
              </p>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="py-16 px-6 bg-[#fafaf7]">
          <div className="max-w-3xl mx-auto text-[#202621]">
            <p className="text-lg leading-relaxed text-[#59625a] mb-8">
              In the modern business environment, a Customer Relationship Management (CRM) system is the central nervous system of a sales organization. It houses proprietary data, tracks revenue pipelines, and manages client interactions. Because of this importance, many growing businesses default to the industry giants&mdash;platforms like Salesforce or HubSpot&mdash;assuming that the most expensive tool is inherently the best.
            </p>
            <p className="text-lg leading-relaxed text-[#59625a]">
              However, for many Small to Mid-sized Enterprises (SMEs), these enterprise-grade platforms present a significant problem: <strong className="text-[#202621]">&quot;Feature Bloat.&quot;</strong> Just as a rancher in Texas does not need a luxury sedan to haul hay, a focused sales team does not need a CRM cluttered with features designed for Fortune 500 conglomerates. This report examines the hidden costs of software bloat and the efficiency of purpose-built, &quot;Anti-Bloat&quot; CRM solutions.
            </p>
          </div>
        </section>

        {/* The Hidden Costs Section */}
        <section className="bg-[#f3f1ea] py-16 sm:py-24 border-y border-[#e4e1d6]">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#202621] mb-12 text-center">
              The Hidden Cost of Unused Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Card 1 */}
              <div className="bg-[#fafaf7] rounded-sm shadow-sm border border-[#e4e1d6] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#fa7049] mb-6">
                  <BarChartIcon />
                </div>
                <h3 className="text-xl font-semibold text-[#202621] mb-4">Wasted Capital</h3>
                <p className="text-[#3d453e] leading-relaxed">
                  When analyzing the cost of a CRM, one must look beyond the advertised monthly price. You are essentially paying for a full cable package when you only watch the news. You pay for marketing automation, complex forecasting AI, and global territory management&mdash;tools your team isn&apos;t utilizing.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#fafaf7] rounded-sm shadow-sm border border-[#e4e1d6] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#3a423b] mb-6">
                  <ClockIcon />
                </div>
                <h3 className="text-xl font-semibold text-[#202621] mb-4">Training Overhead</h3>
                <p className="text-[#3d453e] leading-relaxed">
                  The learning curve for enterprise platforms is steep. Onboarding a new salesperson requires hours of training just to navigate the menu structure, rather than focusing on selling. The &quot;friction&quot; introduced by complexity is a direct financial drain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Adoption / GIGO Section */}
        <section className="py-16 sm:py-24 px-6 bg-[#fafaf7]">
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-[#b5452a] bg-[#f8e4dc] p-8 rounded-r-lg">
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <ShieldAlertIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#5f2414] mb-2">The User Adoption Struggle</h3>
                  <p className="text-[#7d2f1b] leading-relaxed">
                    The most sophisticated software in the world is useless if the end-user refuses to use it. When a system is slow or confusing, data entry becomes sporadic.
                  </p>
                  <p className="text-[#7d2f1b] leading-relaxed mt-4 font-medium">
                    &quot;Garbage in, garbage out&quot; is a fundamental truth.
                  </p>
                  <p className="text-[#7d2f1b] leading-relaxed mt-4">
                    If a salesperson finds the CRM frustrating, they will enter partial data or keep their own records in a spreadsheet. This leaves management with incomplete data and no visibility into the actual sales pipeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Anti-Bloat Approach */}
        <section className="bg-[#202621] text-white py-16 sm:py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-6">The &quot;Anti-Bloat&quot; Approach</h2>
                <p className="text-[#d5d9d0] text-lg mb-8 leading-relaxed">
                  Path Six Solutions advocates for a &quot;Right-Sized&quot; architecture. Instead of forcing a business to adapt its workflow to a rigid software structure, we build the software to fit the existing workflow.
                </p>
                <div className="inline-flex items-center text-[#f4c64f] font-semibold">
                  Core Principles
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>

              <div className="mt-12 lg:mt-0 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0"><CheckCircleIcon /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Streamlined Interface</h3>
                    <p className="text-[#bfc5bc] mt-1 leading-relaxed">The user sees only what they need. If a field isn&apos;t necessary for the sale, it isn&apos;t on the screen.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0"><TrendingUpIcon /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">High Performance</h3>
                    <p className="text-[#bfc5bc] mt-1 leading-relaxed">A focused interface can reduce friction. Measure load times with realistic data and workflows rather than assuming fewer features guarantee speed.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0"><DatabaseIcon /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Scalability</h3>
                    <p className="text-[#bfc5bc] mt-1 leading-relaxed">We start with core essentials. As the business grows, new modules are added, adhering to the principle of modularity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="px-6 py-16 sm:py-24 bg-[#fafaf7]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-[#202621] mb-12 text-center">
              Cost Analysis: Subscription vs. Ownership
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* SaaS Model */}
              <div className="rounded-sm bg-[#eeebe2] p-8 border border-[#e4e1d6] flex flex-col">
                <h3 className="text-sm font-semibold text-[#59625a] mb-4 uppercase tracking-wider">Standard SaaS Model</h3>
                <p className="text-[#3d453e] mb-6 flex-grow leading-relaxed">
                  Charges a perpetual rent. Illustrative subscription-only calculation, not a current vendor quote: ten users at $100 per user/month over five years:
                </p>
                <div className="mt-auto">
                  <span className="block text-4xl font-semibold text-[#202621]">$60,000</span>
                  <span className="text-sm text-[#a63f26] font-medium mt-2 block">Subscription Fees Only</span>
                </div>
              </div>

              {/* Custom Model */}
              <div className="rounded-sm bg-[#fbe3d8] p-8 border border-[#f3cdbb] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#fa7049] text-[#202621] text-xs font-semibold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                <h3 className="text-sm font-semibold text-[#202621] mb-4 uppercase tracking-wider">Custom Solution</h3>
                <p className="text-[#3d453e] mb-6 flex-grow leading-relaxed">
                  Compare development, migration, hosting, maintenance, integrations, and support over the same period. Ownership and licensing depend on the agreement; custom software is not automatically cheaper.
                </p>
                <div className="mt-auto">
                  <span className="block text-2xl font-semibold text-[#202621]">Compare Full Costs</span>
                  <span className="text-sm text-[#3f6b3a] font-medium mt-2 block">Ownership Depends on Agreement</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="bg-[#202621] text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Conclusion</h2>
            <p className="text-[#bfc5bc] text-lg mb-12 leading-relaxed">
              There is a time and place for enterprise-level software. However, for a business that values agility and efficiency, the &quot;Anti-Bloat&quot; philosophy offers a superior alternative. By stripping away the superfluous and focusing on the core business logic, Path Six Solutions provides tools that sales teams actually want to use.
            </p>

            <div className="bg-gradient-to-br from-[#2b322c] to-[#2b322c] p-10 rounded-sm border border-[#3f4740] shadow-none">
              <h3 className="text-2xl font-semibold text-white mb-2">Ready to Right-Size Your Architecture?</h3>
              <p className="text-[#bfc5bc] text-sm mb-8">A CRM should accelerate your sales process, not weigh it down.</p>
              <Link href="/crm" className="inline-block bg-[#fafaf7] text-[#202621] hover:bg-[#f9eecb] font-semibold py-4 px-8 rounded-sm shadow-sm text-lg transition-colors">
                Explore CRM Solutions
              </Link>
            </div>

            <div className="mt-12">
              <Link href="/contact" className="text-[#f4c64f] hover:text-white transition-colors border-b border-[#f4c64f] hover:border-white pb-1">
                Contact Path Six Solutions &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
