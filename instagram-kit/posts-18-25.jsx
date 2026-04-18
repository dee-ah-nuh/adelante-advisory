// Adelante Advisory — Instagram posts 18–25
// LinkedIn 1:1 posts, CTAs, announcements, final variety

// ============================================================
// POST 18 — Q&A prompt (LinkedIn 1200×1200)
// ============================================================
const Post18 = () => (
  <PostFrame w={1200} h={1200} bg={BG} id="18" label="Q&A prompt — LinkedIn">
    <div style={{position:'absolute', top:72, left:72, right:72, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Eyebrow>LinkedIn · Question</Eyebrow>
      <Wordmark scale={0.85}/>
    </div>
    <div style={{position:'absolute', top:280, left:72, right:72}}>
      <div style={{fontFamily:SERIF, fontSize:200, lineHeight:0.88, letterSpacing:-5, color:ACCENT, fontWeight:400, fontStyle:'italic'}}>"</div>
      <div style={{fontFamily:SERIF, fontSize:104, lineHeight:1.02, letterSpacing:-2, color:INK, fontWeight:400, marginTop:-60}}>
        What's the <span style={{fontStyle:'italic', color:ACCENT}}>one thing</span><br/>
        you wish someone<br/>
        had told you before<br/>
        <span style={{fontStyle:'italic'}}>your first US job?</span>
      </div>
    </div>
    <div style={{position:'absolute', bottom:220, left:72, right:72, fontFamily:SERIF, fontStyle:'italic', fontSize:28, color:INK_SOFT}}>
      Tell us in the comments. ↓
    </div>
    <PostFooter handle="Adelante Advisory · LinkedIn" right="adelanteadvisory.com"/>
  </PostFrame>
);

// ============================================================
// POST 19 — Cultural moment: salvadoreña pride (4:5)
// ============================================================
const Post19 = () => (
  <PostFrame w={1080} h={1350} bg={INK} id="19" label="Cultural — salvadoreña">
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between', color:BG}}>
      <Eyebrow color="rgba(245,241,234,0.7)">From the founders</Eyebrow>
      <Ornament kind="star"/>
    </div>
    <div style={{position:'absolute', top:280, left:64, right:64, color:BG}}>
      <div style={{fontFamily:SERIF, fontSize:132, lineHeight:0.95, letterSpacing:-3, fontWeight:400}}>
        Dos <span style={{fontStyle:'italic', color:ACCENT}}>salvadoreñas.</span>
      </div>
      <div style={{fontFamily:SERIF, fontSize:100, lineHeight:1, letterSpacing:-2, fontWeight:400, marginTop:8, color:'rgba(245,241,234,0.85)', fontStyle:'italic'}}>
        One in New York.<br/>One in Chicago.
      </div>
    </div>
    <div style={{position:'absolute', bottom:260, left:64, right:64, color:BG}}>
      <div style={{width:48, height:1, background:'rgba(245,241,234,0.4)', marginBottom:28}}/>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:32, lineHeight:1.35, maxWidth:820}}>
        Building the mentor we wish we'd had.
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:'rgba(245,241,234,0.7)', marginTop:16}}>
        Construyendo la mentora que nos hubiera gustado tener.
      </div>
    </div>
    <PostFooter light/>
  </PostFrame>
);

