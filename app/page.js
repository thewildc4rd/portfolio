'use client';
import React from 'react';
import HomeSky from '@/components/HomeSky';
import HomeAboutMe from '@/components/HomeAboutMe';
import HomeSkills from '@/components/HomeSkills';

export default function Home() {
  return (
    <main id='home' className='h-full w-full'>
      <HomeSky />
      <HomeAboutMe />
      <HomeSkills />
    </main>
  );
}
