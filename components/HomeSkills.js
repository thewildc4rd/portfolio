import React from 'react';
import SkillsCard from './SkillsCard';

const HomeSkills = (props) => {
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
  ];

  const softwares = [
    'VS Code',
    'Xcode',
    'Microsoft Office',
    'Google Workspace',
    'Photoshop',
    'After Effects',
    'SketchUp',
    'Final Cut Pro',
  ];

  return (
    <div className='h-fit w-screen flex flex-col justify-center items-center px-10 py-10 gap-10 bg-space-cadet-light relative'>
      <h2 className='text-3xl font-semibold z-10'>Technical Skills</h2>
      <div className='w-[250px] h-[20px] bg-glaucous bg-opacity-65 absolute top-14 z-0' />
      <div className='w-full h-full flex flex-row gap-8'>
        <SkillsCard heading={'Languages'} skills={languages} />
        <SkillsCard heading={'Frameworks & Libraries'} skills={frameworks} />
        <SkillsCard heading={'Softwares'} skills={softwares} />
      </div>
    </div>
  );
};

export default HomeSkills;
