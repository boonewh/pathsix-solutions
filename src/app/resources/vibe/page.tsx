import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = pageMetadata('/resources/vibe', 'AI Resources | PathSix Solutions', 'Perspectives on AI tools, software, and practical business use.')

const articles = [
  { title: 'The "Vibe Coding" Trap: When AI Prototypes Meet Production', slug: 'vibe-coding-trap', excerpt: 'Generating code is easy. Engineering a system is hard. The gap between a prompt and a product is larger than you think.', readTime: '3 min read', available: true },
  { title: 'Securing AI-Generated Code: Common Vulnerabilities', slug: 'securing-ai-code', excerpt: 'The top security issues in AI-generated code and how to fix them before deployment.', readTime: '9 min read', available: false },
  { title: 'AI to Production: Deployment Best Practices', slug: 'deployment-best-practices', excerpt: 'Step-by-step guide to taking your ChatGPT/Claude prototype and making it production-ready.', readTime: '12 min read', available: false },
  { title: 'Production Readiness Checklist for AI Code', slug: 'production-checklist', excerpt: 'Everything you need to verify before deploying AI-generated applications.', readTime: '7 min read', available: false },
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
              <span className="text-slate-400">AI Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Resources</h1>
            <p className="text-xl text-slate-400">Perspectives on AI tools, software, and practical business use.</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article) => {
              const isPublished = article.available
              const content = (
                <article key={article.slug} className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-teal-500 transition-all duration-300">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    {!isPublished && (
                      <>
                        <span>Coming Soon</span>
                        <span>•</span>
                      </>
                    )}
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 hover:text-teal-500 transition-colors">{article.title}</h2>
                  <p className="text-slate-400 mb-6">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-teal-500 font-semibold">
                    {isPublished ? (
                      <span>Read article &rarr;</span>
                    ) : (
                      <span className="opacity-50">Article coming soon</span>
                    )}
                  </div>
                </article>
              )
              return isPublished ? (
                <Link key={article.slug} href={`/resources/vibe/${article.slug}`}>
                  {content}
                </Link>
              ) : (
                <div key={article.slug}>{content}</div>
              )
            })}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Making AI Useful?</h2>
            <p className="text-xl text-slate-400 mb-8">Get practical guidance on choosing tools, setting up workflows, and helping your team succeed.</p>
            <Link href="/ai-consulting" className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/40 transition-all text-lg">
              Learn More
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}