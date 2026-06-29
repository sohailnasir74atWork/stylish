# Execution Plan — New Site (Premium UI, Low-Cost, SEO/Revenue-First)

*Niche: gaming / online-identity long-tail name & username generators (see `REPORT_FOR_REVIEW.md`).
Design brief: premium UI · simple but complete · best UX · focused · result-oriented & genuinely
helpful · not crowded. Constraints: very low backend cost; deploy on Hetzner.*

---

## 1. Competitor UX audit (researched, not assumed)

| Site | Verdict | Key gap we exploit |
|---|---|---|
| **SpinXO** (built on Next.js) | The polished leader — card grid, 30 names/spin, style filters, AI toggle, FAQ | **No clear one-click copy on results**; ambiguous controls; tool-overload; collapsed-FAQ clutter |
| **Namelix** | Premium minimalist benchmark (monochrome, whitespace, learns prefs) — but it's *business* names | Proof that clean+minimal wins trust; we apply that polish to gaming |
| **Nickfinder** | Dated; **captcha-gated** before you see anything | Friction gate = easy to beat with instant value |
| **fantasynamegenerators** | Ranks on breadth/topical authority, but **dated 2010s, ad-heavy** | Beat on *premium feel* + speed, not breadth |
| **Roblox Den** | Strong: **username availability check ("not taken")** + deep options | No live result preview shown; opaque; we do availability + show results instantly |
| **Glyphy** | Clean minimal AI, one "Generate" button | **No copy buttons / per-result actions**; weak differentiation |

**Pattern across the field:** the generators are either (a) dated and ad-cluttered, or (b) clean
but missing the *one thing the user actually came to do* — **copy a name fast, and know it's
available.** That's the wedge.

---

## 2. Positioning — "the fastest, cleanest way to get a name you can actually use"

Three promises, each closing a competitor gap:
1. **Instant, zero-friction** — no captcha, no signup; the generator is the hero, above the fold, works on first paint.
2. **One-tap copy** — every result is a button; tap → copied → visual confirmation. (Most rivals make you hand-select text.)
3. **Actually usable** — for games that support it (Roblox first), **check availability** so you don't fall in love with a taken name.

---

## 3. UX principles (mapped to your brief)

| Your requirement | Concrete rule |
|---|---|
| Premium UI | Generous whitespace, one restrained accent color, modern type (Geist/Inter), subtle motion, **dark mode** (gaming audience default), no stock clip-art |
| Simple but complete | Generator works with **zero config**; advanced options exist but are **collapsed** behind "More options" |
| Best UX | First result < 1s, no layout shift, one-tap copy with toast, keyboard + touch friendly |
| Focused | **One generator per page, one primary CTA** (Generate). No competing tools jammed in-page |
| Result-oriented / helpful | Big readable result cards, copy + favorite + availability, "regenerate", style/symbol variants |
| Not crowded | Max **1–2 ad slots**, lots of breathing room, no pop-ups/stickies, short curated related-links (not a wall) |

---

## 4. Page anatomy — a generator page (top → bottom)

```
┌───────────────────────────────────────────────┐
│ [logo]            Roblox · Discord · …   🌙(dark)│  ← minimal sticky header
├───────────────────────────────────────────────┤
│  H1: Roblox Username Generator                  │
│  one-line value prop                            │
│  ┌─────────────────────────────────────────┐   │
│  │ [ keyword (optional) ]   [ Generate ▸ ]  │   │  ← HERO generator, above fold
│  │ style chips: Aesthetic Cool Cute Tryhard │   │     works instantly, zero config
│  │ ▸ More options (length, symbols, avail.) │   │     advanced = collapsed
│  └─────────────────────────────────────────┘   │
│  RESULTS  (grid of cards)                       │
│   ┌────────────┐ ┌────────────┐ ┌────────────┐ │
│   │ xX_Frost_Xx│ │ velvetmoon │ │ aetherbloom│ │  ← each card:
│   │ 📋 copy ⭐ ✓ avail │ … │ … │             │ │     tap=copy, star=fav, ✓/✗ avail
│   └────────────┘ └────────────┘ └────────────┘ │
│            [ Generate more ]                     │
├───────────────────────────────────────────────┤
│  (one tasteful in-content ad)                   │  ← only after user got value
├───────────────────────────────────────────────┤
│  Helpful content (UNIQUE per page):             │
│   • How to change your Roblox username          │  ← real utility + SEO
│   • 20 example aesthetic names (curated)        │
│   • Tips / rules / char limits                  │
│   • FAQ (expanded, genuinely useful)            │
│  A few related generators (4–6, not a wall)     │
│  Clean footer                                   │
└───────────────────────────────────────────────┘
```

