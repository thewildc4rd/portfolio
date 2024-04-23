import React from 'react';
import { motion, useAnimationControls, useScroll, animate } from 'framer-motion';
import { useEffect } from 'react';

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
      ['.shooting-star-2', { x: -1600 }, { at: 0.03 }, { duration: 0.5 }],
      ['.shooting-star-1', { x: -500 }, { at: 0.04 }, { duration: 0.1 }],
    ]);
    controls.current.pause();
  }, []);

  return (
    <div className='sky h-screen w-full flex flex-col justify-start mt-20 items-center p-10'>
      <h2 className='text-2xl bg-glaucous bg-opacity-85 hover:bg-opacity-100 px-10 py-2 rounded-2xl shadow-xl hover:-translate-y-2 transition-all hover:-rotate-3'>
        Hi, my name is
      </h2>
      <h1 className='text-9xl text-sky-magenta'>Sabrina</h1>
      {[1, 2, 3].map((num) => (
        <motion.img
          key={num}
          src={`/cloud${num}.png`}
          alt={'cloud'}
          width={'500'}
          height={'500'}
          className={`cloud cloud-${num} transition-all`}
        ></motion.img>
      ))}
      {[1, 2, 3].map((num) => (
        <motion.span
          key={num}
          className={`shooting-star shooting-star-${num} transition-all`}
        ></motion.span>
      ))}
    </div>
  );
};

export default HomeSky;
