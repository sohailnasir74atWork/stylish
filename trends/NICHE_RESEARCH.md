# New Site — Niche, Volume & Competition Research

**Goal:** Pick ONE niche + ONE domain for a new site targeting high-RPM English markets
(US, UK, Australia, Canada), weighing **search volume × competition difficulty × ad value**.

**Method:** Google Trends via pytrends (relative interest, US/UK/AU/CA, 12 months) for the
volume signal; live SERP recon (who actually ranks) for the difficulty signal; whois for
domain availability.

> ⚠️ **Data honesty:** Google Trends gives *relative* interest (0–100), **not** absolute
> search volume. A perfectly-normalized 5-way head-to-head was blocked by Google rate-limiting
> (HTTP 429), so cross-niche volume below is read from within-batch rankings + cross-country
> comparisons (both valid). Confirm the final pick's absolute volume in Google Keyword Planner /
> Ahrefs before heavy investment.

---

## 1. Are the 4 high-RPM markets the same audience? → YES

Pearson correlation of the keyword-interest profiles across countries:

|      | US    | GB    | AU    | CA    |
|------|-------|-------|-------|-------|
| US   | 1.000 | 0.974 | 0.929 | 0.994 |
| GB   | 0.974 | 1.000 | 0.984 | 0.997 |
| AU   | 0.929 | 0.984 | 1.000 | 0.994 |
| CA   | 0.994 | 0.997 | 0.994 | 1.000 |

**0.93–0.99 correlation = effectively one English-speaking market.** They search the same terms
in the same proportions.

### ➡️ Answer: build ONE website, not four.
- One English `.com` ranks in all four countries automatically — Google geo-serves it.
- Four near-identical sites = **duplicate content**, split domain authority, 4× the work, and
  risk of Google doorway/duplicate penalties.
- Per-country sites only make sense when you **translate to different languages** (e.g. Spanish,
  German) — not for 4 countries that all speak English.

---

## 2. Volume signal (relative interest, high-RPM countries, 12mo)

Top tier sits far above everything else (within-batch valid rankings):

| Term | US | GB | AU | CA | Notes |
|------|----|----|----|----|-------|
| name generator (broad) | 89 | 83 | 83 | 89 | highest, but very broad |
| cute fonts | 83 | 62 | 44 | – | high in US, **fades in AU** |
| discord name | 73 | 75 | 74 | 71 | high **and rock-stable everywhere** |
| free fire name | 23 | 13 | 2 | 12 | India/SEA term, weak in West |
| cool fonts | 6 | 5 | 6 | 6 | low |
| fancy text generator | 3 | 3 | 2 | 3 | low in West |
| stylish name | 2 | 2 | 0 | 1 | **India term — dead in the West** |
| nickname generator (exact) | 1 | 1 | 1 | 1 | low as an *exact* phrase |

