const EN = {
  nav: { about: 'About', services: 'Services', how: 'How it works', packages: 'Packages', faq: 'FAQ', book: 'Book a free call' },
  hero: {
    eyebrow: 'Career strategy for Latin Americans in the US',
    title: ['Your career,', 'finally ', 'mapped out.'],
    sub: "From graduation to your first promotion — we're two salvadoreñas who've been there. We help students and young professionals from El Salvador and Latin America navigate US corporate life with clarity.",
    cta: 'Book a free 15-min call',
    ctaSub: 'No pitch. Just a conversation.',
    trust: 'Trusted experience from',
  },
  problem: {
    eyebrow: 'The Problem',
    title: "You shouldn't have to figure this out alone.",
    body: [
      "Growing up in El Salvador, nobody teaches you how US corporate works. No one tells you what a résumé is supposed to sound like here. No one shows you how to network when networking isn't really a thing back home.",
      "You apply to hundreds of jobs and hear nothing back. You walk into interviews unsure of how much to talk about yourself. You get a job and suddenly you're expected to 'advocate for yourself' in rooms where nobody looks like you.",
      "We've been there. And we built Adelante so you don't have to guess.",
    ],
  },
  services: {
    eyebrow: 'What we do',
    title: 'Everything you wish someone had told you.',
    items: [
      { k: '01', t: 'Career strategy & direction', d: '1:1 coaching to figure out what you actually want — not just what looks good on LinkedIn.' },
      { k: '02', t: 'Résumé review & rewrite', d: "We'll rewrite yours to sound like a US hiring manager wrote it — without losing your story." },
      { k: '03', t: 'Interview prep & mock interviews', d: "Behavioral, technical, case. We'll run drills until you walk in calm." },
      { k: '04', t: 'Job search strategy', d: 'Where to apply, how often, how to track, how to not lose your mind.' },
      { k: '05', t: 'Networking coaching', d: 'Cold outreach, coffee chats, informational interviews. How to do it without feeling weird.' },
      { k: '06', t: 'College-to-corporate transition', d: 'The unspoken rules of a US office — and how to thrive without losing yourself.' },
      { k: '07', t: 'Salary negotiation', d: "Yes, you can negotiate. No, you won't lose the offer. Here's exactly how." },
    ],
  },
  about: {
    eyebrow: 'About us',
    title: 'Built from experience, not theory.',
    intro: "We're Paty and Diana — both salvadoreñas, both American School alumnae, both seven years into our corporate careers in the US. We built Adelante because we kept getting the same DMs from students and friends back home: 'How did you do it?' This is our answer.",
    paty: { name: 'Paty Vega', role: 'Product Marketing Manager', company: 'S&P Global · New York', bio: 'Based in New York. Seven years in product marketing across finance and data. I coach on storytelling, positioning, and how to make corporate recruiters actually read your application.', linkedin: 'https://linkedin.com/in/pvega17' },
    diana: { name: 'Diana Valladares', role: 'Senior Consultant, Data Engineering & Architecture', company: 'AArete · Chicago', bio: 'Based in Chicago. 4+ years in Consulting, Data Analytics & Engineering, and AI. I coach on technical interviews, consulting recruiting, and breaking into data roles.', linkedin: 'https://linkedin.com/in/diana-valladares' },
  },
  how: {
    eyebrow: 'How it works', title: 'Simple. No pressure.',
    steps: [
      { n: '01', t: 'Book a free 15-min call', d: "Pick Paty or Diana. We'll chat about where you are and where you want to go." },
      { n: '02', t: 'We build your plan', d: 'Together we map out the right package and the right focus — résumé, interviews, networking, all of it.' },
      { n: '03', t: 'We work 1:1', d: 'Sessions over Zoom. Real feedback, real prep, real progress. In English or Spanish — your choice.' },
      { n: '04', t: 'You land it', d: 'The interview, the offer, the promotion. Adelante.' },
    ],
  },
  packages: {
    eyebrow: 'Ways to work together', title: 'Start small. Grow with us.',
    items: [
      { name: 'Starter', sessions: '3 sessions', tag: 'Clarity + direction', bullets: ['Understand where to focus', 'Initial profile guidance', 'Clear next steps'] },
      { name: 'Core', sessions: '6 sessions', tag: 'Structure + positioning', featured: true, bullets: ['Build narrative and direction', 'Résumé and LinkedIn rewrite', 'Strategic job search plan'] },
      { name: 'Acceleration', sessions: '12 sessions', tag: 'Execution + momentum', bullets: ['Targeted outreach and positioning', 'Interview prep cycles', 'Navigating real opportunities'] },
      { name: 'Ongoing', sessions: '20 sessions', tag: 'Long-term strategy', bullets: ['Continued guidance', 'Quarterly check-ins', 'Accountability and growth'] },
    ],
    cta: 'Inquire about pricing',
  },
  booking: { eyebrow: 'Book your free call', title: 'Pick who you want to talk to.', sub: '15 minutes. No commitment. In English or en español.' },
  faq: {
    eyebrow: 'FAQ', title: 'Questions, answered.',
    items: [
      { q: 'Do I have to be from El Salvador?', a: "No. We're Salvadoran so that's the community we know best, but we work with students and young professionals from across Latin America (and plenty of first-gen folks who just need real talk)." },
      { q: 'Can we do sessions in Spanish?', a: 'Sí, claro. Sessions, feedback, résumé reviews — whatever language you think in best. Many of our clients go back and forth.' },
      { q: "I'm still in college. Is it too early?", a: "No — it's the best time. Your résumé starts before graduation. The earlier we build direction, the stronger your profile gets." },
      { q: 'I already have a job. Is this for me?', a: 'Yes. We work with people one, three, even five years in — navigating promotions, switching industries, or making the jump from IC to manager.' },
      { q: 'Do you help with visas, OPT, or H1B?', a: "We don't give legal advice, but we've both navigated the US work authorization maze and can share what worked for us and our clients." },
      { q: 'How much does it cost?', a: "Packages vary depending on sessions and focus. Book the free 15-min call and we'll talk pricing — honestly and without pressure." },
    ],
  },
  footer: { tagline: 'Your career, finally mapped out.', contact: 'adelanteadvisory@gmail.com', made: 'Made with cariño in New York & Chicago' },
};

