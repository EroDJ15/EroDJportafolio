import React from 'react';

const Footer = () => {
  return (
    <section className="-mt-12">
      <footer className='flex flex-col items-center mt-auto dark:bg-primary dark:text-cyan-50 text-center'>
        <p className="dark:text-cyan-50 text-xs font-extralight text-center">
          &copy; 2023 Todos los derechos reservados
        </p>
        <a
          href="https://github.com/EroDJ15"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-cyan-50 text-xs font-semibold flex items-center p-5"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="github"
            className="w-4 h-4 mr-2 dark:text-cyan-50 sm:flex-wrap sm:mr-1"
          />
          Created by: Jerovic Pino
        </a>
      </footer>
    </section>
  );
}

export default Footer;
