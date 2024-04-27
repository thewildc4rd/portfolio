'use client';
import React from 'react';
import Sky from '@/components/Sky';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main id='home' className='h-full w-full'>
      <Sky />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
