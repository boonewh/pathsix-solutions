import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Deployment Resources | PathSix Solutions',
  description: 'Learn how to deploy and secure AI-generated code for production use.',
}

const articles = [
  { title: 'Securing AI-Generated Code: Common Vulnerabilities', slug: 'securing-ai-code', excerpt: 'The top security issues in AI-generated code and how to fix them before deployment.', readTime: '9 min read', date: 'Coming Soon' },
  { title: 'AI to Production: Deployment Best Practices', slug: 'deployment-best-practices', excerpt: 'Step-by-step guide to taking your ChatGPT/Claude prototype and making it production-ready.', readTime: '12 min read', date: 'Coming Soon' },
  { title: 'Production Readiness Checklist for AI Code', slug: 'production-checklist', excerpt: 'Everything you need to verify before deploying AI-generated applications.', readTime: '7 min read', date: 'Coming Soon' },
]

export default function VibeResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 text-slate-300 min-h-screen">
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/resources" className="hover:text-amber-500 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-slate-400">AI Deployment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Deployment Resources</h1>
            <p className="text-xl text-slate-400">Deploy and secure your AI-generated applications safely.</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-pink-500 transition-all duration-300">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-pink-500 transition-colors">{article.title}</h2>
                <p className="text-slate-400 mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-pink-500 font-semibold">
                  <span className="opacity-50">Article coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Deploying AI Code?</h2>
            <p className="text-xl text-slate-400 mb-8">We&apos;ll take your AI prototype and make it production-ready.</p>
            <Link href="/vibe" className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40 transition-all text-lg">
              Learn More
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}