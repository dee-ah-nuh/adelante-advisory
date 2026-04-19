'use client';

import { theme as th } from '@/lib/theme';
import { CONTACT_EMAIL, CALENDLY } from '@/content/shared';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { Content } from '@/content/en';

type Props = { c: Content; lang: 'en' | 'es' };

export default function Packages({ c, lang }: Props) {
  const isMobile = useIsMobile();
  return (
    <section id="packages" style={{ padding: isMobile ? '64px 20px' : '120px 48px', background: th.bgAlt }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 40 : 64, maxWidth: 700 }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 20 }}>
            {c.packages.eyebrow}
          </div>
          <h2 style={{
            fontFamily: th.fontDisplay,
            fontSize: isMobile ? 40 : 64,
            lineHeight: 1.02, letterSpacing: -1.5, fontWeight: 400,
          }}>{c.packages.title}</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: 20,
        }}>
          {c.packages.items.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} lang={lang} cta={c.packages.cta} isMobile={isMobile} />
          ))}
        </div>

        <div style={{
          marginTop: 40, paddingTop: 32, borderTop: `1px solid ${th.border}`,
          display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap',
        }}>
          <span style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted }}>
            {lang === 'es' ? 'Contáctanos' : 'Reach us via'}
          </span>
          <ContactLink href={CALENDLY.paty} label="Calendly" />
          <ContactLink href={`mailto:${CONTACT_EMAIL}`} label={lang === 'es' ? 'Correo' : 'Email'} />
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg, lang, cta, isMobile }: {
  pkg: { name: string; sessions: string; tag: string; featured?: boolean; bullets: string[] };
  lang: 'en' | 'es'; cta: string; isMobile: boolean;
}) {
  const { featured } = pkg;
  return (
    <div style={{
      background: featured ? th.ink : th.cardBg,
      color: featured ? th.bg : th.ink,
      border: `1px solid ${featured ? th.ink : th.border}`,
      padding: '32px 28px', borderRadius: th.radius,
      display: 'flex', flexDirection: 'column',
      transform: (!isMobile && featured) ? 'translateY(-12px)' : 'none',
      boxShadow: featured ? '0 8px 32px rgba(31,43,35,0.15)' : 'none',
      position: 'relative',
    }}>
      {featured && (
        <div style={{
          position: 'absolute', top: -10, left: 24,
          background: th.accent, color: th.accentInk,
          padding: '3px 10px', fontSize: 10, letterSpacing: 1,
          fontFamily: th.fontMono, textTransform: 'uppercase', borderRadius: 2,
        }}>{lang === 'es' ? 'más popular' : 'most popular'}</div>
      )}
      <h3 style={{ fontFamily: th.fontDisplay, fontSize: 36, fontWeight: 400, letterSpacing: -0.8, marginBottom: 4 }}>{pkg.name}</h3>
      <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 1, color: featured ? 'rgba(255,255,255,0.6)' : th.muted, marginBottom: 4, textTransform: 'uppercase' }}>{pkg.sessions}</div>
      <div style={{ fontSize: 14, fontStyle: 'italic', fontFamily: th.fontDisplay, color: featured ? th.bg : th.accent, marginBottom: 24 }}>{pkg.tag}</div>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28, flex: 1 }}>
        {pkg.bullets.map((b, j) => (
          <li key={j} style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 10, paddingLeft: 16, position: 'relative', color: featured ? 'rgba(255,255,255,0.85)' : th.inkSoft }}>
            <span style={{ position: 'absolute', left: 0, color: th.accent }}>—</span>{b}
          </li>
        ))}
      </ul>
      <button
        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          background: featured ? th.accent : 'transparent',
          color: featured ? th.accentInk : th.ink,
          border: `1px solid ${featured ? th.accent : th.ink}`,
          padding: '11px 18px', fontSize: 13, fontWeight: 500,
          fontFamily: th.fontBody, borderRadius: th.radius, cursor: 'pointer',
        }}
      >{cta} →</button>
    </div>
  );
}

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 14, color: th.ink, fontWeight: 500,
      borderBottom: `1px solid ${th.border}`, paddingBottom: 2,
    }}>
      {label} <span style={{ color: th.accent }}>↗</span>
    </a>
  );
}
