import React from 'react';

const DoubleLineDoodle = ({ offset1, offset2 }) => {
  return (
    <svg
      width='509'
      height='30'
      viewBox='0 0 509 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[200px]'
    >
      <path
        className='double-line1'
        d='M10 19.5C142.5 19.5 413.5 12 499 6'
        stroke='#D181BF'
        strokeWidth='11'
        strokeLinecap='round'
        style={{ strokeDashoffset: offset1 }}
      />
      <path
        className='double-line2'
        d='M89 50C207.418 32.7668 422.17 35.639 477 41.7424'
        stroke='#D181BF'
        strokeWidth='11'
        strokeLinecap='round'
        style={{ strokeDashoffset: offset2 }}
      />
    </svg>
  );
};

export default DoubleLineDoodle;
