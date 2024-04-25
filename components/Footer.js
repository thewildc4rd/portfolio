import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full h-320 bg-oxford-blue text-lavender text-opacity-80 flex flex-col place-content-center items-center gap-4 p-16 max-[600px]:p-10'>
      <div className='flex flex-row gap-2'>
        <Link
          href={'https://www.linkedin.com/in/sabrina-nahabedian/'}
          target='_blank'
          className='text-3xl mr-auto font-semibold social opacity-80 hover:opacity-100 transition-all'
        >
          <Image src={'/linkedin_icon.svg'} alt={'linkedin'} width={'35'} height={'35'} />
        </Link>
        <Link
          href={'https://github.com/thewildc4rd'}
          target='_blank'
          className='text-3xl mr-auto font-semibold social opacity-80 hover:opacity-100 transition-all'
        >
          <Image src={'/github_icon.svg'} alt={'github'} width={'35'} height={'35'} />
        </Link>
      </div>
      <div>Copyright © Sabrina Nahabedian</div>
    </footer>
  );
}
