import React from 'react';

function About() {
  return (
    <main className='py-6'>
      <section className="ml-4 mr-4 sm:mx-auto min-h-max px-4 py-1 sm:p-1 sm:m-1 max-w-screen-md text-center flex flex-col sm:flex-row">
        <div className="flex-grow text-left sm:text-center">
          <div className="p-0 sm:w-full sm:h-600 text-left">
            <h1 className="p-0 text-sky-600 dark:text-sky text-2xl font-bold tracking-widest leading-10">Hi, I'm</h1>
            <p className="py-0 text-3xl font-bold text-slate-600 dark:text-slate-300">Jerovic Pino</p>
            <p className="text-lg mt-5 font-bold text-slate-500 dark:text-slate-600">
              Passionate full-stack web developer experienced in JS, React, HTML, Tailwind CSS, Python, and learning Flutter.
            </p>
            <div className="mt-3">
              <button className="w-auto rounded-lg shadow-md px-6 py-2 w-250px hover:text-sky-600 text-lg dark:bg-slate-700 tracking-widest hover:bg:text-slate-300">
                Mas informacion
              </button>
            </div>
            <div className="flex text-1xl text-left sm:text-center ml-0 mt-2">
              <a href="https://github.com">
                <i className="bx bxl-github px-1 hover:text-sky-300"></i>
              </a>
              <a href="https://linkedin.com">
                <i className="bx bxl-linkedin px-1 hover:text-sky-300"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="my-2 p-6">
          <img src='/public/images/Avatar.png' className="border-1 border-white rounded-xl bg-cover  px-1 justify-center max-w-[140] sm:max-w-[260px]" ></img>
        </div>



      </section>
    </main>
  );
}

export default About;
