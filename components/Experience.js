import React from 'react';
import SquiggleDoodleV2 from './SquiggleDoodleV2';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Expierence = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id='experience'
      className='section h-fit w-screen flex flex-col justify-start items-center px-96 py-28 bg-space-cadet-light max-2xl:px-64 max-lg:px-28 max-xm:px-20 max-md:px-12'
      ref={ref}
    >
      <h2 className='text-4xl font-semibold z-10'>Experience</h2>
      <SquiggleDoodleV2 offset={isInView ? 0 : 800} />
      <div className='mt-10 flex flex-col gap-10 h-full w-full'>
        <ExperienceCard
          title={'Mathematics Tutor'}
          timePeriod={'Dec 2021 – Present'}
          company={'Self-employed'}
          dotPoints={[
            'Tutoring Year 7-12 students in high school Mathematics to help them understand key concepts',
            'Assisting students with homework, projects, test preparation, papers, research and other academic tasks',
          ]}
          style={{
            opacity: isInView ? 100 : 0,
            transform: isInView ? 'translate(0px, 0px)' : 'translate(-400px, 0px)',
            transition: 'all 1s cubic-bezier(0,.8,.21,1) 1s',
          }}
        />
        <ExperienceCard
          title={'IT Administrator'}
          timePeriod={'Aug 2020 – Present'}
          company={'Blankisa'}
          dotPoints={[
            'Maintain the company’s computers, provide IT assistance, improve their Squarespace website, and help improve productivity through the integration of new technology',
          ]}
          style={{
            opacity: isInView ? 100 : 0,
            transform: isInView ? 'translate(0px, 0px)' : 'translate(400px, 0px)',
            transition: 'all 1s cubic-bezier(0,.8,.21,1) 1.5s',
          }}
        />
      </div>
    </div>
  );
};

export default Expierence;
