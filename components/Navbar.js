'use client';
import React, { useEffect } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Navbar({ open, setOpen }) {
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
        document.querySelector('#desktop-nav').classList.add('nav-blur');
        document.querySelector('#mobile-nav').classList.add('nav-blur');
      } else {
        document.querySelector('#desktop-nav').classList.remove('nav-blur');
        document.querySelector('#mobile-nav').classList.remove('nav-blur');
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
    <>
      <DesktopNav links={links} />
      <MobileNav links={links} open={open} setOpen={setOpen} />
    </>
  );
}
