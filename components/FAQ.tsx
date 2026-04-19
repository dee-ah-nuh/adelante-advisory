'use client';

import { useState } from 'react';
import { theme as th } from '@/lib/theme';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { Content } from '@/content/en';

type Props = { c: Content };

export default function FAQ({ c }: Props) {
  const [open, setOpen] = useState<number>(0);
  const isMobile = useIsMobile();

  return (
    <section id="faq" style={{ padding: isMobile ? '64px 20px' : '120px 48px', background: th.bgAlt }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 16 }}>
            {c.faq.eyebrow}
          </div>
          <h2 style={{
            fontFamily: th.fontDisplay,
            fontSize: isMobile ? 40 : 56,
            lineHeight: 1.02, letterSpacing: -1.2, fontWeight: 400,
          }}>{c.faq.title}</h2>
        </div>
        <div>
          {c.faq.items.map((item, i) => (
            <div key={i} style={{ borderTop: `1px solid ${th.border}` }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', textAlign: 'left',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  padding: '20px 0',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                  fontFamily: th.fontBody,
                }}
              >
                <span style={{ fontFamily: th.fontDisplay, fontSize: isMobile ? 18 : 22, color: th.ink, letterSpacing: -0.3 }}>
                  {item.q}
                </span>
                <span style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  background: open === i ? th.accent : 'transparent',
                  color: open === i ? th.accentInk : th.ink,
                  border: `1px solid ${open === i ? th.accent : th.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, transition: 'all 0.2s',
                }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <p style={{ fontSize: 15, lineHeight: 1.6, color: th.inkSoft, marginBottom: 20, maxWidth: 720 }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${th.border}` }} />
        </div>
      </div>
    </section>
  );
}
