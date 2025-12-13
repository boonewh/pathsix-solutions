# PathSix Solutions Website

This is the unified ecosystem hub for PathSix Solutions, built with Next.js 14 and Tailwind CSS. Single-page architecture showcasing our four service pillars: Foundation (Web Design), Growth (SEO), Operations (CRM), and Scale (Custom Development & AI Deployment).

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Single-page homepage with all sections
│   ├── globals.css     # Global styles with Tailwind
│   ├── sitemap.ts      # Auto-generated sitemap
│   └── robots.ts       # Robots.txt configuration
└── components/         # Reusable React components
    ├── Header.tsx      # Fixed navigation header
    └── Footer.tsx      # Footer component
public/
├── favicon.svg         # Custom P6 favicon
└── images/             # Hero images and assets
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Features

- ✅ **Next.js 14.2.33** with App Router
- ✅ **Dark Theme UI** with amber/slate color system
- ✅ **Tailwind CSS** for styling  
- ✅ **TypeScript** for type safety
- ✅ **Single-Page Architecture** with smooth anchor scrolling
- ✅ **Dual Hero CTAs** for conversion optimization
- ✅ **Ecosystem Flow Visualization** connecting all four service pillars
- ✅ **External Subdomain Strategy** maintaining focused service sites
- ✅ **Custom P6 Favicon** for brand identity
- ✅ **SEO Optimized** with metadata API
- ✅ **Responsive Design** mobile-first approach
- ✅ **Vercel Analytics** integration ready
- ✅ **Auto-generated Sitemap & Robots.txt**

## Deployment

### Vercel (Recommended)

1. **Connect to GitHub:**
   - Push code to GitHub repository
   - Import project in Vercel dashboard
   - Configure custom domain: `pathsixsolutions.com`

2. **Environment Variables:**
   - No environment variables needed for basic setup
   - Add Google Analytics ID if desired

### Manual Build

```bash
npm run build
npm run start
```

## Design System

