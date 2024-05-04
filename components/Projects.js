import React from 'react';
import SquiggleDoodleV3 from './SquiggleDoodleV3';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Projects = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id='projects'
      className='section h-fit w-screen flex flex-col justify-start items-center px-24 py-28 bg-space-cadet-dark'
      ref={ref}
    >
      <h2 className='text-4xl font-semibold z-10'>Projects</h2>
      <SquiggleDoodleV3 offset={isInView ? 0 : 1350} />
      <div className='mt-10 flex flex-col gap-10 h-full w-full'>
        <div className='w-full h-72 bg-white bg-opacity-[2%]'>project 1</div>
        <div className='w-full h-72 bg-white bg-opacity-[2%]'>project 2</div>
        <div className='w-full h-72 bg-white bg-opacity-[2%]'>project 3</div>
        <div className='w-full h-72 bg-white bg-opacity-[2%]'>project 4</div>
      </div>
    </div>
  );
};

export default Projects;
