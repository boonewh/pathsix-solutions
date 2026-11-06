'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Web Design', href: '/web-design' },
  { label: 'SEO', href: '/seo' },
  { label: 'CRM', href: '/crm' },
  { label: 'Custom Apps', href: '/build' },
  { label: 'AI Consulting', href: '/ai-consulting' },
  { label: 'Resources', href: '/resources' },
]

function Brand() {
  return (
    <Link href="/" aria-label="PathSix Solutions homepage" className="site-brand">
      Path<span>Six</span><span className="site-brand-sub">Solutions</span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header relative z-40">
      <nav aria-label="Main navigation" className="site-container flex items-center justify-between gap-8 py-5">
        <Brand />
        <div className="hidden items-center gap-7 xl:flex">
          {navLinks.map(link => <Link key={link.href} href={link.href} className="site-nav-link">{link.label}</Link>)}
          <Link href="/contact" className="site-header-contact">Contact</Link>
        </div>
        <button
          type="button"
          className="site-menu-button xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="site-mobile-menu"
        >
          Menu <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        {open && (
          <div id="site-mobile-menu" className="site-mobile-menu xl:hidden">
            {navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer py-14">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-start gap-4">
            <Brand />
            <p className="site-muted max-w-[34ch] text-pretty">Websites, software, and practical guidance for small businesses. Based in Haskell, Texas.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="site-footer-bottom mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-sm sm:flex-row">
          <p className="site-muted">© {new Date().getFullYear()} PathSix Solutions LLC.</p>
          <a href="mailto:support@pathsixsolutions.com" className="break-all">support@pathsixsolutions.com</a>
        </div>
      </div>
    </footer>
  )
}
