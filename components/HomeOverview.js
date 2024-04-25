'use client';

import React from 'react';
import HomeOverviewPhoto from './HomeOverviewPhoto';

const HomeOverview = (props) => {
  return (
    <div
      id='home-overview'
      className='h-[70svh] w-screen flex flex-row justify-center items-start p-10 gap-8 bg-space-cadet-dark'
    >
      <HomeOverviewPhoto />
      <div className='h-full w-full'>...</div>
    </div>
  );
};

export default HomeOverview;
