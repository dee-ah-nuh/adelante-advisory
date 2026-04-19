'use client';

import { theme as th } from '@/lib/theme';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { Content } from '@/content/en';

type Props = { c: Content };

export default function Services({ c }: Props) {
  const isMobile = useIsMobile();
  return (
    <section id="services" style={{ padding: isMobile ? '64px 20px' : '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 40 : 64 }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 20 }}>
            {c.services.eyebrow}
          </div>
          <h2 style={{
            fontFamily: th.fontDisplay,
            fontSize: isMobile ? 40 : 64,
            lineHeight: 1.02, letterSpacing: -1.5, fontWeight: 400, maxWidth: 700,
          }}>{c.services.title}</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          borderTop: `1px solid ${th.border}`,
        }}>
          {c.services.items.map((item, i) => {
            const col = i % 3;
            return (
              <div
                key={i}
                style={{
                  padding: isMobile ? '24px 0' : '36px 32px',
                  paddingLeft: (!isMobile && col !== 0) ? 32 : 0,
                  paddingRight: (!isMobile && col !== 2) ? 32 : 0,
                  borderBottom: `1px solid ${th.border}`,
                  borderRight: (!isMobile && col !== 2) ? `1px solid ${th.border}` : 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = th.bgAlt)}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontFamily: th.fontMono, fontSize: 11, color: th.accent, letterSpacing: 1 }}>{item.k}</span>
                  <h3 style={{ fontFamily: th.fontDisplay, fontSize: isMobile ? 22 : 26, fontWeight: 400, letterSpacing: -0.5, color: th.ink }}>{item.t}</h3>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: th.inkSoft }}>{item.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
