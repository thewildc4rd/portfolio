'use client';

import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const CrossDoodle = ({ styles, delay, fill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 98 96'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${styles}`}
      style={{
        strokeDashoffset: isInView ? 0 : 90,
        transition: `opacity 0.5s linear ${delay ? delay : '0s'}`,
      }}
      ref={ref}
    >
      <path
        className='cross'
        d='M48 7V89.5'
        fill='none'
        stroke={fill ? fill : '#FEDF5F'}
        strokeMiterlimit='10'
        strokeWidth='13'
        strokeLinecap='round'
      />
      <path
        className='cross'
        d='M91 48.5H6.5'
        fill='none'
        stroke={fill ? fill : '#FEDF5F'}
        strokeMiterlimit='10'
        strokeWidth='13'
        strokeLinecap='round'
      ></path>
    </svg>
  );
};

export default CrossDoodle;
