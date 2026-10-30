# October 2026 maintenance

Upgrade from committed main8b67dcc, keeping unpublished design work out of the
release. Preserve existing content, URLs, canonical host, imagery, analytics and
Formspree handling. There is no database integration or migration.

## Versions and compatibility

- Next15.5.27 →16.4.3; React/DOM19.2.3 →19.3.1.
- PostCSS8.5.28 →8.5.32, Autoprefixer10.4.22 →10.6.2;
  source-map-js1.2.2 and selector-parser6.1.5 resolve the lockfile findings.
- Sharp remains0.35.5; TypeScript remains5.9.3 and Tailwind remains3.4.19.
  Analytics remains1.6.1; its major2 migration is outside this security release.
- Node24.22.1/npm11.17.0 pins;24-only engine; matching Node24/React19.3 types.
- Direct ESLint CLI and flat configuration replace removed `next lint`.
  Use the same Next core-web-vitals rule set; no rules are disabled to pass checks.
  **Approved temporary support exception:** ESLint9.39.5 is EOL, but current
  React/import/accessibility lint plugins declare peers through9, not current10.
  Track an upgrade to ESLint10 when supported or separately migrate equivalent
  checks. Do not force incompatible peers or describe all tooling as maintained.
- Remove the old Next/PostCSS override: the framework's bundled8.5.23 and direct
  PostCSS8.5.32 are secure. Refresh every source-map-js instance to1.2.2.
- Next's generated TypeScript settings use automatic JSX and include development
  route types. The site keeps the existing App Router and Tailwind3 design.
- Six sharing-image generators explicitly use Node rather than deprecated Edge.
  Their artwork/content/paths are unchanged; Next can prerender these static images.
  No middleware/authentication/caching feature is introduced.
- Vercel uses reproducible `npm ci`; production Node24.x, domains and settings
  otherwise retain their existing configuration.

## Verification

```sh
npm ci --ignore-scripts
npm audit
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run check:upgrade
```

The site check starts only a loopback production server on127.0.0.1:3411; it
expects an existing build. It exercises the existing20-page SEO/link/sitemap/robots/
legacy-redirect assertions, six generated share images and an optimized local
image, plus desktop/mobile navigation/layout and contact validation, pending,
success, HTTP failure/retry and network failure/retry. Contact requests are
intercepted with synthetic data before reaching Formspree. External requests are
blocked; local analytics transport is stubbed and not tested as a live integration.
No live email/delivery verification is claimed. No test fixture is added to app routes.
Screenshots and results are ignored in `test-results/`.

The pinned Ubuntu24.04 workflow runs audit/lint/types/build and the same checks
with Chromium. `next build` does not run lint; keep the explicit lint step.

Source upgrades go to a review branch/PR; review the tested result before merging
main because its existing Vercel integration deploys production automatically.
Any unexpected database requirement must be explained before action. Local
unpublished design reconciliation remains a separate later task.

Primary guidance: [Next security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026),
[Next16 migration](https://nextjs.org/docs/app/guides/upgrading/version-16),
[Edge deprecation](https://nextjs.org/docs/messages/edge-runtime-deprecated),
[ESLint support](https://eslint.org/version-support/).
