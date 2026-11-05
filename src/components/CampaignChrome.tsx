import Link from 'next/link'

type CampaignNavLink = { label: string; href: string }

const homepageLinks: CampaignNavLink[] = [
  { label: 'Our work', href: '#selected-work' },
  { label: 'Services', href: '#services' },
  { label: 'Meet Will', href: '#about' },
]

export function CampaignHeader({ links = homepageLinks }: { links?: CampaignNavLink[] }) {
  return (
    <header className="campaign-header">
      <div className="campaign-container flex items-center justify-between gap-8 py-5">
        <Link href="/" aria-label="PathSix Solutions homepage" className="campaign-brand">
          Path<span>Six</span><span className="campaign-brand-sub">Solutions</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link href="/contact" className="campaign-header-contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </nav>
        <details className="campaign-menu relative lg:hidden">
          <summary className="cursor-pointer list-none px-3 py-3">Menu <span aria-hidden="true">+</span></summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 z-30 flex w-64 flex-col gap-1 p-4">
            {links.map(link => <Link key={link.href} href={link.href} className="p-3">{link.label}</Link>)}
            <Link href="/contact" className="p-3">Let&apos;s talk</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

export function CampaignFooter() {
  return (
    <footer className="campaign-footer py-12">
      <div className="campaign-container">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" aria-label="PathSix Solutions homepage" className="campaign-brand">Path<span>Six</span><span className="campaign-brand-sub">Solutions</span></Link>
            <p className="campaign-muted max-w-[32ch] text-pretty">Websites, software, and practical guidance for small businesses.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap content-start gap-x-8 gap-y-5">
            <Link href="/web-design">Web design</Link>
            <Link href="/ai-consulting">AI consulting</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="campaign-footer-bottom mt-10 flex flex-col justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="campaign-muted text-base sm:text-sm">© {new Date().getFullYear()} PathSix Solutions LLC.</p>
          <a href="mailto:support@pathsixsolutions.com" className="break-all text-base sm:text-sm">support@pathsixsolutions.com</a>
        </div>
      </div>
    </footer>
  )
}
