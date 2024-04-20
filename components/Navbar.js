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
        document.querySelector('nav').classList.add('shadow-lg', 'bg-pink-medium', 'py-10');
        document.querySelector('nav').classList.remove('bg-pink-pastel', 'py-14');
      } else {
        document.querySelector('nav').classList.remove('shadow-lg', 'bg-pink-medium', 'py-10');
        document.querySelector('nav').classList.add('bg-pink-pastel', 'py-14');
      }
    });
  }, []);

  return (
    <nav className='w-full h-10 flex justify-center gap-6 items-center bg-pink-pastel px-14 py-14 sticky top-0 transition-all text-pink-black font-black'>
      <div className='flex justify-center w-300px'>
        <Link href={'/'} className='text-3xl mr-auto font-semibold'>
          <Image
            src={'/SN_icon.png'}
            alt={'SN'}
            width={'64'}
            height={'64'}
            className='hover:opacity-90 transition-all'
          />
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
