// Adelante Advisory — 10 Zoom backgrounds (1920×1080) + LinkedIn banner (1584×396)
// Reusable, subtle. Meant to sit behind Paty / Diana on calls.

const ZoomFrame = ({ bg = BG, children, id, label }) => (
  <div data-post-id={id} data-post-label={label} style={{width:1920, height:1080, background:bg, position:'relative', overflow:'hidden', fontFamily:SANS, flexShrink:0, boxShadow:'0 2px 12px rgba(31,43,35,0.08)'}}>
    {children}
  </div>
);

// Subtle wordmark corner — doesn't distract from webcam
const ZoomBrandCorner = ({ light = false, position = 'bottom-left' }) => {
  const pos = {
    'bottom-left':  { bottom:56, left:72 },
    'bottom-right': { bottom:56, right:72, alignSelf:'flex-end' },
    'top-right':    { top:56, right:72 },
    'top-left':     { top:56, left:72 },
  }[position];
  return (
    <div style={{position:'absolute', ...pos, display:'flex', alignItems:'center', gap:12, opacity:0.85}}>
      <svg width={28} height={28} viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" fill="none" stroke={light ? BG : INK} strokeWidth="1.4"/>
        <path d="M8 19 L16 9 L24 19" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="9" r="2.2" fill={ACCENT}/>
      </svg>
      <div>
        <div style={{fontFamily:SERIF, fontSize:22, letterSpacing:-0.3, color: light ? BG : INK}}>Adelante Advisory</div>
        <div style={{fontFamily:MONO, fontSize:11, letterSpacing:2, color: light ? 'rgba(245,241,234,0.65)' : MUTED, textTransform:'uppercase', marginTop:2}}>adelanteadvisory.com</div>
      </div>
    </div>
  );
};

// ============================================================
// Z01 — Minimal warm (solid bg, corner wordmark only)
// ============================================================
const Zoom01 = () => (
  <ZoomFrame bg={BG} id="z01" label="Minimal warm">
    <ZoomBrandCorner/>
  </ZoomFrame>
);

// ============================================================
// Z02 — Terracotta accent rule — left
// ============================================================
const Zoom02 = () => (
  <ZoomFrame bg={BG} id="z02" label="Terracotta rule left">
    <div style={{position:'absolute', top:0, bottom:0, left:0, width:16, background:ACCENT}}/>
    <div style={{position:'absolute', top:0, bottom:0, left:16, width:1, background:BORDER}}/>
    <ZoomBrandCorner position="bottom-right"/>
  </ZoomFrame>
);

// ============================================================
// Z03 — Deep ink (dark mode — for evening calls)
// ============================================================
const Zoom03 = () => (
  <ZoomFrame bg={INK} id="z03" label="Deep ink">
    <div style={{position:'absolute', top:0, bottom:0, left:0, width:16, background:ACCENT}}/>
    <ZoomBrandCorner light position="bottom-right"/>
  </ZoomFrame>
);

// ============================================================
// Z04 — Italic quote (stays visible on call)
// ============================================================
const Zoom04 = () => (
  <ZoomFrame bg={BG_ALT} id="z04" label="Italic quote — adelante">
    <div style={{position:'absolute', top:0, right:0, width:680, height:'100%', background:BG}}/>
    <div style={{position:'absolute', top:120, left:96, right:760, color:INK}}>
      <div style={{fontFamily:MONO, fontSize:13, letterSpacing:2, color:MUTED, textTransform:'uppercase', marginBottom:24}}>
        <span style={{display:'inline-block', width:24, height:1, background:MUTED, verticalAlign:'middle', marginRight:10}}/>
        A word
      </div>
      <div style={{fontFamily:SERIF, fontSize:180, lineHeight:0.9, letterSpacing:-5, color:INK, fontStyle:'italic', fontWeight:400}}>
        adelante
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:28, color:INK_SOFT, marginTop:32, maxWidth:720, lineHeight:1.3}}>
        forward. onward. come in — <span style={{color:ACCENT}}>you're welcome here.</span>
      </div>
    </div>
    <ZoomBrandCorner position="bottom-left"/>
  </ZoomFrame>
);

