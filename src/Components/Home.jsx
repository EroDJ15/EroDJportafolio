import React from 'react';

function Home() {
  return (
    <main>
      <section className="ml-4 mr-4 sm:mx-auto min-h-max px-3 py-2 sm:p-1 sm:m-1 max-w-screen-md text-center flex flex-col">
        <div className='p-2 sm-w[80%] sm:-h[600px] text-left sm:text-center'>
          <h1 className='text-sky-600 dark:text-sky text-2xl font-bold tracking-widest leading-10'>Hi,I'am</h1>
          <p className='py-2 text-3xl font-bold text-slate-600 dark:text-slate-300'>Jerovic Pino</p>
          <p className='text-lg mt-5 font-bold text-slate-500 dark:text-slate-600'>
            Passionate full-stack web developer experienced in JS, React, HTML, Tailwind CSS, Python, and learning Flutter.
          </p>
        </div>
        <div className='pr-2 text-2xl text-left sm:text-center ml-1'>
          <a href="https://github.com">
            <i className="bx bxl-github px-1 hover:text-sky-300"></i>
          </a>
          <a href="https://linkedin.com">
            <i className="bx bxl-linkedin px-1 hover:text-sky-300"></i>
          </a>
        </div>

        <div className='text-left ml-2 sm:text-center'>
          <button className='w-auto rounded-lg shadow-md px-6 py-2 mt-4 w[250px] hover:text-sky-600 text-lg  dark:bg-slate-700 tracking-widest hover:bg:text-slate-300'>
            Mas informacion
          </button>
        </div>

        {/* Contenido de imagen */}
        <div className='my-7 w-full p-2'>
          <div className='mx-auto mb-6 max-w-[415px]'>
            <img className='sm:ml-28 ml-1 text-left sm:text-center w-auto h-[210px] m-auto rounded-lg bg-cover bg-no-repeat' src="public/images/Avatar.png" alt="Avatar" />
          </div>
        </div>


      </section>
    </main>
  );
}

export default Home;
