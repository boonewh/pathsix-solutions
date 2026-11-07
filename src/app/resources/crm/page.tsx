import { pageMetadata } from '@/lib/metadata'
import ResourceTopicPage from '@/components/ResourceTopicPage'

export const metadata = pageMetadata('/resources/crm', 'CRM Resources | PathSix Solutions', 'Guides on choosing and running a CRM that fits the way your business works.')

export default function Page() {
  return <ResourceTopicPage slug="crm" />
}
