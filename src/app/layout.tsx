import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pathsixsolutions.com'),
  title: 'PathSix Solutions | Web Design, CRM & Development Services',
  description: 'Custom websites, CRM solutions, and AI deployment help for small businesses. Professional digital tools you can actually afford.',
  authors: [{ name: 'PathSix Solutions' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'PathSix Solutions | Digital Tools for Growing Businesses',
    description: 'Custom websites, CRM solutions, and AI deployment help.',
    url: 'https://pathsixsolutions.com',
    siteName: 'PathSix Solutions',
    images: [
      {
        url: 'https://pathsixsolutions.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PathSix Solutions | Digital Tools for Growing Businesses',
    description: 'Custom websites, CRM solutions, and AI deployment help.',
    images: ['https://pathsixsolutions.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pathsixsolutions.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}