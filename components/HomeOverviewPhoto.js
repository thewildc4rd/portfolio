'use client';

import Image from 'next/image';
import React from 'react';
import CrossDoodle from './CrossDoodle';
import ZigZagDoodle from './ZigZagDoodle';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const HomeOverviewPhoto = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='h-full w-full relative flex justify-center items-center'>
      <div
        ref={ref}
        className='card-1 opacity-0 w-full h-full max-w-[350px] max-h-[400px] rounded-3xl absolute z-[3] translate-x-3 translate-y-96 flex items-end shadow-xl'
        style={{
          opacity: isInView ? 100 : 0,
          transform: isInView ? 'translate(12px, 40px)' : 'translate(12px, 384px)',
          transition: 'all 0.5s cubic-bezier(0,.8,.21,1)',
        }}
      >
        <CrossDoodle styles={'top-[40%] left-[80%] rotate-[48deg] absolute z-[4]'} delay={'1s'} />
        <CrossDoodle
          styles={'top-[50%] left-[20%] rotate-[24deg] scale-[0.8] absolute z-[4]'}
          delay={'1s'}
        />
        <CrossDoodle styles={'top-[20%] left-[10%] rotate-12 absolute z-[4]'} delay={'1s'} />
        {/* <ZigZagDoodle
            styles={'top-[65%] left-[58%] rotate-[65deg] scale-[0.38] absolute z-[4]'}
            delay={'0.6s'}
          /> */}
        <Image
          src={'/headshot.png'}
          alt={'A headshot of me'}
          width={'350'}
          height={'350'}
          className='drop-shadow-2xl absolute z-[5]'
        />
      </div>
      <div
        className='card-2 w-full h-full max-w-[350px] max-h-[420px] rounded-3xl absolute z-[2] -translate-x-6 -translate-y-8 -rotate-12 shadow-xl'
        style={{
          opacity: isInView ? 100 : 0,
          transform: isInView
            ? 'translate(-24px, -32px) rotate(-12deg)'
            : 'translate(-24px, 192px)',
          transition: 'all 0.5s cubic-bezier(0,.8,.21,1) 0.25s',
        }}
      />
      <div
        className='card-3 w-full h-full max-w-[450px] max-h-[350px] rounded-3xl absolute z-[1] translate-y-8 -rotate-12 shadow-xl'
        style={{
          opacity: isInView ? 100 : 0,
          transform: isInView ? 'translate(0, 32px) rotate(-12deg)' : 'translate(0, 192px)',
          transition: 'all 0.5s cubic-bezier(0,.8,.21,1) 0.75s',
        }}
      />
    </div>
  );
};

export default HomeOverviewPhoto;
