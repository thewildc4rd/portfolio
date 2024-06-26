import React from 'react';

const CurvedDoodle = ({ offset }) => {
  return (
    <svg viewBox='0 0 568 39' xmlns='http://www.w3.org/2000/svg' className='w-[200px]'>
      <path
        className='curved'
        d='M10 25.0521C270 -8.44792 421.5 8 558 25.0521'
        fill='none'
        stroke='#D181BF'
        strokeWidth='11'
        strokeLinecap='round'
        style={{ strokeDashoffset: offset }}
      />
    </svg>
  );
};

export default CurvedDoodle;
