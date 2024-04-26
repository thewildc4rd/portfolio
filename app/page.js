'use client';
import React from 'react';
import HomeSky from '@/components/HomeSky';
import HomeAboutMe from '@/components/HomeAboutMe';
import HomeSkills from '@/components/HomeSkills';
import HomeProjects from '@/components/HomeProjects';

export default function Home() {
  return (
    <main id='home' className='h-full w-full'>
      <HomeSky />
      <HomeAboutMe />
      <HomeSkills />
      <HomeProjects />
    </main>
  );
}
