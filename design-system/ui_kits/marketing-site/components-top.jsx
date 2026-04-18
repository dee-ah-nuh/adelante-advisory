// Small helpers shared across components. Attach to window.
const Eyebrow = ({ children, color }) => (
  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: color || 'var(--muted)', marginBottom: 20 }}>{children}</div>
);

const EyebrowWithRule = ({ children }) => (
  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
    <span style={{ width: 32, height: 1, background: 'var(--muted)' }} />
    {children}
  </div>
);

const Section = ({ id, bg, color, pad, children }) => (
  <section id={id} style={{ padding: pad || '120px 48px', background: bg || 'transparent', color: color || 'inherit' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>{children}</div>
  </section>
);

function Nav({ c, lang, setLang }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const items = [['about', c.nav.about], ['services', c.nav.services], ['how', c.nav.how], ['packages', c.nav.packages], ['faq', c.nav.faq]];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(245,241,234,0.92)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)', padding: '16px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="logo-mark.svg" width="26" height="26" />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: -0.3 }}>Adelante</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: 1.5, marginLeft: 2, marginTop: 4 }}>ADVISORY</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {items.map(([id, label]) => (
          <button key={id} onClick={() => scrollTo(id)} style={{ background: 'transparent', border: 'none', fontSize: 13, color: 'var(--ink)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 500 }}>{label}</button>
        ))}
        <div style={{ display: 'inline-flex', gap: 2, border: '1px solid var(--border)', padding: 2, borderRadius: 4, background: 'var(--bg)' }}>
          {['en', 'es'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ background: lang === l ? 'var(--ink)' : 'transparent', color: lang === l ? 'var(--bg)' : 'var(--ink)', border: 'none', padding: '4px 10px', fontSize: 11, letterSpacing: 1, fontFamily: 'var(--font-mono)', fontWeight: 500, cursor: 'pointer', borderRadius: 2, textTransform: 'uppercase' }}>{l}</button>
          ))}
        </div>
        <button onClick={() => scrollTo('booking')} style={{ background: 'var(--ink)', color: 'var(--bg)', border: 'none', padding: '9px 18px', fontSize: 13, fontWeight: 500, borderRadius: 4, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>{c.nav.book} →</button>
      </div>
    </nav>
  );
}

function AdvisorPhotoFrame({ advisor, city, rotate, offsetTop, size }) {
  const w = size?.w || 280, h = size?.h || 340;
  return (
    <div style={{ width: w, height: h, background: advisor.tintLight, border: '1px solid var(--border)', boxShadow: '0 2px 12px rgba(31,43,35,0.08)', padding: 12, transform: `rotate(${rotate})`, marginTop: offsetTop, flexShrink: 0, position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 140, color: 'rgba(31,43,35,0.18)', letterSpacing: -4, lineHeight: 1, marginBottom: -12 }}>{advisor.initials}</div>
      </div>
      <div style={{ position: 'absolute', bottom: 10, left: 14, fontFamily: 'var(--font-display)', fontSize: 20, fontStyle: 'italic', color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>{city}</div>
    </div>
  );
}

function Hero({ c, lang }) {
  return (
    <>
      <section style={{ padding: '96px 48px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
          <div>
            <EyebrowWithRule>{c.hero.eyebrow}</EyebrowWithRule>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(64px, 8vw, 128px)', lineHeight: 0.95, letterSpacing: -2.5, margin: '0 0 32px', fontWeight: 400, color: 'var(--ink)' }}>
              {c.hero.title[0]}<br />
              <span style={{ fontStyle: 'italic' }}>{c.hero.title[1]}</span>
              <span style={{ color: 'var(--accent)' }}>{c.hero.title[2]}</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 580, margin: '0 0 40px' }}>{c.hero.sub}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'var(--accent)', color: 'var(--accent-ink)', border: 'none', padding: '18px 28px', fontSize: 15, fontWeight: 500, borderRadius: 4, cursor: 'pointer', fontFamily: 'var(--font-body)', letterSpacing: 0.2 }}>{c.hero.cta} →</button>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: 0.5 }}>{c.hero.ctaSub}</span>
            </div>
          </div>
          <div style={{ position: 'relative', height: 440, display: 'flex', gap: 18, alignItems: 'center', justifyContent: 'center' }}>
            <AdvisorPhotoFrame advisor={ADVISORS[0]} city={lang === 'es' ? ADVISORS[0].cityEs : ADVISORS[0].cityEn} rotate="-1.5deg" offsetTop={0} />
            <AdvisorPhotoFrame advisor={ADVISORS[1]} city={lang === 'es' ? ADVISORS[1].cityEs : ADVISORS[1].cityEn} rotate="1.5deg" offsetTop={24} />
          </div>
        </div>
      </section>
      <section style={{ padding: '24px 48px 72px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)' }}>{c.hero.trust}</div>
          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', flex: 1 }}>
            {TRUSTED.map(co => (
              <span key={co} style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--ink-soft)', fontStyle: 'italic', letterSpacing: -0.3 }}>{co}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Problem({ c }) {
  return (
    <Section bg="var(--bg-alt)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
        <div>
          <Eyebrow>{c.problem.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1.02, letterSpacing: -1.5, fontWeight: 400 }}>{c.problem.title}</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 12 }}>
          {c.problem.body.map((p, i) => {
            const last = i === c.problem.body.length - 1;
            return <p key={i} style={{ fontSize: 18, lineHeight: 1.6, color: last ? 'var(--ink)' : 'var(--ink-soft)', fontStyle: last ? 'italic' : 'normal', fontWeight: last ? 500 : 400 }}>{p}</p>;
          })}
        </div>
      </div>
    </Section>
  );
}

function Services({ c }) {
  const [hover, setHover] = React.useState(-1);
  return (
    <Section id="services">
      <div style={{ marginBottom: 64 }}>
        <Eyebrow>{c.services.eyebrow}</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1.02, letterSpacing: -1.5, fontWeight: 400, maxWidth: 700 }}>{c.services.title}</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)' }}>
        {c.services.items.map((item, i) => {
          const col = i % 3;
          return (
            <div key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)} style={{ padding: '36px 32px', paddingLeft: col !== 0 ? 32 : 0, paddingRight: col !== 2 ? 32 : 0, borderBottom: '1px solid var(--border)', borderRight: col !== 2 ? '1px solid var(--border)' : 'none', background: hover === i ? 'var(--bg-alt)' : 'transparent', transition: 'background 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 1 }}>{item.k}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, letterSpacing: -0.5 }}>{item.t}</h3>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{item.d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

Object.assign(window, { Eyebrow, EyebrowWithRule, Section, Nav, Hero, Problem, Services, AdvisorPhotoFrame });
