import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/metadata'

// Include every published page. Omit lastModified until actual content dates are maintained.
const publishedPaths = [
  "/ai-consulting",
  "/build",
  "/contact",
  "/crm",
  "/",
  "/resources/build",
  "/resources/crm/anti-bloat",
  "/resources/crm",
  "/resources",
  "/resources/seo/google-map-optimization",
  "/resources/seo",
  "/resources/vibe",
  "/resources/vibe/vibe-coding-trap",
  "/resources/web-design/choosing-a-web-designer",
  "/resources/web-design/managed-vs-traditional-hosting",
  "/resources/web-design",
  "/resources/web-design/subscription-model",
  "/resources/web-design/wordpress-vs-custom",
  "/seo",
  "/web-design"
]

export default function sitemap(): MetadataRoute.Sitemap {
  return publishedPaths.map(path => ({ url: new URL(path, siteUrl).toString() }))
}
