# Stylish Names

A free Unicode **stylish name / fancy text generator** — turn any name into 1000+ copy-and-paste
font styles, symbols, and decorations for gaming profiles, Instagram, TikTok, WhatsApp, and more.

Live site: **https://stylish-names.com**

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run eslint
```

## Project structure

- `src/app` — App Router pages (home, `[category]`, `tool/*`, `blog`, `news`, legal pages, sitemap, robots)
- `src/components` — UI components (generator, grids, header/footer, SEO content)
- `src/lib` — content model (`categories.ts`, `tools.ts`, `preBuiltNames.ts`), the Unicode engine, i18n, and `content/blogPosts.ts`
- `public` — static assets, `ads.txt`, icons, manifest

## Notes

- See [`SEO_GROWTH_PLAN.md`](./SEO_GROWTH_PLAN.md) for the AdSense-readiness work and the post-approval SEO roadmap.
- Only English is indexed; non-English locale URLs are served but `noindex`ed via `src/proxy.ts`.
# stylish