### Color Scheme
- **Background:** `slate-900` (#0f172a) - Dark theme base
- **Accent:** `amber-500` (#f59e0b) - Primary brand color
- **Secondary Backgrounds:** `slate-800`, `slate-950`
- **AI Deployment Accent:** `cyan-500` (#06b6d4) - Distinct from typical AI purple cliché

### Typography
- **System Font Stack:** -apple-system, BlinkMacSystemFont, sans-serif
- **Hero Line Height:** Custom 1.3 for optimal spacing
- **Tailwind Classes:** text-5xl, text-3xl, text-xl

## Architecture

**Single-Page Hub:** All service information on main page with external links to specialized subdomains.

### Service Links & Subdomains

- **Foundation (Web Design):** `https://pathsixdesigns.com`
- **Growth (SEO):** `https://pathsixdesigns.com/seo`
- **Operations (CRM):** `https://crm.pathsixsolutions.com`
- **Custom Development:** `https://build.pathsixsolutions.com`
- **AI Deployment (Vibe):** `https://vibe.pathsixsolutions.com`

## Page Sections

1. **Hero Section**
   - Dual CTAs: "Start Your Project" + "View The Ecosystem"
   - Hero background image with gradient overlay
   - Custom line-height for optimal typography

2. **Ecosystem Connector**
   - Visual flow: Foundation → Growth → Operations → Scale
   - Large bold arrows showing progression
   - Explains how services build on each other

3. **Foundation (Web Design)**
   - Website mockup with amber glow effect
   - Grid pattern background for depth
   - Links to pathsixdesigns.com

4. **Growth (SEO)**
   - Statistics and feature cards
   - Links to pathsixdesigns.com/seo

5. **Operations (CRM)**
   - Abstract CRM visualization
   - Links to crm.pathsixsolutions.com

6. **Innovation (Scale)**
   - Split cards: Custom Development + AI Deployment
   - Cyan accent for AI section (avoiding purple cliché)
   - Links to build.pathsixsolutions.com and vibe.pathsixsolutions.com

7. **Contact Section**
   - Email icon for clarity
   - "Let's Start a Conversation" heading
   - Clear response time expectation (24 hours)
   - Direct email option displayed

## Next Steps

1. **Deploy to Vercel:** Import GitHub repository at https://vercel.com/new
2. **Domain Setup:** Configure DNS to point `pathsixsolutions.com` to Vercel
3. **Hero Image:** Add production hero image to `/public/images/solutions_hero.jpg`
4. **Subdomain Deployments:** Ensure all linked subdomains are live
5. **Analytics:** Add Google Analytics and Vercel Analytics
6. **Contact Form Backend:** Implement form submission with Formspree or Resend

## Contact Form Integration

The contact form is ready but needs a backend service:

- **Formspree:** Add action URL to form
- **Resend:** Implement API route
- **Netlify Forms:** If deploying to Netlify

## Performance

- **Image Optimization:** Next.js automatic optimization
- **Code Splitting:** Automatic with App Router  
- **Static Generation:** Homepage and static pages
- **SEO:** Comprehensive metadata and structured data

---

**Built with ❤️ for PathSix Solutions**

## Design Philosophy

- **No Purple Clichés:** Deliberately avoided purple accent colors (the "AI tramp stamp") to stand out from typical AI/tech design trends
- **Dark Theme Authority:** Slate-900 background conveys professionalism and reduces eye strain
- **Amber Warmth:** Amber-500 provides energy and optimism without the corporate coldness of blue
- **Cyan for AI:** Used cyan-500 specifically for AI Deployment section to differentiate from purple cliché
- **Custom Typography:** Inline `lineHeight: 1.3` used on hero heading when Tailwind classes didn't trigger re-renders
- **Glow Effects:** Subtle amber glows on mockups create depth and visual interest
- **Grid Patterns:** Background grids add texture without overwhelming content

## Deployment

Live at: `https://github.com/boonewh/pathsix-solutions`

**Pushed to GitHub:** December 12, 2025
- Main branch with full production code
- Vercel-ready with [vercel.json](vercel.json) configuration
- All dependencies installed and audited (0 vulnerabilities)

---

# ARCHIVE: Original Implementation Plan

## Executive Summary

**Goal:** Create a professional parent brand (PathSix Solutions) that houses three distinct service offerings while preserving your existing SEO equity in pathsixdesigns.com.

**Structure:**
- `pathsixsolutions.com` → Parent hub (new)
- `pathsixdesigns.com` → Web Design (keep existing)
- `crm.pathsixsolutions.com` → CRM Solutions (new subdomain)
- `vibe.pathsixsolutions.com` → Vibe Coding Services (new subdomain)

**Timeline:** 2-3 weeks to full implementation

---

## Phase 1: Foundation Setup (Week 1)

### Step 1: Domain & Hosting Configuration

#### Purchase/Configure Domains
- ✅ You already own pathsixsolutions.com
- Keep pathsixdesigns.com on current hosting (don't move it)

#### Set Up Vercel Projects
Create three separate Vercel projects:

1. **pathsixsolutions-parent** → pathsixsolutions.com
2. **pathsixsolutions-crm** → crm.pathsixsolutions.com
3. **pathsixsolutions-vibe** → vibe.pathsixsolutions.com

#### DNS Configuration
In your domain registrar (wherever pathsixsolutions.com is registered):

**For pathsixsolutions.com:**
```
A Record: @ → [Vercel IP - they'll provide]
CNAME: www → cname.vercel-dns.com
```

**For subdomains (in Vercel):**
```
crm.pathsixsolutions.com → Add custom domain in CRM project
vibe.pathsixsolutions.com → Add custom domain in Vibe project
```

### Step 2: Create Parent Site (pathsixsolutions.com)

#### Homepage Structure

**Hero Section:**
```
PathSix Solutions
Digital Tools Built for Growing Businesses

We specialize in three things:
Custom websites • Smart CRM systems • AI deployment help

[Explore Our Services ↓]
```

**Three Service Sections (cards with images):**

**Card 1: Web Design**
```
Professional Websites That Grow With You
Starting at $159/month

Custom-built websites for small businesses. See your site before you pay a cent.

[Learn More →] (links to pathsixdesigns.com)
```

**Card 2: PathSix CRM**
```
The CRM You Actually Need
Custom pricing based on your needs

Tired of bloated CRMs? We build exactly what you need—nothing you don't.

[Learn More →] (links to crm.pathsixsolutions.com)
```

**Card 3: Vibe Coding Services**
```
Built With AI? Let's Get It Live
Packages from $99

AI helped you build it. We'll help you deploy it securely and professionally.

[Learn More →] (links to vibe.pathsixsolutions.com)
```

**About Section:**
```
Who We Are

PathSix Solutions helps small businesses and entrepreneurs solve digital problems without breaking the bank.

Whether you need a website that works, a CRM that doesn't overwhelm you, or help deploying your AI-built application, we've got you covered.

We're not a massive agency. We're a focused team that delivers real solutions.
```

**Footer:**
```
PathSix Solutions
[Email] | [Phone]

Services:
- Web Design (pathsixdesigns.com)
- Custom CRM (crm.pathsixsolutions.com)
- Vibe Coding (vibe.pathsixsolutions.com)

© 2025 PathSix Solutions
```

#### Technical Stack for Parent Site
- Framework: **Next.js 14+ (App Router)**
- Hosting: Vercel (native Next.js support = fastest deployment)
- Styling: Tailwind CSS (built-in with Next.js)
- Forms: React Hook Form + Formspree/Resend
- Analytics: Vercel Analytics (built-in) + Google Analytics

**Why Next.js?**
- Perfect Vercel integration (literally made for each other)
- Built-in SEO optimization (metadata API)
- Fast page loads (automatic optimization)
- Easy to maintain and scale
- Image optimization out of the box
- TypeScript support (optional but recommended)

### Step 3: Update pathsixdesigns.com

**Changes Needed:**

1. **Add to Footer:**
```html
<div class="parent-brand">
  <p class="text-sm text-gray-400">
    Part of the <a href="https://pathsixsolutions.com" class="text-blue-400 hover:underline">PathSix Solutions</a> family
  </p>
</div>
```

2. **Update Navigation (Optional but Recommended):**
Add small text above main nav:
```
PathSix Web Design | A PathSix Solutions Company
```

3. **Add Canonical Tags:**
```html
<link rel="canonical" href="https://pathsixdesigns.com/[current-page]" />
```

4. **Update Schema Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PathSix Web Design",
  "parentOrganization": {
    "@type": "Organization",
    "name": "PathSix Solutions",
    "url": "https://pathsixsolutions.com"
  }
}
```

**DO NOT:**
- Change URLs
- Redirect pages
- Alter existing content
- Touch anything that's currently ranking

---

## Phase 2: Build Subdomain Sites (Week 2)

### crm.pathsixsolutions.com

**Setup:**
1. Create new Next.js 14 project with App Router
2. Deploy to Vercel as separate project
3. Configure custom domain in Vercel dashboard
4. Copy your current CRM page content and adapt to Next.js components

**Next.js Project Structure:**
```
crm-pathsix/
├── app/
│   ├── layout.js          # Root layout (nav, footer)
│   ├── page.js            # Home page
│   ├── features/
│   │   └── page.js        # Features page
│   ├── pricing/
│   │   └── page.js        # Pricing page
│   ├── demo/
│   │   └── page.js        # Demo page
│   └── contact/
│       └── page.js        # Contact page
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── ServiceCard.js
├── public/
│   └── images/
└── styles/
    └── globals.css        # Tailwind imports
```

**Quick Start Command:**
```bash
npx create-next-app@latest crm-pathsix --tailwind --app
cd crm-pathsix
npm run dev
```

**Site Structure:**
```
/               → Home (main CRM pitch)
/features       → Detailed feature breakdown
/pricing        → Pricing discussion (not locked in, but framework)
/demo           → Link to CRM demo
/contact        → Contact form specific to CRM inquiries
```

**Homepage Content:**
- Keep your existing "Tired of CRM bloat" messaging
- Expand the reports section (you already have this - it's good)
- Add case study or example: "How [Business Type] Uses PathSix CRM"
- Clear CTA: "Schedule a Demo" or "Request Custom Quote"

**Key Pages to Add:**

**/features page:**
- Deep dive into: Client Management, Lead Tracking, Project Management, Custom Reports
- Each feature gets a section with screenshot/mockup
- "Need something we didn't mention? We build custom features."

**/pricing page:**
```
PathSix CRM Pricing

Every business is different, so we build custom quotes based on your needs.

Base CRM Features: [Starting point - don't lock in a price]
- Client & Lead Management
- Project Tracking
- User Access Controls
- Activity Logs

Custom Add-Ons:
- Advanced Reporting
- API Integrations
- Custom Workflows
- Mobile App Access

[Request a Custom Quote]

Typical Implementation: 2-4 weeks
Monthly Support: Included in all plans
```

**Design Notes:**
- Use your existing blue/pink color scheme
- Match the vibe of current PathSix branding
- Professional but not corporate

### vibe.pathsixsolutions.com

**Setup:**
1. Create new Next.js 14 project with App Router
2. Deploy to Vercel as separate project
3. Configure custom domain in Vercel dashboard
4. Copy your current Vibe page content and adapt to Next.js components

**Next.js Project Structure:**
```
vibe-pathsix/
├── app/
│   ├── layout.js          # Root layout (nav, footer)
│   ├── page.js            # Home page
│   ├── services/
│   │   └── page.js        # Services breakdown
│   ├── portfolio/
│   │   └── page.js        # Portfolio/case studies
│   ├── faq/
│   │   └── page.js        # FAQ page
│   └── contact/
│       └── page.js        # Contact page
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── PricingCard.js
├── public/
│   └── images/
└── styles/
    └── globals.css        # Tailwind + custom Vibe styling
```

**Quick Start Command:**
```bash
npx create-next-app@latest vibe-pathsix --tailwind --app
cd vibe-pathsix
npm run dev
```

**Site Structure:**
```
/               → Home (main pitch)
/services       → Detailed breakdown of audit vs launch vs maintenance
/portfolio      → Examples of apps you've deployed (even 2-3)
/faq            → Common questions about AI deployment
/contact        → Contact form specific to Vibe inquiries
```

**Homepage Content:**
- Keep your existing "Built With AI? Let's Get It Live" hero
- Your current content is actually pretty tight - mainly needs expansion

**Key Pages to Add:**

**/services page:**
Deep dive into three packages:
1. Quick Audit ($99) - What's included, what you get, turnaround time
2. Launch Package ($799) - Full breakdown, what happens in those 10 hours
3. Keep It Running ($149/mo) - Exactly what's covered

Add: "Not sure which package? [Book a free 15-min consultation]"

**/portfolio page:**
Even if you only have 2-3 examples, show them:
```
Project: [Name or Type]
Built with: Claude/ChatGPT/Cursor
Challenge: [What was wrong]
Solution: [What you fixed]
Tech Stack: [What you used]
Timeline: [How long]
```

**/faq page:**
Answer common questions:
- "Will I lose my code?"
- "What if I built it with Claude but want to switch to ChatGPT?"
- "Can you work with any tech stack?"
- "What if my app needs ongoing features?"
- "Do you sign NDAs?"

**Design Notes:**
- More modern/tech feeling than web design site
- Use the pink/cyan contrast heavily
- Code snippets, terminal screenshots, tech aesthetic
- Younger, edgier vibe

---

## Phase 3: SEO Strategy (Week 3 & Ongoing)

### pathsixsolutions.com SEO

**Target Keywords:**
- "digital solutions for small business"
- "affordable business software"
- "custom web solutions [your city]"

**Next.js Metadata (app/layout.js):**
```javascript
export const metadata = {
  title: 'PathSix Solutions | Web Design, CRM & Development Services',
  description: 'Custom websites, CRM solutions, and AI deployment help for small businesses. Professional digital tools you can actually afford.',
  keywords: ['web design', 'custom CRM', 'AI deployment', 'small business software'],
  authors: [{ name: 'PathSix Solutions' }],
  openGraph: {
    title: 'PathSix Solutions | Digital Tools for Growing Businesses',
    description: 'Custom websites, CRM solutions, and AI deployment help.',
    url: 'https://pathsixsolutions.com',
    siteName: 'PathSix Solutions',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

**Content Strategy:**
- Keep it simple - this is a hub, not a content site
- Add a small blog that links to all three services
- "5 Signs Your Business Needs a Custom CRM" (links to CRM subdomain)
- "Website vs. Web App: What Does Your Business Need?" (links to web design)

### crm.pathsixsolutions.com SEO

**Target Keywords:**
- "custom CRM for small business"
- "affordable CRM development"
- "CRM alternative to Salesforce"
- "small business CRM without bloat"

**Next.js Metadata (app/layout.js):**
```javascript
export const metadata = {
  title: 'PathSix CRM | Custom CRM Software Built for Your Business',
  description: 'Tired of CRM bloat? PathSix builds custom CRM systems with only the features you need. No unnecessary complexity. Starting from scratch or replacing your current system.',
  keywords: ['custom CRM', 'small business CRM', 'CRM alternative', 'lightweight CRM'],
  openGraph: {
    title: 'PathSix CRM | The CRM You Actually Need',
    description: 'Custom CRM software without the bloat.',
    url: 'https://crm.pathsixsolutions.com',
    siteName: 'PathSix CRM',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

**Content Strategy:**
- Blog posts about CRM pain points
- "Why Small Businesses Hate Traditional CRMs"
- "5 Reports Every Small Business Should Track"
- Case studies (even if anonymized)

### vibe.pathsixsolutions.com SEO

**Target Keywords:**
- "deploy AI application"
- "ChatGPT app deployment help"
- "AI code security audit"
- "deploy Claude app"
- "AI prototype to production"

**Next.js Metadata (app/layout.js):**
```javascript
export const metadata = {
  title: 'Vibe Coding Services | Deploy Your AI-Built Application',
  description: 'Built an app with ChatGPT, Claude, or Cursor? We\'ll help you deploy it securely. Code audits from $99. Full deployment packages available.',
  keywords: ['AI deployment', 'ChatGPT deployment', 'Claude deployment', 'AI security audit', 'Cursor deployment'],
  openGraph: {
    title: 'Vibe Coding | Get Your AI-Built App Live',
    description: 'From prototype to production in days.',
    url: 'https://vibe.pathsixsolutions.com',
    siteName: 'Vibe Coding Services',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

**Content Strategy:**
- Tech-focused blog content
- "5 Security Risks AI Coding Tools Miss"
- "How to Deploy a Flask App Built with Claude"
- "From Cursor to Production: A Complete Guide"

### Cross-Linking Strategy

**Every site links to parent:**
Footer on all sites: "Part of PathSix Solutions"

**Parent links to all services:**
Main nav + service cards

**Strategic internal links:**
- Web design site: "Need a CRM for your business? Check out PathSix CRM"
- CRM site: "Don't have a website yet? Start with PathSix Web Design"
- Vibe site: "Need a website after we deploy your app? Visit PathSix Web Design"

### Technical SEO Setup

**All sites need:**

**Sitemap (Auto-generated by Next.js):**
```javascript
// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://pathsixsolutions.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://pathsixsolutions.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add all your pages
  ]
}
```

**Robots.txt (Auto-generated by Next.js):**
```javascript
// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://pathsixsolutions.com/sitemap.xml',
  }
}
```

**Google Analytics (with Next.js):**
```javascript
// app/layout.js
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}
```

**Vercel Analytics (Built-in):**
```javascript
// app/layout.js
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Schema Markup (JSON-LD in Next.js):**
```javascript
// app/layout.js or page.js
export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PathSix Solutions',
    url: 'https://pathsixsolutions.com',
    logo: 'https://pathsixsolutions.com/logo.png',
    sameAs: [
      'https://willboone.dev',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Your page content */}
    </>
  )
}
```

---

## Phase 4: Branding & Design Consistency

### Logo & Visual Identity

**Parent Brand (PathSix Solutions):**
- Keep the rocket logo
- Color scheme: Blue (#13bbe3) + Pink (#fa26a0) + Dark Navy (#05133d)
- Tagline: "Digital Tools Built for Growing Businesses"

**Service Sub-Brands:**
- **PathSix Web Design:** Keep existing branding, add "A PathSix Solutions Company"
- **PathSix CRM:** Same color scheme, slightly more "business" feeling
- **Vibe Coding:** Same colors but more tech/modern aesthetic

### Design System

**Shared Elements Across All Sites:**
- Same font stack (Alkatra for headers, Arial/sans-serif for body)
- Same button styles
- Same color palette
- Same footer structure

**Unique Elements:**
- Web Design: More small business friendly, warm
- CRM: Professional, clean, data-focused
- Vibe: Modern, tech-forward, edgy

---

## Phase 5: Marketing & Launch

### Announcement Strategy

**Week 1: Soft Launch**
1. Get all sites live but don't announce
2. Test all links, forms, navigation
3. Check mobile responsiveness
4. Set up analytics

**Week 2: Announce**

**Email (if you have a list):**
```
Subject: Introducing PathSix Solutions

Hi [Name],

Quick update: PathSix Web Design is now part of a bigger family.

We've launched PathSix Solutions—a company dedicated to solving digital problems for small businesses.

What does this mean for you?

✓ Same great web design service you know
✓ Plus: Custom CRM solutions (if you've been drowning in Salesforce, we should talk)
✓ Plus: AI deployment help (for the tech entrepreneurs out there)

Check it out: pathsixsolutions.com

Nothing changes with your website service—we just have more ways to help you grow.

- Will
PathSix Solutions
```

**Social Media:**
```
Big news! 🚀

PathSix Web Design is now part of PathSix Solutions.

Same team. Same quality. More ways to help your business:

🌐 Custom Websites (starting at $159/mo)
📊 Custom CRM Systems (built for YOUR workflow)
💻 AI Deployment Help (get your app online)

Check it out → pathsixsolutions.com
```

**Update Your Google My Business:**
- Add PathSix Solutions as parent company
- Keep individual listings for each service if beneficial

### Ongoing Marketing

**Content Calendar (Monthly):**
- 2 blog posts on parent site (one linking to each subdomain service)
- 1 blog post on CRM subdomain
- 1 blog post on Vibe subdomain
- Update web design site with seasonal content

**Paid Advertising (if budget allows):**
- Google Ads for "custom CRM" → CRM subdomain
- Google Ads for "AI app deployment" → Vibe subdomain  
- Keep existing ads for web design → pathsixdesigns.com

---

## Technical Implementation Checklist

### Pre-Launch Checklist

**pathsixsolutions.com:**
- [ ] Domain pointing to Vercel
- [ ] SSL certificate active
- [ ] Homepage built and tested
- [ ] All service links working
- [ ] Contact form functional
- [ ] Mobile responsive
- [ ] Google Analytics installed
- [ ] Google Search Console verified
- [ ] Sitemap submitted

**crm.pathsixsolutions.com:**
- [ ] Subdomain pointing to Vercel
- [ ] SSL certificate active
- [ ] All pages built
- [ ] Demo link working
- [ ] Contact form functional
- [ ] Mobile responsive
- [ ] Analytics installed
- [ ] Search Console verified
- [ ] Sitemap submitted

**vibe.pathsixsolutions.com:**
- [ ] Subdomain pointing to Vercel
- [ ] SSL certificate active
- [ ] All pages built
- [ ] Pricing clear
- [ ] Contact form functional
- [ ] Mobile responsive
- [ ] Analytics installed
- [ ] Search Console verified
- [ ] Sitemap submitted

**pathsixdesigns.com:**
- [ ] Footer updated with parent brand link
- [ ] Schema markup updated
- [ ] No broken links introduced
- [ ] Analytics still tracking
- [ ] Rankings monitored (make sure nothing drops)

---

## Maintenance & Growth Plan

### Monthly Tasks
- Check analytics on all four sites
- Review which service is getting most traffic
- Update blog content on parent site
- Monitor keyword rankings for each service
- Respond to contact form inquiries within 24 hours

### Quarterly Review
- Which service is most profitable?
- Which service needs more marketing?
- Are customers finding the parent site or going direct to services?
- Should any service get its own domain? (if Vibe or CRM explodes)

### Annual Strategy
- Consider spinning off a service to its own domain if it outgrows subdomain
- Review if parent brand needs more content/features
- Assess if brand positioning is working
- Make strategic pivots if needed

---

## Budget Estimates

### One-Time Costs
- Vercel hosting (3 projects): $0 (free tier likely sufficient to start)
- If you need Pro: ~$20/mo per project
- Domain renewals: ~$15/year (you already own them)
- SSL certificates: $0 (included with Vercel)

### Ongoing Costs
- Hosting: $0-$60/mo depending on traffic
- Email service (if you add newsletters): $0-$20/mo
- Analytics tools: $0 (Google Analytics is free)
- Potential paid ads: Your budget

**Total estimated monthly: $0-$80/mo**

---

## Risk Mitigation

### What Could Go Wrong?

**Problem:** pathsixdesigns.com loses rankings after changes
**Solution:** Make minimal changes. Only add footer link. Monitor rankings weekly. Rollback if needed.

**Problem:** Customers confused by multiple sites
**Solution:** Clear messaging on parent site. Each service explains its focus.

**Problem:** One service doesn't get traction
**Solution:** That's fine. At least it's not cluttering your main site. Shut down subdomain if needed.

**Problem:** Managing three separate codebases is annoying
**Solution:** Use similar templates. Copy shared components. Consider monorepo setup if you're technical.

---

## Success Metrics

### Track These KPIs

**Parent Site (pathsixsolutions.com):**
- Monthly visitors
- Click-through rate to each service
- Contact form submissions
- Time on site

**Each Service Site:**
- Monthly visitors
- Conversion rate (visitor → contact)
- Keyword rankings
- Backlink growth

**Overall Business:**
- Which service drives most revenue?
- Customer acquisition cost per service
- Customer lifetime value per service
- Are customers buying multiple services?

---

## Next Steps (Right Now)

1. **Set up Vercel account** (if you haven't already)
2. **Create three new projects** in Vercel
3. **Configure DNS** for pathsixsolutions.com
4. **Build parent site homepage** (use template I provided above)
5. **Update pathsixdesigns.com footer** (minimal change)
6. **Clone CRM and Vibe content** to subdomains
7. **Test everything** before announcing
8. **Launch quietly** and monitor for 1 week
9. **Announce to your network**
10. **Start SEO work** on each subdomain

---

## Questions to Answer Before You Start

1. Are you comfortable with React/Next.js? (If not, there's a learning curve but it's worth it)
2. Do you have Node.js installed locally? (Required for Next.js development)
3. Do you have logo/brand assets ready for parent company?
4. Do you need help with copywriting for any of the sites?
5. What's your timeline? Can you dedicate 2-3 weeks to this?
6. Do you want to handle this yourself or need contractor help?
7. Should we migrate pathsixdesigns.com to Next.js too? (Longer project, but more consistency)

---

## Resources & Tools You'll Need

- **Vercel Account** (free tier is fine to start)
- **Node.js & npm** (v18+ recommended for Next.js 14)
- **DNS Access** (to your domain registrar)
- **Code Editor** (VS Code recommended with ESLint & Prettier extensions)
- **Git/GitHub** (for version control on Vercel - required)
- **Analytics** (Google Analytics 4 + Vercel Analytics)
- **Search Console** (Google Search Console)
- **Design Tools** (Figma for mockups, or just use Tailwind classes)
- **Contact Form Service** (Formspree, Resend, or React Email)
- **Next.js Documentation** (https://nextjs.org/docs)

**Helpful Next.js Commands:**
```bash
# Create new Next.js project
npx create-next-app@latest project-name --tailwind --app

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git push origin main  # Vercel auto-deploys from GitHub
```

---

## Bonus: Should You Migrate pathsixdesigns.com to Next.js?

### The Case For Migration

**Benefits:**
- Consistent tech stack across all sites (easier maintenance)
- Better performance (Next.js optimization)
- Improved SEO capabilities (Next.js metadata API)
- Easier to add features later (React component ecosystem)
- Modern developer experience
- Image optimization built-in

**The Reality:**
This is a SEPARATE project that could take 1-2 weeks depending on site complexity.

### The Case Against Migration (For Now)

**Risks:**
- "If it ain't broke, don't fix it" - your current site works
- Risk of breaking SEO rankings during migration
- Additional time investment
- Potential for bugs during transition
- Need to rewrite all Flask templates as React components

### My Recommendation

**Phase 1:** Build new sites (parent + subdomains) in Next.js first
**Phase 2:** After 3 months, if everything is working well, THEN consider migrating pathsixdesigns.com
**Phase 3:** Or leave it as-is - having Flask for one site and Next.js for others is totally fine

**The pragmatic approach:** Start fresh with Next.js for new sites, migrate the old site only if it becomes a maintenance burden.

If you do decide to migrate later, I can help you with that too.

---

## Final Thoughts

This is a solid, professional approach that:
- ✅ Preserves your web design SEO
- ✅ Creates clear separation between services
- ✅ Builds a parent brand for future growth
- ✅ Keeps everything flexible
- ✅ Doesn't require massive upfront investment

The key is execution. Take it one phase at a time. Don't try to perfect everything before launching. Get the structure in place, then iterate.

You've got this. Let me know when you're ready to build the parent site homepage and I'll help you code it up.

---

**Document Version:** 1.0  
**Last Updated:** November 11, 2025  
**Next Review:** After Phase 1 completion