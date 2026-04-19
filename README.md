# Adelante Advisory

> Career strategy for Latin Americans in the US — *Estrategia de carrera para latinos en EE.UU.*

Built by **Paty Vega** (New York) and **Diana Valladares** (Chicago) — two salvadoreñas helping students and young professionals from Latin America navigate US corporate life with clarity.

**Live site:** [adelante-advisory.vercel.app](https://adelante-advisory.vercel.app)
**Domain (pending):** adelanteadvisory.com

---

## Founders

| | |
|---|---|
| ![Paty Vega](public/assets/paty-square.png) | ![Diana Valladares](public/assets/diana-square.png) |
| **Paty Vega** · New York | **Diana Valladares** · Chicago |
| Product Marketing Manager, S&P Global | Senior Consultant, Data & Architecture, AArete |
| Marketing · Finance · Storytelling | Consulting · Data · AI · Technical interviews |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Inline styles with theme tokens (`lib/theme.ts`) |
| Fonts | Instrument Serif · Inter Tight · JetBrains Mono |
| Scheduling | Calendly embed |
| Hosting | Vercel |
| Auth/DB (Phase 2) | Supabase |
| Payments (Phase 2) | Stripe |

---

## Project Structure

```
adelante-advisory/
├── app/
│   ├── layout.tsx          # Metadata, viewport, global styles
│   ├── page.tsx            # Main page — assembles all sections
│   ├── globals.css         # CSS reset + Google Fonts
│   └── icon.svg            # Favicon
├── components/
│   ├── Nav.tsx             # Sticky nav with EN/ES toggle
│   ├── Hero.tsx            # Hero + trust bar
│   ├── Problem.tsx         # Problem statement
│   ├── Services.tsx        # 7-service grid
│   ├── About.tsx           # Founder cards (dark section)
│   ├── HowItWorks.tsx      # 4-step process
│   ├── Packages.tsx        # Pricing packages + contact links
│   ├── Booking.tsx         # Calendly booking cards
│   ├── FAQ.tsx             # Accordion FAQ
│   └── Footer.tsx          # Footer with links
├── content/
│   ├── en.ts               # All English copy
│   ├── es.ts               # All Spanish copy
│   └── shared.ts           # Advisors, Calendly links, email
├── lib/
│   └── theme.ts            # Design tokens (colors, fonts, radius)
├── public/
│   └── assets/             # Advisor photos
└── design-system/          # Brand assets and component previews
    ├── assets/             # Logo SVGs
    └── preview/            # HTML previews of all UI components
```

---

## Design Tokens

```ts
bg:       '#F5F1EA'  // Warm off-white
bgAlt:    '#ECE5D8'  // Slightly darker off-white
ink:      '#1F2B23'  // Deep forest green
accent:   '#C45A3B'  // Terracotta
muted:    '#7A7568'  // Warm grey

fontDisplay: 'Instrument Serif'   // Headlines
fontBody:    'Inter Tight'        // Body text
fontMono:    'JetBrains Mono'     // Labels, eyebrows
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Updating Content

All copy lives in `content/` — no need to touch components.

| File | What to edit |
|---|---|
| `content/en.ts` | English copy for all sections |
| `content/es.ts` | Spanish copy for all sections |
| `content/shared.ts` | Calendly links, contact email, advisor data |

---

## Deploying

Push to `main` — Vercel auto-deploys on every commit.

```bash
git add .
git commit -m "your message"
git push
```

---

## Roadmap

- [ ] Buy domain `adelanteadvisory.com` (Namecheap ~$12/yr)
- [ ] Connect domain to Vercel
- [ ] Set up Google Voice number for WhatsApp
- [ ] Supabase auth — user accounts + appointment history
- [ ] Stripe payments — package checkout
- [ ] Mobile responsive polish

---

*Made with cariño in New York & Chicago.*
