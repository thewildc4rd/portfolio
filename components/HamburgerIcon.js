import React from 'react';

const HamburgerIcon = ({ onClick }) => {
  return (
    <>
      <svg
        width={'40px'}
        height={'40px'}
        fill='#CCD4F1'
        strokeLinejoin='round'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        onClick={() => onClick()}
        className={'mr-auto xm:hidden'}
      >
        <path d='m21 15.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z' />
      </svg>
    </>
  );
};

export default HamburgerIcon;
