// Adelante Advisory — Instagram posts 10–17
// Myth vs truth, CTAs, founder-forward, stat hooks

// ============================================================
// POST 10 — CTA: Book a free call (IG 1:1)
// ============================================================
const Post10 = () => (
  <PostFrame w={1080} h={1080} bg={BG} id="10" label="CTA — free call">
    <div style={{position:'absolute', top:64, left:64, right:64}}>
      <Eyebrow>Book · Agenda</Eyebrow>
    </div>
    <div style={{position:'absolute', top:220, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:132, lineHeight:0.95, letterSpacing:-3, color:INK, fontWeight:400}}>
        <span style={{fontStyle:'italic'}}>15 minutes.</span><br/>
        No pitch.<br/>
        Just a <span style={{color:ACCENT, fontStyle:'italic'}}>conversation.</span>
      </div>
    </div>
    <div style={{position:'absolute', bottom:240, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:30, color:INK_SOFT, marginBottom:28}}>
        15 minutos. Sin pitch. Solo una conversación.
      </div>
      <div style={{display:'inline-block', background:INK, color:BG, padding:'20px 32px', borderRadius:4, fontFamily:SANS, fontSize:19, fontWeight:500}}>
        adelanteadvisory.com →
      </div>
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 11 — Founder intro: Paty (IG 4:5)
// ============================================================
const FounderCard = ({ id, label, name, initials, role, company, city, cityEs, tintLight, quoteEn, quoteEs, specialtyEn, specialtyEs }) => (
  <PostFrame w={1080} h={1350} bg={BG} id={id} label={label}>
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Eyebrow>Meet the advisors · Conócenos</Eyebrow>
      <Wordmark scale={0.7}/>
    </div>
    <div style={{position:'absolute', top:160, left:64, width:460, height:560, background:tintLight, border:`1px solid ${BORDER}`, padding:16, boxSizing:'border-box', display:'flex', alignItems:'flex-end', justifyContent:'center', transform:'rotate(-1.2deg)'}}>
      <div style={{fontFamily:SERIF, fontSize:260, color:'rgba(31,43,35,0.18)', letterSpacing:-8, lineHeight:1, marginBottom:-18}}>{initials}</div>
      <div style={{position:'absolute', bottom:14, left:20, fontFamily:SERIF, fontStyle:'italic', fontSize:30, color:'#fff', textShadow:'0 1px 8px rgba(0,0,0,0.5)'}}>{city}</div>
    </div>
    <div style={{position:'absolute', top:200, left:580, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:80, lineHeight:1, letterSpacing:-1.5, color:INK, fontWeight:400}}>{name}</div>
      <div style={{fontFamily:SANS, fontSize:18, color:INK_SOFT, marginTop:12, maxWidth:420, lineHeight:1.5}}>{role}</div>
      <div style={{fontFamily:MONO, fontSize:12, letterSpacing:1.5, color:ACCENT, marginTop:10, textTransform:'uppercase'}}>{company}</div>
      <div style={{width:40, height:1, background:INK, opacity:0.25, margin:'36px 0'}}/>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:32, color:INK, lineHeight:1.25, maxWidth:440}}>"{quoteEn}"</div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:MUTED, marginTop:18, lineHeight:1.3, maxWidth:440}}>"{quoteEs}"</div>
    </div>
    <div style={{position:'absolute', bottom:170, left:64, right:64, fontFamily:MONO, fontSize:12, color:MUTED, letterSpacing:1.5, textTransform:'uppercase'}}>
      SPECIALTY · <span style={{color:INK}}>{specialtyEn}</span>
    </div>
    <PostFooter/>
  </PostFrame>
);

const Post11 = () => <FounderCard
  id="11" label="Founder — Paty"
  name="Paty Vega" initials="PV" role="Product Marketing Manager"
  company="S&P Global · New York" city="New York" cityEs="Nueva York"
  tintLight="#E8D4C4"
  quoteEn="Your story isn't your weakness. It's the reason they'll remember you."
  quoteEs="Tu historia no es tu debilidad. Es por lo que te van a recordar."
  specialtyEn="Marketing · Finance · Storytelling"
  specialtyEs="Marketing · Finanzas · Storytelling"
/>;

