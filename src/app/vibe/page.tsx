import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Code Deployment Services | PathSix Solutions',
  description: 'Professional deployment for AI-generated code. We secure, host, and fix your ChatGPT or Claude prototypes for production use.',
  openGraph: {
    title: 'AI Code Deployment | PathSix Solutions',
    description: 'For the Vibe Coders. We professionally deploy and secure your AI-generated applications.',
    url: 'https://pathsixsolutions.com/vibe',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function VibePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'PathSix Vibe - AI Code Deployment',
    url: 'https://pathsixsolutions.com/vibe',
    description: 'Professional deployment and security services for AI-generated code and prototypes.',
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
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(to right, #312e81 1px, transparent 1px), linear-gradient(to bottom, #312e81 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }}></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-900/20 border border-fuchsia-500/40 text-fuchsia-400 text-xs font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
              AI Prototype → Production App
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Built with AI? <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400" style={{ textShadow: '0 0 10px rgba(217, 70, 239, 0.5)' }}>Let&apos;s Get It Live.</span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              You used ChatGPT, Claude, or Cursor to build your app. Amazing. <br/>
              Now let&apos;s clean up the code, secure the API keys, and deploy it to the real web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-fuchsia-500/25 border border-fuchsia-500">
                View Launch Packages
              </a>
              <a href="#problem" className="px-8 py-4 bg-slate-800 border border-slate-700 hover:border-fuchsia-500 hover:text-white text-slate-300 font-medium rounded-lg transition-all">
                Why do I need this?
              </a>
            </div>
          </div>
        </section>

        {/* The Reality Check (Terminal Style) */}
        <section id="problem" className="py-24 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">The &quot;Localhost&quot; Trap.</h2>
                <p className="text-slate-400 mb-6 text-lg">
                  It works perfectly on your laptop. But deploying it? That&apos;s when the AI assistance stops and the headaches begin.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-mono">ERROR:</span>
                    <span className="text-slate-300">Environment variables and API keys exposed in GitHub. (Huge security risk)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-mono">ERROR:</span>
                    <span className="text-slate-300">Database connection fails in production but works locally.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-mono">ERROR:</span>
                    <span className="text-slate-300">Code bloat. AI writes duplicate functions that slow everything down.</span>
                  </li>
                </ul>
                <p className="mt-8 text-fuchsia-400 font-bold">We are real developers who bridge the gap between your AI prototype and a professional application.</p>
              </div>

              {/* Fake Terminal Window */}
              <div className="lg:w-1/2 w-full">
                <div className="rounded-xl bg-slate-950 border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm">
                  <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-slate-500 text-xs">term -- -zsh</span>
                  </div>
                  <div className="p-6 text-slate-300 space-y-2">
                    <p><span className="text-green-400">user@macbook</span> <span className="text-blue-400">~/my-ai-app</span> $ npm run build</p>
                    <p className="text-slate-500">... Building optimized production build ...</p>
                    <p className="text-red-500">Failed to compile.</p>
                    <p className="text-red-400">Error: SECRET_API_KEY is undefined in production environment.</p>
                    <p className="text-red-400">Error: Component &apos;Header&apos; is defined but never used.</p>
                    <p className="text-red-400">Security Warning: .env file committed to git history.</p>
                    <p><span className="text-green-400">user@macbook</span> <span className="text-blue-400">~/my-ai-app</span> $ <span className="animate-pulse">_</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">What We Clean Up</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-fuchsia-500/50 transition-all hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
                <div className="w-12 h-12 bg-fuchsia-900/30 rounded-lg flex items-center justify-center text-fuchsia-500 mb-6 font-mono text-xl border border-fuchsia-500/20">{'{ }'}</div>
                <h3 className="text-xl font-bold text-white mb-3">Refactor & Cleanup</h3>
                <p className="text-slate-400 text-sm">AI repeats itself. We delete the bloat, organize the file structure, and make the code readable for humans.</p>
              </div>
              {/* Card 2 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-fuchsia-500/50 transition-all hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
                <div className="w-12 h-12 bg-fuchsia-900/30 rounded-lg flex items-center justify-center text-fuchsia-500 mb-6 text-xl border border-fuchsia-500/20">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Security Lockdown</h3>
                <p className="text-slate-400 text-sm">We move your API keys to secure environment variables, set up database rules, and ensure your user data isn&apos;t leaking.</p>
              </div>
              {/* Card 3 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-fuchsia-500/50 transition-all hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
                <div className="w-12 h-12 bg-fuchsia-900/30 rounded-lg flex items-center justify-center text-fuchsia-500 mb-6 text-xl border border-fuchsia-500/20">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Proper Deployment</h3>
                <p className="text-slate-400 text-sm">We set up your custom domain, SSL certificates (HTTPS), and configure hosting (Vercel, Railway, AWS) correctly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
          {/* Glow effect behind pricing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
              <p className="text-slate-400">No judgment. Just results.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Audit Package */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">Sanity Check Audit</h3>
                <div className="text-3xl font-bold text-fuchsia-400 mb-1 font-mono">$99</div>
                <p className="text-xs text-slate-500 mb-6">One-time fee</p>

                <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-800">
                  We review your repo to tell you exactly what&apos;s wrong before you launch.
                </p>

                <ul className="text-sm text-slate-300 space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-fuchsia-500 mr-2">✓</span> Security Vulnerability Scan</li>
                  <li className="flex items-center"><span className="text-fuchsia-500 mr-2">✓</span> Code Structure Review</li>
                  <li className="flex items-center"><span className="text-fuchsia-500 mr-2">✓</span> Fix Roadmap (PDF)</li>
                  <li className="flex items-center"><span className="text-fuchsia-500 mr-2">✓</span> 30-min Consultation</li>
                </ul>
                <a href="/contact" className="block w-full py-3 border border-slate-600 hover:border-white text-white text-center rounded font-medium transition-colors">Get Audit</a>
              </div>

              {/* Launch Package (Highlighted) */}
              <div className="bg-slate-800 p-8 rounded-2xl border-2 border-fuchsia-500 shadow-[0_0_40px_rgba(217,70,239,0.15)] transform md:-translate-y-4 relative">
                <div className="absolute top-0 center bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-b-lg left-1/2 -translate-x-1/2">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-white mb-2">Launch Package</h3>
                <div className="text-4xl font-bold text-fuchsia-400 mb-1 font-mono">$799</div>
                <p className="text-xs text-slate-500 mb-6">One-time fee</p>

                <p className="text-slate-300 text-sm mb-6 pb-6 border-b border-slate-700">
                  We take your code, clean it, secure it, and put it online for the world to see.
                </p>

                <ul className="text-sm text-white space-y-3 mb-8 font-medium">
                  <li className="flex items-center"><span className="text-fuchsia-400 mr-2">✓</span> <strong>Everything in Audit</strong></li>
                  <li className="flex items-center"><span className="text-fuchsia-400 mr-2">✓</span> 10 Hours Developer Time</li>
                  <li className="flex items-center"><span className="text-fuchsia-400 mr-2">✓</span> Domain & SSL Setup</li>
                  <li className="flex items-center"><span className="text-fuchsia-400 mr-2">✓</span> Hosting Configuration</li>
                  <li className="flex items-center"><span className="text-fuchsia-400 mr-2">✓</span> 30 Days Support</li>
                </ul>
                <a href="/contact" className="block w-full py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold text-center rounded transition-colors shadow-lg shadow-fuchsia-500/20">Start Launch</a>
              </div>

              {/* Maintenance Package */}
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">Keep It Running</h3>
                <div className="text-3xl font-bold text-fuchsia-400 mb-1 font-mono">$149<span className="text-lg text-slate-500">/mo</span></div>
                <p className="text-xs text-slate-500 mb-6">Cancel anytime</p>

                <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-800">
                  Peace of mind. We handle the updates so your app doesn&apos;t break next month.
                </p>

                <ul className="text-sm text-slate-300 space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-fuchsia-500 mr-2">✓</span> Monthly Dependency Updates</li>
                  <li className="flex items-center"><span className="text-fuchsia-500 mr-2">✓</span> Uptime Monitoring</li>
                  <li className="flex items-center"><span className="text-fuchsia-500 mr-2">✓</span> Minor Bug Fixes</li>
                  <li className="flex items-center"><span className="text-fuchsia-500 mr-2">✓</span> Database Backups</li>
                </ul>
                <a href="/contact" className="block w-full py-3 border border-slate-600 hover:border-white text-white text-center rounded font-medium transition-colors">Subscribe</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-slate-950 py-20 border-t border-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Launch?</h2>
            <p className="text-slate-400 mb-8 text-lg">Stop wrestling with terminal errors. Let&apos;s get your app online.</p>

            <a
              href="/contact"
              className="inline-block bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 text-lg"
            >
              Get Started
            </a>

            <p className="mt-6 text-slate-500 text-sm font-mono">
              Or email: <a href="mailto:vibe@pathsixsolutions.com" className="text-fuchsia-400 hover:text-fuchsia-300 underline">vibe@pathsixsolutions.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}