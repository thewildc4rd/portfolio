import React from 'react';

const Projects = (props) => {
  return (
    <div
      id='projects'
      className='section h-[90svh] w-screen flex flex-col justify-start items-center px-24 py-14 gap-10 bg-space-cadet-dark'
    >
      <h2 className='text-3xl font-semibold z-10'>Projects</h2>
      <div className='w-full h-72 bg-white bg-opacity-[2%]'>project 1</div>
      <div className='w-full h-72 bg-white bg-opacity-[2%]'>project 2</div>
      <div className='w-full h-72 bg-white bg-opacity-[2%]'>project 3</div>
      <div className='w-full h-72 bg-white bg-opacity-[2%]'>project 4</div>
    </div>
  );
};

export default Projects;