// ============================================================
// POST 12 — Founder intro: Diana (IG 4:5)
// ============================================================
const Post12 = () => <FounderCard
  id="12" label="Founder — Diana"
  name="Diana Valladares" initials="DV" role="Senior Consultant, Data Engineering & Architecture"
  company="AArete · Chicago" city="Chicago" cityEs="Chicago"
  tintLight="#D6DFD4"
  quoteEn="Technical interviews aren't trivia. They're storytelling with structure."
  quoteEs="Las entrevistas técnicas no son trivia. Son storytelling con estructura."
  specialtyEn="Consulting · Data · Technical interviews · AI"
  specialtyEs="Consultoría · Data · Entrevistas técnicas · IA"
/>;

// ============================================================
// POST 13 — Myth vs truth: negotiation (IG 1:1)
// ============================================================
const Post13 = () => (
  <PostFrame w={1080} h={1080} bg={BG_ALT} id="13" label="Myth vs truth — negotiation">
    <div style={{position:'absolute', top:64, left:64, right:64}}>
      <BiRule en="Myth vs Truth" es="Mito vs Verdad"/>
    </div>
    <div style={{position:'absolute', top:160, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:40, fontStyle:'italic', color:INK_SOFT, lineHeight:1.2, textDecoration:'line-through', textDecorationColor:'rgba(196,90,59,0.5)', textDecorationThickness:2, marginBottom:48}}>
        "If I negotiate, they'll rescind the offer."
      </div>
      <div style={{fontFamily:SERIF, fontSize:68, lineHeight:1.05, letterSpacing:-1.5, color:INK, fontWeight:400}}>
        They <span style={{fontStyle:'italic', color:ACCENT}}>expect</span> you to negotiate.
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:26, color:INK_SOFT, marginTop:28, lineHeight:1.3}}>
        Esperan que negocies. No vas a perder la oferta.
      </div>
    </div>
    <div style={{position:'absolute', bottom:180, left:64, right:64, display:'flex', alignItems:'center', gap:14, fontFamily:MONO, fontSize:13, color:MUTED, letterSpacing:1.5}}>
      <span style={{width:32, height:1, background:MUTED}}/>
      <span>EVERY OFFER HAS ROOM. <span style={{color:ACCENT}}>★</span> TODA OFERTA TIENE MARGEN.</span>
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 14 — Stat hook: time to first offer (IG 1:1)
// ============================================================
const Post14 = () => (
  <PostFrame w={1080} h={1080} bg={BG} id="14" label="Stat — time to offer">
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between'}}>
      <Eyebrow>Data · Datos</Eyebrow>
      <div style={{fontFamily:MONO, fontSize:11, color:MUTED, letterSpacing:1.5}}>SOURCE: CLIENT AVG</div>
    </div>
    <div style={{position:'absolute', top:200, left:64, right:64, display:'flex', alignItems:'baseline', justifyContent:'center', gap:20}}>
      <span style={{fontFamily:SERIF, fontSize:300, lineHeight:1, letterSpacing:-10, color:INK, fontWeight:400}}>9</span>
      <span style={{fontFamily:SERIF, fontSize:100, fontStyle:'italic', color:ACCENT}}>weeks</span>
    </div>
    <div style={{position:'absolute', top:560, left:64, right:64, textAlign:'center'}}>
      <div style={{fontFamily:SERIF, fontSize:38, color:INK, lineHeight:1.25, maxWidth:860, margin:'0 auto'}}>
        Average time from our first session<br/>to a <span style={{fontStyle:'italic', color:ACCENT}}>first offer.</span>
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:24, color:INK_SOFT, marginTop:28}}>
        Tiempo promedio de primera sesión a primera oferta.
      </div>
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 15 — Tip carousel cover: Résumé edition (4:5)
// ============================================================
const Post15 = () => (
  <PostFrame w={1080} h={1350} bg={ACCENT} id="15" label="Cover — Résumé tips">
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between', color:BG}}>
      <Eyebrow color="rgba(245,241,234,0.7)">Résumé tips · 01 / 05</Eyebrow>
      <div style={{fontFamily:MONO, fontSize:12, letterSpacing:1.5, color:'rgba(245,241,234,0.7)'}}>SWIPE →</div>
    </div>
    <div style={{position:'absolute', top:320, left:64, right:64, color:BG}}>
      <div style={{fontFamily:SERIF, fontSize:170, lineHeight:0.95, letterSpacing:-5, fontWeight:400}}>
        How to<br/>
        <span style={{fontStyle:'italic'}}>rewrite</span><br/>
        your résumé<br/>
        <span style={{fontStyle:'italic', color:INK}}>like a gringo.*</span>
      </div>
    </div>
    <div style={{position:'absolute', bottom:180, left:64, right:64, fontFamily:SERIF, fontStyle:'italic', fontSize:26, color:'rgba(245,241,234,0.85)'}}>
      *sin perder tu historia.
    </div>
    <PostFooter light handle="@adelanteadvisory"/>
  </PostFrame>
);

