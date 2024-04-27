import React from 'react';
import AboutText from './AboutText';
import AboutPhoto from './AboutPhoto';

const About = (props) => {
  return (
    <div
      id='about'
      className='section h-[72svh] w-screen flex flex-row justify-center px-10 py-14 gap-10 bg-space-cadet-dark max-lg:flex-col max-lg:h-fit'
    >
      <AboutPhoto />
      <AboutText />
    </div>
  );
};

export default About;
