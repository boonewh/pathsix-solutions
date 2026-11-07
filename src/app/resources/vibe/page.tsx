import { pageMetadata } from '@/lib/metadata'
import ResourceTopicPage from '@/components/ResourceTopicPage'

export const metadata = pageMetadata('/resources/vibe', 'AI Resources | PathSix Solutions', 'Perspectives on AI tools, software, and practical business use.')

export default function Page() {
  return <ResourceTopicPage slug="vibe" />
}
