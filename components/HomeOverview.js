import Image from 'next/image';
import React from 'react';
import CrossDoodle from './CrossDoodle';

const HomeOverview = (props) => {
  return (
    <div
      id='home-overview'
      className='h-[90svh] w-screen flex flex-row justify-center items-start p-20 gap-8 bg-space-cadet-dark'
    >
      <div className='bg-space-cadet-light h-full w-full relative flex justify-center items-center'>
        <div className='card-1 w-full h-full max-w-[350px] max-h-[400px] rounded-3xl absolute z-[3] translate-x-3 translate-y-10 flex items-end shadow-xl hover:scale-[110%] transition-all'>
          <Image
            src={'/headshot.png'}
            alt={'A headshot of me'}
            width={'350'}
            height={'350'}
            className='drop-shadow-2xl absolute z-[5]'
          />
          <CrossDoodle style={'top-[40%] left-[80%] rotate-[48deg] absolute z-[4]'} />
          <CrossDoodle style={'top-[50%] left-[20%] rotate-[24deg] scale-[0.8] absolute z-[4]'} />
          <CrossDoodle style={'top-[20%] left-[10%] rotate-12 absolute z-[4]'} />
        </div>
        <div className='card-2 w-full h-full max-w-[350px] max-h-[420px] rounded-3xl absolute z-[2] -translate-x-6 -translate-y-8 -rotate-12 shadow-xl' />
        <div className='card-3 w-full h-full max-w-[450px] max-h-[350px] rounded-3xl absolute z-[1] translate-y-8 -rotate-12 shadow-xl' />
      </div>
      <div className='bg-space-cadet-light h-full w-full'></div>
    </div>
  );
};

export default HomeOverview;
