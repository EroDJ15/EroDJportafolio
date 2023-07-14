import React from 'react';
const Footer = () => {
  return (
    <section className="-mt-6">
      <footer className={'flex flex-col items-center mt-auto sm:p-4 bg-blue-100 dark:bg-primary text-slate-500 dark:text-slate-600-cyan-50 text-center'}>
        <p className={'dark:text-cyan-50 text-xs font-extralight text-center'}>
          &copy; 2023 Todos los derechos reservados
        </p>
        <a
          href="https://github.com/EroDJ15"
          rel="noopener noreferrer"
          className={'dark:text-cyan-50 text-xs font-semibold flex items-center p-1'}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="github"
            className={'w-3 h-3 mr-2 dark:text-cyan-50 sm:flex-wrap sm:mr-1'}
          />
          Created by: Jerovic Pino
        </a>
      </footer>
    </section>
  );
}
export default Footer;
