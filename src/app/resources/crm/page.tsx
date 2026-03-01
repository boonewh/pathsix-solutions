import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM Resources | PathSix Solutions',
  description: 'Learn about custom CRM solutions, implementation strategies, and workflow automation for small businesses.',
}

const articles = [
  { title: 'Custom CRM vs Salesforce: Which is Right for You?', slug: 'anti-bloat', excerpt: 'The hidden costs of feature bloat and the case for purpose-built, right-sized CRM solutions.', readTime: '4 min read', date: 'Feb 2025' },
  { title: 'Workflow Automation Basics', slug: 'workflow-automation', excerpt: 'How to automate repetitive tasks and streamline your business processes.', readTime: '7 min read', date: 'Coming Soon' },
  { title: 'CRM Implementation Checklist', slug: 'implementation-checklist', excerpt: 'Step-by-step guide to implementing a CRM system without disrupting your business.', readTime: '6 min read', date: 'Coming Soon' },
]

export default function CRMResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 text-slate-300 min-h-screen">
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/resources" className="hover:text-amber-500 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-slate-400">CRM</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CRM Resources</h1>
            <p className="text-xl text-slate-400">Build vs buy decisions and CRM implementation guides.</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article) => {
              const isPublished = article.date !== 'Coming Soon'
              const content = (
                <article key={article.slug} className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 hover:text-purple-500 transition-colors">{article.title}</h2>
                  <p className="text-slate-400 mb-6">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-purple-500 font-semibold">
                    {isPublished ? (
                      <span>Read article &rarr;</span>
                    ) : (
                      <span className="opacity-50">Article coming soon</span>
                    )}
                  </div>
                </article>
              )
              return isPublished ? (
                <Link key={article.slug} href={`/resources/crm/${article.slug}`}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom CRM?</h2>
            <p className="text-xl text-slate-400 mb-8">We build lean, focused CRM systems tailored to your workflow.</p>
            <Link href="/crm" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 transition-all text-lg">
              Explore CRM Solutions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}