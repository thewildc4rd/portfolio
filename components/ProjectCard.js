/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import GitHubIcon from './GitHubIcon';

const ProjectCard = ({ title, skills, description, imgSrc, centerImg, style, onClick, github }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className='w-full h-[500px] max-lg:h-[400px] bg-space-cadet-light-trans rounded-3xl p-7 shadow-xl flex flex-col'
      style={style}
    >
      <div className='flex flex-row'>
        <div>
          <h3 className='font-medium text-xl text-rose-bonbon mb-2'>{title}</h3>
          <div className='flex flex-row gap-2 flex-wrap text-sm mb-2'>
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className='py-1 px-2 bg-rose-bonbon bg-opacity-70 text-pink-100 rounded-lg w-fit hover:scale-105 hover:bg-opacity-80 transition-all text-center'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className='ml-auto'>
          {github && (
            <Link href={github} target='_blank'>
              <GitHubIcon fill={'#EA4B93'} style={'opacity-100 hover:opacity-80 transition-all'} />
            </Link>
          )}
        </div>
      </div>
      <div className='mb-5'>{description}</div>
      <div className='w-full h-full overflow-hidden rounded-2xl relative'>
        <div
          className={`absolute w-full h-[70%] bg-rose-bonbon bg-opacity-70 top-[15%] p-4 rounded-2xl flex items-center text-3xl hover:bg-opacity-80 transition-all shadow-2xl ${
            hover ? 'left-1' : 'left-8'
          } ${onClick != null && onClick != undefined ? 'cursor-pointer' : ''}`}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onClick={() => {
            if (onClick != null && onClick != undefined) {
              onClick();
            }
          }}
        >
          {onClick != null && onClick != undefined && (
            <svg
              fill='#FCE7F3'
              height='20px'
              width='20px'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='-52.8 -52.8 435.60 435.60'
              stroke='#FCE7F3'
              strokeWidth='25'
            >
              <path d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z' />
            </svg>
          )}
        </div>

        <div
          className={`w-[95%] h-full overflow-hidden rounded-2xl absolute shadow-2xl transition-all duration-200 ${
            centerImg ? 'flex items-center' : ''
          } ${hover ? 'left-14' : 'left-20'}`}
        >
          <img src={imgSrc} width={1095} height={328} alt='Photo of the project' />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
