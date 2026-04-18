'use client';

import Image from 'next/image';
import { theme as th } from '@/lib/theme';
import { TRUSTED_COMPANIES, ADVISORS } from '@/content/shared';
import type { Content } from '@/content/en';

type Props = { c: Content; lang: 'en' | 'es' };

export default function Hero({ c, lang }: Props) {
  return (
    <>
      <section style={{ padding: '96px 48px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end',
        }}>
          {/* Copy */}
          <div>
            <div style={{
              fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2,
              textTransform: 'uppercase', color: th.muted, marginBottom: 24,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 32, height: 1, background: th.muted, display: 'inline-block' }} />
              {c.hero.eyebrow}
            </div>
            <h1 style={{
              fontFamily: th.fontDisplay,
              fontSize: 'clamp(64px, 8vw, 128px)',
              lineHeight: 0.95, letterSpacing: -2.5,
              margin: '0 0 32px', fontWeight: 400, color: th.ink,
            }}>
              {c.hero.title[0]}<br />
              <span style={{ fontStyle: 'italic' }}>{c.hero.title[1]}</span>
              <span style={{ color: th.accent }}>{c.hero.title[2]}</span>
            </h1>
            <p style={{
              fontSize: 19, lineHeight: 1.55, color: th.inkSoft,
              maxWidth: 580, margin: '0 0 40px',
            }}>{c.hero.sub}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: th.accent, color: th.accentInk, border: 'none',
                  padding: '18px 28px', fontSize: 15, fontWeight: 500,
                  borderRadius: th.radius, cursor: 'pointer',
                  fontFamily: th.fontBody, letterSpacing: 0.2,
                }}>{c.hero.cta} →</button>
              <span style={{ fontFamily: th.fontMono, fontSize: 12, color: th.muted, letterSpacing: 0.5 }}>
                {c.hero.ctaSub}
              </span>
            </div>
          </div>

          {/* Photos */}
          <div style={{
            position: 'relative', height: 440,
            display: 'flex', gap: 18, alignItems: 'center', justifyContent: 'center',
          }}>
            <AdvisorPhoto
              src={ADVISORS[0].photo}
              name={lang === 'es' ? `foto de ${ADVISORS[0].name.split(' ')[0]}` : `photo of ${ADVISORS[0].name.split(' ')[0]}`}
              city={lang === 'es' ? ADVISORS[0].companyEs.split('·')[1].trim() : ADVISORS[0].companyEn.split('·')[1].trim()}
              bg={ADVISORS[1].tintLight}
              rotate="-1.5deg"
              offsetTop={0}
            />
            <AdvisorPhoto
              src={ADVISORS[1].photo}
              name={lang === 'es' ? `foto de ${ADVISORS[1].name.split(' ')[0]}` : `photo of ${ADVISORS[1].name.split(' ')[0]}`}
              city={lang === 'es' ? ADVISORS[1].companyEs.split('·')[1].trim() : ADVISORS[1].companyEn.split('·')[1].trim()}
              bg={ADVISORS[0].tintLight}
              rotate="1.5deg"
              offsetTop={24}
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ padding: '24px 48px 72px', borderBottom: `1px solid ${th.border}` }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap',
        }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted }}>
            {c.hero.trust}
          </div>
          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', flex: 1 }}>
            {TRUSTED_COMPANIES.map(co => (
              <span key={co} style={{
                fontFamily: th.fontDisplay, fontSize: 22, color: th.inkSoft,
                fontStyle: 'italic', letterSpacing: -0.3,
              }}>{co}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AdvisorPhoto({ src, name, city, bg, rotate, offsetTop }: {
  src: string; name: string; city: string;
  bg: string; rotate: string; offsetTop: number;
}) {
  return (
    <div style={{
      width: 280, height: 340,
      background: bg,
      border: `1px solid ${th.border}`,
      boxShadow: '0 2px 12px rgba(31,43,35,0.08)',
      padding: 12,
      transform: `rotate(${rotate})`,
      marginTop: offsetTop,
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Image
        src={src}
        alt={name}
        fill
        style={{ objectFit: 'contain', objectPosition: 'center bottom', padding: 8 }}
        sizes="280px"
      />
      <div style={{
        position: 'absolute', bottom: 10, left: 14,
        fontFamily: th.fontDisplay, fontSize: 20, fontStyle: 'italic',
        color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.5)',
        zIndex: 1,
      }}>{city}</div>
    </div>
  );
}
