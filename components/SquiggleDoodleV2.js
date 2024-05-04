import React from 'react';

const SquiggleDoodleV2 = ({ offset }) => {
  return (
    <svg
      width='513'
      height='30'
      viewBox='0 0 513 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[220px]'
    >
      <path
        className='squiggle-v2'
        d='M6 37.1487C6 37.1487 59.7917 -4.76774 66.5 8.64871C71.5 18.6487 60 33.1487 66.5 37.1487C77.9973 44.2241 121.664 8.64871 133 8.64871C140.5 8.64871 133 32.8067 133 37.1487C133 50.6487 192 -0.351333 200.5 8.64871C208.142 16.7403 190.5 33.1488 200.5 37.1487C210.5 41.1487 295 8.64871 318 8.64871C341 8.64871 317.02 22.5041 305.5 37.1487C293.98 51.7934 426 0.648768 436 8.64871C446 16.6487 400 37.1487 416.5 37.1487C433 37.1487 507.5 14.6487 507.5 14.6487'
        stroke='#D181BF'
        strokeWidth='11'
        strokeLinecap='round'
        style={{ strokeDashoffset: offset }}
      />
    </svg>
  );
};

export default SquiggleDoodleV2;
