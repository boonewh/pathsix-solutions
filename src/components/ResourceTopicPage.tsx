import Link from 'next/link'
import ResourceList from '@/components/ResourceList'
import { getTopic } from '@/lib/resources'

/** A Resources topic page: breadcrumb, intro, its published articles, and a pointer to the related service. */
export default function ResourceTopicPage({ slug }: { slug: string }) {
  const topic = getTopic(slug)
  return (
    <main>
      <section className="site-dark">
        <div className="site-container py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="site-muted text-sm">
            <Link href="/resources" className="hover:text-[var(--site-gold)]">Resources</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span>{topic.title}</span>
          </nav>
          <h1 className="mt-6 max-w-[16ch] text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {topic.title} <span className="site-gold">guides.</span>
          </h1>
          <p className="site-muted mt-5 max-w-[46ch] text-pretty text-lg">{topic.description}</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="site-container">
          <ResourceList topic={topic} articles={topic.articles} />
          <div className="mt-14 flex flex-col justify-between gap-5 border-t border-[#2026211f] pt-8 md:flex-row md:items-center">
            <p className="site-muted max-w-[52ch] text-pretty">Want help putting this into practice? Tell us about your business.</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href={topic.service.href} className="site-text-link">{topic.service.label} <span aria-hidden="true" className="site-arrow">↗</span></Link>
              <Link href="/resources" className="site-text-link">All resources <span aria-hidden="true" className="site-arrow">↗</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
