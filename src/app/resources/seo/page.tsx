import { pageMetadata } from '@/lib/metadata'
import ResourceTopicPage from '@/components/ResourceTopicPage'

export const metadata = pageMetadata('/resources/seo', 'SEO Resources | PathSix Solutions', 'Practical guidance on local SEO, Google Maps optimization, and business profiles.')

export default function Page() {
  return <ResourceTopicPage slug="seo" />
}
