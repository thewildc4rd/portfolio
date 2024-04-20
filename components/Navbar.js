import Link from 'next/link';

export default function Navbar(props) {
  return (
    <nav className='w-full h-10 flex justify-center gap-6 items-center p-14 bg-zinc-200'>
      <div className='flex justify-center w-300px'>
        <Link href={'/'} className='text-3xl mr-auto font-semibold'>
          <img src={'/SN_Icon.png'} className='h-16' />
        </Link>
      </div>
      <div className='flex justify-end gap-x-10 items-center flex-wrap flex-1'>
        <Link className='font-medium text-lg' href={'/'}>
          Home
        </Link>
        <Link className='font-medium text-lg' href={'/'}>
          Projects
        </Link>
      </div>
    </nav>
  );
}
