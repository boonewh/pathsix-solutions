import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  '/contact',
  'Contact PathSix Solutions | Tell Us About Your Business',
  'Talk with PathSix Solutions about web design, SEO, CRM, custom applications, or practical AI consulting for your small business.',
)

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
