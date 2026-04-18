function About({ c, lang }) {
  const rows = [[c.about.paty, ADVISORS[0]], [c.about.diana, ADVISORS[1]]];
  return (
    <Section id="about" bg="var(--ink)" color="var(--bg)">
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--bg)', opacity: 0.6, marginBottom: 20 }}>{c.about.eyebrow}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 0.98, letterSpacing: -2, fontWeight: 400 }}>{c.about.title}</h2>
        <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--bg)', opacity: 0.85, paddingTop: 12 }}>{c.about.intro}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        {rows.map(([d, a]) => (
          <div key={a.id} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', padding: '32px 32px 28px', borderRadius: 4 }}>
            <div style={{ width: '100%', height: 320, marginBottom: 24, background: a.tintLight, padding: 12, boxSizing: 'border-box', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 180, color: 'rgba(31,43,35,0.18)', letterSpacing: -6, lineHeight: 1 }}>{a.initials}</div>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 400, letterSpacing: -1, color: 'var(--bg)', marginBottom: 4 }}>{d.name}</h3>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>{d.role}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1, color: 'var(--accent)', marginBottom: 20, textTransform: 'uppercase' }}>{d.company}</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.8)', marginBottom: 20 }}>{d.bio}</p>
            <a href={d.linkedin} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--bg)', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: 2 }}>LinkedIn <span style={{ color: 'var(--accent)' }}>↗</span></a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks({ c }) {
  return (
    <Section id="how">
      <div style={{ marginBottom: 64, maxWidth: 700 }}>
        <Eyebrow>{c.how.eyebrow}</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1.02, letterSpacing: -1.5, fontWeight: 400 }}>{c.how.title}</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {c.how.steps.map((s, i) => (
          <div key={i} style={{ borderTop: '2px solid var(--ink)', paddingTop: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: 1 }}>{s.n}</span>
              {i < c.how.steps.length - 1 && (
                <svg width="28" height="12" viewBox="0 0 28 12"><path d="M0 6 L24 6 M20 2 L24 6 L20 10" stroke="#7A7568" strokeWidth="1.2" fill="none" /></svg>
              )}
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, marginBottom: 10, letterSpacing: -0.5 }}>{s.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Packages({ c, lang }) {
  return (
    <Section id="packages" bg="var(--bg-alt)">
      <div style={{ marginBottom: 64, maxWidth: 700 }}>
        <Eyebrow>{c.packages.eyebrow}</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1.02, letterSpacing: -1.5, fontWeight: 400 }}>{c.packages.title}</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {c.packages.items.map((pkg, i) => {
          const f = pkg.featured;
          return (
            <div key={i} style={{ background: f ? 'var(--ink)' : 'var(--card-bg)', color: f ? 'var(--bg)' : 'var(--ink)', border: f ? '1px solid var(--ink)' : '1px solid var(--border)', padding: '32px 28px', borderRadius: 4, display: 'flex', flexDirection: 'column', transform: f ? 'translateY(-12px)' : 'none', boxShadow: f ? '0 8px 32px rgba(31,43,35,0.15)' : 'none', position: 'relative' }}>
              {f && <div style={{ position: 'absolute', top: -10, left: 24, background: 'var(--accent)', color: 'var(--accent-ink)', padding: '3px 10px', fontSize: 10, letterSpacing: 1, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', borderRadius: 2 }}>{lang === 'es' ? 'más popular' : 'most popular'}</div>}
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 400, letterSpacing: -0.8, marginBottom: 4 }}>{pkg.name}</h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1, color: f ? 'rgba(255,255,255,0.6)' : 'var(--muted)', marginBottom: 4, textTransform: 'uppercase' }}>{pkg.sessions}</div>
              <div style={{ fontSize: 14, fontStyle: 'italic', fontFamily: 'var(--font-display)', color: f ? 'var(--bg)' : 'var(--accent)', marginBottom: 24 }}>{pkg.tag}</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28, flex: 1 }}>
                {pkg.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 10, paddingLeft: 16, position: 'relative', color: f ? 'rgba(255,255,255,0.85)' : 'var(--ink-soft)' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>{b}
                  </li>
                ))}
              </ul>
              <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: f ? 'var(--accent)' : 'transparent', color: f ? 'var(--accent-ink)' : 'var(--ink)', border: `1px solid ${f ? 'var(--accent)' : 'var(--ink)'}`, padding: '11px 18px', fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-body)', borderRadius: 4, cursor: 'pointer' }}>{c.packages.cta} →</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Booking({ c, lang }) {
  return (
    <Section id="booking">
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow>{c.booking.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 0.98, letterSpacing: -2, fontWeight: 400, marginBottom: 16 }}>{c.booking.title}</h2>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>{c.booking.sub}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {ADVISORS.map(a => {
            const label = lang === 'es' ? `Agendar con ${a.id === 'paty' ? 'Paty' : 'Diana'}` : `Book with ${a.id === 'paty' ? 'Paty' : 'Diana'}`;
            const name = a.id === 'paty' ? 'Paty Vega' : 'Diana Valladares';
            return (
              <div key={a.id} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 4, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: a.tintLight, color: a.tintDark, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, flexShrink: 0 }}>{a.initials}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: -0.3 }}>{name}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{lang === 'es' ? a.companyEs : a.companyEn}</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: 0.5, paddingTop: 4, borderTop: '1px solid var(--border)' }}>{lang === 'es' ? a.specialtyEs : a.specialtyEn}</div>
                <a href={a.calendly} target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', background: 'var(--accent)', color: 'var(--accent-ink)', padding: '14px 20px', fontSize: 14, fontWeight: 500, borderRadius: 4, fontFamily: 'var(--font-body)', letterSpacing: 0.2, marginTop: 4 }}>{label} →</a>
                <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>15 min · Google Meet · {lang === 'es' ? 'Gratis' : 'Free'}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function FAQ({ c }) {
  const [open, setOpen] = React.useState(0);
  return (
    <Section id="faq" bg="var(--bg-alt)">
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <Eyebrow>{c.faq.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1.02, letterSpacing: -1.2, fontWeight: 400 }}>{c.faq.title}</h2>
        </div>
        <div>
          {c.faq.items.map((item, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--border)' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, fontFamily: 'var(--font-body)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--ink)', letterSpacing: -0.3 }}>{item.q}</span>
                <span style={{ width: 32, height: 32, borderRadius: '50%', background: open === i ? 'var(--accent)' : 'transparent', color: open === i ? 'var(--accent-ink)' : 'var(--ink)', border: `1px solid ${open === i ? 'var(--accent)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, transition: 'all 0.2s' }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 24, maxWidth: 720 }}>{item.a}</p>}
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </Section>
  );
}

function Footer({ c }) {
  return (
    <footer style={{ padding: '80px 48px 48px', background: 'var(--ink)', color: 'var(--bg)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="logo-mark-light.svg" width="26" height="26" />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>Adelante Advisory</span>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontStyle: 'italic', maxWidth: 400, lineHeight: 1.2 }}>{c.footer.tagline}</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--bg)', opacity: 0.5, marginBottom: 12 }}>Contact</div>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--bg)', fontSize: 15 }}>{CONTACT_EMAIL}</a>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--bg)', opacity: 0.5, marginBottom: 12 }}>Follow</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#" style={{ color: 'var(--bg)', fontSize: 15 }}>Instagram ↗</a>
              <a href="#" style={{ color: 'var(--bg)', fontSize: 15 }}>LinkedIn ↗</a>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 0.5, color: 'var(--bg)', opacity: 0.6, flexWrap: 'wrap', gap: 12 }}>
          <span>© 2026 Adelante Advisory</span>
          <span>{c.footer.made}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { About, HowItWorks, Packages, Booking, FAQ, Footer });