// ============================================================
// POST 20 — Packages announcement (1:1)
// ============================================================
const Post20 = () => (
  <PostFrame w={1080} h={1080} bg={BG} id="20" label="Packages announcement">
    <div style={{position:'absolute', top:64, left:64, right:64}}>
      <Eyebrow>New · Nuevo</Eyebrow>
    </div>
    <div style={{position:'absolute', top:180, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:88, lineHeight:1, letterSpacing:-2, color:INK, fontWeight:400}}>
        Four ways to<br/>
        <span style={{fontStyle:'italic', color:ACCENT}}>work with us.</span>
      </div>
    </div>
    <div style={{position:'absolute', top:460, left:64, right:64, display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:16}}>
      {[
        { name:'Starter',      sessions:'3 sessions',  tag:'Clarity + direction' },
        { name:'Core',         sessions:'6 sessions',  tag:'Structure + positioning', featured:true },
        { name:'Acceleration', sessions:'12 sessions', tag:'Execution + momentum' },
        { name:'Ongoing',      sessions:'20 sessions', tag:'Long-term strategy' },
      ].map((p, i) => (
        <div key={i} style={{background: p.featured ? INK : CARD, color: p.featured ? BG : INK, border:`1px solid ${p.featured ? INK : BORDER}`, padding:'22px 24px', borderRadius:4, position:'relative'}}>
          {p.featured && <div style={{position:'absolute', top:-8, left:18, background:ACCENT, color:BG, padding:'3px 10px', fontSize:10, letterSpacing:1.5, fontFamily:MONO, textTransform:'uppercase', borderRadius:2}}>most popular</div>}
          <div style={{fontFamily:SERIF, fontSize:34, letterSpacing:-0.8}}>{p.name}</div>
          <div style={{fontFamily:MONO, fontSize:11, letterSpacing:1.5, color: p.featured ? 'rgba(245,241,234,0.6)' : MUTED, marginTop:2, textTransform:'uppercase'}}>{p.sessions}</div>
          <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:16, color: p.featured ? BG : ACCENT, marginTop:12}}>{p.tag}</div>
        </div>
      ))}
    </div>
    <div style={{position:'absolute', bottom:130, left:64, right:64, fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:INK_SOFT}}>
      Start small. Grow with us. <span style={{color:ACCENT}}>→</span>
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 21 — Tip: Coffee chats (4:5)
// ============================================================
const Post21 = () => (
  <PostFrame w={1080} h={1350} bg={BG_ALT} id="21" label="Tip — coffee chats">
    <div style={{position:'absolute', top:64, left:64, right:64}}>
      <BiRule en="Ritual" es="Ritual"/>
    </div>
    <div style={{position:'absolute', top:200, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:110, lineHeight:0.98, letterSpacing:-2.5, color:INK, fontWeight:400}}>
        <span style={{fontStyle:'italic', color:ACCENT}}>3</span> coffee chats<br/>
        a week.<br/>
        <span style={{fontStyle:'italic'}}>Every week.</span>
      </div>
    </div>
    <div style={{position:'absolute', top:740, left:64, right:64}}>
      <div style={{width:48, height:1, background:INK, opacity:0.3, marginBottom:28}}/>
      <div style={{fontFamily:SANS, fontSize:20, lineHeight:1.55, color:INK_SOFT, maxWidth:900}}>
        Pick three people whose job you'd want in two years. Ask for 20 minutes. You don't need to sell yourself — you need to ask good questions. That's the whole job.
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:MUTED, marginTop:20, lineHeight:1.35, maxWidth:900}}>
        Elige tres personas cuyo trabajo quisieras tener en dos años. Pide 20 minutos. No vendas — pregunta bien.
      </div>
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 22 — Stat: clients placed (LinkedIn 1:1)
// ============================================================
const Post22 = () => (
  <PostFrame w={1200} h={1200} bg={BG} id="22" label="Stat — placement rate — LinkedIn">
    <div style={{position:'absolute', top:72, left:72, right:72, display:'flex', justifyContent:'space-between'}}>
      <Eyebrow>LinkedIn · Milestone</Eyebrow>
      <Wordmark scale={0.85}/>
    </div>
    <div style={{position:'absolute', top:280, left:72, right:72, textAlign:'center'}}>
      <div style={{fontFamily:SERIF, fontSize:360, lineHeight:1, letterSpacing:-14, color:ACCENT, fontWeight:400, fontStyle:'italic'}}>4×</div>
    </div>
    <div style={{position:'absolute', top:720, left:72, right:72, textAlign:'center'}}>
      <div style={{fontFamily:SERIF, fontSize:52, color:INK, lineHeight:1.1, maxWidth:900, margin:'0 auto', fontWeight:400}}>
        more interviews after our<br/><span style={{fontStyle:'italic', color:ACCENT}}>résumé rewrite.</span>
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:26, color:INK_SOFT, marginTop:28}}>
        4× más entrevistas después del rewrite.
      </div>
    </div>
    <PostFooter handle="Adelante Advisory · LinkedIn"/>
  </PostFrame>
);

