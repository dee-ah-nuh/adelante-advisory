> **Drop-in design system for the Adelante Advisory repo.**
> Copy this whole folder into your repo (e.g. `design-system/` at the root, or `docs/design-system/`) and commit.
> The CSS tokens in `colors_and_type.css` match the production values in `lib/theme.ts` and `styles/globals.css`.
> Open `preview/*.html` or `ui_kits/marketing-site/index.html` in a browser to view — no build step needed.

---

# Adelante Advisory — Design System

> Career strategy for Latin Americans in the US.
> A design system for a bilingual career-coaching brand built by two salvadoreñas.

---

## What this is

**Adelante Advisory** is a career coaching platform for Latin American students and young professionals navigating US corporate life. Founded by **Paty Vega** (Product Marketing Manager, S&P Global · New York) and **Diana Valladares** (Senior Consultant, Data Engineering & Architecture, AArete · Chicago) — both salvadoreñas and American School alumnae, each seven years into their US corporate careers.

The product is a **fully bilingual (EN/ES) marketing website** built in Next.js 16 that walks a visitor from *"the problem"* → *what they offer* → *who they are* → *how it works* → *packages* → *booking a free Calendly call*. All coaching is 1:1 over Zoom; payments live outside the site today (Stripe is on the roadmap).

The brand direction is **"Editorial Warmth"** — it should feel like a letter from a mentor, not a corporate pitch. Magazine meets career guide. Big italic serif headlines, warm off-white paper, terracotta accents, generous white space, small-caps mono eyebrows. No gradients, no emoji, no stock illustration.

### Products represented

1. **Marketing website** (`ui_kits/marketing-site/`) — the single public surface today. Everything in this system is derived from it.

### Sources

- **GitHub** — `github.com/dee-ah-nuh/adelante-advisory` (imported into `source/`)
- **Live site** — adelante-advisory.vercel.app
- **Stack** — Next.js 16, React 19, TypeScript, pure inline-style components (no Tailwind, no CSS-in-JS library). All tokens live in `source/theme.ts`; all copy in `source/content/{en,es,shared}.ts`.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file. Brand fundamentals + index. |
| `SKILL.md` | Agent-skill front-matter. Read first when using this as a skill. |
| `colors_and_type.css` | Design tokens: colors, type scale, spacing, radii, shadows, motion. |
| `assets/` | Logos (mark + wordmark, light/dark), page icon, advisor placeholder tints. |
| `fonts/` | (empty — all fonts loaded from Google Fonts CDN; see **Fonts** below) |
| `preview/` | Design-system cards rendered in the Design System tab. |
| `ui_kits/marketing-site/` | Pixel-faithful recreation of the marketing site + JSX components. |
| `source/` | Raw import from the Next.js repo — read-only reference (components, content/en + es, theme.ts). |

### UI kits available

- **marketing-site** — `ui_kits/marketing-site/index.html` — full click-through EN/ES recreation with Nav, Hero, Problem, Services, About, HowItWorks, Packages, Booking, FAQ, Footer.

---

## CONTENT FUNDAMENTALS

### Tone

Warm, personal, editorial. The voice of a slightly-older cousin who already figured it out — honest, specific, no hedging. Never "leverage synergy" corporate. Never influencer-y. The copy itself is the design.

### Person & address

- **"We"** — the co-founders, always together as a pair. ("We've been there." "We built Adelante so you don't have to guess.")
- **"You"** — the reader, singular, direct. ("You shouldn't have to figure this out alone.")
- Never "I" alone; never "our users" or "our clients" as distancing terms — the reader is *you*.

### Spanish ↔ English parity

Both languages are **first-class**, not a translation afterthought. Spanish copy uses the feminine *salvadoreñas / sola / nosotras* because both founders are women and much of the audience skews the same. Code-switching is part of the brand — phrases like *"Made with cariño in New York & Chicago"* appear in the English footer. Spanish copy keeps English terms that don't translate cleanly (*résumé*, *networking*, *coffee chats*, *LinkedIn*, *manager*, *first-gen*).

### Casing

- **Sentence case everywhere** for headlines, buttons, and body. ("Book a free call", not "Book A Free Call".)
- **UPPERCASE + letter-spaced** only for mono eyebrows and tiny metadata labels ("THE PROBLEM", "WHAT WE DO", "CONTACT"). These are the one exception.
- Proper nouns keep their native casing (S&P Global, AArete, LinkedIn, H1B, OPT).

### Specificity

Copy names things. Instead of *"we help with your career"* → *"Résumé review & rewrite — we'll rewrite yours to sound like a US hiring manager wrote it — without losing your story."* Instead of *"networking support"* → *"Cold outreach, coffee chats, informational interviews. How to do it without feeling weird."*

Numbers are exact and human. "15-min call." "7 services." "3 sessions / 6 sessions / 12 sessions / 20 sessions." "Seven years in."

### Sentence rhythm

