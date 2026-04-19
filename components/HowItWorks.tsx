'use client';

import { theme as th } from '@/lib/theme';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { Content } from '@/content/en';

type Props = { c: Content };

export default function HowItWorks({ c }: Props) {
  const isMobile = useIsMobile();
  return (
    <section id="how" style={{ padding: isMobile ? '64px 20px' : '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 40 : 64, maxWidth: 700 }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 20 }}>
            {c.how.eyebrow}
          </div>
          <h2 style={{
            fontFamily: th.fontDisplay,
            fontSize: isMobile ? 40 : 64,
            lineHeight: 1.02, letterSpacing: -1.5, fontWeight: 400,
          }}>{c.how.title}</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? 24 : 32,
        }}>
          {c.how.steps.map((s, i) => (
            <div key={i} style={{ borderTop: `2px solid ${th.ink}`, paddingTop: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 20 }}>
                <span style={{ fontFamily: th.fontMono, fontSize: 12, color: th.accent, letterSpacing: 1 }}>{s.n}</span>
                {!isMobile && i < c.how.steps.length - 1 && (
                  <svg width="28" height="12" viewBox="0 0 28 12">
                    <path d="M0 6 L24 6 M20 2 L24 6 L20 10" stroke={th.muted} strokeWidth="1.2" fill="none" />
                  </svg>
                )}
              </div>
              <h3 style={{
                fontFamily: th.fontDisplay, fontSize: isMobile ? 20 : 26,
                fontWeight: 400, marginBottom: 10, letterSpacing: -0.5,
              }}>{s.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: th.inkSoft }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
