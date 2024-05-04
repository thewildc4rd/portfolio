import Image from 'next/image';
import React from 'react';
import DoubleLineDoodle from './DoubleLineDoodle';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Education = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const courses = [
    'Data Structures and Algorithms',
    'Object-Oriented Design & Programming',
    'Programming Fundamentals',
    'Software Engineering Fundamentals',
    'Computer Systems Fundamentals',
    'Database Systems',
    'Web Front-end Programming',
    'Computer Graphics',
    'Professional Issues and Ethics',
  ];

  return (
    <div
      id='education'
      className='section h-fit w-screen flex flex-col justify-center items-center px-96 py-14 bg-space-cadet-dark max-2xl:px-64 max-lg:px-28 max-xm:px-20 max-md:px-12'
      ref={ref}
    >
      <h2 className='text-4xl font-semibold z-10'>Education</h2>
      <DoubleLineDoodle offset1={isInView ? 0 : 500} offset2={isInView ? 0 : 400} />
      <div className='mt-10 flex flex-row gap-5 w-full'>
        <Image
          src={'/UNSW_logo.png'}
          width={'100'}
          height={'100'}
          className='rounded-full shadow-xl w-[150px] h-[150px] max-xm:w-[100px] max-xm:h-[100px]'
          alt='UNSW logo'
        />
        <div className='bg-space-cadet-light-trans p-7 rounded-3xl shadow-xl flex-1 text-lg flex flex-col'>
          <h3 className='font-medium text-xl text-naples-yellow mb-1'>
            Bachelor of Commerce/Computer Science
          </h3>
          <div className='text-base font-medium mb-4'>2021 - Present (Expected Nov 2024)</div>
          <ul className='text-lg list-disc ml-8'>
            <li className='mb-1'>
              <span className='font-medium'>WAM:</span> 74.875
            </li>
            <li>
              <span className='font-medium'>Relevant Coursework:</span>
              <ul className='list-disc gap-2 justify-start text-sm mt-2 ml-6 rounded-2xl'>
                {courses.map((item, idx) => (
                  <li
                    key={idx}
                    className='w-fit mt-1 hover:scale-105 transition-all hover:bg-opacity-100'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
