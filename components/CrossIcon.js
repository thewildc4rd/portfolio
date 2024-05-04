import React from 'react';

const CrossIcon = ({ onClick }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 96 120'
      height='40px'
      width='40px'
      fill='#CCD4F1'
      className='mr-auto xm:hidden'
      onClick={() => onClick()}
    >
      <path d='M9.76,77.76,39.52,48,9.76,18.24a6,6,0,1,1,8.49-8.48L48,39.52,77.76,9.76a6,6,0,1,1,8.49,8.48L56.48,48,86.24,77.76a6,6,0,1,1-8.49,8.48L48,56.48,18.24,86.24a6,6,0,0,1-8.49-8.48Z' />
    </svg>
  );
};

export default CrossIcon;
