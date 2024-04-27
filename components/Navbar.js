'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function Navbar(props) {
  const links = [
    { title: 'About', path: '#about', id: 'about' },
    { title: 'Skills', path: '#skills', id: 'skills' },
    { title: 'Expierence', path: '#expirence', id: 'expierence' },
    { title: 'Projects', path: '#projects', id: 'projects' },
  ];

  const router = useRouter();

  // when you scroll change the nav bar styles (shadow and background colour)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY != 0) {
        document.querySelector('nav').classList.add('nav-blur');
      } else {
        document.querySelector('nav').classList.remove('nav-blur');
      }
    });
  }, []);

  return (
    <nav
      id='nav'
      className='mx-auto mt-2 top-2 w-fit h-10 flex justify-center gap-10 items-center p-10 sticky transition-all duration-300 font-black rounded-full z-[100]'
    >
      <a href={'#'} onClick={() => globalThis.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Image
          src={'/SN_logo.png'}
          alt={'SN'}
          width={'50'}
          height={'50'}
          className='logo transition-all hover:scale-110 hover:shadow-naples-yellow'
        />
      </a>
      {links.map((link, idx) => (
        <a
          key={idx}
          className={'font-medium text-lg hover:text-naples-yellow transition-all'}
          // onClick={() => {
          //   document
          //     .getElementById(link.id)
          //     .scrollIntoView({ behavior: 'smooth', block: 'center' });
          //   console.log(router.asPath);
          // }}
          href={link.path}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
}
