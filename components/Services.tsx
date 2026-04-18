'use client';

import { theme as th } from '@/lib/theme';
import type { Content } from '@/content/en';

type Props = { c: Content };

export default function Services({ c }: Props) {
  return (
    <section id="services" style={{ padding: '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 20 }}>
            {c.services.eyebrow}
          </div>
          <h2 style={{
            fontFamily: th.fontDisplay, fontSize: 64, lineHeight: 1.02,
            letterSpacing: -1.5, fontWeight: 400, maxWidth: 700,
          }}>{c.services.title}</h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: `1px solid ${th.border}`,
        }}>
          {c.services.items.map((item, i) => (
            <ServiceCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item, index }: { item: { k: string; t: string; d: string }; index: number }) {
  const col = index % 3;
  return (
    <div
      style={{
        padding: '36px 32px',
        paddingLeft: col !== 0 ? 32 : 0,
        paddingRight: col !== 2 ? 32 : 0,
        borderBottom: `1px solid ${th.border}`,
        borderRight: col !== 2 ? `1px solid ${th.border}` : 'none',
        transition: 'background 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = th.bgAlt)}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
        <span style={{ fontFamily: th.fontMono, fontSize: 11, color: th.accent, letterSpacing: 1 }}>{item.k}</span>
        <h3 style={{
          fontFamily: th.fontDisplay, fontSize: 26, fontWeight: 400,
          letterSpacing: -0.5, color: th.ink,
        }}>{item.t}</h3>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: th.inkSoft }}>{item.d}</p>
    </div>
  );
}
