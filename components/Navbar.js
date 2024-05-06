/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HamburgerIcon from './HamburgerIcon';
import CrossIcon from './CrossIcon';
import { usePathname } from 'next/navigation';
import BackArrowIcon from './BackArrowIcon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('home');
  const path = usePathname();

  const links = [
    { title: 'About', path: '#about', id: 'about' },
    { title: 'Skills', path: '#skills', id: 'skills' },
    { title: 'Education', path: '#education', id: 'education' },
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
        if (link.id.includes(currentSection)) {
          link.classList.add('active');
        }
      });
    });
  }, []);

  useEffect(() => {
    open
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [open]);

  useEffect(() => {
    if (selectedId === 'home') {
      globalThis.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (selectedId != '') {
      document.getElementById(selectedId).scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSelectedId('');
    }
  }, [selectedId]);

  return (
    <nav
      id='nav'
      className={`mx-auto mt-2 top-2 w-fit h-10 sticky flex justify-center gap-9 items-center p-10 transition-all duration-300 rounded-[40px] z-[100] ${
        path === '/' ? (open ? 'mini-nav-open' : 'mini-nav-closed') : 'back'
      }`}
    >
      {path === '/' && !open && (
        <HamburgerIcon
          onClick={() => {
            setOpen(!open);
          }}
        />
      )}
      {path === '/' && open && (
        <CrossIcon
          onClick={() => {
            setOpen(!open);
          }}
        />
      )}

      {path != '/' && (
        <Link href={'/'}>
          <BackArrowIcon />
        </Link>
      )}

      {path === '/' && (
        <>
          <Link
            href={''}
            scroll={false}
            onClick={() => {
              if (open) {
                setOpen(!open);
              }
              setSelectedId('home');
            }}
            className={!open ? 'max-xm:hidden' : 'max-xm:mt-28'}
          >
            <img
              src={'./SN_logo.png'}
              alt={'SN'}
              width={'50'}
              height={'50'}
              id='logo'
              className={`transition-all hover:scale-110 ${open && 'max-xm:w-[100px]'}`}
            />
          </Link>
          <div
            className={`flex justify-center gap-9 items-center font-black ${
              open ? 'max-xm:flex-col  max-xm:mb-auto' : 'max-xm:hidden'
            }`}
          >
            {links.map((link, idx) => (
              <Link
                id={`${link.id}-nav`}
                key={idx}
                className={`nav-link font-medium text-lg hover:text-naples-yellow transition-all ${
                  open && 'max-xm:text-5xl max-xm:font-semibold'
                }`}
                onClick={() => {
                  if (open) {
                    setOpen(!open);
                  }
                  setSelectedId(link.id);
                }}
                scroll={false}
                href={''}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}
