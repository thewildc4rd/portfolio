'use client';
import React from 'react';
import HomeSky from '@/components/HomeSky';
import HomeOverview from '@/components/HomeOverview';

export default function Home() {
  return (
    <main id='home' className='h-full w-full'>
      <HomeSky />
      <HomeOverview />
    </main>
  );
}
