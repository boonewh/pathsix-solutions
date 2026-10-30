import assert from 'node:assert/strict'
import {spawn} from 'node:child_process'
import {mkdir, writeFile} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'
import {chromium, devices} from 'playwright'

// Local production build only. Formspree requests are intercepted; no real messages.
const root = fileURLToPath(new URL('../', import.meta.url))
const base = 'http://127.0.0.1:3411'
const formEndpoint = 'https://formspree.io/f/myzrvbra'
const results = []
const env = {...process.env, NEXT_TELEMETRY_DISABLED: '1', SITE_CHECK_BASE_URL: base}
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', '3411'], {cwd: root, env, stdio: ['ignore', 'inherit', 'inherit'], windowsHide: true})
let browser

async function check(name, task) {
  await task()
  results.push(name)
  console.log(`PASS ${name}`)
}
async function command(script) {
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script], {cwd: root, env, stdio: 'inherit', windowsHide: true})
    child.on('error', reject)
    child.on('exit', code => code === 0 ? resolve() : reject(Error(`${script} failed: ${code}`)))
  })
}
async function fill(page) {
  await page.locator('#name').fill('Fictional maintenance check')
  await page.locator('#email').fill('fixture@example.test')
  await page.locator('#company').fill('Synthetic company')
  await page.locator('#service').selectOption('web-design')
  await page.locator('#message').fill('Synthetic local verification; never sent to Formspree.')
}
async function visible(locator) {await locator.waitFor({state: 'visible'})}
async function submit(page) {await page.getByRole('button', {name: 'Send Message', exact: true}).click()}
async function saved(page) {
  await visible(page.getByRole('button', {name: 'Message Sent!', exact: true}))
  assert(await page.getByRole('button', {name: 'Message Sent!', exact: true}).isDisabled())
  assert.equal(await page.locator('#name').inputValue(), '')
  assert.equal(await page.locator('#email').inputValue(), '')
  assert.equal(await page.locator('#message').inputValue(), '')
}
async function noOverflow(page) {assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false)}

