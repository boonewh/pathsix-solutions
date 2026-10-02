import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const metadata = pageMetadata('/resources', 'Resources & Guides | PathSix Solutions', 'Expert guides, tutorials, and insights on web design, SEO, custom development, and CRM solutions for small businesses.')

const resourceCategories = [
  {
    title: 'Web Design',
    description: 'Guides on building, hosting, and maintaining professional websites',
    href: '/resources/web-design',
    icon: '🎨',
    color: 'blue',
    articles: [
      'The Subscription Model: Website as a Service',
      'How to Choose the Right Web Designer',
      'WordPress vs. Custom Software',
    ],
  },
  {
    title: 'SEO & Growth',
    description: 'Practical guidance on local search and business profiles',
    href: '/resources/seo',
    icon: '📈',
    color: 'green',
    articles: [
      'Google Maps Optimization Guide',

    ],
  },
  {
    title: 'Custom CRM',
    description: 'Build vs buy decisions and CRM implementation guides',
    href: '/resources/crm',
    icon: '⚙️',
    color: 'purple',
    articles: [
            'The Anti-Bloat Philosophy',
    ],
  },
  {
    title: 'Development',
    description: 'Technical guides for custom software and integrations',
    href: '/resources/build',
    icon: '💻',
    color: 'cyan',
    articles: [
            'Development guides are coming soon',
    ],
  },
  {
    title: 'AI Resources',
    description: 'Perspectives on AI tools, software, and practical business use',
    href: '/resources/vibe',
    icon: '🤖',
    color: 'teal',
    articles: [
            'The Vibe Coding Trap',
    ],
  },
]

const colorClasses = {
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-500/10',
    text: 'text-blue-500',
    hover: 'hover:border-blue-500 hover:shadow-blue-500/20',
  },
  green: {
    border: 'border-green-500',
    bg: 'bg-green-500/10',
    text: 'text-green-500',
    hover: 'hover:border-green-500 hover:shadow-green-500/20',
  },
  purple: {
    border: 'border-purple-500',
    bg: 'bg-purple-500/10',
    text: 'text-purple-500',
    hover: 'hover:border-purple-500 hover:shadow-purple-500/20',
  },
  cyan: {
    border: 'border-cyan-500',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-500',
    hover: 'hover:border-cyan-500 hover:shadow-cyan-500/20',
  },
  teal: {
    border: 'border-teal-500',
    bg: 'bg-teal-500/10',
    text: 'text-teal-500',
    hover: 'hover:border-teal-500 hover:shadow-teal-500/20',
  },
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-950 text-slate-300 min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8">
              Knowledge Base
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resources & Guides
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Expert insights on web design, SEO, custom development, and business software.
              Learn from our experience building digital solutions for growing businesses.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category) => {
                const colors = colorClasses[category.color as keyof typeof colorClasses]

                return (
                  <Link
                    key={category.href}
                    href={category.href}
                    className={`group bg-slate-900 border-2 border-slate-700 ${colors.hover} rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl`}
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl font-bold text-white mb-3 ${colors.text}`}>
                      {category.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-400 mb-6">
                      {category.description}
                    </p>

                    {/* Article Preview List */}
                    <div className="space-y-2 mb-6">
                      {category.articles.map((article, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className={colors.text}>→</span>
                          <span>{article}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-3 transition-all`}>
                      View Resources
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Personalized Help?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Our team is ready to help you implement these strategies for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all text-lg"
            >
              Get Expert Guidance
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
