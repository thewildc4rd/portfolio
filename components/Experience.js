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
      className='section h-fit w-screen flex flex-col justify-start items-center px-96 py-28 bg-space-cadet-light max-2xl:px-64 max-lg:px-28 max-xm:px-20 max-md:px-12'
      ref={ref}
    >
      <h2 className='text-4xl font-semibold z-10'>Experience</h2>
      <SquiggleDoodleV2 offset={isInView ? 0 : 800} />
      <div className='mt-10 flex flex-col gap-10 h-full w-full'>
        <div className='w-full bg-white bg-opacity-[2%] rounded-3xl p-7 shadow-xl'>
          <div className='flex flex-row w-full'>
            <h3 className='font-medium text-xl text-naples-yellow mb-1'>Mathematics Tutor</h3>
            <div className='text-base font-medium mb-2 ml-auto justify-center items-center'>
              Dec 2021 – Present
            </div>
          </div>
          <h4 className='font-medium text-base italic mb-4'>Self-employed</h4>
          <ul className='list-disc ml-10'>
            <li className='mb-1'>
              Tutoring Year 7-12 students in high school Mathematics to help them understand key
              concepts
            </li>
            <li>
              Assisting students with homework, projects, test preparation, papers, research and
              other academic tasks
            </li>
          </ul>
        </div>
        <div className='w-full bg-white bg-opacity-[2%] rounded-3xl p-7 shadow-xl'>
          <div className='flex flex-row w-full'>
            <h3 className='font-medium text-xl text-naples-yellow mb-1'>IT Administrator</h3>
            <div className='text-base font-medium mb-2 ml-auto justify-center items-center'>
              Jul 2023 – Present
            </div>
          </div>
          <h4 className='font-medium text-base italic mb-4'>Blankisa</h4>
          <ul className='list-disc ml-10'>
            <li>
              Maintain the company’s computers, provide IT assistance, improve their Squarespace
              website, and help improve productivity through the integration of new technology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Expierence;
