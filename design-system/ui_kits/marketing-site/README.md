# Marketing site — Adelante Advisory UI kit

Pixel-faithful HTML/JSX recreation of the single-page marketing site at `adelante-advisory.vercel.app`. Components are derived from `source/components/` and translated from Next.js/TypeScript inline-styles into Babel JSX with CSS vars from `../../colors_and_type.css`.

## Files

- `index.html` — interactive click-through of the full page with EN/ES toggle, smooth scroll nav, FAQ accordion, and booking card buttons. Advisor photos are tinted placeholders with initials (real photos aren't in the public repo).
- `Nav.jsx` — sticky translucent nav + EN/ES toggle + primary CTA
- `Hero.jsx` — display headline + sub + primary CTA + advisor photo pair + trust bar
- `Problem.jsx` — 2-col editorial band on `bg-alt` ending in an italic pull line
- `Services.jsx` — 3-col numbered service grid with hover fill
- `About.jsx` — full-bleed `ink` section with two founder cards
- `HowItWorks.jsx` — 4 steps on 2px ink rules with inline arrows
- `Packages.jsx` — 4 package cards with one featured (dark, lifted, shadow)
- `Booking.jsx` — 2 advisor cards with avatar bubble + specialty + terracotta CTA
- `FAQ.jsx` — editorial accordion with + / − capsule toggle
- `Footer.jsx` — brand wordmark + italic tagline + contact + social links
- `content.jsx` — EN + ES + shared data (advisors, companies, calendly links) ported from `source/content/`

## Coverage

All 9 sections of the production page are represented. Component boundaries mirror the original Next.js file structure. Interaction scope is cosmetic — the Calendly CTA opens the real Calendly URL in a new tab; there is no booking backend.
