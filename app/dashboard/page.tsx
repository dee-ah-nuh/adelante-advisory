import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { isAdmin } from '@/lib/admin';
import { theme as th } from '@/lib/theme';
import SignOutButton from './SignOutButton';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');
  if (isAdmin(user.email)) redirect('/admin');

  const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'there';

  // Fetch their intake submission (if any)
  const { data: intake } = await supabase
    .from('intake_submissions')
    .select('*')
    .eq('email', user.email!)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const stageLabel: Record<string, string> = {
    high_school: 'High school',
    college: 'College',
    recent_grad: 'Recent grad',
    early_career: 'Early career',
  };

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
        <SignOutButton />
      </nav>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '56px 24px' }}>
        {/* Welcome */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 12 }}>
            My profile
          </div>
          <h1 style={{ fontFamily: th.fontDisplay, fontSize: 52, fontWeight: 400, letterSpacing: -1.5, lineHeight: 1 }}>
            Welcome back,<br />
            <span style={{ fontStyle: 'italic', color: th.accent }}>{name}.</span>
          </h1>
        </div>

        {/* Upcoming sessions */}
        <div style={{
          background: th.cardBg, border: `1px solid ${th.border}`,
          borderRadius: th.radius, padding: 32, marginBottom: 24,
        }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted, marginBottom: 16 }}>
            Upcoming sessions
          </div>
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <p style={{ fontFamily: th.fontDisplay, fontSize: 20, fontStyle: 'italic', color: th.inkSoft, marginBottom: 20 }}>
              No sessions booked yet.
            </p>
            <a href="/#booking" style={{
              display: 'inline-block', background: th.accent, color: th.accentInk,
              padding: '12px 24px', fontSize: 14, fontWeight: 500,
              borderRadius: th.radius, fontFamily: th.fontBody, textDecoration: 'none',
            }}>Book your free call →</a>
          </div>
        </div>

        {/* Profile / intake */}
        {intake ? (
          <div style={{
            background: th.cardBg, border: `1px solid ${th.border}`,
            borderRadius: th.radius, padding: 32, marginBottom: 24,
          }}>
            <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted, marginBottom: 20 }}>
              Your profile
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Row label="Name" value={intake.name} />
              <Row label="Email" value={intake.email} />
              {intake.stage && <Row label="Stage" value={stageLabel[intake.stage] ?? intake.stage} />}
              {intake.major && <Row label="Field of study" value={intake.major} />}
              {intake.interests?.length > 0 && <Row label="Interests" value={intake.interests.join(', ')} />}
              {intake.needs?.length > 0 && <Row label="Looking for help with" value={intake.needs.join(', ')} />}
              {intake.linkedin_url && (
                <Row label="LinkedIn" value={
                  <a href={intake.linkedin_url} target="_blank" rel="noopener noreferrer"
                    style={{ color: th.accent, fontSize: 14 }}>
                    {intake.linkedin_url} ↗
                  </a>
                } />
              )}
            </div>
            <div style={{ marginTop: 24, borderTop: `1px solid ${th.border}`, paddingTop: 20 }}>
              <a href="/intake" style={{ fontSize: 13, color: th.muted, borderBottom: `1px solid ${th.border}` }}>
                Update your profile →
              </a>
            </div>
          </div>
        ) : (
          <div style={{
            background: th.cardBg, border: `1px solid ${th.border}`,
            borderRadius: th.radius, padding: 32, marginBottom: 24,
          }}>
            <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted, marginBottom: 16 }}>
              Your profile
            </div>
            <p style={{ fontFamily: th.fontDisplay, fontSize: 20, fontStyle: 'italic', color: th.inkSoft, marginBottom: 20 }}>
              Tell us a bit about yourself so we can help you better.
            </p>
            <a href="/intake" style={{
              display: 'inline-block', background: th.ink, color: th.accentInk,
              padding: '12px 24px', fontSize: 14, fontWeight: 500,
              borderRadius: th.radius, fontFamily: th.fontBody, textDecoration: 'none',
            }}>Complete your profile →</a>
          </div>
        )}

        {/* Account info */}
        <div style={{
          background: th.cardBg, border: `1px solid ${th.border}`,
          borderRadius: th.radius, padding: 32,
        }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted, marginBottom: 16 }}>
            Account
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Row label="Email" value={user.email!} />
            <Row label="Member since" value={new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} />
          </div>
        </div>
      </main>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: '#7A7568', minWidth: 140, paddingTop: 2 }}>
        {label}
      </span>
      <span style={{ fontSize: 14, color: '#3D4A40', lineHeight: 1.5 }}>{value}</span>
    </div>
  );
}
