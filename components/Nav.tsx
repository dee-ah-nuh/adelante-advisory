'use client';

import { useState } from 'react';
import { theme as th } from '@/lib/theme';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { Content } from '@/content/en';

type Props = { c: Content; lang: 'en' | 'es'; setLang: (l: 'en' | 'es') => void };

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Nav({ c, lang, setLang }: Props) {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: c.nav.about },
    { id: 'services', label: c.nav.services },
    { id: 'how', label: c.nav.how },
    { id: 'packages', label: c.nav.packages },
    { id: 'faq', label: c.nav.faq },
  ];

  const handleNav = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(245, 241, 234, 0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${th.border}`,
        padding: isMobile ? '14px 20px' : '16px 48px',
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
          {!isMobile && <span style={{ fontFamily: th.fontMono, fontSize: 10, color: th.muted, letterSpacing: 1.5, marginLeft: 2, marginTop: 4 }}>ADVISORY</span>}
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} style={{
                background: 'transparent', border: 'none',
                fontSize: 13, color: th.ink, cursor: 'pointer',
                fontFamily: th.fontBody, fontWeight: 500,
              }}>{item.label}</button>
            ))}
            <LangToggle lang={lang} setLang={setLang} />
            <button onClick={() => scrollTo('booking')} style={{
              background: th.ink, color: th.bg, border: 'none',
              padding: '9px 18px', fontSize: 13, fontWeight: 500,
              borderRadius: th.radius, cursor: 'pointer', fontFamily: th.fontBody,
            }}>{c.nav.book} →</button>
          </div>
        )}

        {/* Mobile right side */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LangToggle lang={lang} setLang={setLang} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {menuOpen ? (
                  <>
                    <path d="M5 5 L17 17" stroke={th.ink} strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M17 5 L5 17" stroke={th.ink} strokeWidth="1.8" strokeLinecap="round"/>
                  </>
                ) : (
                  <>
                    <path d="M3 6 L19 6" stroke={th.ink} strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M3 11 L19 11" stroke={th.ink} strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M3 16 L19 16" stroke={th.ink} strokeWidth="1.8" strokeLinecap="round"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        )}
      </nav>

      {/* Mobile menu drawer */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 57, left: 0, right: 0, bottom: 0,
          background: th.bg, zIndex: 49,
          display: 'flex', flexDirection: 'column',
          padding: '32px 24px',
          borderTop: `1px solid ${th.border}`,
        }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => handleNav(item.id)} style={{
              background: 'transparent', border: 'none',
              textAlign: 'left', padding: '18px 0',
              borderBottom: `1px solid ${th.border}`,
              fontFamily: th.fontDisplay, fontSize: 28,
              color: th.ink, cursor: 'pointer',
              letterSpacing: -0.5, fontWeight: 400,
            }}>{item.label}</button>
          ))}
          <button onClick={() => { scrollTo('booking'); setMenuOpen(false); }} style={{
            marginTop: 32, background: th.accent, color: th.accentInk, border: 'none',
            padding: '16px 24px', fontSize: 15, fontWeight: 500,
            borderRadius: th.radius, cursor: 'pointer', fontFamily: th.fontBody,
          }}>{c.nav.book} →</button>
        </div>
      )}
    </>
  );
}

function LangToggle({ lang, setLang }: { lang: 'en' | 'es'; setLang: (l: 'en' | 'es') => void }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 2,
      border: `1px solid ${th.border}`, padding: 2, borderRadius: 4, background: th.bg,
    }}>
      {(['en', 'es'] as const).map(l => (
        <button key={l} onClick={() => setLang(l)} style={{
          background: lang === l ? th.ink : 'transparent',
          color: lang === l ? th.bg : th.ink,
          border: 'none', padding: '4px 10px',
          fontSize: 11, letterSpacing: 1,
          fontFamily: th.fontMono, fontWeight: 500,
          cursor: 'pointer', borderRadius: 2, textTransform: 'uppercase',
        }}>{l}</button>
      ))}
    </div>
  );
}
