import { pageMetadata } from '@/lib/metadata'
import localFont from 'next/font/local'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = localFont({
  src: '../../../public/fonts/InterVariable.woff2',
  display: 'swap',
  weight: '100 900',
})

export const metadata = pageMetadata('/ai-consulting', 'AI Consulting for Small Businesses | PathSix Solutions', 'Practical help choosing AI tools, setting up useful workflows, and training your team. AI consulting built around your small business.')

const services = [
  { title: 'Find your starting point', description: 'Look at the work your team does every day. Identify where AI could help, what is worth trying, and what can wait.', outcome: 'A prioritized action plan' },
  { title: 'Choose the right tools', description: 'Make sense of the options based on your budget, existing systems, and actual needs. Understand what you are paying for.', outcome: 'Recommendations with a clear reason' },
  { title: 'Put AI to work', description: 'Get help with account setup, reusable instructions, and repeatable workflows that fit the way your business operates.', outcome: 'A working setup your team can use' },
  { title: 'Bring your team along', description: 'Learn through your own day-to-day tasks. Give staff practical guidance on asking better questions and checking the results.', outcome: 'Hands-on training and a team playbook' },
  { title: 'Set sensible boundaries', description: 'Decide what information can be shared, who should have access, and when someone needs to review an AI-generated result.', outcome: 'Clear guidelines for everyday use' },
  { title: 'Get better results', description: 'Already using AI but getting inconsistent answers? Work through the confusing setup, unreliable output, or workflow that keeps getting stuck.', outcome: 'Troubleshooting and practical improvements' },
]

const examples = [
  { title: 'Customer emails & follow-ups', description: 'Turn the details your team provides into a clear draft in your business’s voice, ready for a person to review and send.' },
  { title: 'Proposals & routine paperwork', description: 'Use approved templates and reference material to prepare first drafts. Keep people responsible for pricing, accuracy, and final approval.' },
  { title: 'Meetings & next steps', description: 'Turn approved meeting notes into a useful summary, an action list, and a draft follow-up so decisions are easier to act on.' },
  { title: 'Finding company information', description: 'Explore ways to search approved procedures and company documents, with appropriate access and source checks.' },
]

const steps = [
  { title: 'Understand', description: 'Talk through your business, your tools, and the work that takes more effort than it should.' },
  { title: 'Focus', description: 'Choose one useful starting point and agree on what a successful result would look like.' },
  { title: 'Implement', description: 'Configure the tools, test with real tasks, and show your team how to use the workflow.' },
  { title: 'Refine', description: 'Review the results, work through the rough spots, and decide what makes sense next.' },
]

const engagements = [
  { label: 'Get a clear direction', title: 'AI Assessment', description: 'For businesses deciding where AI belongs and what to do first.', items: ['Review of your needs and current tools', 'Prioritized opportunities and recommendations', 'A practical plan for your next steps'] },
  { label: 'Make it part of the work', title: 'Implementation & Training', description: 'For teams ready to put a specific idea into practice.', items: ['Tool configuration and workflow setup', 'Testing with your everyday tasks', 'Team training and written guidance'] },
  { label: 'Have someone to turn to', title: 'Ongoing Support', description: 'For businesses that want help as questions and new needs come up.', items: ['Troubleshooting and workflow improvements', 'Guidance on tools and changing needs', 'Follow-up training as your team grows'] },
]

const container = 'mx-auto max-w-7xl px-6 lg:px-8'
const eyebrow = 'text-base sm:text-sm font-medium'
const heading = 'text-3xl sm:text-4xl font-semibold tracking-tight text-balance'
const textLink = 'inline-flex min-h-12 items-center gap-3 font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246B68]'

