import React from 'react';

const SquiggleDoodle = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1491 117'
      className='z-10 w-[600px] ml-5 max-md:w-[450px] max-sm:w-[350px]'
    >
      <path
        className='squiggle'
        fill='none'
        stroke='#D181BF'
        strokeMiterlimit='10'
        strokeWidth='20'
        strokeLinecap='round'
        d='M14.5 81C14.5 81 127 -2.00003 138.5 12.5C150 27 116 65 135 87.5C154 110 317.237 -1.83905 349.5 12.5C367.5 20.4999 349.5 72 391 72C485.161 72 552.849 23.2382 600 32.5C614.5 35.3482 615 79.5 644 87.5C673 95.5 779.874 58.8597 875.5 50.5C962.487 42.8955 1011.68 43.3055 1099 44C1195.18 44.7649 1354 58.5 1354 58.5'
      />
    </svg>
  );
};

export default SquiggleDoodle;
