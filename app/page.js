'use client';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

// const cloudVariants = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// };
// const starVariants = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// };

export default function Home() {
  return (
    <main className='h-full w-full home'>
      <div className='h-screen w-full flex flex-col justify-start mt-20 items-center p-10'>
        <h2 className='text-2xl bg-glaucous bg-opacity-85 hover:bg-opacity-100 px-10 py-2 rounded-2xl shadow-xl hover:-translate-y-2 transition-all hover:-rotate-3'>
          Hi, my name is
        </h2>
        <h1 className='text-9xl text-sky-magenta'>Sabrina</h1>
        {[1, 2, 3].map((num) => (
          <>
            <motion.img
              // animate={{}}
              // ref={ref}
              // variants={cloudVariants}
              // inital='visible'
              src={`/cloud${num}.png`}
              alt={'cloud'}
              width={'500'}
              height={'500'}
              className='cloud'
            ></motion.img>
            <motion.span
              // animate={{}}
              // inital='visible'
              // variants={starVariants}
              className='shooting-star'
            ></motion.span>
          </>
        ))}
      </div>
      {/* <div className='h-screen w-full flex flex-col justify-center items-center p-10'>jsdfhsjk</div> */}
    </main>
  );
}