export default function AIConsultingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Consulting for Small Businesses',
    serviceType: 'AI consulting, implementation, and team training',
    url: 'https://www.pathsixsolutions.com/ai-consulting',
    description: metadata.description,
    provider: { '@type': 'Organization', name: 'PathSix Solutions', url: 'https://www.pathsixsolutions.com' },
  }

  return (
    <div className={`${inter.className} antialiased [font-feature-settings:'cv02','cv03','cv04','cv11','ss01','ss03']`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="isolate bg-[#F7F6F2] text-[#172B3A]">
        <section className="bg-[#172B3A] pb-16 pt-36 text-white sm:pb-20 lg:pb-24 lg:pt-44">
          <div className={`${container} grid items-center gap-12 lg:grid-cols-[6fr_5fr]`}>
            <div>
              <p className={`${eyebrow} mb-7 flex items-center gap-3 text-[#B6D5D0]`}>
                <span className="h-px w-8 bg-[#B6D5D0]" aria-hidden="true" />
                AI consulting for small businesses
              </p>
              <h1 className="max-w-[15ch] text-5xl font-semibold tracking-tight text-balance sm:text-6xl xl:text-7xl">Make AI useful in your business.</h1>
              <p className="mt-7 max-w-[44ch] text-lg/8 text-[#CDDAE2] text-pretty">Find the right tools, put them to work, and help your team use them confidently. Practical help, built around the way you do business.</p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#B6D5D0] px-5 py-3 font-semibold text-[#172B3A] hover:bg-[#D0E6E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Let’s talk about your business</Link>
                <a href="#how-we-help" className={`${textLink} text-white`}>Explore the services <span aria-hidden="true">↓</span></a>
              </div>
              <p className="mt-6 text-base text-[#AEBFC9] sm:text-sm">You don’t need a technical background or a fully formed plan.</p>
            </div>

            <aside aria-label="Example AI action plan" className="rounded-lg bg-[#F7F6F2] p-6 text-[#172B3A] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#172B3A]/15 pb-5 text-base sm:text-sm">
                <p className="font-medium">A practical starting point</p>
                <p className="text-[#52616B]">Example plan</p>
              </div>
              <h2 className="mt-7 max-w-[20ch] text-3xl font-medium tracking-tight text-balance">Less time on admin.<br />More room for your business.</h2>
              <p className="mt-4 text-base/7 text-[#52616B] text-pretty">Start with one task. Build a workflow your team can repeat.</p>
              <dl className="mt-8 space-y-6">
                {[
                  ['The opportunity', 'Customer follow-ups take too long to draft.'],
                  ['The approach', 'Use an AI assistant with your approved templates and tone.'],
                  ['The human check', 'Your team reviews the details before anything is sent.'],
                ].map(([title, description], index) => (
                  <div key={title} className="grid grid-cols-[2rem_1fr] gap-x-3">
                    <div aria-hidden="true" className="row-span-2 pt-0.5 font-medium tabular-nums text-[#246B68]">0{index + 1}</div>
                    <dt className="font-medium">{title}</dt>
                    <dd className="mt-1 text-base/6 text-[#52616B] sm:text-sm/6">{description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 border-t border-[#172B3A]/15 pt-5">
                <p className="text-base font-medium text-[#246B68] sm:text-sm">What we would measure</p>
                <p className="mt-2 text-base/6 text-[#52616B] sm:text-sm/6">Time spent, accuracy, and whether the team actually finds it useful.</p>
              </div>
            </aside>
          </div>
        </section>

        <div className="border-b border-[#172B3A]/10 py-6">
          <ul role="list" className={`${container} flex flex-wrap gap-x-12 gap-y-3 text-base font-medium text-[#52616B] sm:text-sm`}>
            <li>Built around your business</li>
            <li>Tools that fit your budget</li>
            <li>Hands-on implementation</li>
            <li>People stay in control</li>
          </ul>
        </div>

        <section id="how-we-help" className="scroll-mt-24 py-20 lg:py-24">
          <div className={container}>
            <p className={`${eyebrow} mb-4 text-[#246B68]`}>From first questions to everyday use</p>
            <h2 className={`${heading} max-w-[35ch]`}>Where could you use a hand?</h2>
            <p className="mt-5 max-w-[56ch] text-lg/8 text-[#52616B] text-pretty">You might be exploring AI for the first time, trying to get your team on board, or wondering why your current tools aren’t delivering. Start where you are.</p>
            <dl className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={service.title} className="border-t border-[#172B3A]/15 pt-6">
                  <div aria-hidden="true" className="mb-5 text-base font-medium tabular-nums text-[#246B68] sm:text-sm">0{index + 1}</div>
                  <dt className="text-xl font-semibold text-balance">{service.title}</dt>
                  <dd className="mt-3 text-base/7 text-[#52616B] text-pretty">{service.description}</dd>
                  <dd className="mt-5 text-base font-medium text-[#246B68] sm:text-sm">{service.outcome}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-y border-[#172B3A]/10 bg-white py-20 lg:py-24">
          <div className={`${container} grid gap-12 lg:grid-cols-[6fr_5fr]`}>
            <div>
              <p className={`${eyebrow} mb-4 text-[#246B68]`}>Practical possibilities</p>
              <h2 className={`${heading} max-w-[20ch]`}>Start with the work already on your desk.</h2>
              <p className="mt-5 max-w-[44ch] text-lg/8 text-[#52616B] text-pretty">The most useful place to start is often a familiar task that eats up your time. We help you work out where AI fits—and where your judgment matters most.</p>
              <p className="mt-6 max-w-[48ch] text-base/7 text-[#52616B] text-pretty">These are examples to explore together. The right approach depends on your tools, information, and team.</p>
            </div>
            <div className="divide-y divide-[#172B3A]/10 border-y border-[#172B3A]/10">
              {examples.map((example, index) => (
                <details key={example.title} open={index === 0} className="group py-6">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 font-semibold hover:text-[#246B68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246B68] [&::-webkit-details-marker]:hidden">
                    {example.title}
                    <span className="shrink-0 font-normal group-open:hidden" aria-hidden="true">+</span>
                    <span className="hidden shrink-0 font-normal group-open:inline" aria-hidden="true">−</span>
                  </summary>
                  <p className="mt-3 max-w-[56ch] text-base/7 text-[#52616B] text-pretty">{example.description}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className={container}>
            <p className={`${eyebrow} mb-4 text-[#246B68]`}>A clear path forward</p>
            <h2 className={`${heading} max-w-[35ch]`}>One useful step at a time.</h2>
            <p className="mt-5 max-w-[48ch] text-lg/8 text-[#52616B] text-pretty">Start small, see what works, and build from there. You’ll know what we’re doing and why.</p>
            <ol role="list" className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t border-[#172B3A]/15 pt-6">
                  <p className="mb-5 text-base font-medium tabular-nums text-[#246B68] sm:text-sm">Step 0{index + 1}</p>
                  <h3 className="text-xl font-semibold text-balance">{step.title}</h3>
                  <p className="mt-3 text-base/7 text-[#52616B] text-pretty">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-[#172B3A]/10 bg-[#EAF0ED] py-20 lg:py-24">
          <div className={container}>
            <p className={`${eyebrow} mb-4 text-[#246B68]`}>Ways to work together</p>
            <h2 className={`${heading} max-w-[35ch]`}>The support that fits your next step.</h2>
            <p className="mt-5 max-w-[48ch] text-lg/8 text-[#52616B] text-pretty">A focused assessment, help putting a plan into practice, or someone to turn to along the way.</p>
            <div className="mt-12 grid gap-12 lg:grid-cols-3">
              {engagements.map((engagement) => (
                <article key={engagement.title} className="flex min-w-0 flex-col gap-6 border-t border-[#172B3A]/20 pt-6">
                  <div>
                    <p className="mb-3 text-base font-medium text-[#246B68] sm:text-sm">{engagement.label}</p>
                    <h3 className="text-2xl font-semibold tracking-tight text-balance">{engagement.title}</h3>
                    <p className="mt-4 text-base/7 text-[#52616B] text-pretty">{engagement.description}</p>
                  </div>
                  <ul role="list" className="flex-1 space-y-3 text-base/7 text-[#52616B]">
                    {engagement.items.map((item) => <li key={item} className="flex items-start gap-3"><span className="shrink-0 text-[#246B68]" aria-hidden="true">—</span>{item}</li>)}
                  </ul>
                  <div className="text-[#246B68]"><Link href="/contact" className={textLink}>Talk through your needs <span aria-hidden="true">→</span></Link></div>
                </article>
              ))}
            </div>
            <p className="mt-12 border-t border-[#172B3A]/15 pt-6 text-base/7 text-[#52616B] sm:text-sm/6">We agree on the scope and price before work begins. Any paid tool subscriptions are discussed separately.</p>
          </div>
        </section>

        <section className="py-16">
          <div className={`${container} grid gap-12 lg:grid-cols-[6fr_5fr]`}>
            <h2 className="max-w-[30ch] text-2xl font-semibold tracking-tight text-balance">Looking for a custom application?</h2>
            <div>
              <p className="max-w-[56ch] text-base/7 text-[#52616B] text-pretty">AI consulting helps you choose and use existing tools. If your business needs purpose-built software or a custom integration, our Custom Apps service handles that work.</p>
              <div className="mt-3 text-[#246B68]"><Link href="/build" className={textLink}>Explore Custom Apps <span aria-hidden="true">→</span></Link></div>
            </div>
          </div>
        </section>

        <section className="bg-[#172B3A] py-20 text-white lg:py-24">
          <div className={`${container} grid items-center gap-12 lg:grid-cols-[6fr_5fr]`}>
            <div>
              <p className={`${eyebrow} mb-4 text-[#B6D5D0]`}>Let’s find your starting point</p>
              <h2 className={`${heading} max-w-[24ch]`}>Bring us the question.<br />We’ll help with the next step.</h2>
            </div>
            <div>
              <p className="max-w-[44ch] text-lg/8 text-[#CDDAE2] text-pretty">Tell us what your business does, what you’re trying to improve, or where you’re getting stuck. We’ll talk through where we can help.</p>
              <div className="mt-6 text-[#B6D5D0]"><Link href="/contact" className={`${textLink} focus-visible:outline-white`}>Let’s talk about your business <span aria-hidden="true">→</span></Link></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