**Key takeaways**
- "Stylish name / fancy text" (your current site's framing) is an **India/SEA** play — almost
  zero volume in high-RPM countries.
- The Western top tier is **name generator, cute fonts, discord names**.
- `discord name` is the only top-tier term that's both high AND stable across all four countries.

---

## 3. Competition / difficulty (live SERP recon)

| Niche | Who ranks | Difficulty |
|-------|-----------|------------|
| **name generator** (broad) | fantasynamegenerators.com (1,400+ generators), SpinXO, name-generator.org.uk | 🔴 HARD — entrenched authority |
| **fantasy name generator** | fantasynamegenerators.com fortress + Reedsy, Donjon, ProWritingAid | 🔴 HARD — one giant owns it |
| **cute fonts / copy-paste fonts** | Dozens of exact-match-domain clones: fontgen.cool, cutefontscopyandpaste.com, fontgenerator.cc, lingojam, cutefonts.net… | 🟠 SATURATED — low barrier but race-to-the-bottom, hard to differentiate |
| **discord names / usernames / fonts** | SpinXO, nickfinder, Glyphy, Rybbit, NicheProwler, Mighty Networks — **many small AI-generator sites, no single fortress** | 🟡 MODERATE — fragmented, beatable |
| **themed nickname generators** (Wu-Tang, jersey shore, fantasy, MMA) | Mixed; under-served sub-pages | 🟡 MODERATE — clear gaps |

---

## 4. Decision matrix

| Niche | Volume | Competition | Cross-country stable | RPM (gaming/US skew) | Verdict |
|-------|:------:|:-----------:|:-------------------:|:--------------------:|---------|
| name generator (broad) | ★★★ | 🔴 | ✓ | ★★ | Too hard for a new site |
| cute fonts | ★★★ | 🟠 saturated | ✗ (US-skewed) | ★★ | Crowded, low moat |
| fantasy name generator | ★★ | 🔴 | – | ★★ | One giant owns it |
| **discord names/usernames/fonts** | ★★★ | 🟡 | ✓✓ | ★★★ | **★ Best risk-adjusted** |
| nickname generator (exact) | ★ | 🟡 | ✓ | ★★ | Volume too low alone |
| stylish name / fancy text | ✗ (West) | – | – | – | Wrong market (India) |

---

## 5. THE SINGLE WIN

### Niche: **Discord-led names + usernames + fonts**, expanding to gaming names, themed nickname generators, and cute/aesthetic fonts.
Highest *stable* volume across all four high-RPM countries and the **most beatable** (fragmented)
competition of any top-tier niche.

> ⚠️ **RPM correction (post-review):** This is a **high-traffic, LOW earnings-per-visitor** play.
> Gaming/username/identity is one of the *lowest-CPC* AdSense verticals (~$0.05–0.30/click),
> far below finance/insurance/legal/SaaS. The US/UK/AU/CA *geography* still pays multiples of
> India/SEA **for the same niche**, so the country logic holds — but you win here on **volume**,
> not value-per-click. Do not treat this as a "high-RPM niche." See §7.

### Domain: **nicknamery.com** ✅ (whois-available)
- Brandable, short, memorable ("-ery" like eatery/bakery).
- Maps cleanly to nickname / username content (Discord usernames, gaming nicknames).
- **Avoids "discord" in the domain** — using a trademark in the domain is a legal risk. SpinXO
  ranks #1 for "discord names" with a brand name too; you don't need the keyword in the domain.

**Verified-available alternates** (all `.com`):
`coolnamelab.com`, `coolnamery.com`, `usernamery.com`, `nicknameforge.com`,
`nicknamewizard.com`, `cutefontsly.com` (only if you go the fonts route).

### Content pillars (build order)
1. **Discord** — "discord name ideas", "discord username generator", "aesthetic discord names", "discord fonts" (lead pillar: best volume × beatable).
2. **Gaming names** — Free Fire / PUBG / Valorant name styles & symbols (you already have assets).
3. **Themed nickname generators** — fantasy, Wu-Tang, MMA, "based on your name" (under-served US gaps).
4. **Cute / aesthetic fonts** — secondary traffic catch (high volume but defensive only).

---

## 6. Caveats before you commit
- Trends = relative, not absolute. **Validate the top 3 keywords' real volume** in Google Keyword
  Planner / Ahrefs.
- Confirm `nicknamery.com` at the registrar (Namecheap / Cloudflare) — whois "available" is a
  strong signal, not a guarantee.
- The 5-way normalized head-to-head was blocked by Google rate-limiting; rerun
  `trends/trends.py --keywords "..."` later (one batch, after a cooldown) if you want the exact
  cross-niche ranking. It will refine, not overturn, this recommendation.

---

## 7. Post-review corrections (accepted)

An independent review raised fair points. Accepted:

1. **RPM was overstated (biggest fix).** "High-RPM *country*" ≠ "high-RPM *niche*." Gaming/username/
   identity is a **low-CPC** topic — among the lowest AdSense verticals. This niche wins on
   **traffic volume**, not earnings-per-visitor. If max revenue-per-visitor is the goal, a
   higher-CPC vertical would beat it (but is harder to rank and outside the current asset base).
2. **Competition ratings are preliminary, not measured.** 🟡/🟠/🔴 come from SERP inspection
   (who ranks), not Domain Rating / referring domains / traffic. Real keyword difficulty needs
   Ahrefs/Semrush. Treat as directional.
3. **Head terms are more contested than "moderate."** SpinXO and Nickfinder are established. The
   opening is the **long-tail / themed sub-pages**, not the head keyword "nickname generator."
4. **Volume is relative — validate in Keyword Planner** (already noted in §0).

**Revised confidence:** market selection 8/10 · volume validation 5/10 · competition 5/10
(preliminary) · RPM realism now corrected. This is a **directional strategy**, not a validated
market analysis.

**Endorsed refinement — build a long-tail game/identity ecosystem** instead of betting on one head
keyword: Roblox username generator, Blox Fruits crew name, Valorant name, clan name, guild name,
anime username, aesthetic username, TikTok username generator. Many low-difficulty long-tail pages.
Same low-RPM caveat applies.

**Hard gate before buying a domain:** validate the top 3–5 keywords' volume in Keyword Planner +
do a backlink/DR check on the current top-ranking pages.
