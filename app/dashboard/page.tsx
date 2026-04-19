import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { theme as th } from '@/lib/theme';
import SignOutButton from './SignOutButton';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'there';

  return (
    <div style={{ minHeight: '100vh', background: th.bg }}>
      {/* Dashboard nav */}
      <nav style={{
        borderBottom: `1px solid ${th.border}`,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(245,241,234,0.92)',
        backdropFilter: 'blur(10px)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="24" height="24" viewBox="0 0 26 26">
            <circle cx="13" cy="13" r="12" fill="none" stroke={th.ink} strokeWidth="1.2" />
            <path d="M7 15 L13 8 L19 15" fill="none" stroke={th.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="13" cy="8" r="1.8" fill={th.accent} />
          </svg>
          <span style={{ fontFamily: th.fontDisplay, fontSize: 20 }}>Adelante</span>
        </a>
        <SignOutButton />
      </nav>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '56px 24px' }}>
        {/* Welcome */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 12 }}>
            My Account
          </div>
          <h1 style={{ fontFamily: th.fontDisplay, fontSize: 56, fontWeight: 400, letterSpacing: -1.5, lineHeight: 1 }}>
            Welcome back,<br />
            <span style={{ fontStyle: 'italic', color: th.accent }}>{name}.</span>
          </h1>
        </div>

        {/* Upcoming sessions placeholder */}
        <div style={{
          background: th.cardBg, border: `1px solid ${th.border}`,
          borderRadius: th.radius, padding: '32px',
          marginBottom: 24,
        }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted, marginBottom: 16 }}>
            Upcoming sessions
          </div>
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontFamily: th.fontDisplay, fontSize: 22, fontStyle: 'italic', color: th.inkSoft, marginBottom: 20 }}>
              No sessions booked yet.
            </p>
            <a href="/#booking" style={{
              display: 'inline-block',
              background: th.accent, color: th.accentInk,
              padding: '12px 24px', fontSize: 14, fontWeight: 500,
              borderRadius: th.radius, fontFamily: th.fontBody,
            }}>
              Book your free call →
            </a>
          </div>
        </div>

        {/* Profile */}
        <div style={{
          background: th.cardBg, border: `1px solid ${th.border}`,
          borderRadius: th.radius, padding: '32px',
        }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted, marginBottom: 16 }}>
            Profile
          </div>
          <div style={{ fontSize: 15, color: th.inkSoft, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div><span style={{ color: th.muted, fontSize: 12 }}>Name — </span>{user.user_metadata?.full_name || '—'}</div>
            <div><span style={{ color: th.muted, fontSize: 12 }}>Email — </span>{user.email}</div>
            <div><span style={{ color: th.muted, fontSize: 12 }}>Member since — </span>{new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