---

## 5. Design system (premium, lightweight)

- **Type:** Geist or Inter (variable). Big result text (≥18px), tight headings.
- **Color:** neutral base (near-black/near-white) + **one** accent (e.g. electric violet or lime). Full **dark mode** (default for gaming).
- **Components:** shadcn/ui (Radix) primitives — accessible, premium, tiny. Cards, chips/toggles, toast, dialog.
- **Motion:** 150–200ms ease; copy → check-mark morph; result cards fade/stagger in. Nothing heavy.
- **Feel:** think Linear/Vercel-clean, not gaming-RGB-noise. Premium = restraint.

---

## 6. Information architecture

```
/                       → brand hub: search + top generators (not crowded)
/roblox-username-generator
/blox-fruits-crew-name-generator
/adopt-me-pet-name-ideas
/valorant-name-generator
/clan-name-generator  … (one focused page per validated keyword)
/about /privacy /contact
```
Tight internal linking within a cluster (Roblox pages link to each other) = topical authority.

---

## 7. Tech stack + Infrastructure (answers: Supabase? Hetzner? DB?)

### Do we need Supabase / a database? → **No, not for launch.**
This is a content + **client-side tools** site. There is nothing to store server-side:
- **Name generation** runs 100% in the browser (reuse your existing Unicode/name code) — instant, no server, no DB.
- **Favorites / recent** → `localStorage` (no backend).
- **No accounts, no user data, no CMS** needed for ranking or AdSense.

Adding a database now = extra cost + complexity + a moving part to secure, with **zero benefit to
ranking or revenue**. So: **park the Supabase project** (free tier costs nothing parked) and adopt
it later *only if* you add a real feature that needs it (synced accounts, user-submitted name
lists with view counts, cached availability). When that day comes, Supabase free tier or
Cloudflare D1 (SQLite at edge) are both fine and cheap.

### The only dynamic piece: availability checking
Checking "is this Roblox username taken?" calls an external endpoint (browser CORS blocks a direct
call), so it needs a **tiny stateless proxy — not a database**. Since we run a Node server anyway
(standalone, below), the proxy is just a **Next.js API route** in the same app (`/api/check`) — no
separate Cloudflare Worker needed. Cache results briefly; respect platform rate limits/ToS. Ship
the generator first; availability is a fast-follow.

### Hosting — reuse the existing VPS, mirror adoptme-web (lowest possible cost)

We already have a Hetzner VPS (`89.167.102.60`) hosting **three** Next.js sites this exact way, so
the new site is just **one more app on the same box → €0 extra**:

```
Client → Cloudflare → Nginx (443) → PM2/Node (new port) → Next.js standalone
```

- **Build mode:** Next.js **`output: 'standalone'`** (a self-contained Node server), **not** static
  export — this matches the sibling sites and lets the `/api/check` route run in-process. Pages are
  still statically generated (SSG/ISR) for speed; Cloudflare caches the HTML at the edge → fast in
  US/UK/AU/CA, green Core Web Vitals.
- **Process manager:** **PM2**, fork mode, single instance, `max_memory_restart: 512M`, on a **new
  port** (3000/3001/3004 are taken by the other sites — pick a free one, e.g. **3005**; verify with
  `pm2 list` on the server).
- **Reverse proxy:** an **Nginx** server block for the new domain → `127.0.0.1:<port>`, with
  non-www→www 301 (consolidates indexing), then **certbot** for SSL.
- **CDN:** **Cloudflare (free)** in front — SSL, global cache, DDoS.
- **Analytics:** Cloudflare Web Analytics (free, no perf hit) or GA4.

**Total extra backend cost ≈ €0** (shares the existing VPS).

### Deployment recipe (copy adoptme-web's, change 4 values)

adoptme-web deploys with **one command, `./deploy.sh`**, run locally (no CI/PaaS — removed because
it caused concurrent-deploy collisions). Replicate its three files, changing only **APP_NAME,
APP_DIR, PORT, domain**:

