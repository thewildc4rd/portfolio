'use client';
import React, { useEffect, useState } from 'react';
import MobileNavMenu from './MobileNavMenu';

const MobileNav = ({ links }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.getElementById('home').classList.add('hidden');
    } else {
      document.getElementById('home').classList.remove('hidden');
    }
  }, [open]);
  return (
    <>
      {open && <MobileNavMenu links={links} open={open} setOpen={setOpen} />}
      <nav
        id='mobile-nav'
        className='mx-left mt-5 ml-5 top-5 w-fit h-fit p-3 sticky transition-all duration-300 rounded-full'
      >
        <svg
          width={'40px'}
          height={'40px'}
          fill='#CCD4F1'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            setOpen(!open);
          }}
        >
          <path d='m21 15.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z' />
        </svg>
      </nav>
    </>
  );
};

export default MobileNav;