// ============================================================
// POST 16 — Résumé tip: verbs (4:5)
// ============================================================
const TipCard = ({ id, label, n, total, titleEn, titleEs, rows }) => (
  <PostFrame w={1080} h={1350} bg={BG} id={id} label={label}>
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between'}}>
      <Eyebrow>Résumé tips · 0{n} / 0{total}</Eyebrow>
      <div style={{fontFamily:MONO, fontSize:12, color:MUTED, letterSpacing:1.5}}>SWIPE →</div>
    </div>
    <div style={{position:'absolute', top:200, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:80, lineHeight:1, letterSpacing:-1.5, color:INK, fontWeight:400, maxWidth:900}}>
        {titleEn}
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:26, color:INK_SOFT, marginTop:18, maxWidth:900}}>
        {titleEs}
      </div>
    </div>
    <div style={{position:'absolute', top:540, left:64, right:64}}>
      {rows.map((r, i) => (
        <div key={i} style={{display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:32, alignItems:'center', padding:'28px 0', borderTop: i === 0 ? `1px solid ${BORDER}` : 'none', borderBottom:`1px solid ${BORDER}`}}>
          <div style={{fontFamily:SERIF, fontSize:28, color:INK_SOFT, textDecoration:'line-through', textDecorationColor:'rgba(196,90,59,0.5)', fontStyle:'italic'}}>{r.bad}</div>
          <div style={{color:ACCENT, fontSize:26}}>→</div>
          <div style={{fontFamily:SERIF, fontSize:32, color:INK}}>{r.good}</div>
        </div>
      ))}
    </div>
    <PostFooter/>
  </PostFrame>
);

const Post16 = () => <TipCard id="16" label="Tip — verbs" n={2} total={5}
  titleEn="Verbs do the heavy lifting."
  titleEs="Los verbos hacen el trabajo pesado."
  rows={[
    { bad: "Responsible for sales reports", good: "Drove 22% revenue growth" },
    { bad: "Worked on marketing campaigns", good: "Launched 4 campaigns, +38% leads" },
    { bad: "Helped with the migration",    good: "Led SQL → Snowflake migration" },
  ]}
/>;

// ============================================================
// POST 17 — Résumé tip: one page (4:5)
// ============================================================
const Post17 = () => (
  <PostFrame w={1080} h={1350} bg={BG} id="17" label="Tip — one page">
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between'}}>
      <Eyebrow>Résumé tips · 03 / 05</Eyebrow>
      <div style={{fontFamily:MONO, fontSize:12, color:MUTED, letterSpacing:1.5}}>SWIPE →</div>
    </div>
    <div style={{position:'absolute', top:200, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:280, lineHeight:1, letterSpacing:-10, color:ACCENT, fontWeight:400, fontStyle:'italic'}}>1</div>
      <div style={{fontFamily:SERIF, fontSize:80, lineHeight:1.02, letterSpacing:-1.5, color:INK, fontWeight:400, marginTop:-40}}>
        page. Always.
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:28, color:INK_SOFT, marginTop:20}}>
        Una página. Siempre.
      </div>
    </div>
    <div style={{position:'absolute', top:820, left:64, right:64}}>
      <div style={{width:48, height:1, background:INK, opacity:0.3, marginBottom:28}}/>
      <div style={{fontFamily:SANS, fontSize:20, lineHeight:1.55, color:INK_SOFT, maxWidth:900}}>
        If you have less than 10 years of experience, one page is not a suggestion — it's the rule. Recruiters skim for 6 seconds. Make every line earn its spot.
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:20, color:MUTED, marginTop:18, maxWidth:900}}>
        Con menos de 10 años de experiencia, una página es la regla. Cada línea tiene que ganarse el espacio.
      </div>
    </div>
    <PostFooter/>
  </PostFrame>
);

Object.assign(window, { Post10, Post11, Post12, Post13, Post14, Post15, Post16, Post17, FounderCard, TipCard });
