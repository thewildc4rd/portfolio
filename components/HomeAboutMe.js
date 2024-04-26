import React from 'react';
import HomeAboutText from './AboutMeText';
import AboutMePhoto from './AboutMePhoto';

const HomeOverview = (props) => {
  return (
    <div
      id='home-overview'
      className='h-[70svh] w-screen flex flex-row justify-center items-start px-10 py-14 gap-10 bg-space-cadet-dark'
    >
      <AboutMePhoto />
      <HomeAboutText />
    </div>
  );
};

export default HomeOverview;
