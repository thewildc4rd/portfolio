'use client';

import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const SkillsCard = ({ heading, skills, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='flex-1 lg:hover:-translate-y-4 transition-all'>
      <div
        ref={ref}
        className={
          'xl:min-h-64 lg:min-h-80 flex flex-col items-center justify-start p-4 bg-glaucous bg-opacity-10 rounded-2xl shadow-xl transition-all max-lg:min-h-min'
        }
        style={{
          opacity: isInView ? 100 : 0,
          transform: isInView ? 'translate(0px, 0px)' : 'translate(0px, 384px)',
          transition: `all 0.75s cubic-bezier(0,.8,.21,1) ${delay ? delay : '0s'}`,
        }}
      >
        <h3 className='text-2xl font-semibold text-lavender mb-4 text-center'>{heading}</h3>
        <div className='flex flex-row flex-wrap gap-2 justify-center'>
          {skills.map((item, idx) => (
            <div
              key={idx}
              className='py-2 px-3 bg-glaucous bg-opacity-70 text-blue-100 rounded-xl w-fit hover:scale-105 transition-all text-center hover:bg-sky-magenta hover:bg-opacity-80'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
