import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Resources | PathSix Solutions',
  description: 'Expert guides on local SEO, Google Maps optimization, and growing your organic traffic.',
  openGraph: {
    title: 'SEO Resources | PathSix Solutions',
    description: 'Master local SEO and dominate Google search results.',
    url: 'https://pathsixsolutions.com/resources/seo',
  },
}

const articles = [
  {
    title: 'Google Maps Optimization: The Complete Guide',
    slug: 'google-maps-optimization',
    excerpt: 'Step-by-step guide to ranking #1 in the Google Maps 3-pack for your local area.',
    readTime: '10 min read',
    date: 'Coming Soon',
  },
  {
    title: 'Local SEO Checklist for Small Businesses',
    slug: 'local-seo-checklist',
    excerpt: 'Everything you need to do to rank higher in local search results.',
    readTime: '8 min read',
    date: 'Coming Soon',
  },
  {
    title: 'Reputation Management: Get More 5-Star Reviews',
    slug: 'reputation-management',
    excerpt: 'Proven strategies to get more positive reviews and manage your online reputation.',
    readTime: '6 min read',
    date: 'Coming Soon',
  },
]

export default function SEOResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 text-slate-300 min-h-screen">
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/resources" className="hover:text-amber-500 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-slate-400">SEO</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SEO Resources</h1>
            <p className="text-xl text-slate-400">Strategies to dominate local search and drive organic traffic.</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-green-500 transition-all duration-300">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-green-500 transition-colors">{article.title}</h2>
                <p className="text-slate-400 mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-green-500 font-semibold">
                  <span className="opacity-50">Article coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help with SEO?</h2>
            <p className="text-xl text-slate-400 mb-8">Our team can help you dominate local search results.</p>
            <Link href="/seo" className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-600/20 hover:shadow-green-600/40 transition-all text-lg">
              View SEO Services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}