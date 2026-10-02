import assert from 'node:assert/strict'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

// Exercise returned HTML, not just metadata source, so framework inheritance is covered.
const base = process.env.SITE_CHECK_BASE_URL || 'http://127.0.0.1:3001'
const canonicalOrigin = 'https://www.pathsixsolutions.com'
const app = path.resolve('src/app')

async function routes(dir = app) {
  const found = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) found.push(...await routes(file))
    else if (entry.name === 'page.tsx') found.push('/' + path.relative(app, dir).split(path.sep).join('/'))
  }
  return found.sort()
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]))
}

async function get(route) {
  const response = await fetch(new URL(route, base))
  assert.equal(response.status, 200, `${route}: HTTP status`)
  return response.text()
}

const paths = await routes()
const titles = new Set()
const linkedPaths = new Set(['/'])
const logoPaths = new Set()
for (const route of paths) {
  const html = await get(route)
  const expected = new URL(route, canonicalOrigin).href
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attributes(m[0]))
  assert.deepEqual(links.filter(a => a.rel === 'canonical').map(a => new URL(a.href).href), [expected], `${route}: canonical`)
  const meta = Object.fromEntries([...html.matchAll(/<meta\b[^>]*>/g)].map(m => {
    const a = attributes(m[0]); return [a.name || a.property, a.content]
  }))
  assert.equal(new URL(meta['og:url']).href, expected, `${route}: sharing URL`)
  assert.ok(meta.description?.length > 15, `${route}: description`)
  assert.equal(meta['twitter:description'], meta.description, `${route}: Twitter description`)
  assert.ok(!meta.robots?.includes('noindex'), `${route}: indexability`)
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]
  assert.ok(title && !titles.has(title), `${route}: unique title`)
  titles.add(title)
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: H1 count`)
  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    const data = JSON.parse(match[1])
    if (data.logo) logoPaths.add(new URL(data.logo).pathname)
    if (data.url) assert.equal(new URL(data.url).origin, canonicalOrigin, `${route}: schema host`)
  }
  const body = html.replace(/<script\b[^>]*>.*?<\/script>/gs, '')
  for (const bad of ['tel:+1234567890', 'AI deployment help', 'AI deployment services', '99.99%', 'perfect Technical SEO']) {
    assert.ok(!body.includes(bad), `${route}: stale content ${bad}`)
  }
  for (const match of body.matchAll(/<a\b[^>]*>/g)) {
    const href = attributes(match[0]).href
    if (!href) continue
    const url = new URL(href.replaceAll('&amp;', '&'), expected)
    if (url.origin !== canonicalOrigin) continue
    assert.ok(paths.includes(url.pathname), `${route}: unknown internal page ${href}`)
    linkedPaths.add(url.pathname)
    if (url.pathname === route && url.hash) {
      assert.ok(body.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route}: missing anchor ${href}`)
    }
  }
  console.log(`PASS ${route}`)
}
assert.deepEqual([...linkedPaths].sort(), paths, 'Every public page has an internal link')
const sitemap = await get('/sitemap.xml')
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]).sort(), paths.map(p => new URL(p, canonicalOrigin).href).sort(), 'Sitemap covers exactly the published pages')
assert.ok(!sitemap.includes('<lastmod>'), 'No generated freshness dates')
assert.ok((await get('/robots.txt')).includes(`${canonicalOrigin}/sitemap.xml`), 'Robots sitemap host')
for (const logo of logoPaths) {
  const response = await fetch(new URL(logo, base))
  assert.equal(response.status, 200, 'Business logo is available')
  assert.ok(response.headers.get('content-type')?.startsWith('image/'), 'Business logo is an image')
}
for (const [from, to] of [['/vibe', '/ai-consulting'], ['/vibe/opengraph-image', '/ai-consulting/opengraph-image']]) {
  const response = await fetch(new URL(from, base), { redirect: 'manual' })
  assert.equal(response.status, 308, `${from}: permanent redirect`)
  assert.equal(new URL(response.headers.get('location'), base).pathname, to, `${from}: redirect destination`)
}
console.log(`Verified ${paths.length} pages, sitemap, robots, business logo, internal links, and legacy redirects.`)