const ES = {
  nav: { about: 'Nosotras', services: 'Servicios', how: 'Cómo funciona', packages: 'Paquetes', faq: 'Preguntas', book: 'Agenda tu llamada' },
  hero: {
    eyebrow: 'Estrategia de carrera para latinos en EE.UU.',
    title: ['Tu carrera,', 'por fin ', 'con rumbo.'],
    sub: 'De la graduación a tu primer ascenso — somos dos salvadoreñas que ya pasamos por ahí. Ayudamos a estudiantes y jóvenes profesionales de El Salvador y Latinoamérica a navegar el mundo corporativo en EE.UU. con claridad.',
    cta: 'Agenda una llamada gratis de 15 min', ctaSub: 'Sin presión. Solo una conversación.', trust: 'Experiencia de',
  },
  problem: {
    eyebrow: 'El problema', title: 'No tienes que resolver esto sola.',
    body: [
      'Creciendo en El Salvador, nadie te enseña cómo funciona el mundo corporativo en EE.UU. Nadie te dice cómo debe sonar un résumé aquí. Nadie te muestra cómo hacer networking cuando eso ni existe allá.',
      'Aplicas a cientos de trabajos y no recibes respuesta. Llegas a entrevistas sin saber cuánto hablar de ti. Consigues el trabajo y de repente te piden que "hables por ti misma" en salas donde nadie se parece a ti.',
      'Nosotras pasamos por eso. Por eso creamos Adelante — para que tú no tengas que adivinar.',
    ],
  },
  services: {
    eyebrow: 'Lo que hacemos', title: 'Todo lo que hubieras querido que alguien te dijera.',
    items: [
      { k: '01', t: 'Estrategia y dirección', d: 'Coaching 1:1 para descubrir qué quieres de verdad — no solo lo que se ve bien en LinkedIn.' },
      { k: '02', t: 'Revisión de résumé', d: 'Lo reescribimos para que suene como si lo hubiera escrito un recruiter gringo — sin perder tu historia.' },
      { k: '03', t: 'Preparación de entrevistas', d: 'Comportamiento, técnicas, casos. Practicamos hasta que entres con calma.' },
      { k: '04', t: 'Estrategia de búsqueda', d: 'Dónde aplicar, con qué frecuencia, cómo llevar registro, cómo no volverte loca.' },
      { k: '05', t: 'Networking', d: 'Outreach en frío, coffee chats, entrevistas informativas. Cómo hacerlo sin sentirte rara.' },
      { k: '06', t: 'De universidad a corporativo', d: 'Las reglas no escritas de una oficina en EE.UU. — y cómo prosperar sin perderte.' },
      { k: '07', t: 'Negociación salarial', d: 'Sí puedes negociar. No vas a perder la oferta. Aquí cómo hacerlo.' },
    ],
  },
  about: {
    eyebrow: 'Nosotras', title: 'Construido desde la experiencia.',
    intro: 'Somos Paty y Diana — salvadoreñas, exalumnas de la Escuela Americana, con siete años de carrera corporativa en EE.UU. Creamos Adelante porque nos llegaban los mismos DMs de estudiantes y amigos: "¿Cómo lo lograste?" Esta es nuestra respuesta.',
    paty: { name: 'Paty Vega', role: 'Product Marketing Manager', company: 'S&P Global · Nueva York', bio: 'Basada en Nueva York. Siete años en marketing de producto en finanzas y datos. Te ayudo con storytelling, posicionamiento, y cómo lograr que un recruiter corporativo de verdad lea tu aplicación.', linkedin: 'https://linkedin.com/in/pvega17' },
    diana: { name: 'Diana Valladares', role: 'Senior Consultant, Data Engineering & Architecture', company: 'AArete · Chicago', bio: 'Basada en Chicago. 4+ años de experiencia en Consultoría, Análisis e Ingeniería de Datos, e Inteligencia Artificial. Te ayudo con entrevistas técnicas, recruiting de consultoría, y cómo entrar a roles de data.', linkedin: 'https://linkedin.com/in/diana-valladares' },
  },
  how: {
    eyebrow: 'Cómo funciona', title: 'Simple. Sin presión.',
    steps: [
      { n: '01', t: 'Agenda llamada gratis', d: 'Elige a Paty o Diana. Platicamos de dónde estás y a dónde quieres llegar.' },
      { n: '02', t: 'Armamos tu plan', d: 'Juntas decidimos el paquete y el enfoque — résumé, entrevistas, networking, todo.' },
      { n: '03', t: 'Trabajamos 1:1', d: 'Sesiones por Zoom. Feedback real, prep real, progreso real. En inglés o español.' },
      { n: '04', t: 'Lo logras', d: 'La entrevista, la oferta, el ascenso. Adelante.' },
    ],
  },
  packages: {
    eyebrow: 'Cómo trabajar con nosotras', title: 'Empieza pequeño. Crece con nosotras.',
    items: [
      { name: 'Starter', sessions: '3 sesiones', tag: 'Claridad + dirección', bullets: ['Entender dónde enfocarte', 'Orientación inicial de perfil', 'Próximos pasos claros'] },
      { name: 'Core', sessions: '6 sesiones', tag: 'Estructura + posicionamiento', featured: true, bullets: ['Construir narrativa y dirección', 'Rewrite de résumé y LinkedIn', 'Plan estratégico de búsqueda'] },
      { name: 'Acceleration', sessions: '12 sesiones', tag: 'Ejecución + momentum', bullets: ['Outreach y posicionamiento dirigido', 'Ciclos de preparación de entrevistas', 'Navegar oportunidades reales'] },
      { name: 'Ongoing', sessions: '20 sesiones', tag: 'Estrategia de largo plazo', bullets: ['Acompañamiento continuo', 'Check-ins trimestrales', 'Accountability y crecimiento'] },
    ],
    cta: 'Consultar precios',
  },
  booking: { eyebrow: 'Agenda tu llamada gratis', title: 'Elige con quién quieres hablar.', sub: '15 minutos. Sin compromiso. En inglés o en español.' },
  faq: {
    eyebrow: 'Preguntas frecuentes', title: 'Respuestas claras.',
    items: [
      { q: '¿Tengo que ser de El Salvador?', a: 'No. Somos salvadoreñas y es la comunidad que mejor conocemos, pero trabajamos con estudiantes y profesionales de toda Latinoamérica.' },
      { q: '¿Pueden ser las sesiones en español?', a: 'Sí, claro. Sesiones, feedback, revisiones — en el idioma en que pienses mejor.' },
      { q: 'Todavía estoy en la universidad. ¿Es muy temprano?', a: 'No — es el mejor momento. Tu résumé empieza antes de graduarte.' },
      { q: 'Ya tengo trabajo. ¿Me sirve?', a: 'Sí. Trabajamos con gente con uno, tres, hasta cinco años de experiencia.' },
      { q: '¿Ayudan con visas, OPT, o H1B?', a: 'No damos consejo legal, pero ambas navegamos el tema y compartimos lo que funcionó.' },
      { q: '¿Cuánto cuesta?', a: 'Los paquetes varían según las sesiones y el enfoque. Agenda la llamada gratis y te contamos.' },
    ],
  },
  footer: { tagline: 'Tu carrera, por fin con rumbo.', contact: 'adelanteadvisory@gmail.com', made: 'Hecho con cariño en Nueva York y Chicago' },
};

