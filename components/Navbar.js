'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function Navbar(props) {
  const links = [
    { title: 'About', path: '#about', id: 'about' },
    { title: 'Skills', path: '#skills', id: 'skills' },
    { title: 'Experience', path: '#experience', id: 'experience' },
    { title: 'Projects', path: '#projects', id: 'projects' },
  ];

  // when you scroll change the nav bar styles (shadow and background colour)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY != 0) {
        document.querySelector('nav').classList.add('nav-blur');
      } else {
        document.querySelector('nav').classList.remove('nav-blur');
      }

      let currentSection = 'home';
      const sectionElements = document.querySelectorAll('.section');
      const linkElements = document.querySelectorAll('.nav-link');

      sectionElements.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 90) {
          currentSection = section.id;
        }
      });
      linkElements.forEach((link) => {
        link.classList.remove('active');
        if (link.href.includes(currentSection)) {
          link.classList.add('active');
        }
      });
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
        <Link
          key={idx}
          className={'nav-link font-medium text-lg hover:text-naples-yellow transition-all'}
          onClick={() => {
            document
              .getElementById(link.id)
              .scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
          scroll={false}
          href={link.path}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
