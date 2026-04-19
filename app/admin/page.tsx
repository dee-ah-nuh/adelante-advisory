import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { isAdmin } from '@/lib/admin';
import { theme as th } from '@/lib/theme';
import SignOutButton from '@/app/dashboard/SignOutButton';

const stageLabel: Record<string, string> = {
  high_school: 'High school',
  college: 'College',
  recent_grad: 'Recent grad',
  early_career: 'Early career',
};

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !isAdmin(user.email)) redirect('/dashboard');

  const { data: submissions } = await supabase
    .from('intake_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  const total = submissions?.length ?? 0;

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: th.muted }}>
            Admin
          </span>
          <SignOutButton />
        </div>
      </nav>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: th.fontMono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: th.muted, marginBottom: 12 }}>
            Admin dashboard
          </div>
          <h1 style={{ fontFamily: th.fontDisplay, fontSize: 52, fontWeight: 400, letterSpacing: -1.5, lineHeight: 1 }}>
            Intake<br />
            <span style={{ fontStyle: 'italic', color: th.accent }}>submissions.</span>
          </h1>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 40 }}>
          <StatCard label="Total submissions" value={total} />
          <StatCard label="This week" value={
            (submissions ?? []).filter(s => {
              const d = new Date(s.created_at);
              const now = new Date();
              return (now.getTime() - d.getTime()) < 7 * 24 * 60 * 60 * 1000;
            }).length
          } />
          <StatCard label="College / grad students" value={
            (submissions ?? []).filter(s => s.stage === 'college' || s.stage === 'recent_grad').length
          } />
        </div>

        {/* Submissions table */}
        {total === 0 ? (
          <div style={{
            background: th.cardBg, border: `1px solid ${th.border}`,
            borderRadius: th.radius, padding: '48px 32px', textAlign: 'center',
          }}>
            <p style={{ fontFamily: th.fontDisplay, fontSize: 22, fontStyle: 'italic', color: th.inkSoft }}>
              No submissions yet.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {(submissions ?? []).map(s => (
              <div key={s.id} style={{
                background: th.cardBg, border: `1px solid ${th.border}`,
                borderRadius: th.radius, padding: '28px 32px',
              }}>
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div>
                    <div style={{ fontFamily: th.fontDisplay, fontSize: 22, fontWeight: 400, letterSpacing: -0.3, marginBottom: 4 }}>
                      {s.name}
                    </div>
                    <div style={{ fontSize: 13, color: th.inkSoft }}>{s.email}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {s.stage && (
                      <div style={{
                        display: 'inline-block', fontFamily: th.fontMono, fontSize: 9,
                        letterSpacing: 1.5, textTransform: 'uppercase', color: th.accentInk,
                        background: th.accent, padding: '4px 10px', borderRadius: 2, marginBottom: 6,
                      }}>
                        {stageLabel[s.stage] ?? s.stage}
                      </div>
                    )}
                    <div style={{ fontSize: 11, color: th.muted, fontFamily: th.fontMono }}>
                      {new Date(s.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </div>

                {/* Detail grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px' }}>
                  {s.major && <Detail label="Field of study" value={s.major} />}
                  {s.linkedin_url && (
                    <Detail label="LinkedIn" value={
                      <a href={s.linkedin_url} target="_blank" rel="noopener noreferrer" style={{ color: th.accent }}>
                        {s.linkedin_url} ↗
                      </a>
                    } />
                  )}
                  {s.interests?.length > 0 && (
                    <Detail label="Interested in" value={s.interests.join(', ')} />
                  )}
                  {s.needs?.length > 0 && (
                    <Detail label="Needs help with" value={s.needs.join(', ')} />
                  )}
                  {s.notes && (
                    <Detail label="Notes" value={s.notes} />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div style={{
      background: th.cardBg, border: `1px solid ${th.border}`,
      borderRadius: th.radius, padding: '20px 24px', flex: 1,
    }}>
      <div style={{ fontFamily: th.fontMono, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted, marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontFamily: th.fontDisplay, fontSize: 36, fontWeight: 400, color: th.ink }}>
        {value}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: th.muted, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, color: th.inkSoft, lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}
