import { pageMetadata } from '@/lib/metadata'
import ResourceTopicPage from '@/components/ResourceTopicPage'

export const metadata = pageMetadata('/resources/web-design', 'Web Design Resources | PathSix Solutions', 'Guides on choosing a web designer, hosting options, and building a professional website for your business.')

export default function Page() {
  return <ResourceTopicPage slug="web-design" />
}
