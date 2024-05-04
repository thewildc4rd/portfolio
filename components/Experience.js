import React from 'react';
import SquiggleDoodleV2 from './SquiggleDoodleV2';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Expierence = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id='experience'
      className='section h-[90svh] w-screen flex flex-col justify-start items-center px-24 py-28 bg-space-cadet-light'
      ref={ref}
    >
      <h2 className='text-4xl font-semibold z-10'>Experience</h2>
      <SquiggleDoodleV2 offset={isInView ? 0 : 800} />
    </div>
  );
};

export default Expierence;
