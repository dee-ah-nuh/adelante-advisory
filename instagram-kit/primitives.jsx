// Adelante Advisory — Instagram kit content & shared primitives
// All 25 posts, 10 zoom backgrounds, 1 LinkedIn banner. Bilingual.

const BG = '#F5F1EA', BG_ALT = '#ECE5D8', CARD = '#FCF8F1';
const INK = '#1F2B23', INK_SOFT = '#3D4A40', MUTED = '#7A7568';
const ACCENT = '#C45A3B', BORDER = 'rgba(31,43,35,0.15)';
const SERIF = '"Instrument Serif", "Times New Roman", serif';
const SANS = '"Inter Tight", -apple-system, system-ui, sans-serif';
const MONO = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

// Reusable marks ------------------------------------------------------------
const Logo = ({ size = 28, color = INK }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={{flexShrink:0}}>
    <circle cx="16" cy="16" r="15" fill="none" stroke={color} strokeWidth="1.4"/>
    <path d="M8 19 L16 9 L24 19" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="9" r="2.2" fill={ACCENT}/>
  </svg>
);

const Wordmark = ({ light = false, scale = 1 }) => (
  <div style={{display:'flex', alignItems:'center', gap:10*scale}}>
    <Logo size={26*scale} color={light ? BG : INK}/>
    <span style={{fontFamily:SERIF, fontSize:22*scale, letterSpacing:-0.3, color: light ? BG : INK}}>Adelante</span>
    <span style={{fontFamily:MONO, fontSize:10*scale, color: light ? 'rgba(245,241,234,0.6)' : MUTED, letterSpacing:1.5, marginTop:4*scale}}>ADVISORY</span>
  </div>
);

const Eyebrow = ({ children, color = MUTED, size = 12 }) => (
  <div style={{fontFamily:MONO, fontSize:size, letterSpacing:2, textTransform:'uppercase', color, display:'flex', alignItems:'center', gap:10}}>
    <span style={{width:24, height:1, background:color, opacity:0.6}}/>
    {children}
  </div>
);

// Textured paper background (subtle noise using inline svg)
const paperTexture = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.14 0 0 0 0.045 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`;

// Decorative ornaments -------------------------------------------------------
const Ornament = ({ kind = 'dots' }) => {
  if (kind === 'dots') return (
    <div style={{display:'flex', gap:6}}>
      {[0,1,2].map(i => <span key={i} style={{width:4, height:4, borderRadius:'50%', background:ACCENT}}/>)}
    </div>
  );
  if (kind === 'rule') return <div style={{width:48, height:1, background:INK, opacity:0.3}}/>;
  if (kind === 'arrow') return <span style={{color:ACCENT, fontSize:20}}>→</span>;
  if (kind === 'star') return (
    <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1 L9 6 L14 7 L9 8 L8 13 L7 8 L2 7 L7 6 Z" fill={ACCENT}/></svg>
  );
  return null;
};

// Number stamp — for numbered carousels & steps
const NumberStamp = ({ n, color = ACCENT }) => (
  <div style={{fontFamily:MONO, fontSize:11, letterSpacing:2, color, textTransform:'uppercase'}}>{n}</div>
);

// Post frame — wraps each post at exact pixel dimensions
const PostFrame = ({ w, h, bg = BG, children, id, label }) => (
  <div data-post-id={id} data-post-label={label} style={{
    width:w, height:h, background:bg, position:'relative', overflow:'hidden',
    fontFamily:SANS, color:INK, boxShadow:'0 2px 12px rgba(31,43,35,0.08)',
    flexShrink:0,
  }}>
    {children}
  </div>
);

// Footer bar used across most posts
const PostFooter = ({ light = false, handle = '@adelanteadvisory', right = 'adelanteadvisory.com' }) => (
  <div style={{
    position:'absolute', left:64, right:64, bottom:52,
    display:'flex', justifyContent:'space-between', alignItems:'center',
    fontFamily:MONO, fontSize:12, letterSpacing:1.5, textTransform:'uppercase',
    color: light ? 'rgba(245,241,234,0.7)' : MUTED,
  }}>
    <div style={{display:'flex', alignItems:'center', gap:10}}>
      <Logo size={18} color={light ? BG : INK}/>
      <span>{handle}</span>
    </div>
    <span>{right}</span>
  </div>
);

// Bilingual divider label
const BiRule = ({ en, es, color = MUTED }) => (
  <div style={{display:'flex', alignItems:'center', gap:14, fontFamily:MONO, fontSize:10, letterSpacing:2, textTransform:'uppercase', color}}>
    <span>{en}</span>
    <span style={{width:24, height:1, background:color, opacity:0.5}}/>
    <span style={{fontStyle:'italic', textTransform:'none', fontFamily:SERIF, fontSize:13, letterSpacing:0}}>{es}</span>
  </div>
);

Object.assign(window, {
  BG, BG_ALT, CARD, INK, INK_SOFT, MUTED, ACCENT, BORDER,
  SERIF, SANS, MONO, paperTexture,
  Logo, Wordmark, Eyebrow, Ornament, NumberStamp, PostFrame, PostFooter, BiRule,
});
