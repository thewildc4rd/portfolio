'use client';
import React from 'react';
import HomeSky from '@/components/HomeSky';

export default function Home() {
  return (
    <main className='home h-full w-full'>
      <HomeSky />
      <div className='h-screen w-screen flex flex-col justify-center items-center p-10 bg-space-cadet-dark'>
        <div></div>
      </div>
    </main>
  );
}
