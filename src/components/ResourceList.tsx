import Link from 'next/link'
import type { ResourceArticle, ResourceTopic } from '@/lib/resources'

/** A list of article cards for one Resources topic. */
export default function ResourceList({ topic, articles, showTopic = false }: { topic: ResourceTopic; articles: ResourceArticle[]; showTopic?: boolean }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {articles.map(article => (
        <li key={article.href}>
          <Link href={article.href} className={'resource-card group flex h-full flex-col p-7 md:p-8 site-tint-' + topic.tint}>
            <p className="site-eyebrow">{showTopic ? topic.title + ' · ' : ''}{article.readTime}</p>
            <h3 className="mt-3 text-balance text-xl font-semibold tracking-tight group-hover:underline md:text-2xl">{article.title}</h3>
            <p className="resource-card-text mt-3 flex-grow text-pretty">{article.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold">Read the article <span aria-hidden="true">→</span></span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
