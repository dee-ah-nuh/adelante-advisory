'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { theme as th } from '@/lib/theme';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email, password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) { setError(error.message); setLoading(false); }
    else setDone(true);
  }

  if (done) return (
    <div style={{ minHeight: '100vh', background: th.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ textAlign: 'center', maxWidth: 400 }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: th.accent, color: th.accentInk, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>✓</div>
        <h2 style={{ fontFamily: th.fontDisplay, fontSize: 32, fontWeight: 400, letterSpacing: -0.5, marginBottom: 12 }}>Check your email</h2>
        <p style={{ fontSize: 15, color: th.inkSoft, lineHeight: 1.6 }}>
          We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.
        </p>
        <a href="/login" style={{ display: 'inline-block', marginTop: 24, fontSize: 13, color: th.muted }}>← Back to sign in</a>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: th.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <svg width="36" height="36" viewBox="0 0 26 26" style={{ display: 'inline-block' }}>
            <circle cx="13" cy="13" r="12" fill="none" stroke={th.ink} strokeWidth="1.2" />
            <path d="M7 15 L13 8 L19 15" fill="none" stroke={th.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="13" cy="8" r="1.8" fill={th.accent} />
          </svg>
          <div style={{ fontFamily: th.fontDisplay, fontSize: 28, letterSpacing: -0.5, marginTop: 10 }}>Adelante Advisory</div>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, color: th.muted, letterSpacing: 1.5, marginTop: 4 }}>CREATE ACCOUNT</div>
        </div>

        <form onSubmit={handleSignup} style={{
          background: th.cardBg, border: `1px solid ${th.border}`,
          borderRadius: th.radius, padding: '32px 28px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <Field label="Full name">
            <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Patricia Vega" style={inputStyle} />
          </Field>
          <Field label="Email">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@email.com" style={inputStyle} />
          </Field>
          <Field label="Password">
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="8+ characters" minLength={8} style={inputStyle} />
          </Field>

          {error && (
            <div style={{ fontSize: 13, color: th.accent, background: '#fdf0ed', padding: '10px 14px', borderRadius: th.radius }}>{error}</div>
          )}

          <button type="submit" disabled={loading} style={{
            background: th.accent, color: th.accentInk, border: 'none',
            padding: '14px', fontSize: 14, fontWeight: 500,
            borderRadius: th.radius, cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: th.fontBody, opacity: loading ? 0.7 : 1, marginTop: 4,
          }}>
            {loading ? 'Creating account…' : 'Create account →'}
          </button>

          <div style={{ textAlign: 'center', fontSize: 13, color: th.muted }}>
            Already have an account?{' '}
            <a href="/login" style={{ color: th.ink, borderBottom: `1px solid ${th.border}` }}>Sign in</a>
          </div>
        </form>

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <a href="/" style={{ fontSize: 13, color: th.muted }}>← Back to site</a>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'block' }}>
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: th.muted, marginBottom: 6, fontWeight: 500, fontFamily: th.fontMono }}>{label}</div>
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  padding: '12px 14px', background: th.bg,
  border: `1px solid ${th.border}`, borderRadius: th.radius,
  fontSize: 14, color: th.ink, fontFamily: th.fontBody, outline: 'none',
};
