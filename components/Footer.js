import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full h-320 bg-navy-dark text-navy-light flex flex-col place-content-center items-center gap-4 p-16 max-[600px]:p-10 font-medium'>
      Copyright © Sabrina Nahabedian
    </footer>
  );
}
