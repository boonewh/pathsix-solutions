'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4">
              Path<span className="text-amber-500">Six</span> Solutions
            </h3>
            <p className="text-slate-400 mb-4">
              The Full-Stack Growth Partner. We unify web design, SEO, CRM solutions, and custom development for growing businesses.
            </p>
            <div className="space-y-2">
              <p className="text-slate-400">
              </p>
              <p className="text-slate-400">
                <a href="mailto:support@pathsixsolutions.com" className="hover:text-amber-500 transition-colors">
                  support@pathsixsolutions.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/web-design" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="/seo" className="text-slate-400 hover:text-amber-500 transition-colors">
                  SEO & Growth
                </a>
              </li>
              <li>
                <a href="/crm" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Custom CRM
                </a>
              </li>
              <li>
                <a href="/build" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="/vibe" className="text-slate-400 hover:text-amber-500 transition-colors">
                  AI Deployment
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © {currentYear} PathSix Solutions LLC. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <p className="text-slate-500 text-sm">
                Built with Next.js & Deployed on Vercel
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}