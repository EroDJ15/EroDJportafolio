import React from 'react';

const About = () => {
  const commonClasses = "p-1.5 hover:text-sky-300 inline-block align-text-bottom ";
  const commonIconClasses = "text-3xl font-extralight";
  return (
    <main className="py-0 sm:py-0">
      <section className="ml-4 mr-4 sm:mx-auto min-h-max px-4 py-1 sm:p-1 sm:m-6 max-w-screen-md text-center flex flex-col sm:flex-row">
        <div className="flex-grow text-left sm:text-center">
          <div className="p-0 sm:w-full sm:h-600 text-left">
            <h1 className="p-0 text-sky-600 dark:text-sky text-2xl font-bold tracking-widest leading-10">Hi, I'm</h1>
            <p className="py-0 text-3xl font-bold text-slate-600 dark:text-slate-300">Jerovic Pino</p>
            <p className="text-lg mt-4 font-bold text-slate-500 dark:text-slate-600">
              Passionate Full-Stack Web Developer, with expirience in Js, React, HTML, Tailwind CSS, Python. Working on learning Flutter.
            </p>
            <div className="mt-3">
              <button className="w-auto rounded-lg shadow-md px-4 py-1.5 w-250px hover:text-sky-600 text-lg dark:bg-slate-700 tracking-widest hover:bg:text-slate-300 font-bold">
                <a href="https://www.canva.com/design/DAFo9WP2kjk/tlanQ2wGZm71X2XXP-85ag/view?utm_content=DAFo9WP2kjk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                  CV / HV
                </a>
              </button>

            </div>
            <div className="flex text-xl text-left sm:text-center ml-0 mt-3">
              <a href="https://github.com/EroDJ15">
                <i className="bx bxl-github px-1 hover:text-sky-300"></i>
              </a>
              <a href="https://www.linkedin.com/in/jerovic-pino-verde-80030a124/">
                <i className="bx bxl-linkedin px-1 hover:text-sky-300"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="my-5 p-0 mt-0 sm:p-0 sm:px-0 content-center">
          <img src="/Images/EroDJ -1 (12).png" className="hidden sm:block rounded-xl bg-contain px-4 items-center justify-center right-2 py-0 max-w-[320px] sm:max-w-[330px] dark:bg-primary dark:text-cyan-50" alt="logo" />
        </div>

      </section>

      <section className="mt-18">
        <div className="flex items-center justify-center">
          <h2 className="font-bold text-center text-sky-600">Skills</h2>
        </div>
        <div className="flex justify-center mt-4">
          <ul className="flex">
            <li className={commonClasses}>
              <i className={`bx bxl-html5 ${commonIconClasses}`}></i>
            </li>
            <li className={commonClasses}>
              <i className={`bx bxl-python ${commonIconClasses}`}></i>
            </li>
            <li className={commonClasses}>
              <i className={`bx bxl-css3 ${commonIconClasses}`}></i>
            </li>
            <li className={commonClasses}>
              <i className={`bx bxl-javascript ${commonIconClasses}`}></i>
            </li>
            <li className={commonClasses}>
              <i className={`bx bxl-react ${commonIconClasses}`}></i>
            </li>
            <li>
              <li className={commonClasses}></li>
              <i className={'bx bxl-tailwind-css ${commonIconClasses} text-3xl p-2 -ml-3 hover:text-sky-300'}></i>
            </li>

          </ul>
        </div>
      </section>
    </main>
  );
}
export default About;