import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Resources | PathSix Solutions',
  description: 'Expert guides on choosing a web designer, hosting options, and building professional websites for your business.',
  openGraph: {
    title: 'Web Design Resources | PathSix Solutions',
    description: 'Learn everything you need to know about professional web design and hosting.',
    url: 'https://pathsixsolutions.com/resources/web-design',
  },
}

const articles = [
  {
    title: 'The Subscription Model: Treating Your Website as a Service',
    slug: 'subscription-model',
    excerpt: 'Learn why subscription-based web design aligns with the reality of maintaining a modern digital presence. CapEx vs OpEx explained.',
    readTime: '4 min read',
    date: 'January 2026',
    available: true,
  },
  {
    title: 'How to Choose the Right Web Designer',
    slug: 'choosing-a-web-designer',
    excerpt: 'Not all web designers are created equal. Learn what questions to ask and red flags to avoid when hiring a designer.',
    readTime: '5 min read',
    date: 'January 2026',
    available: true,
  },
  {
    title: 'Managed vs Traditional Hosting: What\'s Best for Your Business?',
    slug: 'managed-vs-traditional-hosting',
    excerpt: 'Understanding the difference between managed hosting and traditional hosting can save you thousands of dollars and countless hours.',
    readTime: '4 min read',
    date: 'January 2026',
    available: true,
  },
  {
    title: 'Website Cost Calculator: What Should You Really Pay?',
    slug: 'website-cost-calculator',
    excerpt: 'Breaking down the real costs of building and maintaining a professional website in 2025.',
    readTime: '6 min read',
    date: 'Coming Soon',
    available: false,
  },
]

export default function WebDesignResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 text-slate-300 min-h-screen">
        {/* Breadcrumb */}
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/resources" className="hover:text-amber-500 transition-colors">
                Resources
              </Link>
              <span>/</span>
              <span className="text-slate-400">Web Design</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Web Design Resources
            </h1>
            <p className="text-xl text-slate-400">
              Everything you need to know about building and maintaining a professional website.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {articles.map((article) => (
                article.available ? (
                  <Link
                    key={article.slug}
                    href={`/resources/web-design/${article.slug}`}
                    className="block bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-slate-400 mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-blue-500 font-semibold">
                      Read Article →
                    </div>
                  </Link>
                ) : (
                  <article
                    key={article.slug}
                    className="bg-slate-900 border border-slate-700 rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3">
                      {article.title}
                    </h2>

                    <p className="text-slate-400 mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-blue-500 font-semibold">
                      <span className="opacity-50">Article coming soon</span>
                    </div>
                  </article>
                )
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Get a custom preview of your homepage in 3-5 days. No upfront cost.
            </p>
            <Link
              href="/web-design"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all text-lg"
            >
              See Pricing & Details
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}