'use client'

interface HeaderProps {
  serviceName?: string
  serviceColor?: string
}

export default function Header({ serviceName, serviceColor }: HeaderProps = {}) {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex-shrink-0 group">
            <span className="text-2xl font-bold text-white tracking-tight">
              Path<span className="text-amber-500">Six</span>{' '}
              {serviceName ? (
                <span style={{ color: serviceColor }}>{serviceName}</span>
              ) : (
                'Solutions'
              )}
            </span>
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/web-design" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">Web Design</a>
              <a href="/seo" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">SEO</a>
              <a href="/crm" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">CRM</a>
              <a href="/build" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">Custom Apps</a>
              <a href="/vibe" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">AI Deployment</a>
              <a href="/contact" className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-md text-sm font-bold transition-all">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}