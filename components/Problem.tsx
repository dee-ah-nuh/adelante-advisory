import { theme as th } from '@/lib/theme';
import type { Content } from '@/content/en';

type Props = { c: Content };

export default function Problem({ c }: Props) {
  return (
    <section style={{ padding: '120px 48px', background: th.bgAlt }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80,
      }}>
        <div>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 20 }}>
            {c.problem.eyebrow}
          </div>
          <h2 style={{
            fontFamily: th.fontDisplay, fontSize: 64, lineHeight: 1.02,
            letterSpacing: -1.5, fontWeight: 400,
          }}>{c.problem.title}</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 12 }}>
          {c.problem.body.map((p, i) => {
            const isLast = i === c.problem.body.length - 1;
            return (
              <p key={i} style={{
                fontSize: 18, lineHeight: 1.6,
                color: isLast ? th.ink : th.inkSoft,
                fontStyle: isLast ? 'italic' : 'normal',
                fontWeight: isLast ? 500 : 400,
              }}>{p}</p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
