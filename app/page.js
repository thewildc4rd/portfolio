'use client';
import React from 'react';
import Sky from '@/components/Sky';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

export default function Home() {
  return (
    <main id='home' className='h-full w-full'>
      <Sky />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}
