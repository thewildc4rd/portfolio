import React from 'react';
import AboutText from './AboutText';
import AboutPhoto from './AboutPhoto';
import CurvedUnderlineDoodle from './CurvedUnderlineDoodle';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const About = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id='about'
      className='section h-fit w-screen flex flex-col justify-center items-center px-10 py-14 bg-space-cadet-dark'
      ref={ref}
    >
      <h1 className='text-5xl font-semibold'>About Me</h1>
      <CurvedUnderlineDoodle offset={isInView ? 0 : 600} />
      <div className='flex flex-row max-lg:flex-col max-lg:h-fit gap-x-10 gap-y-4 mt-4 max-lg:mt-10'>
        <AboutPhoto />
        <AboutText />
      </div>
    </div>
  );
};

export default About;
