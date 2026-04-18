import Image from 'next/image';
import { theme as th } from '@/lib/theme';
import { ADVISORS } from '@/content/shared';
import type { Content } from '@/content/en';

type Props = { c: Content; lang: 'en' | 'es' };

export default function About({ c, lang }: Props) {
  const advisors = [
    { data: c.about.paty, advisor: ADVISORS[0] },
    { data: c.about.diana, advisor: ADVISORS[1] },
  ];

  return (
    <section id="about" style={{ padding: '120px 48px', background: th.ink, color: th.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.bg, opacity: 0.6, marginBottom: 20 }}>
          {c.about.eyebrow}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80,
          alignItems: 'start', marginBottom: 80,
        }}>
          <h2 style={{
            fontFamily: th.fontDisplay, fontSize: 72, lineHeight: 0.98,
            letterSpacing: -2, fontWeight: 400,
          }}>{c.about.title}</h2>
          <p style={{
            fontSize: 20, lineHeight: 1.55, color: th.bg,
            opacity: 0.85, paddingTop: 12,
          }}>{c.about.intro}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {advisors.map(({ data, advisor }) => (
            <FounderCard key={advisor.id} data={data} advisor={advisor} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderCard({
  data, advisor, lang,
}: {
  data: Content['about']['paty'];
  advisor: typeof ADVISORS[number];
  lang: 'en' | 'es';
}) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.12)',
      padding: '32px 32px 28px',
      borderRadius: th.radius,
    }}>
      <div style={{
        width: '100%', height: 320, marginBottom: 24,
        background: advisor.tintLight,
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 2px 12px rgba(31,43,35,0.08)',
        padding: 12,
        position: 'relative',
        boxSizing: 'border-box',
      }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          <Image
            src={advisor.photoSquare}
            alt={lang === 'es' ? `foto de ${data.name.split(' ')[0]}` : `photo of ${data.name.split(' ')[0]}`}
            fill
            style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <h3 style={{
        fontFamily: th.fontDisplay, fontSize: 36, fontWeight: 400,
        letterSpacing: -1, color: th.bg, marginBottom: 4,
      }}>{data.name}</h3>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>{data.role}</div>
      <div style={{
        fontFamily: th.fontMono, fontSize: 11, letterSpacing: 1,
        color: th.accent, marginBottom: 20, textTransform: 'uppercase',
      }}>{data.company}</div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.8)', marginBottom: 20 }}>
        {data.bio}
      </p>
      <a
        href={data.linkedin}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, color: th.bg,
          borderBottom: '1px solid rgba(255,255,255,0.3)',
          paddingBottom: 2,
        }}
      >
        LinkedIn <span style={{ color: th.accent }}>↗</span>
      </a>
    </div>
  );
}
