import React from 'react';

const SkillsCard = ({ heading, skills }) => {
  return (
    <div className='flex-1 flex flex-col items-center justify-start p-4 bg-glaucous bg-opacity-10 rounded-2xl shadow-xl'>
      <h3 className='text-2xl font-semibold text-lavender mb-4'>{heading}</h3>
      <div className='flex flex-row flex-wrap gap-2 justify-center'>
        {skills.map((item, idx) => (
          <div
            key={idx}
            className='py-2 px-3 bg-glaucous bg-opacity-70 text-blue-100 rounded-xl w-fit hover:scale-105 hover:bg-opacity-80 transition-all text-center'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
