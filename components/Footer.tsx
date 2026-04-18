import { theme as th } from '@/lib/theme';
import { CONTACT_EMAIL } from '@/content/shared';
import type { Content } from '@/content/en';

type Props = { c: Content };

export default function Footer({ c }: Props) {
  return (
    <footer style={{ padding: '80px 48px 48px', background: th.ink, color: th.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: 48, marginBottom: 64,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <svg width="26" height="26" viewBox="0 0 26 26">
                <circle cx="13" cy="13" r="12" fill="none" stroke={th.bg} strokeWidth="1.2" />
                <path d="M7 15 L13 8 L19 15" fill="none" stroke={th.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="13" cy="8" r="1.8" fill={th.accent} />
              </svg>
              <span style={{ fontFamily: th.fontDisplay, fontSize: 24 }}>Adelante Advisory</span>
            </div>
            <p style={{
              fontFamily: th.fontDisplay, fontSize: 28,
              fontStyle: 'italic', maxWidth: 400, lineHeight: 1.2,
            }}>{c.footer.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: th.bg, opacity: 0.5, marginBottom: 12 }}>
              Contact
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: th.bg, fontSize: 15 }}>
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Follow */}
          <div>
            <div style={{ fontFamily: th.fontMono, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: th.bg, opacity: 0.5, marginBottom: 12 }}>
              Follow
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="#" style={{ color: th.bg, fontSize: 15 }}>Instagram ↗</a>
              <a href="#" style={{ color: th.bg, fontSize: 15 }}>LinkedIn ↗</a>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: th.fontMono, fontSize: 11, letterSpacing: 0.5,
          color: th.bg, opacity: 0.6,
          flexWrap: 'wrap', gap: 12,
        }}>
          <span>© 2026 Adelante Advisory</span>
          <span>{c.footer.made}</span>
        </div>
      </div>
    </footer>
  );
}
