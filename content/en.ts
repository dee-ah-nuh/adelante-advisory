const en = {
  nav: {
    about: 'About',
    services: 'Services',
    how: 'How it works',
    packages: 'Packages',
    faq: 'FAQ',
    book: 'Book a free call',
  },
  hero: {
    eyebrow: 'Career strategy for Latin Americans in the US',
    title: ['Your career,', 'finally ', 'mapped out.'] as [string, string, string],
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
    paty: {
      name: 'Paty Vega',
      role: 'Product Marketing Manager',
      company: 'S&P Global · New York',
      bio: 'Based in New York. Seven years in product marketing across finance and data. I coach on storytelling, positioning, and how to make corporate recruiters actually read your application.',
      linkedin: 'https://linkedin.com/in/pvega17',
    },
    diana: {
      name: 'Diana Valladares',
      role: 'Senior Consultant, Data Engineering & Architecture',
      company: 'AArete · Chicago',
      bio: 'Based in Chicago. 4+ years in Consulting, Data Analytics & Engineering, and AI. I coach on technical interviews, consulting recruiting, and breaking into data roles.',
      linkedin: 'https://linkedin.com/in/diana-valladares',
    },
  },
  how: {
    eyebrow: 'How it works',
    title: 'Simple. No pressure.',
    steps: [
      { n: '01', t: 'Book a free 15-min call', d: "Pick Paty or Diana. We'll chat about where you are and where you want to go." },
      { n: '02', t: 'We build your plan', d: 'Together we map out the right package and the right focus — résumé, interviews, networking, all of it.' },
      { n: '03', t: 'We work 1:1', d: 'Sessions over Zoom. Real feedback, real prep, real progress. In English or Spanish — your choice.' },
      { n: '04', t: 'You land it', d: 'The interview, the offer, the promotion. Adelante.' },
    ],
  },
  packages: {
    eyebrow: 'Ways to work together',
    title: 'Start small. Grow with us.',
    items: [
      { name: 'Starter', sessions: '3 sessions', tag: 'Clarity + direction', bullets: ['Understand where to focus', 'Initial profile guidance', 'Clear next steps'] },
      { name: 'Core', sessions: '6 sessions', tag: 'Structure + positioning', featured: true, bullets: ['Build narrative and direction', 'Résumé and LinkedIn rewrite', 'Strategic job search plan'] },
      { name: 'Acceleration', sessions: '12 sessions', tag: 'Execution + momentum', bullets: ['Targeted outreach and positioning', 'Interview prep cycles', 'Navigating real opportunities'] },
      { name: 'Ongoing', sessions: '20 sessions', tag: 'Long-term strategy', bullets: ['Continued guidance', 'Quarterly check-ins', 'Accountability and growth'] },
    ],
    cta: 'Inquire about pricing',
  },
  booking: {
    eyebrow: 'Book your free call',
    title: 'Pick who you want to talk to.',
    sub: '15 minutes. No commitment. In English or en español.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    items: [
      { q: 'Do I have to be from El Salvador?', a: "No. We're Salvadoran so that's the community we know best, but we work with students and young professionals from across Latin America (and plenty of first-gen folks who just need real talk)." },
      { q: 'Can we do sessions in Spanish?', a: 'Sí, claro. Sessions, feedback, résumé reviews — whatever language you think in best. Many of our clients go back and forth.' },
      { q: "I'm still in college. Is it too early?", a: "No — it's the best time. Your résumé starts before graduation. The earlier we build direction, the stronger your profile gets." },
      { q: 'I already have a job. Is this for me?', a: 'Yes. We work with people one, three, even five years in — navigating promotions, switching industries, or making the jump from IC to manager.' },
      { q: 'Do you help with visas, OPT, or H1B?', a: "We don't give legal advice, but we've both navigated the US work authorization maze and can share what worked for us and our clients." },
      { q: 'How much does it cost?', a: 'Packages vary depending on sessions and focus. Book the free 15-min call and we\'ll talk pricing — honestly and without pressure.' },
    ],
  },
  footer: {
    tagline: 'Your career, finally mapped out.',
    contact: 'adelanteadvisory@gmail.com',
    made: 'Made with cariño in New York & Chicago',
  },
};

export default en;
export type Content = typeof en;