// ============================================================
// POST 23 — Final CTA: DMs open (1:1)
// ============================================================
const Post23 = () => (
  <PostFrame w={1080} h={1080} bg={ACCENT} id="23" label="CTA — DMs open">
    <div style={{position:'absolute', top:64, left:64, right:64, color:BG}}>
      <Eyebrow color="rgba(245,241,234,0.75)">DMs · Mensajes</Eyebrow>
    </div>
    <div style={{position:'absolute', top:220, left:64, right:64, color:BG}}>
      <div style={{fontFamily:SERIF, fontSize:136, lineHeight:0.95, letterSpacing:-3, fontWeight:400}}>
        Our DMs<br/>
        are <span style={{fontStyle:'italic', color:INK}}>open.</span>
      </div>
    </div>
    <div style={{position:'absolute', bottom:260, left:64, right:64, color:BG}}>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:32, lineHeight:1.3, maxWidth:700, marginBottom:32, color:'rgba(245,241,234,0.92)'}}>
        Got a career question? We probably got the same one from someone last week.
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:'rgba(245,241,234,0.75)'}}>
        ¿Tienes una pregunta? Seguramente ya la contestamos.
      </div>
    </div>
    <PostFooter light/>
  </PostFrame>
);

// ============================================================
// POST 24 — Vocabulary card: "Adelante" meaning (4:5)
// ============================================================
const Post24 = () => (
  <PostFrame w={1080} h={1350} bg={BG} id="24" label="Vocabulary — Adelante">
    <div style={{position:'absolute', top:64, left:64, right:64}}>
      <Eyebrow>Palabra · Word</Eyebrow>
    </div>
    <div style={{position:'absolute', top:200, left:64, right:64}}>
      <div style={{fontFamily:MONO, fontSize:14, letterSpacing:2, color:MUTED, textTransform:'uppercase', marginBottom:16}}>
        ah·deh·LAHN·teh · <span style={{color:ACCENT}}>adv.</span>
      </div>
      <div style={{fontFamily:SERIF, fontSize:220, lineHeight:0.92, letterSpacing:-6, color:INK, fontWeight:400, fontStyle:'italic'}}>
        adelante
      </div>
    </div>
    <div style={{position:'absolute', top:620, left:64, right:64}}>
      <div style={{width:48, height:1, background:INK, opacity:0.3, marginBottom:28}}/>
      <div style={{display:'flex', gap:32, marginBottom:36}}>
        <div style={{fontFamily:SERIF, fontSize:20, color:ACCENT, fontStyle:'italic', minWidth:28}}>1.</div>
        <div>
          <div style={{fontFamily:SERIF, fontSize:38, color:INK, lineHeight:1.2}}>Forward. Onward.</div>
          <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:MUTED, marginTop:6}}>Hacia adelante.</div>
        </div>
      </div>
      <div style={{display:'flex', gap:32}}>
        <div style={{fontFamily:SERIF, fontSize:20, color:ACCENT, fontStyle:'italic', minWidth:28}}>2.</div>
        <div>
          <div style={{fontFamily:SERIF, fontSize:38, color:INK, lineHeight:1.2}}>Come in. <span style={{fontStyle:'italic'}}>You're welcome here.</span></div>
          <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:MUTED, marginTop:6}}>Pasa adelante. Estás en tu casa.</div>
        </div>
      </div>
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 25 — Closing quote / brand (1:1)
// ============================================================
const Post25 = () => (
  <PostFrame w={1080} h={1080} bg={BG} id="25" label="Closing quote">
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Wordmark scale={0.95}/>
      <Ornament kind="star"/>
    </div>
    <div style={{position:'absolute', top:260, left:64, right:64, textAlign:'center'}}>
      <div style={{fontFamily:SERIF, fontSize:300, lineHeight:0.8, letterSpacing:-6, color:ACCENT, fontWeight:400, fontStyle:'italic'}}>"</div>
    </div>
    <div style={{position:'absolute', top:440, left:64, right:64, textAlign:'center'}}>
      <div style={{fontFamily:SERIF, fontSize:58, lineHeight:1.15, letterSpacing:-1, color:INK, fontWeight:400, maxWidth:920, margin:'0 auto'}}>
        You don't have to figure this out <span style={{fontStyle:'italic', color:ACCENT}}>alone.</span>
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:30, color:INK_SOFT, marginTop:40, maxWidth:800, margin:'40px auto 0', lineHeight:1.3}}>
        No tienes que resolver esto sola.
      </div>
    </div>
    <PostFooter/>
  </PostFrame>
);

Object.assign(window, { Post18, Post19, Post20, Post21, Post22, Post23, Post24, Post25 });
