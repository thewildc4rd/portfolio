import React from 'react';
import { motion, useAnimationControls, useScroll, animate } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeSky = (props) => {
  const controls = useAnimationControls();
  const { scrollYProgress } = useScroll();

  scrollYProgress.on('change', (yProgress) => {
    if (!controls.current) return;

    controls.current.time = yProgress * controls.current.duration;
  });

  useEffect(() => {
    controls.current = animate([
      ['.cloud-2', { x: -100 }, { at: 0 }, { duration: 0.5 }],
      ['.cloud-1', { x: 100 }, { at: 0.025 }, { duration: 0.5 }],
      ['.cloud-3', { x: -150 }, { at: 0.05 }, { duration: 0.5 }],
      ['.shooting-star-3', { x: -700 }, { at: 0 }, { duration: 0.5 }],
      ['.shooting-star-2', { x: -950 }, { at: 0.02 }, { duration: 0.1 }],
      ['.shooting-star-1', { x: -500 }, { at: 0.04 }, { duration: 0.1 }],
    ]);
    controls.current.pause();
  }, []);

  return (
    <div
      id='sky'
      className='h-[94svh] w-screen relative flex flex-col justify-start items-center p-10'
    >
      <h2 className='font-semibold mt-28 text-5xl text-lavender-light bg-opacity-85 hover:bg-opacity-100 px-10 py-2'>
        Hi, my name is
      </h2>
      <h1 className='text-9xl text-sky-magenta font-semibold'>Sabrina</h1>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1491 117'
        className='z-10 w-[600px] ml-5'
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
      {[1, 2, 3].map((num) => (
        <motion.img
          key={num}
          src={`/cloud${num}.png`}
          alt={'cloud'}
          width={'500'}
          height={'500'}
          className={`cloud cloud-${num} transition-all`}
        />
      ))}
      {[1, 2, 3].map((num) => (
        <motion.span
          key={num}
          className={`shooting-star shooting-star-${num} transition-all`}
        ></motion.span>
      ))}
      <Image
        src={'/down_arrow.svg'}
        alt={'down arrow'}
        width={'40'}
        height={'40'}
        className='absolute bottom-20 z-10'
        id='down-arrow'
        onClick={() =>
          document
            .getElementById('home-overview')
            .scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      />
    </div>
  );
};

export default HomeSky;
