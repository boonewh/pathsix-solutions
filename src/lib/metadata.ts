import type { Metadata } from 'next'

export const siteUrl = 'https://www.pathsixsolutions.com'

/** Set page-specific search and sharing metadata without inheriting another page's identity. */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, siteUrl).toString()
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'PathSix Solutions', locale: 'en_US', type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  }
}
