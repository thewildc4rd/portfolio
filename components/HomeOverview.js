import React from 'react';
import HomeOverviewPhoto from './HomeOverviewPhoto';
import HomeAboutMe from './HomeAboutMe';

const HomeOverview = (props) => {
  return (
    <div
      id='home-overview'
      className='h-[70svh] w-screen flex flex-row justify-center items-start px-10 py-14 gap-10 bg-space-cadet-dark'
    >
      <HomeOverviewPhoto />
      <HomeAboutMe />
    </div>
  );
};

export default HomeOverview;