const ADVISORS = [
  { id: 'paty', initials: 'PV', tintLight: '#E8D4C4', tintDark: '#8B4A2F', cityEn: 'New York', cityEs: 'Nueva York',
    companyEn: 'S&P Global · New York', companyEs: 'S&P Global · Nueva York',
    specialtyEn: 'Marketing · Finance · Storytelling', specialtyEs: 'Marketing · Finanzas · Storytelling',
    calendly: 'https://calendly.com/adelanteadvisory/15-min-paty', linkedin: 'https://linkedin.com/in/pvega17' },
  { id: 'diana', initials: 'DV', tintLight: '#D6DFD4', tintDark: '#3F5A4C', cityEn: 'Chicago', cityEs: 'Chicago',
    companyEn: 'AArete · Chicago', companyEs: 'AArete · Chicago',
    specialtyEn: 'Consulting · Data · Technical interviews · AI', specialtyEs: 'Consultoría · Data · Entrevistas técnicas · IA',
    calendly: 'https://calendly.com/adelanteadvisory/15-min-diana', linkedin: 'https://linkedin.com/in/diana-valladares' },
];

const TRUSTED = ['SICPA', 'S&P Global', 'AArete', 'Daarwill'];
const CONTACT_EMAIL = 'adelanteadvisory@gmail.com';

Object.assign(window, { EN, ES, ADVISORS, TRUSTED, CONTACT_EMAIL });
