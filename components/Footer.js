import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full h-320 bg-navy-dark text-navy-light flex flex-col place-content-center items-center gap-4 p-16 max-[600px]:p-10 font-medium'>
      <div className='flex flex-row gap-2'>
        <Link
          href={'https://www.linkedin.com/in/sabrina-nahabedian/'}
          target='_blank'
          className='text-3xl mr-auto font-semibold social'
        >
          <Image src={'/linkedin_icon.png'} alt={'linkedin'} width={'35'} height={'35'} />
        </Link>
        <Link
          href={'https://github.com/thewildc4rd'}
          target='_blank'
          className='text-3xl mr-auto font-semibold social'
        >
          <Image src={'/github_icon.png'} alt={'github'} width={'35'} height={'35'} />
        </Link>
      </div>
      <div>Copyright © Sabrina Nahabedian</div>
    </footer>
  );
}
