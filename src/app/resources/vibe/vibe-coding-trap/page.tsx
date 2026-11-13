import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = pageMetadata('/resources/vibe/vibe-coding-trap', 'The "Vibe Coding" Trap | PathSix Solutions', 'When AI Prototypes Meet Real-World Production. From Vibe to Viable.')

// Simple SVG Icons
const WarningIcon = () => (
  <svg className="w-10 h-10 text-[#f4c64f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
);
const ServerIcon = () => (
  <svg className="w-10 h-10 text-[#c4532f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
);
const LockIcon = () => (
  <svg className="w-10 h-10 text-[#c4532f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);
const ScaleIcon = () => (
  <svg className="w-10 h-10 text-[#c4532f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);

export default function VibeCodingTrap() {
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
              <Link href="/resources/vibe" className="hover:text-[var(--site-gold)] transition-colors">
                AI Resources
              </Link>
              <span>/</span>
              <span className="text-[#bfc5bc]">The Vibe Coding Trap</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative site-dark text-white py-16 px-6 overflow-hidden border-b border-[#343b35]">
          <div className="absolute inset-0 opacity-20"
               style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-block bg-[#f4c64f] text-[#202621] font-semibold px-3 py-1 rounded text-xs tracking-widest uppercase mb-6">
              Engineering Insights
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              The &quot;Vibe Coding&quot; Trap: <br />
              <span className="text-[#bfc5bc]">When AI Prototypes Meet Production</span>
            </h1>
            <p className="text-xl text-[#d5d9d0] font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Generating code is easy. Engineering a system is hard. <br/>
              The gap between a prompt and a product is larger than you think.
            </p>
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

        {/* Introduction */}
        <section className="py-20 px-6 md:px-12 bg-[#fafaf7]">
          <div className="max-w-4xl mx-auto text-[#202621]">
            <p className="font-medium text-2xl text-[#202621] mb-8">
              In the rapidly evolving landscape of software development, a new phenomenon has emerged: <span className="text-[#c4532f] font-semibold">&quot;Vibe Coding.&quot;</span>
            </p>
            <p className="text-lg leading-relaxed text-[#59625a] mb-6">
              With powerful LLMs like Claude and ChatGPT, non-technical founders can generate functional code by describing ideas in plain English. This democratizes prototyping, allowing visions to manifest in hours rather than months.
            </p>
            <div className="bg-[#f3f1ea] p-8 border-l-4 border-[#f4c64f] shadow-sm rounded-r-lg my-10">
              <h3 className="font-semibold text-[#202621] mb-2">The Reality Check</h3>
              <p className="text-[#3d453e] italic">
                &quot;A functional prototype is not a production-ready application. While AI can simulate functionality, it often ignores the fundamental pillars of software engineering: security, scalability, and maintainability.&quot;
              </p>
            </div>
            <p className="leading-relaxed text-[#59625a]">
              For a business, the gap between an AI-generated script and a deployable commercial asset is a formidable challenge. This is how you transition from a &quot;vibe&quot; to a viable business solution.
            </p>
          </div>
        </section>

        {/* The Illusion of Functionality */}
        <section className="bg-[#f3f1ea] py-20 px-6 md:px-12 border-y border-[#e4e1d6]">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-[#202621]">The Illusion of Functionality</h2>
                <p className="mb-6 text-[#3d453e] leading-relaxed">
                  A quickly generated prototype may demonstrate only the <strong className="text-[#202621]">&quot;Happy Path&quot;</strong>. Check invalid inputs, failed requests, permissions, and recovery rather than assuming those cases were handled.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#f3d3c6] p-2 rounded text-[#a63f26] font-semibold text-xs mt-1">AI</div>
                    <p className="text-sm text-[#3d453e]">Generates a Python script to process customer data. Works perfectly on your laptop.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#fbe3d8] p-2 rounded text-[#c4532f] font-semibold text-xs mt-1">REALITY</div>
                    <p className="text-sm text-[#3d453e]">Lacks Error Handling and Input Validation. A malicious SQL injection string executes blindly, exposing your database.</p>
                  </div>
                </div>
              </div>

              {/* Code Visual */}
              <div className="bg-[#202621] rounded-sm shadow-none overflow-hidden font-mono text-xs md:text-sm">
                <div className="bg-[#2b322c] px-4 py-2 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#b5452a]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#f4c64f]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#5f8f58]"></div>
                </div>
                <div className="p-6 text-[#d5d9d0]">
                  <p className="text-[#6c746c] mb-2">{'# The "Vibe Code" (Dangerous)'}</p>
                  <p><span className="text-[#f4c64f]">def</span> <span className="text-[#f4c64f]">get_user</span>(user_input):</p>
                  <p className="ml-4 text-[#6c746c]">{'# No validation. Direct execution.'}</p>
                  <p className="ml-4 mb-4">query = <span className="text-[#a9cba3]">f&quot;SELECT * FROM users WHERE name = &apos;</span>{'{user_input}'}<span className="text-[#a9cba3]">&apos;&quot;</span></p>

                  <div className="border-t border-[#3f4740] my-4 pt-4">
                    <p className="text-[#e8a08a] font-semibold">&gt;&gt;&gt; CRITICAL VULNERABILITY DETECTED</p>
                    <p className="text-[#6c746c]">SQL Injection possible. Database exposed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Spaghetti Code Problem */}
        <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center text-[#202621]">The &quot;Spaghetti Code&quot; Problem</h2>
          <p className="text-center text-[#59625a] max-w-2xl mx-auto mb-12 leading-relaxed">
            AI models generate code in chunks, often without context of the broader architecture. This violates the <strong className="text-[#202621]">Separation of Concerns</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f1ea] p-6 rounded-sm border border-[#e4e1d6]">
              <h4 className="font-semibold text-[#202621] mb-3">Inline Logic</h4>
              <p className="text-sm text-[#3d453e]">Generated code can mix responsibilities in ways that make changes difficult. Review its structure in the context of the framework and application.</p>
            </div>
            <div className="bg-[#f3f1ea] p-6 rounded-sm border border-[#e4e1d6]">
              <h4 className="font-semibold text-[#202621] mb-3">Zero Modularity</h4>
              <p className="text-sm text-[#3d453e]">Tightly coupled business logic and UI can make unrelated changes affect each other. Explicit interfaces and regression tests help.</p>
            </div>
            <div className="bg-[#f3f1ea] p-6 rounded-sm border border-[#e4e1d6]">
              <h4 className="font-semibold text-[#202621] mb-3">Maintenance Debt</h4>
              <p className="text-sm text-[#3d453e]">A human developer fixing a bug in AI code often spends more time untangling the logic than fixing the actual issue.</p>
            </div>
          </div>
        </section>

        {/* Hidden Technical Debt */}
        <section className="bg-[#202621] text-[#d5d9d0] py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-4">Security &amp; Scalability: Hidden Debt</h2>
              <p className="text-lg">A working prototype can still require substantial <span className="text-[#f4c64f] font-semibold">testing, security, and operational work</span>. The effort depends on the application.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#2b322c] p-8 rounded-sm border border-[#3f4740] hover:border-[#f4c64f] transition-colors">
                <WarningIcon />
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">Scalability</h3>
                <p className="text-sm leading-relaxed">
                  A prototype may store data in a local JSON file. Concurrent writes, persistence, and recovery requirements can make that unsuitable for production; test against the actual workload.
                </p>
              </div>
              <div className="bg-[#2b322c] p-8 rounded-sm border border-[#3f4740] hover:border-[#f4c64f] transition-colors">
                <WarningIcon />
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">Credentials</h3>
                <p className="text-sm leading-relaxed">
                  AI often hard-codes API keys directly into source code. If pushed to GitHub, your Stripe or OpenAI keys are compromised immediately.
                </p>
              </div>
              <div className="bg-[#2b322c] p-8 rounded-sm border border-[#3f4740] hover:border-[#f4c64f] transition-colors">
                <WarningIcon />
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">Dependencies</h3>
                <p className="text-sm leading-relaxed">
                  AI often suggests outdated libraries, creating a fragile ecosystem that breaks when a single component attempts to update.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Path Six Solution */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 text-[#202621]">Professionalizing the Prototype</h2>
            <p className="text-lg text-[#59625a] max-w-3xl mx-auto leading-relaxed">
              AI code is not useless&mdash;it is a dynamic blueprint. But to turn that blueprint into a structure that can house a business, <span className="text-[#c4532f] font-semibold">professional intervention is required.</span>
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start bg-[#fafaf7] p-8 rounded-sm shadow-sm border border-[#ece9df]">
              <div className="shrink-0 bg-[#fbe3d8] p-4 rounded-full">
                <ServerIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#202621] mb-2">Organizing the Application</h3>
                <p className="text-[#3d453e] leading-relaxed">We separate responsibilities using an architecture suited to the application. MVC is one option; clear data ownership, modularity, and tests matter more than a particular pattern.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-[#fafaf7] p-8 rounded-sm shadow-sm border border-[#ece9df]">
              <div className="shrink-0 bg-[#fbe3d8] p-4 rounded-full">
                <LockIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#202621] mb-2">Hardening Security</h3>
                <p className="text-[#3d453e] leading-relaxed">We audit the code for vulnerabilities, implement server-side validation, and secure authentication protocols to protect client data and prevent breaches.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-[#fafaf7] p-8 rounded-sm shadow-sm border border-[#ece9df]">
              <div className="shrink-0 bg-[#fbe3d8] p-4 rounded-full">
                <ScaleIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#202621] mb-2">Optimizing for Growth</h3>
                <p className="text-[#3d453e] leading-relaxed">We replace temporary data storage with scalable cloud-based databases capable of handling enterprise-level traffic, moving you from a script to a platform.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <section className="bg-[#202621] text-white py-20 px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-light mb-8">
              &quot;Speed should not come at the cost of stability.&quot;
            </p>
            <div className="h-px w-24 bg-[#3a423b] mx-auto mb-8"></div>
            <p className="text-[#bfc5bc] mb-10 text-lg">
              A prototype proves an idea; production code sustains a business. For the entrepreneur, the &quot;Vibe Coding&quot; phase is the beginning of the journey, not the destination.
            </p>

            <div className="rounded-sm border border-[#3f4740] bg-[#2b322c] p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-white">Need help with your application?</h3>
              <p className="mt-4 text-base text-[#d5d9d0]">Our Custom Apps service covers purpose-built software and technical development. Tell us what you have and where you need help.</p>
              <div className="mt-6 font-medium text-[#f4c64f]">
                <Link href="/build" className="inline-flex min-h-12 items-center hover:underline">Explore Custom Apps →</Link>
              </div>
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
  );
}
