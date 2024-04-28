'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerIcon from './HamburgerIcon';
import CrossIcon from './CrossIcon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('home');

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
        document.querySelector('#nav').classList.add('nav-blur');
      } else {
        document.querySelector('#nav').classList.remove('nav-blur');
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

  useEffect(() => {
    open
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');

    if (!open) {
      if (selectedId === 'home') {
        globalThis.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(selectedId).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedId]);

  return (
    <nav
      id='nav'
      className={`mx-auto mt-2 top-2 w-fit h-10 sticky flex justify-center gap-9 items-center p-10 transition-all duration-300 rounded-[40px] z-[100] ${
        open
          ? 'max-md:w-full max-md:h-[100vh] max-md:top-0 max-md:rounded-none max-md:flex-col max-md:justify-start'
          : 'max-md:rounded-[40px] max-md:mx-left max-md:mt-5 max-md:ml-5 max-md:top-5 max-md:w-fit max-md:h-fit max-md:p-3'
      }`}
    >
      {!open && (
        <HamburgerIcon
          onClick={() => {
            setOpen(!open);
          }}
        />
      )}
      {open && (
        <CrossIcon
          onClick={() => {
            setOpen(!open);
          }}
        />
      )}
      <Link
        href={'#'}
        scroll={false}
        onClick={() => {
          if (open) {
            setOpen(!open);
            setSelectedId('home');
          } else {
            globalThis.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className={!open ? 'max-md:hidden' : 'max-md:mt-28'}
      >
        <Image
          src={'/SN_logo.png'}
          alt={'SN'}
          width={'50'}
          height={'50'}
          className={`logo transition-all hover:scale-110 hover:shadow-naples-yellow ${
            open && 'max-md:w-[100px]'
          }`}
        />
      </Link>
      <div
        className={`flex justify-center gap-9 items-center font-black ${
          open ? 'max-md:flex-col  max-md:mb-auto' : 'max-md:hidden'
        }`}
      >
        {links.map((link, idx) => (
          <Link
            key={idx}
            className={`nav-link font-medium text-lg hover:text-naples-yellow transition-all ${
              open && 'max-md:text-5xl max-md:font-semibold'
            }`}
            onClick={() => {
              if (open) {
                setOpen(!open);
                setSelectedId(link.id);
              } else {
                document
                  .getElementById(link.id)
                  .scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            scroll={false}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
