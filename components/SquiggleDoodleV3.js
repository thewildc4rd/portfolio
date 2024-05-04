import React from 'react';

const SquiggleDoodleV3 = ({ offset }) => {
  return (
    <svg
      width='525'
      height='35'
      viewBox='0 0 525 58'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[180px]'
    >
      <path
        className='squiggle-v3'
        d='M6 13.0002C30.5 13.0002 497.5 -2.49968 518 13.0002C538.5 28.5001 80 30 91 40.5C102 51 397 40.5 449 52.0001'
        stroke='#D181BF'
        strokeWidth='11'
        strokeLinecap='round'
        style={{ strokeDashoffset: offset }}
      />
    </svg>
  );
};

export default SquiggleDoodleV3;
