import React from 'react';

const ExperienceCard = ({ title, timePeriod, company, dotPoints, style }) => {
  return (
    <div className='w-full bg-white bg-opacity-[2%] rounded-3xl p-7 shadow-xl' style={style}>
      <div className='flex flex-row w-full'>
        <h3 className='font-medium text-xl text-sky-magenta mb-1'>{title}</h3>
        <div className='text-base font-medium mb-2 ml-auto justify-center items-center'>
          {timePeriod}
        </div>
      </div>
      <h4 className='font-medium text-base italic mb-4'>{company}</h4>
      <ul className='list-disc ml-10'>
        {dotPoints.map((dotPoint, idx) => (
          <li key={idx} className='mb-1'>
            {dotPoint}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
