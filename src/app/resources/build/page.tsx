import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Development Resources | PathSix Solutions',
  description: 'Technical guides for custom software development, API integrations, and building internal tools.',
}

const articles = [
  { title: 'Spreadsheet to Software: When to Make the Switch', slug: 'spreadsheet-to-software', excerpt: 'How to know when your Excel spreadsheet has outgrown itself and needs to become real software.', readTime: '8 min read', date: 'Coming Soon' },
  { title: 'API Integration Guide for Non-Technical Founders', slug: 'api-integration-guide', excerpt: 'Understanding APIs and how to connect your business tools together.', readTime: '10 min read', date: 'Coming Soon' },
  { title: 'Building Client Portals: Best Practices', slug: 'client-portals', excerpt: 'How to build secure, user-friendly client portals that improve communication.', readTime: '7 min read', date: 'Coming Soon' },
]

export default function BuildResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 text-slate-300 min-h-screen">
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/resources" className="hover:text-amber-500 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-slate-400">Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Development Resources</h1>
            <p className="text-xl text-slate-400">Technical guides for custom software and integrations.</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-cyan-500 transition-colors">{article.title}</h2>
                <p className="text-slate-400 mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-cyan-500 font-semibold">
                  <span className="opacity-50">Article coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Custom Software?</h2>
            <p className="text-xl text-slate-400 mb-8">We turn your operational workflows into powerful web applications.</p>
            <Link href="/build" className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/40 transition-all text-lg">
              Start a Build
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}