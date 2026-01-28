import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Choose the Right Web Designer | PathSix Solutions',
  description: 'Learn what questions to ask and red flags to avoid when hiring a web designer. A guide for business owners navigating the crowded marketplace.',
  openGraph: {
    title: 'How to Choose the Right Web Designer',
    description: 'Learn what questions to ask and red flags to avoid when hiring a web designer.',
    url: 'https://pathsixsolutions.com/resources/web-design/choosing-a-web-designer',
  },
}

export default function ChoosingWebDesignerArticle() {
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
              <span className="text-slate-400">Choosing a Web Designer</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              How to Choose the <br />
              <span className="text-blue-400">Right Web Designer</span>
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
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-slate-800">
            <p className="text-xl leading-relaxed text-slate-600 mb-8">
              In the digital age, a company&apos;s website is more than a digital brochure; it is often the primary
              point of interaction between a business and its customers. Consequently, the individual or agency
              chosen to build this asset holds significant influence over the company&apos;s public image and operational efficiency.
            </p>
            <div className="bg-slate-50 border-l-4 border-slate-900 p-6 my-8">
              <h3 className="font-bold text-slate-900 mb-2">The Reality of the Market</h3>
              <p className="text-slate-700">
                The barrier to entry in the web design industry is virtually non-existent. The marketplace is crowded
                with providers ranging from self-taught hobbyists using drag-and-drop builders to enterprise-level
                software engineers. Not all web designers are created equal.
              </p>
            </div>
            <p className="leading-relaxed text-slate-600">
              A poor choice can lead to a visually unappealing site, but a disastrous choice can lead to security
              vulnerabilities, legal issues regarding ownership, and a website that requires a complete rebuild
              within a year.
            </p>
          </div>
        </section>

        {/* THE SPECTRUM OF DESIGN (Three Column Grid) */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Spectrum of Design: Art vs. Engineering</h2>
              <p className="max-w-2xl mx-auto text-slate-600">
                To choose the right designer, one must understand that web design sits at the intersection
                of visual art and software engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Persona 1 */}
              <div className="bg-white p-8 shadow-sm border-t-4 border-slate-300">
                <h3 className="text-lg font-bold text-slate-900 mb-2">The &quot;Pure Artist&quot;</h3>
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-4 font-semibold">Focus: Aesthetics</p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Focuses entirely on visuals. They may create a stunning experience, but often lack the
                  technical knowledge to ensure the site loads quickly, ranks well on search engines (SEO),
                  or scales on mobile devices.
                </p>
              </div>

              {/* Persona 2 */}
              <div className="bg-white p-8 shadow-sm border-t-4 border-slate-300">
                <h3 className="text-lg font-bold text-slate-900 mb-2">The &quot;Template Churner&quot;</h3>
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-4 font-semibold">Focus: Speed &amp; Cost</p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Relies heavily on pre-made templates (Wix, generic WordPress themes). Prices are low, but code
                  is bloated, security is an afterthought, and the site will look identical to thousands of others.
                </p>
              </div>

              {/* Persona 3 (Highlighted) */}
              <div className="bg-white p-8 shadow-lg border-t-4 border-blue-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 uppercase">Ideal</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">The Web Architect</h3>
                <p className="text-sm text-blue-600 uppercase tracking-wide mb-4 font-bold">Focus: Balance</p>
                <p className="text-slate-800 leading-relaxed text-sm">
                  Balances the &quot;View&quot; (visuals) with the &quot;Model&quot; and &quot;Controller&quot; (logic). They build functional
                  tools that are secure, fast, and maintainable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RED FLAGS */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 pb-4 border-b border-slate-200">Red Flags to Avoid</h2>

          <div className="space-y-12">
            {/* Flag 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h4 className="text-lg font-bold text-slate-900">The &quot;Yes&quot; Man</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-slate-600 leading-relaxed">
                  If a designer agrees to every feature request without asking about the business purpose or technical feasibility,
                  this is a red flag. A professional partner should act as a consultant, pushing back against &quot;bloat&quot;
                  or bad ideas that might hinder user experience.
                </p>
              </div>
            </div>

            {/* Flag 2 (With PathSix Callout) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h4 className="text-lg font-bold text-slate-900">Lack of Ownership Clarity</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-slate-600 leading-relaxed mb-6">
                  Some agencies hold websites hostage by registering domains in their own name or refusing to release source
                  code when a client wants to switch providers—a practice known as vendor lock-in.
                </p>

                <div className="bg-blue-50 p-6 rounded-sm border border-blue-100">
                  <h5 className="text-blue-800 font-bold mb-2 text-sm uppercase tracking-wide">The PathSix Approach</h5>
                  <p className="text-slate-700 text-sm">
                    We believe flexibility and transparency are essential. We can purchase and manage your domain on your
                    behalf, or you can maintain full ownership. <strong className="text-slate-900">Either way, your website and domain are always yours.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Flag 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h4 className="text-lg font-bold text-slate-900">No Mention of Maintenance</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-slate-600 leading-relaxed">
                  A website is not a static object. A designer who treats the project as a &quot;one-off&quot; transaction without
                  discussing post-launch support is leaving the client vulnerable to future security breaches.
                </p>
              </div>
            </div>

            {/* Flag 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h4 className="text-lg font-bold text-slate-900">Invisibility on Mobile</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-slate-600 leading-relaxed">
                  If the designer shows you a portfolio that looks great on a desktop monitor but breaks or looks
                  cluttered on a smartphone, they are ignoring the reality that over 50% of web traffic is mobile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CRITICAL QUESTIONS (Dark Background) */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Critical Questions to Ask</h2>
            <p className="text-slate-400 mb-12">Before signing a contract, ask these questions to determine technical viability.</p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Q1 */}
              <div>
                <h4 className="text-lg font-bold text-white mb-3 border-l-4 border-blue-500 pl-4">&quot;Who owns the assets upon completion?&quot;</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  The correct answer should always be the client. The business should own its domain name, the hosting
                  account credentials, and the rights to the code and imagery.
                </p>
              </div>

              {/* Q2 */}
              <div>
                <h4 className="text-lg font-bold text-white mb-3 border-l-4 border-blue-500 pl-4">&quot;How do you handle security and backups?&quot;</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Security is paramount. The designer should have a clear plan for SSL certificates, server-side security
                  measures, and automated backup routines to prevent data loss.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h4 className="text-lg font-bold text-white mb-3 border-l-4 border-blue-500 pl-4">&quot;Do you use custom code or pre-bought themes?&quot;</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  A &quot;custom&quot; price tag should not be attached to a $50 pre-made theme. Custom code often allows for
                  better &quot;separation of concerns,&quot; ensuring design and logic are not dangerously intertwined.
                </p>
              </div>

              {/* Q4 */}
              <div>
                <h4 className="text-lg font-bold text-white mb-3 border-l-4 border-blue-500 pl-4">&quot;What is your process for SEO?&quot;</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  A beautiful website is useless if no one can find it. The designer should understand semantic HTML
                  structure, fast load times, and proper meta-tagging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Selecting a web designer is a hiring decision, not just a purchase. The goal is to find a partner
              who understands the business objectives and possesses the technical discipline to execute them.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              By looking past the surface-level visuals and interrogating the designer&apos;s approach to ownership,
              security, and long-term maintenance, a business owner can avoid the pitfalls of the amateur market.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded shadow-lg hover:shadow-xl transition duration-200"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
