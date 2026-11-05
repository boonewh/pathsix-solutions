# Website redesign previews

This branch contains the homepage and Web Design redesigns. They are local
development previews; production builds still render the existing live pages.

## Open the previews

Install dependencies with `npm ci`, then run:

```sh
npm run dev -- --port 3001
```

- Homepage: http://localhost:3001/
- Web Design: http://localhost:3001/web-design

The previews are selected when `NODE_ENV` is `development`. A normal Vercel
preview deployment uses a production build and will show the existing pages.

## Source files

- `src/app/page.tsx`: homepage preview and existing homepage.
- `src/app/web-design/page.tsx`: Web Design preview and existing page.
- `src/components/CampaignChrome.tsx`: shared preview header and footer.
- `src/app/globals.css`: preview styles.
- `public/images/home-workshop-hero.webp`: generated homepage hero still.
- `public/images/home-worktable-banner.webp`: generated services banner.
- `design/homepage-imagery.txt`: image prompts and proposed Flow animation brief.

The hero is currently a still image. The video has not been produced yet.
