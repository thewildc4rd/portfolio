import React from 'react';
import SquiggleDoodleV3 from './SquiggleDoodleV3';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import ProjectCard from './ProjectCard';

const Projects = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id='projects'
      className='section h-fit w-screen flex flex-col justify-start items-center px-96 py-28 bg-space-cadet-dark max-2xl:px-64 max-lg:px-28 max-xm:px-20 max-md:px-12'
      ref={ref}
    >
      <h2 className='text-4xl font-semibold z-10'>Projects</h2>
      <SquiggleDoodleV3 offset={isInView ? 0 : 1350} />
      <div className='mt-10 flex flex-col gap-10 h-full w-full'>
        <ProjectCard
          title={'Slackr'}
          skills={['HTML', 'CSS', 'JavaScript']}
          description={'An instant messaging web app built using vanilla JavaScript, HTML and CSS.'}
          imgSrc={'/slackr-placeholder.png'}
        />
        <div className='w-full bg-space-cadet-light-trans rounded-3xl p-7 shadow-xl'>project 2</div>
        <div className='w-full bg-space-cadet-light-trans rounded-3xl p-7 shadow-xl'>project 3</div>
        <div className='w-full bg-space-cadet-light-trans rounded-3xl p-7 shadow-xl'>project 4</div>
      </div>
    </div>
  );
};

export default Projects;
