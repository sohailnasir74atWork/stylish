# Stylish Names — AdSense & SEO Growth Plan

Living doc for stylish-names.com. Two parts: (1) what was shipped to get **AdSense-approved**,
(2) the **post-approval** traffic/ranking roadmap. Based on a competitive teardown of the
leaders in this niche (fancytextguru, nickfinder, lingojam, stylish-name.net).

---

## Part 0 — Competitive landscape (why the leaders win)

The niche is not won by a better generator. The leaders win on three things, all copyable:

1. **A huge internal-link web** — separate indexed pages for every font style, platform,
   symbol set, mood, and A–Z letter, all cross-linked.
2. **Ready-made copyable name *lists*** (not just a live generator) — captures
   "free fire name list", "stylish name for girl", etc. The names must be in the HTML.
3. **Aggressive long-tail** — game-by-game (MLBB, CODM, Valorant), "attitude boy fonts",
   "names starting with A", symbol/decoration pages.

Off-page (backlinks + domain authority) is the real ceiling.

---

## Part 1 — DONE (AdSense-readiness + Tier 1 SEO) ✅

Shipped 2026-06-21. All AdSense-safe (adds unique content, no thin-page flood).

### AdSense readiness
- Removed `/blog` & `/news` → home 301 redirects; built real `/blog`, `/blog/[slug]`, `/news`.
- 11 original blog guides in `src/lib/content/blogPosts.ts` (incl. 3 list-style posts), with
  BlogPosting + BreadcrumbList JSON-LD and internal links to tools.
- Added `/contact` (email stylishnamesgen@gmail.com) and `/disclaimer`; fixed empty contact
  sections in About + Privacy Policy.
- Re-integrated AdSense (`pub-3902878504354154`) — meta tag + loader in `src/app/layout.tsx`,
  consistent with `public/ads.txt`. Old `pub-3701208411582706` fully removed.
- Filled ~38 thin category/platform/tool pages with unique `seoContent` + FAQs.
- Only-English indexed: canonical + hreflang + sitemap EN-only, **plus** `X-Robots-Tag:
  noindex, follow` on non-EN URLs via `src/proxy.ts` (mirrors adopt-me; remove per-locale to roll back).
- Deleted junk files from `src/components/`.

### Tier 1 SEO (ranking foundation)
- **Ready-made name lists on every category & platform page** — expanded
  `src/lib/preBuiltNames.ts` to cover all slugs; `PreBuiltNamesGrid` now renders **all** names
  into the DOM (crawlable), visually clamped until "Show all".
- **Internal-link block** (`src/components/RelatedLinks.tsx`) on every category, platform, and
  tool page — links to related styles, platforms, and tools.
- **3 list-style blog posts** ("120+ Free Fire names", "100+ girl names", "100+ attitude names").

---

## Part 2 — DO AFTER ADSENSE APPROVAL (do NOT do during review)

> ⚠️ Mass-adding pages now would re-trigger the "low value / scaled content" flag we just
> cleared. Wait until the site is approved, then ship these in order.

### Tier 2 — programmatic content scale
1. **New high-volume game platforms** (one rich page each, like existing platform pages):
   - Mobile Legends / MLBB, COD Mobile (CODM), Valorant, Minecraft, Clash of Clans,
     Among Us, Genshin Impact, Clash Royale, eFootball.
   - Each needs: unique `seoContent` + FAQs + ready-made names in `preBuiltNames.ts` +
     entry in `categories.ts` platforms + nav + sitemap (already automatic).
2. **Symbol / decoration pages** — "copy paste symbols", hearts ♡, stars ★, lenny faces,
   crosses ☬, lines/borders. coolsymbol/piliapp own this cluster. Make them content-rich
   (grouped grids + how-to), not bare symbol dumps.
3. **A–Z / "names starting with" pages** — e.g. `/stylish-name-with-a`, `/names-starting-with-s`.
   ONLY with a content-rich template (unique intro + a real list of names per letter), or
   Google treats them as thin. Generate name lists per letter; do not ship empty shells.
4. **More list-style blog posts** — "200 PUBG names", "Aesthetic Discord names", "WhatsApp
   group names", "Couple names list". List content ranks fast.
5. **Re-enable a non-EN locale** (optional) only after giving it genuinely translated content
   (not just metadata). Remove its `X-Robots-Tag` in `src/proxy.ts`, one locale at a time,
   a week apart. Today every `/de/*` etc. just renders English, so they add no SEO value yet.

### Tier 3 — off-page / authority (the real growth lever)
6. **Reclaim old-domain backlinks** — the site migrated from a WordPress `stylish-names.com`.
   In Search Console, find lost/inbound links and confirm 301s cover them (`next.config.ts`).
7. **Build backlinks** — gaming subreddits/forums, Quora answers, YouTube video descriptions,
   free-tool directories, "best fancy text generator" listicles. This is what separates
   nickfinder/lingojam from the long tail.
8. **Engagement signals** — most-copied / trending names module, "name of the day", copy
   counters (some already exist). Dwell time + repeat visits help rankings.

### Tier 2/3 sequencing
- Week 1–2 post-approval: 2–3 new game platforms + 2 list posts.
- Week 3–4: symbol pages + more platforms.
- Month 2: A–Z programmatic pages (content-rich only) + backlink outreach.
- Ongoing: 1–2 blog posts/week; monitor GSC for thin-content / crawl issues.

---

## Reference
- AdSense diagnosis this mirrors: `/Volumes/Sohail/AI_Projects/adoptme-web/ADSENSE_FIX_PLAN.md`
- Shared AdSense account: `pub-3902878504354154`
