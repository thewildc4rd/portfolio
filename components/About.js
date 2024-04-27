import React from 'react';
import AboutText from './AboutText';
import AboutPhoto from './AboutPhoto';

const About = (props) => {
  return (
    <div
      id='about'
      className='h-[70svh] w-screen flex flex-row justify-center items-start px-10 py-14 gap-10 bg-space-cadet-dark'
    >
      <AboutPhoto />
      <AboutText />
    </div>
  );
};

export default About;
