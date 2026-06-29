# Project Handoff — New AdSense Site (Niche Research Phase)

> **Read this first.** It's written for an agent with **no prior conversation context**. It
> explains what this project is, what's been decided, where everything lives, how to run the
> tooling, and exactly what to do next.

---

## 1. TL;DR

The user runs an existing site (`stylishnames`, this repo) and wants to launch a **separate NEW
website** monetised with **Google AdSense**, targeting high-RPM English markets: **US, UK,
Australia, Canada**.

This `trends/` folder is **research only** — the new site has **not** been built and **no domain
has been purchased yet**. We are at the *decide-and-validate* stage.

**Current recommendation (pressure-tested by an external reviewer, rated 8.5/10):**
- Build **ONE** English site (not four country sites).
- Niche: **gaming / online-identity long-tail name & username generators** (Roblox, Blox Fruits
  crew names, Adopt Me pet names, Valorant, clan/guild, anime/aesthetic usernames).
- Domain (recommended, not bought): **`nicknamery.com`** (alt: `usernamery.com`).
- It's a **low-CPC volume play**, chosen because a zero-authority site can actually *rank* the
  long-tail — then climb to higher-RPM pages later.
- **Blocking gate before spending money:** validate ~30 keywords in Google Keyword Planner +
  Ahrefs/Semrush (see `KEYWORD_VALIDATION.csv`).

---

## 2. Status

| Item | State |
|---|---|
| Niche direction | ✅ Decided (gaming/online-identity long-tail) |
| One-vs-many sites | ✅ Decided (ONE site) |
| Domain | 🟡 Recommended `nicknamery.com`, **not purchased**, brand test optional |
| Keyword validation (volume/KD/DR/backlinks) | ❌ **Not done** — needs paid tools; this is the gate |
| New site repo / build | ❌ Not started |
| External review | ✅ 2 rounds done; direction validated, v3 = 8.5/10 |

---

## 3. File map (everything is in `trends/`)

| File | What it is |
|---|---|
| **`REPORT_FOR_REVIEW.md`** | **Canonical deliverable — v3.** The full recommendation, written to submit to the reviewer. Start here for the reasoning. |
| `NICHE_RESEARCH.md` | The original (v1) report + post-review correction section. Superseded by REPORT_FOR_REVIEW.md but kept for the audit trail. |
| `KEYWORD_VALIDATION.csv` | ~30 keywords to validate. Columns ending `_TBD` must be filled from Keyword Planner / Ahrefs. **This is the next action.** |
| `trends.py` | The Google Trends research tool (pytrends). See §4. |
| `.venv/` | Python virtualenv for the tool (gitignored). |
| `out/` | Raw CSV output from tool runs (gitignored): `rising_*.csv`, `top_*.csv`, `iot_*.csv` per country. |

Persistent memory (outside the repo, auto-loaded for the user's sessions): `new-site-niche.md`
and `adsense-approval.md`.

---

## 4. How to run the trends tool

```bash
# from repo root. The venv already has pytrends + pandas installed.
trends/.venv/bin/python trends/trends.py --geo US --timeframe "today 12-m"
trends/.venv/bin/python trends/trends.py --geo US --keywords "roblox username generator,clan name generator"
```
- Outputs 3 CSVs to `trends/out/`: `rising_queries.csv` (best for new-page ideas),
  `top_queries.csv`, `interest_over_time.csv`.
- `--geo` codes used: `US`, `GB` (UK), `AU`, `CA`. Empty = worldwide.

### ⚠️ Rate-limit gotcha (important)
Google Trends' unofficial endpoint returns **HTTP 429** if you burst requests. During research we
hit it after ~24 requests and the cooldown is **30–60 min**. Rules of thumb:
- Keep `SLEEP_BETWEEN` (top of `trends.py`) at 8s+; raise it if you see 429s.
- Don't run many geos back-to-back. Space them out.
- **If a run logs 429 / "No data returned", the old `out/*.csv` are stale** — don't trust them;
  wait and rerun.
- Known gap from the original sweep: **Canada is missing `cute fonts` + `attitude name`** (one
  batch 429'd), and a fully-normalised **5-way cross-niche head-to-head was never captured**
  (both attempts 429'd). Neither changes the recommendation, but rerun them if you want clean data.

---

## 5. Decision log (why we landed here)

1. **Started broad** — pulled rising/top queries for the existing niche across worldwide + US.
   Finding: "stylish name / fancy text" is an **India/SEA** term with **~0 volume in US/UK/AU/CA**.
   Do not carry it into the new site.
2. **Confirmed market** — US/UK/AU/CA keyword-interest profiles correlate **0.93–0.99** ⇒ one
   English market ⇒ **one site**, not four.
3. **Reframed the objective (key turn)** — for a *new, zero-authority* domain,
   `rank-probability` dominates `volume × RPM`. A high-RPM niche that can't rank earns $0. So
   **rankability is the #1 filter.**
4. **RPM correction** — gaming/identity is **low-CPC** (not high-RPM as first implied). It's a
   *volume* play; high-RPM business-naming pages are a *Phase 3* move after authority builds.
5. **Reviewer round 2 (8.5/10)** accepted the direction; we then: softened "only one niche
   passes," made domain choice an explicit judgement call, added an **anti-thin-content standard**
   (Google scaled-content-abuse risk → ~15–25 genuinely unique pages, not hundreds of templates),
   and noted the user's **existing Blox Fruits / Adopt Me audience + tooling** as a major
   execution-risk reducer.

---

## 6. Next actions (in order)

1. **[BLOCKING] Validate keywords** — fill `KEYWORD_VALIDATION.csv` `_TBD` columns using Google
   Keyword Planner (absolute volume) + Ahrefs/Semrush (Keyword Difficulty, and **DR + referring
   domains of the pages currently ranking** for each term). Goal: confirm real volume AND that top
   pages are thin/low-DR = beatable by a new site. **The user must provide this data or tool
   access — an agent cannot get DR/backlinks/absolute volume from free sources; do not fabricate
   it.**
2. **Finalise domain** — once validation is favourable, reconfirm `nicknamery.com` at a registrar
   (whois-available ≠ purchased) and optionally run the 5-second brand-recall test.
3. **Scaffold the new site** — likely Next.js (matches this repo's stack). Lead pillar = Roblox
   cluster (existing-audience advantage). Each page must meet the content standard in
   `REPORT_FOR_REVIEW.md` §5.
4. **Phased growth** — Phase 1 rank long-tail; Phase 2 broaden (longer-dwell content); Phase 3 add
   high-CPC business/brand-name generator pages.

---

## 7. Hard constraints / do-not-do

- **Don't fabricate SEO metrics.** Volume, Keyword Difficulty, DR, backlinks, CPC require paid
  tools. Trends gives only *relative* interest. Mark anything unverified as TBD.
- **Don't reuse the "stylish name / fancy text" framing** for the new site (dead in the West).
- **Don't mass-produce templated pages** (Google penalises scaled thin content). Quality density
  over page count.
- **Don't put a platform trademark in the domain** (e.g. avoid "discord"/"roblox" in the domain).
- **Don't burst Google Trends requests** (429). Respect the cooldown.
- The new site is **separate** from this repo's existing pages — don't modify the live
  stylishnames site as part of this work unless asked.