1. **`next.config.ts`** → set `output: 'standalone'` (+ copy its security headers, www-redirect,
   compress, `poweredByHeader: false`).
2. **`ecosystem.config.js`** → app name (e.g. `nicknamery`), `cwd:
   /var/www/<site>/.next/standalone`, `args: server.js`, `PORT: 3005`, log paths under
   `/var/log/<site>/`.
3. **`deploy.sh`** (thin wrapper) → `SERVER_HOST=89.167.102.60`, push to GitHub, scp
   `scripts/remote-deploy.sh`, run over SSH.
4. **`scripts/remote-deploy.sh`** → the zero-downtime logic: `flock` lock → `git pull` +
   `npm install` → detect PM2 state → **hot build** (build while old `server.js` keeps serving via
   a `standalone.old` inode swap) or **cold rebuild** → copy `.next/static` + `public` + `.env.local`
   into `.next/standalone/` → `pm2 restart` → health-check `localhost:<port>` (15×2s) → rollback
   from `standalone.old` on failure.

**First-time server setup** (once):
1. Add an Nginx block for the new domain (model it on `setup-nginx-triple.sh`) → its port; reload nginx.
2. `certbot --nginx -d <domain> -d www.<domain>`.
3. Point the domain's **A record at `89.167.102.60`** (proxied through Cloudflare).
4. `git clone` into `/var/www/<site>`, then `./deploy.sh` from local.

> Net effect: identical deploy ergonomics to your other sites (`./deploy.sh`, zero-downtime hot
> builds, PM2 + Nginx + Cloudflare), zero new infrastructure, €0 extra cost.

---

## 8. AdSense strategy (premium = ad-light, on purpose)

- **1–2 units max**: one in-content **after** the results (user got value first), optionally one
  in the footer/content area. **No** sticky/anchor/pop ads, **no** ads above the generator.
- Reserve fixed ad heights → **zero layout shift** (CLS stays green = protects ranking).
- This is also smart economically: a low-CPC, ad-block-prone audience punishes clutter with
  bounces; clean UX → more pages/longer sessions → *more* total impressions than an ad-stuffed page.

---

## 9. SEO & performance (non-negotiable for a new site)

- SSG every page; unique title/H1/meta/FAQ schema per page.
- **Core Web Vitals all green** (LCP < 2.5s, CLS ~0, INP low) — premium UX *is* the ranking moat here.
- Each page meets the content standard (unique intro, working tool, real examples, unique FAQ,
  internal links) — avoids Google "scaled content abuse."
- `sitemap.xml`, `robots.txt`, breadcrumb + FAQ structured data.

---

## 10. Build roadmap

| Phase | What | Outcome |
|---|---|---|
| **0 — Foundation (wk 1)** | Next.js + Tailwind + shadcn/ui; design system; **one** polished generator template (copy + favorites + dark mode) | The premium bar, proven on one page |
| **1 — Launch cluster (wk 2–4)** | Build ~15–25 validated pages, Roblox/Blox Fruits/Adopt Me first (your audience); deploy Hetzner + Cloudflare; AdSense; sitemap | Live, indexable, ad-earning |
| **2 — Differentiators (wk 4–6)** | Roblox **availability check** (Cloudflare Worker); symbol/font variants; polish motion | Beats rivals on "actually usable" |
| **3 — Broaden & climb RPM (2–3 mo+)** | More clusters; longer-dwell content; later high-CPC business-naming pages | Authority + higher revenue |

*Gate before Phase 1: complete `KEYWORD_VALIDATION.csv` (volume + difficulty + DR of top pages).*

---

## 11. Resolved decisions
1. ✅ **Next.js** (confirmed), **`output: 'standalone'`** + PM2 + Nginx + Cloudflare — identical to adoptme-web.
2. ✅ Availability check = **Next.js `/api/check` route** on the same standalone server (no separate Worker).
3. ✅ **Supabase parked** — no DB at launch; adopt only if a future feature needs it.
4. ✅ **Reuse the existing VPS** (`89.167.102.60`) as a new PM2 app on a free port (e.g. 3005) → €0 extra.

Remaining to confirm at build time: the exact free port (check `pm2 list` on the server) and the
final domain (recommended `nicknamery.com`).
