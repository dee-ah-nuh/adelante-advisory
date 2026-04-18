'use client';

import { theme as th } from '@/lib/theme';
import type { Content } from '@/content/en';

type Props = { c: Content; lang: 'en' | 'es'; setLang: (l: 'en' | 'es') => void };

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Nav({ c, lang, setLang }: Props) {
  const navItems = [
    { id: 'about', label: c.nav.about },
    { id: 'services', label: c.nav.services },
    { id: 'how', label: c.nav.how },
    { id: 'packages', label: c.nav.packages },
    { id: 'faq', label: c.nav.faq },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245, 241, 234, 0.92)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${th.border}`,
      padding: '16px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="26" height="26" viewBox="0 0 26 26">
          <circle cx="13" cy="13" r="12" fill="none" stroke={th.ink} strokeWidth="1.2" />
          <path d="M7 15 L13 8 L19 15" fill="none" stroke={th.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="13" cy="8" r="1.8" fill={th.accent} />
        </svg>
        <span style={{ fontFamily: th.fontDisplay, fontSize: 22, letterSpacing: -0.3 }}>Adelante</span>
        <span style={{ fontFamily: th.fontMono, fontSize: 10, color: th.muted, letterSpacing: 1.5, marginLeft: 2, marginTop: 4 }}>ADVISORY</span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {navItems.map(item => (
          <button key={item.id} onClick={() => scrollTo(item.id)} style={{
            background: 'transparent', border: 'none',
            fontSize: 13, color: th.ink, cursor: 'pointer',
            fontFamily: th.fontBody, fontWeight: 500,
          }}>{item.label}</button>
        ))}

        {/* Lang toggle */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 2,
          border: `1px solid ${th.border}`, padding: 2, borderRadius: 4,
          background: th.bg,
        }}>
          {(['en', 'es'] as const).map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              background: lang === l ? th.ink : 'transparent',
              color: lang === l ? th.bg : th.ink,
              border: 'none',
              padding: '4px 10px',
              fontSize: 11, letterSpacing: 1,
              fontFamily: th.fontMono, fontWeight: 500,
              cursor: 'pointer',
              borderRadius: 2,
              textTransform: 'uppercase',
            }}>{l}</button>
          ))}
        </div>

        <button onClick={() => scrollTo('booking')} style={{
          background: th.ink, color: th.bg, border: 'none',
          padding: '9px 18px', fontSize: 13, fontWeight: 500,
          borderRadius: th.radius, cursor: 'pointer',
          fontFamily: th.fontBody,
        }}>{c.nav.book} →</button>
      </div>
    </nav>
  );
}
