'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function Navbar(props) {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
  ];

  const pathname = usePathname();

  // when you scroll change the nav bar styles (shadow and background colour)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY != 0) {
        document.querySelector('nav').classList.add('bg-space-cadet-light-trans');
        document.querySelector('nav').classList.remove('bg-space-cadet-dark');
      } else {
        document.querySelector('nav').classList.remove('bg-space-cadet-light-trans');
        document.querySelector('nav').classList.add('bg-space-cadet-dark');
      }
    });
  }, []);

  return (
    <nav className='mx-auto top-5 w-fit h-10 flex justify-center gap-6 items-center p-10 sticky transition-all duration-300 font-black rounded-full'>
      <Link
        className={`font-medium text-lg hover:text-naples-yellow transition-all ${
          pathname === '/about' ? 'active' : ''
        }`}
        href='/about'
      >
        About
      </Link>
      <Link href={'/'} className='text-3xl font-semibold'>
        <Image
          src={'/SN_logo.png'}
          alt={'SN'}
          width={'50'}
          height={'50'}
          className='logo transition-all hover:scale-110 hover:shadow-naples-yellow'
        />
      </Link>
      <div className='flex gap-x-10 items-center flex-wrap'>
        <Link
          className={`font-medium text-lg hover:text-naples-yellow transition-all ${
            pathname === '/projects' ? 'active' : ''
          }`}
          href='/projects'
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
