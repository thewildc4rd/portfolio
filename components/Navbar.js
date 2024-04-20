'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
        document.querySelector('nav').classList.add('shadow-lg');
        document.querySelector('nav').classList.add('bg-pink-medium');
        document.querySelector('nav').classList.remove('bg-pink-pastel');
      } else {
        document.querySelector('nav').classList.remove('shadow-lg');
        document.querySelector('nav').classList.remove('bg-pink-medium');
        document.querySelector('nav').classList.add('bg-pink-pastel');
      }
    });
  }, []);

  return (
    <nav className='w-full h-10 flex justify-center gap-6 items-center bg-pink-pastel px-14 py-14 sticky top-0 transition-all text-pink-black font-black'>
      <div className='flex justify-center w-300px'>
        <Link href={'/'} className='text-3xl mr-auto font-semibold'>
          <img src={'/SN_icon.png'} className='h-16' />
        </Link>
      </div>
      <div className='flex justify-end gap-x-10 items-center flex-wrap flex-1'>
        {navLinks.map((link, key) => (
          <Link
            key={key}
            className={`font-medium text-lg hover:text-pink-dark transition-all ${
              pathname === link.path ? 'active' : ''
            }`}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
