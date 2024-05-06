import React from 'react';
import SquiggleDoodle from './SquiggleDoodle';
import { motion, useAnimationControls, useScroll, animate } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const Sky = (props) => {
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
      className='section h-[94svh] w-screen relative flex flex-col justify-start items-center py-10'
    >
      <h2 className='font-semibold mt-28 text-5xl text-lavender-light bg-opacity-85 hover:bg-opacity-100 px-10 py-2 max-md:text-3xl max-sm:text-2xl'>
        Hi, my name is
      </h2>
      <h1 className='text-9xl text-sky-magenta font-semibold max-md:text-8xl max-sm:text-7xl'>
        Sabrina
      </h1>
      <SquiggleDoodle />
      {[1, 2, 3].map((num) => (
        <motion.img
          key={num}
          src={`./cloud${num}.png`}
          alt={'cloud'}
          width={'500'}
          height={'500'}
          className={`cloud cloud-${num} transition-all max-md:w-[400px] max-md:h[400px]`}
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
          document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      />
    </div>
  );
};

export default Sky;
