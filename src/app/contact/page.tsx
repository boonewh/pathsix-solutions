'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

// Contact page header
function ContactHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-white tracking-tight">Path<span className="text-amber-500">Six</span> Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-baseline space-x-8">
            <Link href="/" className="hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300">← Back to Home</Link>
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
            <Link href="/" className="block hover:bg-slate-800 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-base font-medium text-slate-300">← Back to Home</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/myzrvbra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact PathSix Solutions',
    url: 'https://pathsixsolutions.com/contact',
    description: 'Get in touch with PathSix Solutions for web design, SEO, CRM, custom development, or AI deployment services.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactHeader />
      <main className="bg-slate-950 min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/10 rounded-full mb-6">
              <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">Conversation</span>
            </h1>
            <p className="text-xl text-slate-400 mb-4">
              Whether you need a new website, better SEO, a custom CRM, or help deploying your app—we&apos;re here to help.
            </p>
            <p className="text-slate-500">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Quick Info Cards */}
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
                <svg className="w-8 h-8 text-amber-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-white font-bold mb-1">Response Time</h3>
                <p className="text-slate-400 text-sm">Within 24 hours</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
                <svg className="w-8 h-8 text-amber-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <h3 className="text-white font-bold mb-1">Email</h3>
                <p className="text-slate-400 text-sm break-words">
                  <a href="mailto:support@pathsixsolutions.com" className="hover:text-amber-500 transition-colors">
                    support@pathsixsolutions.com
                  </a>
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
                <svg className="w-8 h-8 text-amber-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <h3 className="text-white font-bold mb-1">Location</h3>
                <p className="text-slate-400 text-sm">Remote & On-Site</p>
              </div>
            </div>

            {/* Main Contact Form */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Company & Service Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                    >
                      <option value="">Select a service...</option>
                      <option value="web-design">Web Design</option>
                      <option value="seo">SEO & Growth</option>
                      <option value="crm">Custom CRM</option>
                      <option value="build">Custom Development</option>
                      <option value="vibe">AI Deployment</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none"
                    placeholder="What are you looking to accomplish? What challenges are you facing?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 text-lg"
                >
                  {submitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="text-center p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-medium">
                      ✓ Thanks! We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <p className="text-center text-slate-500 text-sm">
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">Prefer a different method?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@pathsixsolutions.com"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 hover:border-amber-500"
                >
                  Email Us Directly
                </a>
                <a
                  href="tel:+1234567890"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 hover:border-amber-500"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Quick Links */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Or explore our services first</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <a href="/web-design" className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-blue-500 transition-all text-center group">
                <div className="text-blue-500 mb-2">🌐</div>
                <div className="text-white font-medium text-sm group-hover:text-blue-500 transition-colors">Web Design</div>
              </a>
              <a href="/seo" className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-emerald-500 transition-all text-center group">
                <div className="text-emerald-500 mb-2">📈</div>
                <div className="text-white font-medium text-sm group-hover:text-emerald-500 transition-colors">SEO & Growth</div>
              </a>
              <a href="/crm" className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-blue-500 transition-all text-center group">
                <div className="text-blue-500 mb-2">📊</div>
                <div className="text-white font-medium text-sm group-hover:text-blue-500 transition-colors">Custom CRM</div>
              </a>
              <a href="/build" className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all text-center group">
                <div className="text-cyan-500 mb-2">⚙️</div>
                <div className="text-white font-medium text-sm group-hover:text-cyan-500 transition-colors">Custom Apps</div>
              </a>
              <a href="/vibe" className="p-4 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-fuchsia-500 transition-all text-center group">
                <div className="text-fuchsia-500 mb-2">🚀</div>
                <div className="text-white font-medium text-sm group-hover:text-fuchsia-500 transition-colors">AI Deployment</div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
