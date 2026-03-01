import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The "Vibe Coding" Trap | PathSix Solutions',
  description: 'When AI Prototypes Meet Real-World Production. From Vibe to Viable.',
  openGraph: {
    title: 'The "Vibe Coding" Trap: When AI Prototypes Meet Production',
    description: 'Generating code is easy. Engineering a system is hard. The gap between a prompt and a product is larger than you think.',
    url: 'https://pathsixsolutions.com/resources/vibe/vibe-coding-trap',
  },
}

// Simple SVG Icons
const WarningIcon = () => (
  <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
);
const ServerIcon = () => (
  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
);
const LockIcon = () => (
  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);
const ScaleIcon = () => (
  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);

export default function VibeCodingTrap() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen selection:bg-amber-100">
        {/* Breadcrumb */}
        <div className="bg-slate-950 pt-28 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/resources" className="hover:text-amber-500 transition-colors">
                Resources
              </Link>
              <span>/</span>
              <Link href="/resources/vibe" className="hover:text-amber-500 transition-colors">
                AI Deployment
              </Link>
              <span>/</span>
              <span className="text-slate-400">The Vibe Coding Trap</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative bg-slate-950 text-white py-16 px-6 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 opacity-20"
               style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-block bg-amber-500 text-slate-900 font-bold px-3 py-1 rounded text-xs tracking-widest uppercase mb-6">
              Engineering Insights
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              The &quot;Vibe Coding&quot; Trap: <br />
              <span className="text-slate-400">When AI Prototypes Meet Production</span>
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Generating code is easy. Engineering a system is hard. <br/>
              The gap between a prompt and a product is larger than you think.
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
            <p className="font-medium text-2xl text-slate-900 mb-8">
              In the rapidly evolving landscape of software development, a new phenomenon has emerged: <span className="text-amber-600 font-bold">&quot;Vibe Coding.&quot;</span>
            </p>
            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              With powerful LLMs like Claude and ChatGPT, non-technical founders can generate functional code by describing ideas in plain English. This democratizes prototyping, allowing visions to manifest in hours rather than months.
            </p>
            <div className="bg-slate-50 p-8 border-l-4 border-amber-500 shadow-lg rounded-r-lg my-10">
              <h3 className="font-bold text-slate-900 mb-2">The Reality Check</h3>
              <p className="text-slate-700 italic">
                &quot;A functional prototype is not a production-ready application. While AI can simulate functionality, it often ignores the fundamental pillars of software engineering: security, scalability, and maintainability.&quot;
              </p>
            </div>
            <p className="leading-relaxed text-slate-600">
              For a business, the gap between an AI-generated script and a deployable commercial asset is a formidable challenge. This is how you transition from a &quot;vibe&quot; to a viable business solution.
            </p>
          </div>
        </section>

        {/* The Illusion of Functionality */}
        <section className="bg-slate-50 py-20 px-6 md:px-12 border-y border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">The Illusion of Functionality</h2>
                <p className="mb-6 text-slate-700 leading-relaxed">
                  When an LLM generates code, its objective is to satisfy your immediate prompt. It is optimized for the <strong className="text-slate-900">&quot;Happy Path&quot;</strong>&mdash;the scenario where every user input is correct, the server never times out, and malicious actors do not exist.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded text-red-600 font-bold text-xs mt-1">AI</div>
                    <p className="text-sm text-slate-700">Generates a Python script to process customer data. Works perfectly on your laptop.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded text-blue-600 font-bold text-xs mt-1">REALITY</div>
                    <p className="text-sm text-slate-700">Lacks Error Handling and Input Validation. A malicious SQL injection string executes blindly, exposing your database.</p>
                  </div>
                </div>
              </div>

              {/* Code Visual */}
              <div className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
                <div className="bg-slate-800 px-4 py-2 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-6 text-slate-300">
                  <p className="text-slate-500 mb-2">{'# The "Vibe Code" (Dangerous)'}</p>
                  <p><span className="text-purple-400">def</span> <span className="text-blue-400">get_user</span>(user_input):</p>
                  <p className="ml-4 text-slate-500">{'# No validation. Direct execution.'}</p>
                  <p className="ml-4 mb-4">query = <span className="text-green-400">f&quot;SELECT * FROM users WHERE name = &apos;</span>{'{user_input}'}<span className="text-green-400">&apos;&quot;</span></p>

                  <div className="border-t border-slate-700 my-4 pt-4">
                    <p className="text-red-400 font-bold">&gt;&gt;&gt; CRITICAL VULNERABILITY DETECTED</p>
                    <p className="text-slate-500">SQL Injection possible. Database exposed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Spaghetti Code Problem */}
        <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">The &quot;Spaghetti Code&quot; Problem</h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            AI models generate code in chunks, often without context of the broader architecture. This violates the <strong className="text-slate-900">Separation of Concerns</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Inline Logic</h4>
              <p className="text-sm text-slate-700">AI mixes HTML, CSS, and JS into a single file to make it &quot;easy to copy-paste.&quot; This creates a rigid, fragile structure.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Zero Modularity</h4>
              <p className="text-sm text-slate-700">Business logic is entwined with the UI. Updating the design breaks the database connection, and vice-versa.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3">Maintenance Debt</h4>
              <p className="text-sm text-slate-700">A human developer fixing a bug in AI code often spends more time untangling the logic than fixing the actual issue.</p>
            </div>
          </div>
        </section>

        {/* Hidden Technical Debt */}
        <section className="bg-slate-900 text-slate-300 py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Security &amp; Scalability: Hidden Debt</h2>
              <p className="text-lg">Business owners view the prototype as 90% complete. In reality, it represents <span className="text-amber-500 font-bold">20% of the engineering effort</span>.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-amber-500 transition-colors">
                <WarningIcon />
                <h3 className="text-xl font-bold text-white mt-4 mb-2">Scalability</h3>
                <p className="text-sm leading-relaxed">
                  An AI script might store data in a local JSON file. Works for 10 users. Crashes at 1,000. It lacks indexing and asynchronous processing.
                </p>
              </div>
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-amber-500 transition-colors">
                <WarningIcon />
                <h3 className="text-xl font-bold text-white mt-4 mb-2">Credentials</h3>
                <p className="text-sm leading-relaxed">
                  AI often hard-codes API keys directly into source code. If pushed to GitHub, your Stripe or OpenAI keys are compromised immediately.
                </p>
              </div>
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-amber-500 transition-colors">
                <WarningIcon />
                <h3 className="text-xl font-bold text-white mt-4 mb-2">Dependencies</h3>
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
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Professionalizing the Prototype</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              AI code is not useless&mdash;it is a dynamic blueprint. But to turn that blueprint into a structure that can house a business, <span className="text-blue-600 font-semibold">professional intervention is required.</span>
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <div className="shrink-0 bg-blue-50 p-4 rounded-full">
                <ServerIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Refactoring for MVC</h3>
                <p className="text-slate-700 leading-relaxed">We bridge the gap between &quot;Vibe Coder&quot; and Enterprise Engineer. We separate your data (Model), interface (View), and logic (Controller) to ensure future features can be added without breaking the system.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <div className="shrink-0 bg-blue-50 p-4 rounded-full">
                <LockIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hardening Security</h3>
                <p className="text-slate-700 leading-relaxed">We audit the code for vulnerabilities, implement server-side validation, and secure authentication protocols to protect client data and prevent breaches.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <div className="shrink-0 bg-blue-50 p-4 rounded-full">
                <ScaleIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Optimizing for Growth</h3>
                <p className="text-slate-700 leading-relaxed">We replace temporary data storage with scalable cloud-based databases capable of handling enterprise-level traffic, moving you from a script to a platform.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <section className="bg-slate-900 text-white py-20 px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-light mb-8">
              &quot;Speed should not come at the cost of stability.&quot;
            </p>
            <div className="h-px w-24 bg-slate-700 mx-auto mb-8"></div>
            <p className="text-slate-400 mb-10 text-lg">
              A prototype proves an idea; production code sustains a business. For the entrepreneur, the &quot;Vibe Coding&quot; phase is the beginning of the journey, not the destination.
            </p>

            <div className="bg-gradient-to-br from-amber-900/40 to-slate-800 p-10 rounded-2xl border border-amber-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Sanity Check Audit</h3>
              <p className="text-slate-400 text-sm mb-4">Find out what&apos;s broken before your users do.</p>
              <div className="flex justify-center items-baseline gap-1 my-6">
                <span className="text-5xl font-extrabold text-amber-400">$99</span>
                <span className="text-slate-400">one-time</span>
              </div>
              <ul className="text-left max-w-sm mx-auto space-y-3 text-slate-300 mb-8">
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> Security Vulnerability Scan</li>
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> Code Structure Review</li>
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> Fix Roadmap (PDF)</li>
                <li className="flex items-center gap-2"><span className="text-green-400 font-bold">&#10003;</span> 30-min Consultation</li>
              </ul>
              <Link href="/vibe" className="inline-block bg-white text-slate-900 hover:bg-amber-50 font-bold py-4 px-8 rounded-lg shadow-lg text-lg transition-colors">
                Audit My Prototype
              </Link>
            </div>

            <div className="mt-12">
              <Link href="/contact" className="text-amber-400 hover:text-white transition-colors border-b border-amber-400 hover:border-white pb-1">
                Contact Path Six Solutions &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
