import React from 'react';
import SquiggleDoodleV3 from './SquiggleDoodleV3';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useRouter } from 'next/navigation';

const Projects = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const router = useRouter();

  return (
    <div
      id='projects'
      className='section h-fit w-screen flex flex-col justify-start items-center px-96 py-28 bg-space-cadet-dark max-2xl:px-64 max-lg:px-28 max-xm:px-20 max-md:px-12'
      ref={ref}
    >
      <h2 className='text-4xl font-semibold z-10'>Projects</h2>
      <SquiggleDoodleV3 offset={isInView ? 0 : 1350} />
      <div className='mt-10 flex flex-col gap-10 h-full w-full'>
        <ProjectCard
          title={'Portfolio'}
          skills={['HTML', 'CSS', 'JavaScript', 'Next.js', 'Tailwind']}
          description={'My portfolio (this) website!'}
          imgSrc={'./portfolio.png'}
          centerImg={true}
          style={{
            opacity: isInView ? 100 : 0,
            transform: isInView ? 'translate(0px, 0px)' : 'translate(0px, 400px)',
            transition: 'all 1s cubic-bezier(0,.8,.21,1) 1s',
          }}
          onClick={() => router.push('/')}
          github={'https://github.com/thewildc4rd/portfolio'}
        />
        <ProjectCard
          title={'Airbrb'}
          skills={['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Material-UI']}
          description={
            'A property renting web app which allows users to create listings for properties which they would like to rent out to others.'
          }
          imgSrc={'./airbrb.png'}
          style={{
            opacity: isInView ? 100 : 0,
            transform: isInView ? 'translate(0px, 0px)' : 'translate(0px, 400px)',
            transition: 'all 1s cubic-bezier(0,.8,.21,1) 1s',
          }}
        />
        <ProjectCard
          title={'Slackr'}
          skills={['HTML', 'CSS', 'JavaScript']}
          description={
            'An instant messaging web app which lets users to directly or group message other users, react, edit, pin, and delete messages, get notifications, profiles, and send photos.'
          }
          imgSrc={'./slackr.png'}
          style={{
            opacity: isInView ? 100 : 0,
            transform: isInView ? 'translate(0px, 0px)' : 'translate(0px, 400px)',
            transition: 'all 1s cubic-bezier(0,.8,.21,1) 1.25s',
          }}
        />
        <ProjectCard
          title={'RecipeBook'}
          skills={['Swift']}
          description={
            'An iOS app where users can store and organise their recipes all in one place.'
          }
          imgSrc={'./recipe-book.jpg'}
          style={{
            opacity: isInView ? 100 : 0,
            transform: isInView ? 'translate(0px, 0px)' : 'translate(0px, 400px)',
            transition: 'all 1s cubic-bezier(0,.8,.21,1) 1.5s',
          }}
          centerImg={true}
        />
      </div>
    </div>
  );
};

export default Projects;
