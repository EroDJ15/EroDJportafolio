import React from 'react';

function About() {
  return (
    <main className='py-0 sm:py-6'>
      <section className="ml-4 mr-4 sm:mx-auto min-h-max px-4 py-1 sm:p-1 sm:m-6 max-w-screen-md text-center flex flex-col sm:flex-row">
        <div className="flex-grow text-left sm:text-center">
          <div className="p-0 sm:w-full sm:h-600 text-left">
            <h1 className="p-0 text-sky-600 dark:text-sky text-2xl font-bold tracking-widest leading-10">Hi, I'm</h1>
            <p className="py-0 text-3xl font-bold text-slate-600 dark:text-slate-300">Jerovic Pino</p>
            <p className="text-lg mt-5 font-bold text-slate-500 dark:text-slate-600">
              Passionate full-stack web developer experienced in JS, React, HTML, Tailwind CSS, Python, and learning Flutter.
            </p>
            <div className="mt-5">
              <button className="w-auto rounded-lg shadow-md px-5 py-2 w-250px hover:text-sky-600 text-lg dark:bg-slate-700 tracking-widest hover:bg:text-slate-300">
                More information
              </button>

            </div>
            <div className="flex text-1xl text-left sm:text-center ml-0 mt-3">
              <a href="https://github.com/EroDJ15">
                <i className="bx bxl-github px-1 hover:text-sky-300"></i>
              </a>
              <a href="https://www.linkedin.com/in/jerovic-pino-verde-80030a124/">
                <i className="bx bxl-linkedin px-1 hover:text-sky-300"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="my- p-3">
          <img src='/images/Mi proyecto-1 (2).png' className=" text-lg rounded-xl  bg-cover  px-3 justify-center max-w-[300px] sm:max-w-[360px] lg:bg-[length:617px_840px]" ></img>
        </div>
      </section >
      <section>
        <div className='flex flex-col items-center justify-center flex-grow sm:mt-8'>
          <h2 className='text-center font-bold hidden sm:flex text-sky-600'>
            Skils
          </h2>
        </div>
        <section className='text-center font-semibold hidden sm:flex px-3 text-slate-500 dark:text-slate-600'>
          <div className='flex flex-grow items-center justify-center'>
            <ul className='flex'>
              <li className='p-2 hover:text-sky-300'>
                <i className='bx bxl-html5 text-3xl font-extralight'></i>
              </li>
              <li className='p-2 hover:text-sky-300'>
                <i className='bx bxl-python text-3xl font-extralight'></i>

              </li>
              <li className='p-2 hover:text-sky-300'>
                <i className='bx bxl-css3 text-3xl font-extralight'></i>
              </li>
              <li className='p-2 hover:text-sky-300'>
                <i className='bx bxl-javascript text-3xl font-extralight'></i>

              </li>
              <li className='p-2 hover:text-sky-300'>
                <i className='bx bxl-react text-3xl font-extralight'></i>
              </li>

            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}

export default About;
