import React, { useState, useEffect } from 'react';

function Navbar({ toggleDarkMode }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuItemClick = (event, url) => {
    if (url === '/' || url === '/about') {
      event.preventDefault();
    }

    closeMenu();
  };

  return (
    <nav className="flex items-center justify-between bg-blue-100 dark:bg-primary p-2">
      <a href="/">
        <img className="w-9 p-2 hidden sm:flex dark:bg-primary dark:text-cyan-50" src="/images/icono.png" alt="Icono" />
      </a>

      <button className="fixed bottom-2 right-3 sm:hidden text-black dark:text-cyan-50" onClick={toggleMenu}>
        <i className={`bx ${menuVisible ? 'bx-x' : 'bx-menu'} text-2xl hover:text-sky-300`}></i>
      </button>

      <ul className={`p-1.5 fixed bottom-24 right-3 hover:bg-slate-300 dark:bg-slate-700 sm:hover:bg-transparent rounded-lg sm:shadow-none sm:bottom-auto sm:static sm:flex gap-10 md:text-2xl text-base text-center sm:font-bold font-semibold sm:dark:bg-primary dark:text-cyan-50 ${menuVisible ? 'block' : 'hidden'}`}>
        <li className="py-2.5 sm:py-1 sm:ml-5">
          <a href="/" className="hover:text-sky-300" onClick={(event) => handleMenuItemClick(event, '/')}>
            Home
          </a>
        </li>
        <li className="py-3.5 sm:py-2 sm:ml-5">
          <a href="/about" className="hover:text-sky-300" onClick={(event) => handleMenuItemClick(event, '/about')}>
            About
          </a>
        </li>
        <li className="py-3.5 sm:py-2 sm:ml-5">
          <a href="#" className="hover:text-sky-300" onClick={handleMenuItemClick}>
            Contact
          </a>
        </li>
        <li className="py-3.5 sm:py-2 sm:ml-5">
          <a href="#" className="hover:text-sky-300" onClick={handleMenuItemClick}>
            Projects
          </a>
        </li>
      </ul>

      <button className="flex items-center dark:bg-primary dark:text-cyan-50 px-2 py-2 sm:px-5 mt-0" id="dark" onClick={toggleDarkMode}>
        {toggleDarkMode ? (
          <i className="bx bx-sun hover:text-sky-300 text-xl"></i>
        ) : (
          <i className="bx bx-moon hover:text-sky-300 text-xl"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
