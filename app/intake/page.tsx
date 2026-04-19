'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { theme as th } from '@/lib/theme';

type Stage = 'high_school' | 'college' | 'recent_grad' | 'early_career' | '';

const STAGES = [
  { value: 'high_school', label: 'High school', sub: 'Exploring options before college' },
  { value: 'college', label: 'College', sub: 'Currently enrolled, figuring out next steps' },
  { value: 'recent_grad', label: 'Recent grad', sub: 'Graduated within the last year' },
  { value: 'early_career', label: 'Early career', sub: '1–3 years in — still finding my footing' },
] as const;

const INTERESTS = [
  'Consulting', 'Finance', 'Technology', 'Marketing', 'Operations',
  'Data & Analytics', 'Product Management', 'Healthcare', 'Government / Policy', 'Not sure yet',
];

const NEEDS = [
  'Résumé review & rewrite', 'Interview prep', 'Networking — cold outreach & coffee chats',
  'Job search strategy', 'Salary negotiation', 'Understanding US corporate culture',
  'OPT / visa & work authorization', 'Figuring out what I actually want',
];

const STEPS = ['Your stage', 'Your field', 'Your interests', 'What you need'];

export default function IntakePage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [stage, setStage] = useState<Stage>('');
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [needs, setNeeds] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function toggleArr(arr: string[], setArr: (v: string[]) => void, val: string) {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val]);
  }

  async function handleSubmit() {
    if (!name || !email) { setError('Name and email are required.'); return; }
    setLoading(true);
    setError('');
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();

    const { error: err } = await supabase.from('intake_submissions').insert({
      name,
      email: user?.email ?? email,
      stage,
      major,
      interests,
      needs,
      linkedin_url: linkedin || null,
      notes: notes || null,
    });

    if (err) { setError(err.message); setLoading(false); return; }
    router.push('/dashboard');
  }

  function canAdvance() {
    if (step === 0) return !!stage;
    if (step === 2) return interests.length > 0;
    return true;
  }

  return (
    <div style={{ minHeight: '100vh', background: th.bg }}>
      {/* Nav */}
      <nav style={{
        borderBottom: `1px solid ${th.border}`, padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(245,241,234,0.92)', backdropFilter: 'blur(10px)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="24" height="24" viewBox="0 0 26 26">
            <circle cx="13" cy="13" r="12" fill="none" stroke={th.ink} strokeWidth="1.2" />
            <path d="M7 15 L13 8 L19 15" fill="none" stroke={th.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="13" cy="8" r="1.8" fill={th.accent} />
          </svg>
          <span style={{ fontFamily: th.fontDisplay, fontSize: 20, color: th.ink }}>Adelante</span>
        </a>
        <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: th.muted }}>
          Step {step + 1} of {STEPS.length}
        </div>
      </nav>

      {/* Progress bar */}
      <div style={{ height: 2, background: th.border }}>
        <div style={{
          height: '100%', background: th.accent,
          width: `${((step + 1) / STEPS.length) * 100}%`,
          transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>

      <main style={{ maxWidth: 600, margin: '0 auto', padding: '56px 24px 80px' }}>
        <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 12 }}>
          {STEPS[step]}
        </div>

        {/* Step 0 — Stage */}
        {step === 0 && (
          <>
            <h1 style={{ fontFamily: th.fontDisplay, fontSize: 40, fontWeight: 400, letterSpacing: -1, lineHeight: 1.1, marginBottom: 8 }}>
              Where are you<br />
              <span style={{ fontStyle: 'italic', color: th.accent }}>right now?</span>
            </h1>
            <p style={{ fontSize: 15, color: th.inkSoft, marginBottom: 36, lineHeight: 1.6 }}>
              No judgment — every stage is the right stage to ask for help.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {STAGES.map(s => (
                <button key={s.value} onClick={() => setStage(s.value as Stage)} style={{
                  textAlign: 'left', padding: '20px 24px',
                  background: stage === s.value ? th.ink : th.cardBg,
                  color: stage === s.value ? th.accentInk : th.ink,
                  border: `1px solid ${stage === s.value ? th.ink : th.border}`,
                  borderRadius: th.radius, cursor: 'pointer',
                  transition: 'background 0.2s cubic-bezier(0.4,0,0.2,1)',
                }}>
                  <div style={{ fontFamily: th.fontBody, fontWeight: 500, fontSize: 15 }}>{s.label}</div>
                  <div style={{ fontSize: 13, color: stage === s.value ? 'rgba(252,248,241,0.7)' : th.muted, marginTop: 4 }}>{s.sub}</div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 1 — Major */}
        {step === 1 && (
          <>
            <h1 style={{ fontFamily: th.fontDisplay, fontSize: 40, fontWeight: 400, letterSpacing: -1, lineHeight: 1.1, marginBottom: 8 }}>
              What are you<br />
              <span style={{ fontStyle: 'italic', color: th.accent }}>studying?</span>
            </h1>
            <p style={{ fontSize: 15, color: th.inkSoft, marginBottom: 36, lineHeight: 1.6 }}>
              Or — what did you study, or what field are you in? If you're not sure yet, just say that.
            </p>
            <label style={{ display: 'block' }}>
              <div style={labelStyle}>Major / field of study</div>
              <input
                type="text" value={major} onChange={e => setMajor(e.target.value)}
                placeholder="e.g. Business Administration, Computer Science, Undecided…"
                style={inputStyle}
              />
            </label>
          </>
        )}

        {/* Step 2 — Interests */}
        {step === 2 && (
          <>
            <h1 style={{ fontFamily: th.fontDisplay, fontSize: 40, fontWeight: 400, letterSpacing: -1, lineHeight: 1.1, marginBottom: 8 }}>
              What kind of work<br />
              <span style={{ fontStyle: 'italic', color: th.accent }}>draws you in?</span>
            </h1>
            <p style={{ fontSize: 15, color: th.inkSoft, marginBottom: 36, lineHeight: 1.6 }}>
              Select everything that applies — even if it feels like a stretch.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {INTERESTS.map(item => {
                const sel = interests.includes(item);
                return (
                  <button key={item} onClick={() => toggleArr(interests, setInterests, item)} style={{
                    padding: '10px 18px', fontFamily: th.fontBody, fontSize: 14,
                    background: sel ? th.accent : th.cardBg,
                    color: sel ? th.accentInk : th.ink,
                    border: `1px solid ${sel ? th.accent : th.border}`,
                    borderRadius: th.radius, cursor: 'pointer',
                    transition: 'background 0.2s cubic-bezier(0.4,0,0.2,1)',
                  }}>{item}</button>
                );
              })}
            </div>
          </>
        )}

        {/* Step 3 — Needs + contact */}
        {step === 3 && (
          <>
            <h1 style={{ fontFamily: th.fontDisplay, fontSize: 40, fontWeight: 400, letterSpacing: -1, lineHeight: 1.1, marginBottom: 8 }}>
              What do you need<br />
              <span style={{ fontStyle: 'italic', color: th.accent }}>most help with?</span>
            </h1>
            <p style={{ fontSize: 15, color: th.inkSoft, marginBottom: 28, lineHeight: 1.6 }}>
              Be honest — this is exactly what we're here for.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {NEEDS.map(item => {
                const sel = needs.includes(item);
                return (
                  <button key={item} onClick={() => toggleArr(needs, setNeeds, item)} style={{
                    padding: '10px 18px', fontFamily: th.fontBody, fontSize: 14,
                    background: sel ? th.accent : th.cardBg,
                    color: sel ? th.accentInk : th.ink,
                    border: `1px solid ${sel ? th.accent : th.border}`,
                    borderRadius: th.radius, cursor: 'pointer',
                    transition: 'background 0.2s cubic-bezier(0.4,0,0.2,1)',
                  }}>{item}</button>
                );
              })}
            </div>

            <div style={{ borderTop: `1px solid ${th.border}`, paddingTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: th.muted }}>
                How to reach you
              </div>
              <label style={{ display: 'block' }}>
                <div style={labelStyle}>Full name</div>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Patricia Vega" style={inputStyle} />
              </label>
              <label style={{ display: 'block' }}>
                <div style={labelStyle}>Email</div>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@email.com" style={inputStyle} />
              </label>
              <label style={{ display: 'block' }}>
                <div style={labelStyle}>LinkedIn <span style={{ fontFamily: th.fontBody, fontSize: 11, textTransform: 'none', letterSpacing: 0, color: th.muted }}>(optional)</span></div>
                <input type="url" value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="linkedin.com/in/yourname" style={inputStyle} />
              </label>
              <label style={{ display: 'block' }}>
                <div style={labelStyle}>Anything else? <span style={{ fontFamily: th.fontBody, fontSize: 11, textTransform: 'none', letterSpacing: 0, color: th.muted }}>(optional)</span></div>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={4}
                  placeholder="Tell us whatever feels relevant — your situation, a specific question, what you've already tried."
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                />
              </label>
              {error && (
                <div style={{ fontSize: 13, color: th.accent, background: '#fdf0ed', padding: '10px 14px', borderRadius: th.radius }}>{error}</div>
              )}
            </div>
          </>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 48 }}>
          {step > 0 ? (
            <button onClick={() => setStep(s => s - 1)} style={{
              background: 'transparent', border: `1px solid ${th.border}`,
              padding: '12px 20px', fontSize: 14, color: th.inkSoft,
              borderRadius: th.radius, cursor: 'pointer', fontFamily: th.fontBody,
            }}>← Back</button>
          ) : <div />}

          {step < STEPS.length - 1 ? (
            <button onClick={() => setStep(s => s + 1)} disabled={!canAdvance()} style={{
              background: canAdvance() ? th.ink : th.border,
              color: canAdvance() ? th.accentInk : th.muted,
              border: 'none', padding: '12px 28px', fontSize: 14, fontWeight: 500,
              borderRadius: th.radius, cursor: canAdvance() ? 'pointer' : 'not-allowed',
              fontFamily: th.fontBody, transition: 'background 0.2s',
            }}>Continue →</button>
          ) : (
            <button onClick={handleSubmit} disabled={loading} style={{
              background: th.accent, color: th.accentInk, border: 'none',
              padding: '12px 28px', fontSize: 14, fontWeight: 500,
              borderRadius: th.radius, cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: th.fontBody, opacity: loading ? 0.7 : 1,
            }}>{loading ? 'Sending…' : 'Send to Adelante →'}</button>
          )}
        </div>
      </main>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
  textTransform: 'uppercase', letterSpacing: 1.5, color: '#7A7568', marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', padding: '12px 14px',
  background: '#FCF8F1', border: '1px solid rgba(31,43,35,0.15)',
  borderRadius: 4, fontSize: 14, color: '#1F2B23',
  fontFamily: '"Inter Tight", system-ui, sans-serif', outline: 'none',
};
