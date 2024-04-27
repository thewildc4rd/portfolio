import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const DesktopNav = ({ links }) => {
  return (
    <nav
      id='desktop-nav'
      className='mx-auto mt-2 top-2 w-fit h-10 flex justify-center gap-10 items-center p-10 sticky transition-all duration-300 font-black rounded-full z-[100]'
    >
      <Link
        href={'#'}
        scroll={false}
        onClick={() => globalThis.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Image
          src={'/SN_logo.png'}
          alt={'SN'}
          width={'50'}
          height={'50'}
          className='logo transition-all hover:scale-110 hover:shadow-naples-yellow'
        />
      </Link>
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
};

export default DesktopNav;
