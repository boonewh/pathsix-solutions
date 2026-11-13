/** Published Resources articles, grouped by topic. Only list articles that exist. */
export type ResourceArticle = { title: string; href: string; excerpt: string; readTime: string }
export type ResourceTopic = { slug: string; title: string; description: string; tint: 'peach' | 'butter' | 'sky' | 'sage'; service: { label: string; href: string }; articles: ResourceArticle[] }

export const resourceTopics: ResourceTopic[] = [
  {
    slug: 'web-design',
    title: 'Web design',
    description: 'Building, hosting, and maintaining a professional website.',
    tint: 'peach',
    service: { label: 'Explore web design', href: '/web-design' },
    articles: [
      { title: 'The Subscription Model: Treating Your Website as a Service', href: '/resources/web-design/subscription-model', excerpt: 'Why subscription-based web design fits the reality of maintaining a modern website, comparing upfront and ongoing costs.', readTime: '4 min read' },
      { title: 'How to Choose the Right Web Designer', href: '/resources/web-design/choosing-a-web-designer', excerpt: 'What to ask, and which red flags to watch for, when hiring a web designer.', readTime: '5 min read' },
      { title: 'Managed vs Traditional Hosting: What’s Best for Your Business?', href: '/resources/web-design/managed-vs-traditional-hosting', excerpt: 'How managed and traditional hosting differ, and how the choice affects your costs and your time.', readTime: '4 min read' },
      { title: 'WordPress or Custom Code? Choosing the Right Foundation', href: '/resources/web-design/wordpress-vs-custom', excerpt: 'When each one fits, what to watch for, and why planning to take a site in-house usually points to WordPress.', readTime: '6 min read' },
    ],
  },
  {
    slug: 'seo',
    title: 'SEO & local search',
    description: 'Practical guidance on local search and business profiles.',
    tint: 'sage',
    service: { label: 'Explore SEO services', href: '/seo' },
    articles: [
      { title: 'Google Maps Optimization: The Complete Guide', href: '/resources/seo/google-map-optimization', excerpt: 'Practical steps for accurate business information, useful content, and honest customer reviews.', readTime: '4 min read' },
    ],
  },
  {
    slug: 'crm',
    title: 'CRM',
    description: 'Choosing and running a CRM that fits the way you work.',
    tint: 'sky',
    service: { label: 'Explore the CRM', href: '/crm' },
    articles: [
      { title: 'The Anti-Bloat Philosophy: Choosing a CRM That Fits', href: '/resources/crm/anti-bloat', excerpt: 'The hidden costs of feature bloat, and the case for a purpose-built, right-sized CRM.', readTime: '4 min read' },
    ],
  },
  {
    slug: 'vibe',
    title: 'AI',
    description: 'Perspectives on AI tools, software, and practical use.',
    tint: 'butter',
    service: { label: 'Explore AI consulting', href: '/ai-consulting' },
    articles: [
      { title: 'The “Vibe Coding” Trap: When AI Prototypes Meet Production', href: '/resources/vibe/vibe-coding-trap', excerpt: 'Generating code is easy. Engineering a system is hard. The gap between a prompt and a product is larger than you think.', readTime: '3 min read' },
    ],
  },
]

export function getTopic(slug: string): ResourceTopic {
  const topic = resourceTopics.find(t => t.slug === slug)
  if (!topic) throw new Error(`Unknown resource topic: ${slug}`)
  return topic
}
