'use client';

import Link from 'next/link';
import React from 'react';

const AboutText = (props) => {
  return (
    <div className='h-full w-full flex-1 flex flex-col justify-start'>
      <p className='mt-4 text-lg max-sm:text-base'>
        I am a 4th year Commerce/Computer Science student at the University of New South Wales
        (UNSW) while also working part time as a HSC Mathematics Tutor and as an IT Administrator at
        a small business.
      </p>
      <p className='mt-4 text-lg max-sm:text-base'>
        I have a strong passion for coding and software engineering and love learning new skills!
        Specifically, I thoroughly enjoy working on web development and frontend projects. In my
        free time I enjoy working on new coding projects, doing some video editing, graphic design,
        and gaming!
      </p>
      <p className='mt-4 text-lg max-sm:text-base'>
        I’m very detail-orientated, hardworking, and organised. I enjoy working with others and
        taking on new challenges.
      </p>
      <p className='mt-4 text-lg max-sm:text-base'>
        I am on track to graduate by the end of 2024 so I am actively seeking 2025 Graduate roles
        and 2024/25 Summer internships for Software Engineering, IT, Commerce, and/or Economics.
      </p>
      <p className='mt-4 text-lg max-sm:text-base'>
        For a more compact version of everything shown in my portfolio, check out
        <Link href={'/resume.pdf'} target='_blank'>
          <span className='inline-block ml-2 max-sm:ml-[2px] max-sm:py-1 max-sm:px-2 py-2 px-3 bg-[#333d5d] hover:bg-[#445076] text-blue-150 bg-opacity-70 rounded-xl w-fit hover:scale-105 hover:bg-opacity-80 transition-all'>
            my resume
          </span>
        </Link>
        .
      </p>

      <div className='w-full bg-space-cadet-light h-1 rounded my-4' />
      <div className='flex flex-row gap-3 flex-wrap'>
        <div className='py-2 px-3 bg-rose-bonbon bg-opacity-70 text-pink-100 rounded-xl w-fit hover:scale-105 hover:bg-opacity-80 transition-all text-center'>
          Commerce/Comp Sci @ UNSW
        </div>
        <div className='py-2 px-3 bg-rose-bonbon bg-opacity-70 text-pink-100 rounded-xl w-fit hover:scale-105 hover:bg-opacity-80 transition-all text-center'>
          Math Tutor
        </div>
        <div className='py-2 px-3 bg-rose-bonbon bg-opacity-70 text-pink-100 rounded-xl w-fit hover:scale-105 hover:bg-opacity-80 transition-all text-center'>
          IT Admin
        </div>
      </div>
    </div>
  );
};

export default AboutText;
