// Adelante Advisory — 25 Instagram posts, bilingual EN/ES
// Formats: 1080x1080 (IG square), 1080x1350 (IG carousel / 4:5), 1200x1200 (LinkedIn)

// ============================================================
// POST 01 — Hero intro (IG 1:1, 1080x1080)
// ============================================================
const Post01 = () => (
  <PostFrame w={1080} h={1080} bg={BG} id="01" label="Hero intro">
    <div style={{position:'absolute', top:64, left:64, right:64}}>
      <Wordmark scale={1.2}/>
    </div>
    <div style={{position:'absolute', top:220, left:64, right:64}}>
      <Eyebrow size={13}>Welcome · Bienvenidxs</Eyebrow>
    </div>
    <div style={{position:'absolute', top:300, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:128, lineHeight:0.95, letterSpacing:-3, color:INK, fontWeight:400}}>
        Your career,<br/>
        <span style={{fontStyle:'italic'}}>finally </span>
        <span style={{color:ACCENT}}>mapped</span><br/>
        <span style={{fontStyle:'italic', color:ACCENT}}>out.</span>
      </div>
    </div>
    <div style={{position:'absolute', bottom:130, left:64, right:64, fontFamily:SERIF, fontStyle:'italic', fontSize:30, color:INK_SOFT, maxWidth:720, lineHeight:1.3}}>
      Career coaching for Latin Americans<br/>navigating US corporate life.
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 02 — Stat hook (IG 1:1)
// ============================================================
const Post02 = () => (
  <PostFrame w={1080} h={1080} bg={BG_ALT} id="02" label="Stat hook — applications">
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Eyebrow>Data · Datos</Eyebrow>
      <Ornament kind="dots"/>
    </div>
    <div style={{position:'absolute', top:200, left:64, right:64, textAlign:'center'}}>
      <div style={{fontFamily:SERIF, fontSize:280, lineHeight:1, letterSpacing:-8, color:ACCENT, fontWeight:400}}>250+</div>
    </div>
    <div style={{position:'absolute', top:540, left:64, right:64, textAlign:'center'}}>
      <div style={{fontFamily:SERIF, fontSize:46, fontStyle:'italic', color:INK, lineHeight:1.2, marginBottom:14}}>
        average applications before<br/>a first US offer.
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:26, color:INK_SOFT, marginTop:28}}>
        Promedio de aplicaciones antes de tu primera oferta.
      </div>
    </div>
    <div style={{position:'absolute', bottom:170, left:64, right:64, textAlign:'center', fontFamily:MONO, fontSize:13, color:MUTED, letterSpacing:1.5}}>
      YOU ARE NOT FAILING. <span style={{color:ACCENT}}>★</span> NO ESTÁS FRACASANDO.
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 03 — Myth vs Truth (IG 4:5)
// ============================================================
const Post03 = () => (
  <PostFrame w={1080} h={1350} bg={BG} id="03" label="Myth vs truth — networking">
    <div style={{position:'absolute', top:64, left:64, right:64}}>
      <BiRule en="Myth vs Truth" es="Mito vs Verdad"/>
    </div>
    <div style={{position:'absolute', top:160, left:64, right:64}}>
      <div style={{background:'transparent', border:`1px solid ${BORDER}`, borderRadius:4, padding:'32px 36px', marginBottom:24, position:'relative'}}>
        <div style={{position:'absolute', top:-10, left:24, background:BG, padding:'0 12px', fontFamily:MONO, fontSize:11, letterSpacing:2, color:MUTED, textTransform:'uppercase'}}>Myth · Mito</div>
        <div style={{fontFamily:SERIF, fontSize:42, fontStyle:'italic', color:INK_SOFT, lineHeight:1.2, textDecoration:'line-through', textDecorationColor:'rgba(196,90,59,0.5)', textDecorationThickness:2}}>
          "Networking is for extroverts who love small talk."
        </div>
      </div>
      <div style={{background:INK, color:BG, borderRadius:4, padding:'36px 36px', position:'relative'}}>
        <div style={{position:'absolute', top:-10, left:24, background:ACCENT, color:BG, padding:'4px 12px', fontFamily:MONO, fontSize:11, letterSpacing:2, textTransform:'uppercase'}}>Truth · Verdad</div>
        <div style={{fontFamily:SERIF, fontSize:48, lineHeight:1.15, letterSpacing:-0.8, marginTop:6}}>
          Networking is just <span style={{fontStyle:'italic', color:'#F5D5C7'}}>one conversation</span>, repeated.
        </div>
        <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:26, color:'rgba(245,241,234,0.75)', marginTop:24, lineHeight:1.3}}>
          Hacer networking es solo una conversación, repetida.
        </div>
      </div>
    </div>
    <div style={{position:'absolute', bottom:180, left:64, right:64, fontFamily:SERIF, fontStyle:'italic', fontSize:26, color:INK_SOFT, textAlign:'center'}}>
      Start with one coffee chat. <span style={{color:ACCENT}}>→</span>
    </div>
    <PostFooter/>
  </PostFrame>
);

// ============================================================
// POST 04 — Carousel cover: "5 things I wish I knew" (4:5)
// ============================================================
const Post04 = () => (
  <PostFrame w={1080} h={1350} bg={BG} id="04" label="Carousel cover — 5 things">
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Eyebrow>Carousel · 01 / 06</Eyebrow>
      <div style={{fontFamily:MONO, fontSize:12, color:MUTED, letterSpacing:1.5}}>SWIPE →</div>
    </div>
    <div style={{position:'absolute', top:260, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:160, lineHeight:0.95, letterSpacing:-5, color:INK, fontWeight:400}}>
        <span style={{color:ACCENT, fontStyle:'italic'}}>5 things</span><br/>
        I wish I knew<br/>
        before my<br/>
        <span style={{fontStyle:'italic'}}>first US job.</span>
      </div>
    </div>
    <div style={{position:'absolute', bottom:180, left:64, right:64, fontFamily:SERIF, fontStyle:'italic', fontSize:32, color:INK_SOFT}}>
      5 cosas que hubiera querido saber antes de mi primer trabajo en EE.UU.
    </div>
    <PostFooter/>
  </PostFrame>
);

