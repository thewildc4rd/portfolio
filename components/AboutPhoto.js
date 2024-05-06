/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import CrossDoodle from './CrossDoodle';
import ZigZagDoodle from './ZigZagDoodle';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const AboutPhoto = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const card2Text = [
    'map[y][x] = 0',
    'directions = [(2, 0), (0, 2), (-2, 0)]',
    'random.shuffle(directions)',
    'for dx, dy in directions:',
    'nx, ny = x + dx, y + dy',
    'if 0 <= nx < width and 0 <= ny < height and maze[ny][nx]:',
    'maze[y + dy // 2][x + dx // 2] = 0',
    'dig(nx, ny)',
    'dig(1, 1)',
  ];

  const card3Text = [
    'L = len(parameters) // 2',
    'for l in range(1, L):',
    "W = parameters[f'W{l}']",
    "b = parameters[f'b{l}']",
    'Z = np.dot(W, A) + b',
    'A = sigmoid(Z)',
    'caches.append((A, W, b))',
    "W = parameters[f'W{L}']",
    "b = parameters[f'b{L}']",
    'Z = np.dot(W, A) + b',
    'AL = sigmoid(Z)',
    'caches.append((AL, W, b))',
  ];

  return (
    <div className='h-[550px] w-[520px] relative flex justify-center items-center max-lg:w-full max-lg:h-[500px]'>
      <div
        ref={ref}
        className='card-1 opacity-0 w-full h-full max-w-[350px] max-h-[400px] rounded-3xl absolute z-[3] translate-x-3 translate-y-96 flex items-end shadow-xl shadow-gray-900 overflow-hidden'
        style={{
          opacity: isInView ? 100 : 0,
          transform: isInView ? 'translate(12px, 40px)' : 'translate(12px, 384px)',
          transition: 'all 0.5s cubic-bezier(0,.8,.21,1)',
        }}
      >
        <CrossDoodle
          styles={'top-[70%] left-[3%] rotate-[75deg] scale-[0.7] absolute z-[4] opacity-40'}
          delay={'2s'}
          fill={'#324591'}
        />
        <CrossDoodle
          styles={'top-[70%] left-[90%] rotate-[15deg] scale-[0.7] absolute z-[4] opacity-40'}
          delay={'2s'}
          fill={'#324591'}
        />
        <CrossDoodle
          styles={'top-[5%] left-[70%] rotate-[30deg] scale-[0.7] absolute z-[4] opacity-40'}
          delay={'2s'}
          fill={'#324591'}
        />
        <CrossDoodle
          styles={'top-[40%] left-[80%] rotate-[48deg] absolute z-[4] opacity-40'}
          delay={'2s'}
          fill={'#324591'}
        />
        <CrossDoodle
          styles={'top-[50%] left-[20%] rotate-[24deg] scale-[0.8] absolute z-[4] opacity-40'}
          delay={'1s'}
          fill={'#324591'}
        />
        <CrossDoodle
          styles={'top-[20%] left-[10%] rotate-12 absolute z-[4] opacity-40'}
          delay={'1s'}
          fill={'#324591'}
        />
        <img
          src={'./headshot.png'}
          alt={'A headshot of me'}
          width={'350'}
          height={'350'}
          className='drop-shadow-2xl absolute z-[5] -bottom-[1px]'
        />
      </div>
      <div
        className='card-2 w-full h-full max-w-[350px] max-h-[420px] p-5 text-pink-800 text-opacity-40 rounded-3xl absolute z-[2] -translate-x-6 -translate-y-8 -rotate-12 shadow-xl shadow-gray-900 overflow-hidden'
        style={{
          opacity: isInView ? 100 : 0,
          transform: isInView
            ? 'translate(-24px, -32px) rotate(-12deg)'
            : 'translate(-24px, 192px)',
          transition: 'all 0.5s cubic-bezier(0,.8,.21,1) 0.25s',
        }}
      >
        {card2Text.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      <div
        className='card-3 w-full h-full max-w-[450px] max-h-[350px] p-5 text-yellow-600 text-opacity-40 rounded-3xl absolute z-[1] translate-y-8 -rotate-12 shadow-xl shadow-gray-900 overflow-hidden'
        style={{
          opacity: isInView ? 100 : 0,
          transform: isInView ? 'translate(0, 32px) rotate(-12deg)' : 'translate(0, 192px)',
          transition: 'all 0.5s cubic-bezier(0,.8,.21,1) 0.75s',
        }}
      >
        <ZigZagDoodle
          fill={'#e8bb25'}
          styles={'top-[75%] left-[70%] rotate-[92deg] scale-[0.5] absolute z-[5]'}
        />
        {card3Text.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutPhoto;