- Short punches next to long sentences. ("We've been there. And we built Adelante so you don't have to guess.")
- Em-dashes are the house punctuation — used liberally, like this, to add a beat.
- Lists of three are a recurring device. ("Behavioral, technical, case." "Cold outreach, coffee chats, informational interviews.")
- Italic serif is used for a final soft line after a harder paragraph — the "pull-quote" voice.

### Vibe examples

- *"No pitch. Just a conversation."* (CTA sub)
- *"Yes, you can negotiate. No, you won't lose the offer. Here's exactly how."* (Service description)
- *"Made with cariño in New York & Chicago"* (Footer)
- *"Sí, claro. Sessions, feedback, résumé reviews — whatever language you think in best."* (FAQ)
- *"The interview, the offer, the promotion. Adelante."* (Step 4 of how-it-works)

### What the brand does NOT do

- No emoji. Anywhere.
- No exclamation points (with extremely rare exceptions like "Sí, claro.").
- No "unlock", "empower", "journey", "elevate", "transform", "synergy", "game-changer".
- No gendered-masculine defaults in Spanish — always *sola / nosotras / salvadoreñas*.
- No corporate "Schedule a consultation" — it's *"Book a free 15-min call. No pitch. Just a conversation."*

---

## VISUAL FOUNDATIONS

### Palette

Warm, earthy, low-saturation — think Kinfolk / MatchesFashion / Aesop editorial.

| Role | Hex | Where it shows up |
|---|---|---|
| `--bg` | `#F5F1EA` | Page background. Warm off-white paper. |
| `--bg-alt` | `#ECE5D8` | Banded sections (Problem, Packages, FAQ). Slightly deeper paper. |
| `--card-bg` | `#FCF8F1` | Cards on `--bg`. |
| `--ink` | `#1F2B23` | All text. **Deep forest green — never pure black.** Also full-bleed on About + Footer. |
| `--ink-soft` | `#3D4A40` | Secondary body copy. |
| `--muted` | `#7A7568` | Eyebrow mono, meta. |
| `--accent` | `#C45A3B` | Terracotta. Used surgically: hero accent word, CTAs, list-dashes, badge fills, underline hovers, step numbers. |
| `--accent-ink` | `#FCF8F1` | Foreground on accent. |
| `--border` | `rgba(31,43,35,0.15)` | Hairline everywhere. |

**Advisor tints** (personal color for each founder — used in photo frames, avatar bubbles, never on page chrome):

- Paty: `#E8D4C4` light / `#8B4A2F` dark (warm terracotta family)
- Diana: `#D6DFD4` light / `#3F5A4C` dark (cool sage family)

### Type

Three families, each with one job.

- **Instrument Serif** — display & italic. All headlines, founder names, package names, decorative pull lines, a small *"simple-sub"* italic voice that speaks softly under a big title. Weight 400 only. Italic is used structurally, not just for emphasis.
- **Inter Tight** — body, buttons, links, UI. Weights 400 / 500 / 600.
- **JetBrains Mono** — eyebrows, metadata, dates/indices (01 / 02 / 03), lang toggle (EN / ES), "MOST POPULAR" badges. Only uppercase + letter-spaced.

The hero treatment — two lines of regular + one line of italic + one word in terracotta — is the brand's single most distinctive type move.

### Spacing & layout

- Max container width: **1280px** (narrow: **960px** for FAQ + Booking).
- Page gutter: **48px**.
- Section vertical padding: **120px top/bottom** on desktop. Hero breaks this rule (96px top / 72px bottom) because the massive headline supplies its own breathing room.
- Generous, asymmetric grid columns are the norm: `1.4fr 1fr` (hero), `1fr 1.2fr` (problem), `1fr 1.4fr` (about). Never 50/50 — the reading column always wins.

### Backgrounds

- **No gradients. Ever.** The brand is paper, not a sunset.
- **No repeating patterns, no textures, no grain.**
- Full-bleed sections (About, Footer) use solid `--ink`. Banded sections (Problem, Packages, FAQ) use solid `--bg-alt`. That's the whole vocabulary.
- Imagery is grounded, not floating — advisor photos sit in colored tint panels with a 12px padding and a subtle shadow, slightly rotated (±1.5°) to feel like snapshots pinned to paper.

### Animation & motion

- Extremely restrained. **No bounces, no springs, no scroll-jacking, no parallax.**
- The only animations: FAQ accordion open/close (simple height + opacity), hover background-color transitions on service cards, language-toggle state swap. Duration `0.2s`, easing `cubic-bezier(0.4, 0, 0.2, 1)` (material standard).
- Smooth scroll is enabled at the document level for anchor nav.

### Hover states

- **Service cards** — background fills from transparent → `--bg-alt` on hover. No scale, no shadow.
- **Buttons (primary / terracotta)** — no explicit hover today; opacity `0.92` is the recommended addition.
- **Buttons (ink)** — same; recommend `opacity: 0.9`.
- **Links** — inherit color, underlined with a 1px `--border` rule that's always visible; hover deepens to full `--ink`.
- **FAQ question rows** — the `+` capsule swaps to terracotta when open.

### Press states

- No shrink / no scale. Opacity dip (`0.85`) is acceptable on primary buttons.

