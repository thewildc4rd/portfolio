import Link from 'next/link';
import LinkedinIcon from './LinkedinIcon';
import GitHubIcon from './GitHubIcon';

export default function Footer() {
  return (
    <footer className='w-full h-320 bg-oxford-blue text-lavender text-opacity-80 flex flex-col place-content-center items-center gap-1 p-16 max-[600px]:p-10'>
      <div className='flex flex-row gap-2 items-center'>
        <Link href={'https://www.linkedin.com/in/sabrina-nahabedian/'} target='_blank'>
          <LinkedinIcon style={'opacity-100 hover:opacity-80 transition-all'} />
        </Link>
        <Link href={'https://github.com/thewildc4rd'} target='_blank'>
          <GitHubIcon style={'opacity-100 hover:opacity-80 transition-all'} />
        </Link>
        <Link href={'/./resume.pdf'} target='_blank'>
          <div className='ml-1 text-center bg-naples-yellow px-2 py-1 rounded-full text-oxford-blue opacity-100 hover:opacity-80 transition-all'>
            resume
          </div>
        </Link>
      </div>
      <div className='text-center mt-5'>Copyright © Sabrina Nahabedian</div>
      <div className='text-center text-sm opacity-85'>
        Made using HTML, CSS, JavaScript and Next.js
      </div>
    </footer>
  );
}