try {
  await mkdir(new URL('../test-results/', import.meta.url), {recursive: true})
  let ready = false
  for (let attempt = 0; attempt < 80; attempt++) {
    if (server.exitCode !== null) throw Error('Production check server exited')
    try {if ((await fetch(base, {signal: AbortSignal.timeout(1000)})).ok) {ready = true; break}} catch { /* Wait for server startup. */ }
    await new Promise(resolve => setTimeout(resolve, 250))
  }
  assert(ready, 'Production server ready')
  await check('20 public pages, metadata, sitemap, robots, links and legacy redirects', () => command('scripts/check-seo.mjs'))
  await check('six generated sharing images and one optimized local image', async () => {
    for (const path of ['/opengraph-image', '/web-design/opengraph-image', '/seo/opengraph-image', '/crm/opengraph-image', '/build/opengraph-image', '/ai-consulting/opengraph-image', '/_next/image?url=%2Fimages%2Fsolutions_hero.jpg&w=640&q=75']) {
      const response = await fetch(base + path, {signal: AbortSignal.timeout(30000)})
      assert.equal(response.status, 200, path)
      assert.match(response.headers.get('content-type') || '', /^image\//)
      const image = Buffer.from(await response.arrayBuffer())
      assert(image.byteLength > 100)
      if (path.includes('/opengraph-image')) {
        assert.equal(image.subarray(1, 4).toString(), 'PNG')
        assert.equal(image.readUInt32BE(16), 1200)
        assert.equal(image.readUInt32BE(20), 630)
      }
    }
  })
  browser = await chromium.launch({headless: true})
  for (const [name, options] of [['desktop', {viewport: {width: 1440, height: 1000}}], ['mobile', {...devices['iPhone 13']}]] ) {
    const context = await browser.newContext({...options, serviceWorkers: 'block'})
    const errors = [], unexpected = [], failedLocal = [], submissions = []
    let responseMode = 'success', releasePending
    await context.route('**/*', async route => {
      const url = new URL(route.request().url())
      if (url.href === formEndpoint) {
        assert.equal(route.request().method(), 'POST')
        const payload = route.request().postDataJSON()
        assert.equal(payload.email, 'fixture@example.test')
        assert.equal(payload.service, 'web-design')
        submissions.push(payload)
        if (responseMode === 'network-error') return route.abort('failed')
        if (responseMode === 'pending') await new Promise(resolve => {releasePending = resolve})
        return route.fulfill({status: responseMode === 'error' ? 503 : 200, contentType: 'application/json', body: responseMode === 'error' ? '{"error":"Synthetic failure"}' : '{"ok":true}'})
      }
      if (url.origin === base) {
        // Analytics transport is outside this maintenance check's scope.
        if (url.pathname.startsWith('/_vercel/insights/')) return route.fulfill({status: 200, contentType: 'application/javascript', body: ''})
        return route.continue()
      }
      unexpected.push(url.origin)
      return route.abort()
    })
    const page = await context.newPage()
    page.setDefaultTimeout(10000)
    page.on('pageerror', error => errors.push(error.message))
    page.on('response', response => {if (response.url().startsWith(base) && response.status() >= 400) failedLocal.push({url: response.url(), status: response.status()})})
    await check(`${name}: navigation, menu and responsive layout`, async () => {
      for (const [label, path] of [['Web Design', '/web-design'], ['SEO', '/seo'], ['CRM', '/crm'], ['Custom Apps', '/build'], ['AI Consulting', '/ai-consulting'], ['Resources', '/resources'], ['Contact', '/contact']]) {
        await page.goto(base, {waitUntil: 'networkidle'})
        const nav = page.locator('nav').first()
        if (name === 'mobile') {
          const toggle = nav.getByRole('button', {name: 'Toggle menu'})
          assert.equal(await toggle.getAttribute('aria-expanded'), 'false')
          await toggle.click()
          assert.equal(await toggle.getAttribute('aria-expanded'), 'true')
        }
        await nav.getByRole('link', {name: label, exact: true}).filter({visible: true}).click()
        await page.waitForURL(base + path)
        await visible(page.locator('h1'))
        await noOverflow(page)
      }
      await page.goto(base, {waitUntil: 'networkidle'})
      await noOverflow(page)
      const hero = page.getByAltText('Developer Workspace', {exact: true})
      await visible(hero)
      await hero.evaluate(image => image.decode())
      assert(await hero.evaluate(image => image.naturalWidth > 0))
      await page.screenshot({path: fileURLToPath(new URL(`../test-results/home-${name}.png`, import.meta.url)), fullPage: true})
    })
    await check(`${name}: contact validation, pending state and successful submission`, async () => {
      await page.goto(base + '/contact', {waitUntil: 'networkidle'})
      const count = submissions.length
      await submit(page)
      assert.equal(await page.locator('form').evaluate(form => form.checkValidity()), false)
      assert.equal(submissions.length, count)
      await fill(page)
      responseMode = 'pending'
      await submit(page)
      await visible(page.getByRole('button', {name: 'Sending...', exact: true}))
      assert(await page.getByRole('button', {name: 'Sending...', exact: true}).isDisabled())
      for (let attempt = 0; typeof releasePending !== 'function' && attempt < 100; attempt++) await new Promise(resolve => setTimeout(resolve, 50))
      assert.equal(typeof releasePending, 'function')
      responseMode = 'success'; releasePending()
      await saved(page)
      assert.equal(submissions.length, count + 1)
      await noOverflow(page)
    })
    for (const mode of ['error', 'network-error']) {
      await check(`${name}: contact ${mode} preserves draft and permits retry`, async () => {
        await page.goto(base + '/contact', {waitUntil: 'networkidle'})
        await fill(page)
        responseMode = mode
        await submit(page)
        await visible(page.locator('form [role="alert"]'))
        assert.equal(await page.locator('#email').inputValue(), 'fixture@example.test')
        assert.equal(await page.locator('#message').inputValue(), 'Synthetic local verification; never sent to Formspree.')
        assert(await page.getByRole('button', {name: 'Send Message', exact: true}).isEnabled())
        responseMode = 'success'
        await submit(page)
        await saved(page)
        assert.equal(await page.locator('form [role="alert"]').count(), 0)
      })
    }
    assert.deepEqual(errors, [], `${name} page errors`)
    assert.deepEqual(unexpected, [], `${name} unexpected external requests`)
    assert.deepEqual(failedLocal, [], `${name} failed local responses`)
    await context.close()
  }
  await writeFile(new URL('../test-results/upgrade-checks.json', import.meta.url), JSON.stringify({checks: results, count: results.length, realFormspreeRequests: 0}, null, 2) + '\n')
  console.log(`${results.length} verification groups passed; no Formspree messages sent.`)
} finally {
  await browser?.close()
  server.kill()
}
