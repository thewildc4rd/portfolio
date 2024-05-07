'use client';

import React from 'react';
import SkillsCard from './SkillsCard';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import WaveDoodle from './WaveDoodle';

const Skills = (props) => {
  const languages = [
    'Python',
    'C',
    'Java',
    'Javascript',
    'HTML',
    'CSS',
    'SQL',
    'Swift',
    'R',
    'Assembly',
    'LaTeX',
    'Markdown',
  ];

  const frameworks = [
    'Next.js',
    'React.js',
    'Tailwind',
    'Bootstrap',
    'Material-UI',
    'Git',
    'JUnit',
    'Cypress',
    'Matplotlib',
    'NumPy',
    'Moment.js',
    'Pandas',
    'Scikit-Learn',
    'PostgreSQL',
  ];

  const softwares = [
    'Visual Studio Code',
    'Xcode',
    'Microsoft Office',
    'Google Workspace',
    'Adobe Photoshop',
    'Adobe After Effects',
    'SketchUp',
    'Final Cut Pro',
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id='skills'
      ref={ref}
      className='section w-screen h-fit flex flex-col justify-center items-center px-10 py-28 bg-space-cadet-light relative'
    >
      <h2 className='text-4xl font-semibold z-10 text-center'>
        <span className='max-[360px]:hidden'>Technical</span> Skills
      </h2>
      <div className='max-[360px]:w-[110px] max-[360px]:overflow-hidden'>
        <WaveDoodle offset={isInView ? 0 : 750} />
      </div>

      <div className='w-full h-full flex flex-row gap-8 mt-10 max-lg:flex-col'>
        <SkillsCard heading={'Languages'} skills={languages} />
        <SkillsCard heading={'Frameworks & Libraries'} skills={frameworks} delay={'0.25s'} />
        <SkillsCard heading={'Softwares'} skills={softwares} delay={'0.5s'} />
      </div>
    </div>
  );
};

export default Skills;