// ============================================================
// Z05 — NY + Chicago (place-based)
// ============================================================
const Zoom05 = () => (
  <ZoomFrame bg={BG} id="z05" label="NY + Chicago">
    <div style={{position:'absolute', top:180, left:120, right:120, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div>
        <div style={{fontFamily:MONO, fontSize:13, letterSpacing:2, color:MUTED, textTransform:'uppercase', marginBottom:18}}>
          <span style={{display:'inline-block', width:24, height:1, background:MUTED, verticalAlign:'middle', marginRight:10}}/>
          Based in
        </div>
        <div style={{fontFamily:SERIF, fontSize:120, lineHeight:1, letterSpacing:-3, color:INK, fontStyle:'italic', fontWeight:400}}>
          New York
        </div>
        <div style={{fontFamily:SERIF, fontSize:48, lineHeight:1.2, letterSpacing:-1, color:INK_SOFT, marginTop:12}}>
          &amp; <span style={{color:ACCENT, fontStyle:'italic'}}>Chicago.</span>
        </div>
      </div>
    </div>
    <ZoomBrandCorner position="bottom-left"/>
  </ZoomFrame>
);

// ============================================================
// Z06 — Mentor letter texture
// ============================================================
const Zoom06 = () => (
  <ZoomFrame bg={BG} id="z06" label="Letter — mentor">
    <div style={{position:'absolute', top:140, left:140, fontFamily:SERIF, fontStyle:'italic', fontSize:40, color:INK, lineHeight:1.35, maxWidth:680}}>
      Hey —<br/>
      <span style={{color:INK_SOFT}}>we've got you.</span>
    </div>
    <div style={{position:'absolute', bottom:180, left:140, fontFamily:SERIF, fontStyle:'italic', fontSize:28, color:ACCENT}}>
      — Paty &amp; Diana
    </div>
    <ZoomBrandCorner position="bottom-right"/>
  </ZoomFrame>
);

// ============================================================
// Z07 — Two-color split
// ============================================================
const Zoom07 = () => (
  <ZoomFrame bg={BG} id="z07" label="Split — off-white / tint">
    <div style={{position:'absolute', top:0, bottom:0, right:0, width:'42%', background:'#E8D4C4'}}/>
    <div style={{position:'absolute', top:0, bottom:0, left:'58%', width:1, background:BORDER}}/>
    <ZoomBrandCorner position="bottom-left"/>
  </ZoomFrame>
);

// ============================================================
// Z08 — Subtle grid paper (for workshop calls)
// ============================================================
const Zoom08 = () => (
  <ZoomFrame bg={BG} id="z08" label="Workshop grid">
    <div style={{position:'absolute', inset:0, backgroundImage:`linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`, backgroundSize:'64px 64px', opacity:0.5}}/>
    <div style={{position:'absolute', top:120, left:120, fontFamily:SERIF, fontSize:88, lineHeight:1, letterSpacing:-2, color:INK, fontWeight:400}}>
      <span style={{fontStyle:'italic', color:ACCENT}}>1:1</span> session
    </div>
    <div style={{position:'absolute', top:230, left:120, fontFamily:SERIF, fontStyle:'italic', fontSize:30, color:INK_SOFT}}>
      Résumé · Interview · Strategy
    </div>
    <ZoomBrandCorner position="bottom-right"/>
  </ZoomFrame>
);

// ============================================================
// Z09 — Big "ADELANTE" letterform (for brand moments)
// ============================================================
const Zoom09 = () => (
  <ZoomFrame bg={BG} id="z09" label="Big letterform">
    <div style={{position:'absolute', top:-40, left:-20, fontFamily:SERIF, fontSize:720, lineHeight:0.85, letterSpacing:-30, color:'rgba(31,43,35,0.06)', fontStyle:'italic', fontWeight:400, whiteSpace:'nowrap'}}>
      adelante
    </div>
    <div style={{position:'absolute', bottom:120, right:120, textAlign:'right', fontFamily:SERIF, fontStyle:'italic', fontSize:48, color:ACCENT, letterSpacing:-1}}>
      your career,<br/>
      <span style={{color:INK}}>finally mapped out.</span>
    </div>
    <ZoomBrandCorner position="bottom-left"/>
  </ZoomFrame>
);

// ============================================================
// Z10 — Bilingual intro (great for intro calls)
// ============================================================
const Zoom10 = () => (
  <ZoomFrame bg={BG} id="z10" label="Bilingual welcome">
    <div style={{position:'absolute', top:140, left:120, right:120, display:'flex', alignItems:'baseline', gap:80}}>
      <div>
        <div style={{fontFamily:MONO, fontSize:13, letterSpacing:2, color:MUTED, textTransform:'uppercase', marginBottom:20}}>
          <span style={{display:'inline-block', width:24, height:1, background:MUTED, verticalAlign:'middle', marginRight:10}}/>
          EN
        </div>
        <div style={{fontFamily:SERIF, fontSize:88, lineHeight:0.98, letterSpacing:-2, color:INK, fontWeight:400}}>
          Welcome.
        </div>
      </div>
      <div>
        <div style={{fontFamily:MONO, fontSize:13, letterSpacing:2, color:MUTED, textTransform:'uppercase', marginBottom:20}}>
          <span style={{display:'inline-block', width:24, height:1, background:MUTED, verticalAlign:'middle', marginRight:10}}/>
          ES
        </div>
        <div style={{fontFamily:SERIF, fontSize:88, lineHeight:0.98, letterSpacing:-2, color:ACCENT, fontStyle:'italic', fontWeight:400}}>
          Bienvenidxs.
        </div>
      </div>
    </div>
    <div style={{position:'absolute', bottom:200, left:120, right:120, fontFamily:SERIF, fontStyle:'italic', fontSize:28, color:INK_SOFT, maxWidth:900}}>
      Take your time. We can do this in English or en español — whatever feels like home.
    </div>
    <ZoomBrandCorner position="bottom-right"/>
  </ZoomFrame>
);

// ============================================================
// LinkedIn banner (1584×396)
// ============================================================
const LinkedInBanner = () => (
  <div data-post-id="linkedin-banner" data-post-label="LinkedIn banner" style={{width:1584, height:396, background:BG, position:'relative', overflow:'hidden', fontFamily:SANS, flexShrink:0, boxShadow:'0 2px 12px rgba(31,43,35,0.08)'}}>
    <div style={{position:'absolute', top:0, bottom:0, left:0, width:8, background:ACCENT}}/>
    <div style={{position:'absolute', top:0, bottom:0, right:0, width:'36%', background:'#E8D4C4'}}/>
    <div style={{position:'absolute', top:0, bottom:0, right:'36%', width:1, background:BORDER}}/>
    <div style={{position:'absolute', top:68, left:80}}>
      <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:28}}>
        <svg width={36} height={36} viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="15" fill="none" stroke={INK} strokeWidth="1.4"/>
          <path d="M8 19 L16 9 L24 19" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="9" r="2.2" fill={ACCENT}/>
        </svg>
        <div style={{fontFamily:SERIF, fontSize:32, letterSpacing:-0.3, color:INK}}>Adelante Advisory</div>
        <div style={{fontFamily:MONO, fontSize:12, color:MUTED, letterSpacing:2, textTransform:'uppercase', marginTop:6}}>EST. 2026</div>
      </div>
      <div style={{fontFamily:SERIF, fontSize:72, lineHeight:1, letterSpacing:-1.5, color:INK, fontWeight:400, marginBottom:12}}>
        Your career, <span style={{fontStyle:'italic', color:ACCENT}}>finally mapped out.</span>
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:24, color:INK_SOFT}}>
        Career coaching for Latin Americans navigating US corporate life.
      </div>
    </div>
    <div style={{position:'absolute', top:140, right:80, textAlign:'right'}}>
      <div style={{fontFamily:MONO, fontSize:12, letterSpacing:2, color:MUTED, textTransform:'uppercase', marginBottom:14}}>
        Based in
      </div>
      <div style={{fontFamily:SERIF, fontSize:52, lineHeight:1, letterSpacing:-1.2, color:INK, fontStyle:'italic', fontWeight:400}}>
        New York<br/>
        <span style={{color:ACCENT}}>&amp; Chicago</span>
      </div>
      <div style={{fontFamily:MONO, fontSize:12, letterSpacing:1.5, color:MUTED, marginTop:22, textTransform:'uppercase'}}>
        adelanteadvisory.com
      </div>
    </div>
  </div>
);

Object.assign(window, {
  Zoom01, Zoom02, Zoom03, Zoom04, Zoom05, Zoom06, Zoom07, Zoom08, Zoom09, Zoom10,
  LinkedInBanner,
});
