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
    <Link href="/" aria-label="PathSix Solutions homepage" className="home-brand">
      Path<span>Six</span><span className="home-brand-sub">Solutions</span>
    </Link>
  )
}

export function HomeHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="home-header relative z-40">
      <nav aria-label="Main navigation" className="home-container flex items-center justify-between gap-8 py-5">
        <Brand />
        <div className="hidden items-center gap-7 xl:flex">
          {navLinks.map(link => <Link key={link.href} href={link.href} className="home-nav-link">{link.label}</Link>)}
          <Link href="/contact" className="home-header-contact">Contact</Link>
        </div>
        <button
          type="button"
          className="home-menu-button xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="home-mobile-menu"
        >
          Menu <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        {open && (
          <div id="home-mobile-menu" className="home-mobile-menu xl:hidden">
            {navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export function HomeFooter() {
  return (
    <footer className="home-footer py-14">
      <div className="home-container">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-start gap-4">
            <Brand />
            <p className="home-muted max-w-[34ch] text-pretty">Websites, software, and practical guidance for small businesses. Based in Haskell, Texas.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="home-footer-bottom mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-sm sm:flex-row">
          <p className="home-muted">© {new Date().getFullYear()} PathSix Solutions LLC.</p>
          <a href="mailto:support@pathsixsolutions.com" className="break-all">support@pathsixsolutions.com</a>
        </div>
      </div>
    </footer>
  )
}
