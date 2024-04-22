export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between h-screen bg-space-cadet-dark home'>
      <div className='h-2/5 flex flex-col justify-center items-center w-full p-10'>
        <h2 className='text-2xl bg-glaucous bg-opacity-85 hover:bg-opacity-100 px-10 py-2 rounded-2xl shadow-xl hover:-translate-y-2 transition-all hover:-rotate-3'>
          Hi, my name is
        </h2>
        <h1 className='text-9xl text-sky-magenta'>Sabrina</h1>
      </div>
    </main>
  );
}
