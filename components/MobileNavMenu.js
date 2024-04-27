import Link from 'next/link';
import React from 'react';

const MobileNavMenu = ({ links, open, setOpen }) => {
  return (
    <div className='w-svw h-svh absolute top-0 z-[99] bg-space-cadet-dark flex flex-col justify-center items-start p-12 gap-4 overflow-hidden'>
      {links.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          onClick={() => {
            setOpen(!open);
          }}
          className='text-6xl font-semibold hover:text-naples-yellow transition-all'
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavMenu;
