'use client'

import { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  serviceName?: string
  serviceColor?: string
}

export default function Header({ serviceName, serviceColor }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 group">
            <span className="text-2xl font-bold text-white tracking-tight">
              Path<span className="text-amber-500">Six</span>{' '}
              {serviceName ? (
                <span style={{ color: serviceColor }}>{serviceName}</span>
              ) : (
                'Solutions'
              )}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/web-design" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">Web Design</Link>
              <Link href="/seo" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">SEO</Link>
              <Link href="/crm" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">CRM</Link>
              <Link href="/build" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">Custom Apps</Link>
              <Link href="/vibe" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">AI Deployment</Link>
              <Link href="/contact" className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-md text-sm font-bold transition-all">Contact</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/web-design" className="block hover:bg-slate-800 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-base font-medium text-slate-300">Web Design</Link>
            <Link href="/seo" className="block hover:bg-slate-800 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-base font-medium text-slate-300">SEO</Link>
            <Link href="/crm" className="block hover:bg-slate-800 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-base font-medium text-slate-300">CRM</Link>
            <Link href="/build" className="block hover:bg-slate-800 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-base font-medium text-slate-300">Custom Apps</Link>
            <Link href="/vibe" className="block hover:bg-slate-800 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-base font-medium text-slate-300">AI Deployment</Link>
            <Link href="/contact" className="block border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-base font-bold transition-all mx-3 my-2 text-center">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}