### Borders & rules

- **1px hairline, `rgba(31,43,35,0.15)`** — the default everywhere.
- **2px solid `--ink`** — used once, intentionally: the top rule on each "how it works" step column, to echo editorial journal column rules.
- **Rule-with-eyebrow pattern**: a 32×1px accent rule sits inline-left of the hero eyebrow mono text.

### Shadows

Two only.

- **Photo shadow** — `0 2px 12px rgba(31,43,35,0.08)`. On advisor photo frames.
- **Card shadow** — `0 8px 32px rgba(31,43,35,0.15)`. **Only on the "featured" package card.** Every other card uses a hairline border, no shadow. Elevation is a signal, not a decoration.

### Transparency & blur

Used in exactly one place: the sticky nav. Background is `rgba(245,241,234,0.92)` + `backdrop-filter: blur(10px)`. Keeps the warm paper feel even when body content scrolls behind it.

### Corner radii

- Almost everything uses `radius-sm` = **4px**. Buttons, cards, inputs, the lang toggle.
- Avatar circles / FAQ toggle capsule use `border-radius: 50%`.
- The "MOST POPULAR" badge uses `radius-xs` = **2px** (tighter = more label-like).
- **No pill buttons, no 12/16px soft cards.** Sharp corners read editorial; aggressive rounding reads SaaS.

### Card anatomy

Three card types live in the product:

1. **Package card** — `--card-bg` fill, 1px border, 32×28 padding, no shadow. **Featured** variant flips to `--ink` fill, `--on-ink` text, gets `translateY(-12px)` lift + card shadow + a terracotta "MOST POPULAR" pin in the top-left.
2. **Founder card** (on dark section) — `rgba(255,255,255,0.04)` fill, `on-ink-border`, 32×32×28 padding. Photo panel inside is advisor-tinted, 320px tall.
3. **Booking card** — `--card-bg`, hairline border, circular initials avatar in advisor tint, bordered specialty row, full-width terracotta CTA.

### Imagery direction

Warm, daylight, documentary. No studio gloss. Advisor photos are full-bleed within a colored paper panel (slight negative-space padding so the tint shows). Skin tones are preserved — no heavy desaturation. Each founder has a dedicated tint assigned (Paty warm, Diana cool) so you can tell who's who before reading.

### Layout rules (fixed elements)

- **Sticky nav** — the only fixed element. Translucent, blurred, 1px bottom border.
- **No floating chat widget, no scroll-to-top button, no sticky CTA.** Booking lives in a dedicated section and everyone scrolls there — intentionally.

---

## ICONOGRAPHY

**Philosophy: almost no icons at all.** The brand communicates through typography, not pictographs. This is a load-bearing decision — it's what makes the design feel editorial instead of app-like.

### What's actually in the product

- **Logo mark** — the only bespoke SVG icon: a circle + a small roofline chevron (terracotta) + a dot at the peak. Used in nav (26×26) and footer (26×26). `assets/logo-mark.svg` (dark-ink version) and `assets/logo-mark-light.svg` (for dark sections).
- **Directional arrows** — plain Unicode character `→` appended to every CTA label ("Book a free 15-min call →", "Inquire about pricing →"). Never a custom SVG arrow.
- **External-link arrow** — Unicode `↗`, always in `--accent`, on LinkedIn / Calendly / social links.
- **Step-flow arrow** — one hand-drawn inline SVG: a thin 1.2px muted line with a chevron head, sitting between step numbers in the "how it works" grid.
- **FAQ toggle** — literal text characters `+` and `−` inside a 32px circular capsule. Not an icon — a typographic symbol.

### What the brand does NOT use

- **No emoji.** Zero. Not in UI, not in copy, not in meta.
- **No icon font** (Feather / Lucide / Heroicons / etc.). The Next.js codebase doesn't import one and we shouldn't add one.
- **No service-card icons.** Services are numbered `01 – 07` in mono, full stop. Resist every temptation to draw little pictographs.
- **No image illustrations, no spot art, no background imagery.**

### Substitutions for agents

If you *must* add an icon (e.g. a new surface we haven't designed yet), pull from **Lucide** (`https://unpkg.com/lucide-static@latest`) — thin 1.5px stroke, square end-caps, minimal. Flag the addition in a comment; every new icon is a brand decision.

---

## Fonts

All three families load from **Google Fonts** at runtime — no local `.ttf`/`.woff2` files ship with the system. Single import line in `colors_and_type.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
```

No substitution needed — all three are real, well-supported Google Fonts and match the production site exactly.

---

## Advisor imagery — a caveat

The production repo references `/assets/paty.png`, `/assets/paty-square.png`, `/assets/diana.jpeg`, `/assets/diana-square.png` — but these photos are **not checked into the public GitHub repo** (they're stored in the Vercel deployment's `public/` folder which wasn't committed). This design system ships **tinted paper placeholder panels** with initials for each advisor. When the real photos are available, drop them into `assets/paty.jpg` + `assets/diana.jpg` and wire them through `ui_kits/marketing-site/Hero.jsx`.
