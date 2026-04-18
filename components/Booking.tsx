'use client';

import { theme as th } from '@/lib/theme';
import { ADVISORS, CALENDLY } from '@/content/shared';
import type { Content } from '@/content/en';

type Props = { c: Content; lang: 'en' | 'es' };

export default function Booking({ c, lang }: Props) {
  return (
    <section id="booking" style={{ padding: '120px 48px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 20 }}>
            {c.booking.eyebrow}
          </div>
          <h2 style={{
            fontFamily: th.fontDisplay, fontSize: 72, lineHeight: 0.98,
            letterSpacing: -2, fontWeight: 400, marginBottom: 16,
          }}>{c.booking.title}</h2>
          <p style={{
            fontSize: 18, color: th.inkSoft,
            fontStyle: 'italic', fontFamily: th.fontDisplay,
          }}>{c.booking.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {ADVISORS.map(advisor => (
            <AdvisorBookingCard key={advisor.id} advisor={advisor} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvisorBookingCard({
  advisor, lang,
}: {
  advisor: typeof ADVISORS[number];
  lang: 'en' | 'es';
}) {
  const calendlyUrl = CALENDLY[advisor.id as keyof typeof CALENDLY];
  const label = lang === 'es' ? `Agendar con ${advisor.name.split(' ')[0]}` : `Book with ${advisor.name.split(' ')[0]}`;

  return (
    <div style={{
      background: th.cardBg,
      border: `1px solid ${th.border}`,
      borderRadius: th.radius,
      padding: '32px 28px',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      {/* Advisor info */}
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: advisor.tintLight, color: advisor.tintDark,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: th.fontDisplay, fontSize: 20, fontWeight: 500,
          flexShrink: 0,
        }}>{advisor.initials}</div>
        <div>
          <div style={{ fontFamily: th.fontDisplay, fontSize: 22, letterSpacing: -0.3 }}>{advisor.name}</div>
          <div style={{ fontSize: 13, color: th.muted }}>
            {lang === 'es' ? advisor.companyEs : advisor.companyEn}
          </div>
        </div>
      </div>

      <div style={{
        fontSize: 12, color: th.muted, fontFamily: th.fontMono,
        letterSpacing: 0.5, paddingTop: 4,
        borderTop: `1px solid ${th.border}`,
      }}>
        {lang === 'es' ? advisor.specialtyEs : advisor.specialtyEn}
      </div>

      <a
        href={calendlyUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'block', textAlign: 'center',
          background: th.accent, color: th.accentInk,
          padding: '14px 20px', fontSize: 14, fontWeight: 500,
          borderRadius: th.radius, fontFamily: th.fontBody,
          textDecoration: 'none', letterSpacing: 0.2,
          marginTop: 4,
        }}
      >{label} →</a>

      <p style={{ fontSize: 12, color: th.muted, textAlign: 'center' }}>
        15 min · Google Meet · {lang === 'es' ? 'Gratis' : 'Free'}
      </p>
    </div>
  );
}
