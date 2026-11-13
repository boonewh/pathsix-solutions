import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = pageMetadata('/resources/web-design/choosing-a-web-designer', 'How to Choose the Right Web Designer | PathSix Solutions', 'Learn what questions to ask and red flags to avoid when hiring a web designer. A guide for business owners navigating the crowded marketplace.')

export default function ChoosingWebDesignerArticle() {
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
              <Link href="/resources/web-design" className="hover:text-[var(--site-gold)] transition-colors">
                Web Design
              </Link>
              <span>/</span>
              <span className="text-[#bfc5bc]">Choosing a Web Designer</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="site-dark py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              How to Choose the <br />
              <span className="text-[#f4c64f]">Right Web Designer</span>
            </h1>
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-lg font-medium text-[#e6e8e2]">
                By Will Boone
              </p>
              <p className="text-sm text-[#bfc5bc] uppercase tracking-widest border-t border-[#3f4740] pt-2 mt-1">
                Technical Director, PathSix Solutions
              </p>
            </div>
          </div>
        </header>

        {/* INTRODUCTION */}
        <section className="py-16 px-6 bg-[#fafaf7]">
          <div className="max-w-3xl mx-auto text-[#202621]">
            <p className="text-xl leading-relaxed text-[#59625a] mb-8">
              In the digital age, a company&apos;s website is more than a digital brochure; it is often the primary
              point of interaction between a business and its customers. Consequently, the individual or agency
              chosen to build this asset holds significant influence over the company&apos;s public image and operational efficiency.
            </p>
            <div className="bg-[#f3f1ea] border-l-4 border-[#202621] p-6 my-8">
              <h3 className="font-semibold text-[#202621] mb-2">The Reality of the Market</h3>
              <p className="text-[#3d453e]">
                The barrier to entry in the web design industry is virtually non-existent. The marketplace is crowded
                with providers ranging from self-taught hobbyists using drag-and-drop builders to enterprise-level
                software engineers. Not all web designers are created equal.
              </p>
            </div>
            <p className="leading-relaxed text-[#59625a]">
              A poor choice can lead to a visually unappealing site, but a disastrous choice can lead to security
              vulnerabilities, legal issues regarding ownership, and a website that requires a complete rebuild
              within a year.
            </p>
          </div>
        </section>

        {/* THE SPECTRUM OF DESIGN (Three Column Grid) */}
        <section className="py-20 px-6 bg-[#f3f1ea]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#202621] mb-4">The Spectrum of Design: Art vs. Engineering</h2>
              <p className="max-w-2xl mx-auto text-[#59625a]">
                To choose the right designer, one must understand that web design sits at the intersection
                of visual art and software engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Persona 1 */}
              <div className="bg-[#fafaf7] p-8 shadow-sm border-t-4 border-[#d6d2c5]">
                <h3 className="text-lg font-semibold text-[#202621] mb-2">The &quot;Pure Artist&quot;</h3>
                <p className="text-sm text-[#6c746c] uppercase tracking-wide mb-4 font-semibold">Focus: Aesthetics</p>
                <p className="text-[#59625a] leading-relaxed text-sm">
                  Focuses entirely on visuals. They may create a stunning experience, but often lack the
                  technical knowledge to ensure the site loads quickly, ranks well on search engines (SEO),
                  or scales on mobile devices.
                </p>
              </div>

              {/* Persona 2 */}
              <div className="bg-[#fafaf7] p-8 shadow-sm border-t-4 border-[#d6d2c5]">
                <h3 className="text-lg font-semibold text-[#202621] mb-2">The Template-Based Provider</h3>
                <p className="text-sm text-[#6c746c] uppercase tracking-wide mb-4 font-semibold">Focus: Speed &amp; Cost</p>
                <p className="text-[#59625a] leading-relaxed text-sm">
                  Uses a pre-made theme or site builder. Evaluate the actual customization, accessibility, performance, maintenance, and price rather than assuming the platform determines quality.
                </p>
              </div>

              {/* Persona 3 (Highlighted) */}
              <div className="bg-[#fafaf7] p-8 shadow-sm border-t-4 border-[#fa7049] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#fa7049] text-[#202621] text-xs font-semibold px-2 py-1 uppercase">Ideal</div>
                <h3 className="text-lg font-semibold text-[#202621] mb-2">The Web Architect</h3>
                <p className="text-sm text-[#c4532f] uppercase tracking-wide mb-4 font-semibold">Focus: Balance</p>
                <p className="text-[#202621] leading-relaxed text-sm">
                  Balances the &quot;View&quot; (visuals) with the &quot;Model&quot; and &quot;Controller&quot; (logic). They build functional
                  tools that are secure, fast, and maintainable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RED FLAGS */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#202621] mb-10 pb-4 border-b border-[#e4e1d6]">Red Flags to Avoid</h2>

          <div className="space-y-12">
            {/* Flag 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h4 className="text-lg font-semibold text-[#202621]">The &quot;Yes&quot; Man</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-[#59625a] leading-relaxed">
                  If a designer agrees to every feature request without asking about the business purpose or technical feasibility,
                  this is a red flag. A professional partner should act as a consultant, pushing back against &quot;bloat&quot;
                  or bad ideas that might hinder user experience.
                </p>
              </div>
            </div>

            {/* Flag 2 (With PathSix Callout) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h4 className="text-lg font-semibold text-[#202621]">Lack of Ownership Clarity</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-[#59625a] leading-relaxed mb-6">
                  Some agencies hold websites hostage by registering domains in their own name or refusing to release source
                  code when a client wants to switch providers—a practice known as vendor lock-in.
                </p>

                <div className="bg-[#fbe3d8] p-6 rounded-sm border border-[#f3cdbb]">
                  <h5 className="text-[#3d453e] font-semibold mb-2 text-sm uppercase tracking-wide">The PathSix Approach</h5>
                  <p className="text-[#3d453e] text-sm">
                    We believe flexibility and transparency are essential. We can purchase and manage your domain on your
                    behalf, or you can maintain full ownership. <strong className="text-[#202621]">Either way, your website and domain are always yours.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Flag 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h4 className="text-lg font-semibold text-[#202621]">No Mention of Maintenance</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-[#59625a] leading-relaxed">
                  A website is not a static object. A designer who treats the project as a &quot;one-off&quot; transaction without
                  discussing post-launch support is leaving the client vulnerable to future security breaches.
                </p>
              </div>
            </div>

            {/* Flag 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h4 className="text-lg font-semibold text-[#202621]">Invisibility on Mobile</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-[#59625a] leading-relaxed">
                  If the designer shows you a portfolio that looks great on a desktop monitor but breaks or looks
                  cluttered on a smartphone, ask how they verify the experience on smaller screens and different devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CRITICAL QUESTIONS (Dark Background) */}
        <section className="bg-[#202621] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-2">Critical Questions to Ask</h2>
            <p className="text-[#bfc5bc] mb-12">Before signing a contract, ask these questions to determine technical viability.</p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Q1 */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 border-l-4 border-[#fa7049] pl-4">&quot;Who owns the assets upon completion?&quot;</h4>
                <p className="text-[#d5d9d0] leading-relaxed text-sm">
                  Ask who controls the domain, what can be exported or transferred, and which code and images are licensed rather than owned. Get cancellation and handover terms in writing.
                </p>
              </div>

              {/* Q2 */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 border-l-4 border-[#fa7049] pl-4">&quot;How do you handle security and backups?&quot;</h4>
                <p className="text-[#d5d9d0] leading-relaxed text-sm">
                  Security is paramount. The designer should have a clear plan for SSL certificates, server-side security
                  measures, and automated backup routines to prevent data loss.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 border-l-4 border-[#fa7049] pl-4">&quot;Do you use custom code or pre-bought themes?&quot;</h4>
                <p className="text-[#d5d9d0] leading-relaxed text-sm">
                  Ask what is being designed or built specifically for you and what uses existing components. Both custom and template-based work need sound implementation, testing, and maintenance.
                </p>
              </div>

              {/* Q4 */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 border-l-4 border-[#fa7049] pl-4">&quot;What is your process for SEO?&quot;</h4>
                <p className="text-[#d5d9d0] leading-relaxed text-sm">
                  A beautiful website is useless if no one can find it. The designer should understand semantic HTML
                  structure, fast load times, and proper meta-tagging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="bg-[#f3f1ea] py-24 px-6 border-t border-[#e4e1d6]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[#202621] mb-6">Conclusion</h2>
            <p className="text-lg text-[#59625a] mb-10 leading-relaxed">
              Selecting a web designer is a hiring decision, not just a purchase. The goal is to find a partner
              who understands the business objectives and possesses the technical discipline to execute them.
            </p>
            <p className="text-lg text-[#59625a] mb-10 leading-relaxed">
              By looking past the surface-level visuals and interrogating the designer&apos;s approach to ownership,
              security, and long-term maintenance, a business owner can avoid the pitfalls of the amateur market.
            </p>

            <Link
              href="/contact"
              className="site-primary"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
