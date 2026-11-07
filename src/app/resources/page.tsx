import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import ResourceList from '@/components/ResourceList'
import { resourceTopics } from '@/lib/resources'

export const metadata = pageMetadata('/resources', 'Resources & Guides | PathSix Solutions', 'Practical guides on web design, local SEO, CRM, and AI from PathSix Solutions.')

export default function ResourcesPage() {
  const total = resourceTopics.reduce((sum, topic) => sum + topic.articles.length, 0)
  return (
    <main>
      <section className="site-dark">
        <div className="site-container py-14 md:py-20 lg:py-24">
          <p className="site-eyebrow site-gold">Resources · {total} guides</p>
          <h1 className="mt-6 max-w-[15ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            Practical guides, <span className="site-gold">written plainly.</span>
          </h1>
          <p className="site-muted mt-6 max-w-[48ch] text-pretty text-lg md:text-xl">
            What we’ve learned building websites, CRMs, and software for real businesses, without the jargon.
          </p>
          <nav aria-label="Topics" className="mt-9 flex flex-wrap gap-3">
            {resourceTopics.map(topic => (
              <a key={topic.slug} href={'#' + topic.slug} className="resource-chip">{topic.title} <span className="resource-chip-count">{topic.articles.length}</span></a>
            ))}
          </nav>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="site-container flex flex-col gap-16 md:gap-20">
          {resourceTopics.map(topic => (
            <section key={topic.slug} id={topic.slug} aria-labelledby={topic.slug + '-heading'} className="scroll-mt-8">
              <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <h2 id={topic.slug + '-heading'} className="text-3xl font-semibold tracking-tight md:text-4xl">{topic.title}</h2>
                  <p className="site-muted mt-2 text-pretty">{topic.description}</p>
                </div>
                <Link href={'/resources/' + topic.slug} className="site-text-link shrink-0">All {topic.title.toLowerCase()} guides <span aria-hidden="true" className="site-arrow">↗</span></Link>
              </div>
              <ResourceList topic={topic} articles={topic.articles} />
            </section>
          ))}
        </div>
      </div>

      <section className="site-dark site-offer py-20 md:py-24">
        <div className="site-container grid items-end gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col items-start gap-6">
            <p className="site-eyebrow site-gold">Need a hand?</p>
            <h2 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight md:text-6xl">Rather talk it through?</h2>
            <p className="site-muted max-w-[44ch] text-pretty text-lg">Tell us what you’re working on and we’ll help you figure out the next step.</p>
          </div>
          <div className="flex flex-col items-start gap-5 lg:items-end">
            <Link href="/contact" className="site-primary">Start the conversation <span aria-hidden="true" className="site-arrow">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
