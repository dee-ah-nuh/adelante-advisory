'use client';

import { useState } from 'react';
import en from '@/content/en';
import es from '@/content/es';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Services from '@/components/Services';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Packages from '@/components/Packages';
import Booking from '@/components/Booking';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const c = lang === 'en' ? en : es;

  return (
    <main>
      <Nav c={c} lang={lang} setLang={setLang} />
      <Hero c={c} lang={lang} />
      <Problem c={c} />
      <Services c={c} />
      <About c={c} lang={lang} />
      <HowItWorks c={c} />
      <Packages c={c} lang={lang} />
      <Booking c={c} lang={lang} />
      <FAQ c={c} />
      <Footer c={c} />
    </main>
  );
}
