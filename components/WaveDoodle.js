import React from 'react';

const WaveDoodle = ({ offset }) => {
  return (
    <svg viewBox='0 0 718 33' xmlns='http://www.w3.org/2000/svg' className='w-[240px]'>
      <path
        className='wave'
        d='M6 22.5C29 17.5 62.2 6 83 6C109 6 129.5 27.5 155 27.5C180.5 27.5 206.5 6 228 6C249.5 6 266.5 27.5 289.5 27.5C312.5 27.5 340 6 367 6C394 6 417 22.5 445.5 22.5C474 22.5 491.5 6 521.5 6C537.5 6 567.5 17.5 606 17.5C629 17.5 673.5 6 712 6'
        fill='none'
        stroke='#D181BF'
        strokeWidth='11'
        strokeLinecap='round'
        style={{ strokeDashoffset: offset }}
      />
    </svg>
  );
};

export default WaveDoodle;
