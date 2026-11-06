'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/SiteChrome'

const services = [
  { name: 'Web design', href: '/web-design' },
  { name: 'SEO & local search', href: '/seo' },
  { name: 'CRM solutions', href: '/crm' },
  { name: 'Custom applications', href: '/build' },
  { name: 'AI consulting', href: '/ai-consulting' },
]

const nextSteps = [
  { title: 'A real person reads it', description: 'Every message is read personally, and you\'ll hear back within 24 hours.' },
  { title: 'A short conversation', description: 'We talk through what you need and what makes sense, in plain language.' },
  { title: 'See it before you commit', description: 'For websites, you get a free homepage preview in 3–5 days before you pay anything.' },
]

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
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(false)
    setSubmitted(false)

    try {
      const response = await fetch('https://formspree.io/f/myzrvbra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        setSubmitError(true)
      } else {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
      }
    } catch {
      setSubmitError(true)
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
    url: 'https://www.pathsixsolutions.com/contact',
    description: 'Get in touch with PathSix Solutions for web design, SEO, CRM, custom development, or AI consulting services.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <section className="site-dark">
          <div className="site-container py-14 md:py-20">
            <p className="site-eyebrow site-gold">Contact</p>
            <h1 className="mt-6 max-w-[16ch] text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s talk about <span className="site-gold">your business.</span>
            </h1>
            <p className="site-muted mt-6 max-w-[46ch] text-pretty text-lg md:text-xl">
              A new website, better search visibility, a CRM, a custom app, or practical help with AI. Tell us what you&apos;re working on and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="site-container grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
            <aside className="order-2 flex flex-col gap-10 lg:order-1">
              <div>
                <p className="site-eyebrow site-eyebrow-accent">What happens next</p>
                <ol className="mt-6">
                  {nextSteps.map((step, index) => (
                    <li key={step.title} className="web-step grid grid-cols-[2.5rem_1fr] gap-x-4 py-5">
                      <span className="web-step-number tabular-nums">{index + 1}</span>
                      <span>
                        <span className="block text-lg font-semibold">{step.title}</span>
                        <span className="site-muted mt-1 block text-pretty">{step.description}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="contact-details site-tint-butter flex flex-col gap-5 p-7">
                <div>
                  <p className="site-eyebrow">Email</p>
                  <a href="mailto:support@pathsixsolutions.com" className="site-text-link mt-1 break-all">support@pathsixsolutions.com</a>
                </div>
                <div>
                  <p className="site-eyebrow">Prefer a call?</p>
                  <a href="mailto:support@pathsixsolutions.com?subject=Call%20request" className="site-text-link mt-1">Request a call <span aria-hidden="true" className="site-arrow">↗</span></a>
                </div>
                <div>
                  <p className="site-eyebrow">Where we work</p>
                  <p className="mt-2">Based in Haskell, Texas. Remote and on-site options available.</p>
                </div>
              </div>
            </aside>

            <div className="contact-form-card order-1 p-6 sm:p-8 md:p-10 lg:order-2">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Send us a message</h2>
              <p className="site-muted mt-2">Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="contact-label">Your name <span aria-hidden="true" className="site-orange-ink">*</span></label>
                    <input type="text" id="name" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className="contact-input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="contact-label">Email address <span aria-hidden="true" className="site-orange-ink">*</span></label>
                    <input type="email" id="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className="contact-input" />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="contact-label">Business name <span className="site-muted font-normal">(optional)</span></label>
                    <input type="text" id="company" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} className="contact-input" />
                  </div>
                  <div>
                    <label htmlFor="service" className="contact-label">Interested in</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="contact-input">
                      <option value="">Select a service…</option>
                      <option value="web-design">Web Design</option>
                      <option value="seo">SEO & Growth</option>
                      <option value="crm">Custom CRM</option>
                      <option value="build">Custom Development</option>
                      <option value="ai-consulting">AI Consulting</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="contact-label">Tell us about your project <span aria-hidden="true" className="site-orange-ink">*</span></label>
                  <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="contact-input resize-y" placeholder="What are you looking to accomplish? What's getting in the way?" />
                </div>

                <button type="submit" disabled={submitting || submitted} className="site-primary contact-submit justify-center">
                  {submitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                </button>

                {submitted && (
                  <div role="status" className="contact-notice contact-notice-success">
                    Thanks! We&apos;ll get back to you within 24 hours.
                  </div>
                )}

                {submitError && (
                  <div role="alert" className="contact-notice contact-notice-error">
                    We couldn&apos;t send your message. Your entries are still here, so you can try again,
                    or <a href="mailto:support@pathsixsolutions.com" className="underline">email support@pathsixsolutions.com</a>.
                  </div>
                )}

                <p className="site-muted text-sm">Please include only the information we need to respond to your inquiry.</p>
              </form>
            </div>
          </div>
        </section>

        <section className="site-dark py-16 md:py-20">
          <div className="site-container grid gap-10 lg:grid-cols-[2fr_3fr]">
            <div>
              <p className="site-eyebrow site-gold">Not ready to write yet?</p>
              <h2 className="mt-5 max-w-[16ch] text-balance text-3xl font-semibold tracking-tight md:text-4xl">Explore what we do first.</h2>
            </div>
            <ul className="site-service-list">
              {services.map((service, index) => (
                <li key={service.href}>
                  <Link href={service.href} className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-4 py-5">
                    <span className="site-service-number tabular-nums">0{index + 1}</span>
                    <span className="text-xl font-medium group-hover:underline">{service.name}</span>
                    <span className="site-service-arrow" aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
