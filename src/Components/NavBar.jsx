import React, { useState, useEffect } from 'react';
function Navbar({ toggleDarkMode }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setMenuVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleMenuItemClick = (event, url) => {
    const specialRoutes = ['/', '/about'];
    if (specialRoutes.includes(url)) {
      event.preventDefault();
    }
    setMenuVisible(false);
  };
  return (
    <nav className="flex items-center justify-between bg-blue-100 dark:bg-primary p-2">
      <a href="/">
        <img className="w-12 p-2 hidden sm:flex dark:bg-primary dark:text-cyan-50" src="/public/images/logo1.png" alt="Icono" />
      </a>
      <button className="fixed origin-bottom-left sm:[botton-4]right-3 py-3 pt-3 sm:hidden text-black dark:text-cyan-50" onClick={toggleMenu}>
        <i className={`bx ${menuVisible ? 'bx-x' : 'bx-menu'} text-2xl hover:text-sky-300`}></i>
      </button>
      <ul className={`p-1.5 fixed top-[435px] right-3 hover:bg-slate-300 dark:bg-slate-700 sm:hover:bg-transparent rounded-lg sm:shadow-none sm:static sm:flex gap-10 md:text-2xl text-base text-center sm:font-bold font-semibold sm:dark:bg-primary dark:text-cyan-50 ${menuVisible ? 'block' : 'hidden'}`}>
        <li className="py-2.5 sm:py-2 sm:ml-5">
          <a href="/" className="hover:text-sky-300 text flex items-center" onClick={(event) => handleMenuItemClick(event, '/')}>
            <i className="bx bx-home-alt-2 sm:hidden"></i>
            <span className="sm:inline hidden">Home</span>
          </a>
        </li>
        <li className="py-2.5 sm:py-2 sm:ml-5">
          <a href="/about" className="hover:text-sky-300" onClick={(event) => handleMenuItemClick(event, '/about')}>
            <i className='bx bx-user-plus sm:hidden'></i>
            <span className="sm:inline hidden">About</span>
          </a>
        </li>
        <li className="py-3.5 sm:py-2 sm:ml-5">
          <a href="#" className="hover:text-sky-300" onClick={handleMenuItemClick}>
            <i className='bx bxs-contact sm:hidden'></i>
            <span className="sm:inline hidden">Contact</span>
          </a>
        </li>
        <li className="py-3.5 sm:py-2 sm:ml-5">
          <a href="#Projects" className="hover:text-sky-300" onClick={handleMenuItemClick}>
            <i className='bx bx-briefcase-alt-2 sm:hidden'></i>
            <span className="sm:inline hidden">Projects</span>
          </a>
        </li>
      </ul>
      <button className="flex items-center bg-fixed dark:bg-primary dark:text-cyan-50 px-5 py-2 sm:px-5 mt-1" id="dark" onClick={toggleDarkMode}>
        {toggleDarkMode ? (
          <i className="bx bx-sun hover:text-sky-300 text-xl fixed"></i>
        ) : (
          <i className="bx bx-moon hover:text-sky-300 text-xl fixed"></i>
        )}
      </button>
    </nav>
  );
}
export default Navbar;