// Carousel slides 05-08 use shared layout
const CarouselSlide = ({ n, total, titleEn, titleEs, bodyEn, bodyEs, id, label }) => (
  <PostFrame w={1080} h={1350} bg={BG} id={id} label={label}>
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Eyebrow>Carousel · 0{n} / 0{total}</Eyebrow>
      <div style={{fontFamily:MONO, fontSize:12, color:MUTED, letterSpacing:1.5}}>SWIPE →</div>
    </div>
    <div style={{position:'absolute', top:220, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:240, lineHeight:0.9, letterSpacing:-8, color:ACCENT, fontWeight:400, fontStyle:'italic'}}>
        0{n-1}
      </div>
    </div>
    <div style={{position:'absolute', top:540, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:72, lineHeight:1.02, letterSpacing:-1.5, color:INK, fontWeight:400}}>
        {titleEn}
      </div>
      <div style={{width:48, height:1, background:INK, opacity:0.3, margin:'36px 0'}}/>
      <div style={{fontFamily:SANS, fontSize:21, lineHeight:1.55, color:INK_SOFT, marginBottom:32, maxWidth:900}}>
        {bodyEn}
      </div>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:22, color:MUTED, lineHeight:1.4, maxWidth:900}}>
        {titleEs} — {bodyEs}
      </div>
    </div>
    <PostFooter/>
  </PostFrame>
);

const Post05 = () => <CarouselSlide id="05" label="Carousel 02" n={2} total={6}
  titleEn="Applying isn't the job. Networking is."
  titleEs="Aplicar no es el trabajo. Hacer networking sí."
  bodyEn="The listings you see on LinkedIn have 300 applicants. The opportunity comes from the coffee chat. Build 3 relationships a week before you build a résumé."
  bodyEs="Los listings tienen 300 aplicantes. La oportunidad viene del coffee chat. Construye 3 relaciones por semana antes de perfeccionar tu résumé."
/>;

const Post06 = () => <CarouselSlide id="06" label="Carousel 03" n={3} total={6}
  titleEn='Your résumé is a pitch, not an autobiography.'
  titleEs="Tu résumé es un pitch, no una autobiografía."
  bodyEn="One page. Results, not responsibilities. Numbers whenever possible. They read it for 6 seconds — make them count."
  bodyEs="Una página. Resultados, no responsabilidades. Números cuando puedas. Lo leen por 6 segundos — que cuenten."
/>;

const Post07 = () => <CarouselSlide id="07" label="Carousel 04" n={4} total={6}
  titleEn='"Talking about yourself" is the job.'
  titleEs='"Hablar de ti" es parte del trabajo.'
  bodyEn="In Latin America, modesty is a virtue. In US corporate, invisibility is a career risk. Learn to name your wins — out loud, in 1:1s, in meetings."
  bodyEs="En Latinoamérica, la modestia es virtud. En el corporate gringo, la invisibilidad es riesgo. Aprende a nombrar tus wins — en voz alta."
/>;

const Post08 = () => <CarouselSlide id="08" label="Carousel 05" n={5} total={6}
  titleEn="Negotiate. Always."
  titleEs="Negocia. Siempre."
  bodyEn="The first offer is never the final offer. 'Thank you — is there flexibility on the base?' One sentence. You will not lose the job. You will gain thousands."
  bodyEs="La primera oferta nunca es la final. 'Gracias — ¿hay flexibilidad en el base?' Una frase. No vas a perder el puesto. Vas a ganar miles."
/>;

// Final carousel card — CTA
const Post09 = () => (
  <PostFrame w={1080} h={1350} bg={INK} id="09" label="Carousel end — CTA">
    <div style={{position:'absolute', top:64, left:64, right:64, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div style={{fontFamily:MONO, fontSize:12, letterSpacing:2, textTransform:'uppercase', color:'rgba(245,241,234,0.6)', display:'flex', alignItems:'center', gap:10}}>
        <span style={{width:24, height:1, background:'rgba(245,241,234,0.6)'}}/>
        Carousel · 06 / 06
      </div>
      <Ornament kind="star"/>
    </div>
    <div style={{position:'absolute', top:320, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontSize:120, lineHeight:0.95, letterSpacing:-3, color:BG, fontWeight:400}}>
        Want <span style={{fontStyle:'italic', color:'#F5D5C7'}}>help</span><br/>
        doing this<br/>
        <span style={{fontStyle:'italic', color:ACCENT}}>in real life?</span>
      </div>
    </div>
    <div style={{position:'absolute', bottom:280, left:64, right:64}}>
      <div style={{fontFamily:SERIF, fontStyle:'italic', fontSize:32, color:'rgba(245,241,234,0.85)', marginBottom:36}}>
        Book a free 15-min call.<br/>
        Agenda una llamada gratis.
      </div>
      <div style={{display:'inline-block', background:ACCENT, color:BG, padding:'22px 36px', borderRadius:4, fontFamily:SANS, fontSize:20, fontWeight:500}}>
        adelanteadvisory.com →
      </div>
    </div>
    <PostFooter light/>
  </PostFrame>
);

Object.assign(window, { Post01, Post02, Post03, Post04, Post05, Post06, Post07, Post08, Post09, CarouselSlide });
