import React, { useState, useEffect } from 'react';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './components/home';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setNavbarVisible(true);
        setShowMobileMenu(false);
      } else {
        setNavbarVisible(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>

      <Navbar
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
        toggleNavbar={toggleNavbar}
        showMobileMenu={showMobileMenu}
        navbarVisible={navbarVisible}
      />



      <section className="flex-grow bg-blue-100 dark:bg-primary dark:text-cyan-50">
        <section className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-md font-roboto font-bold text-center sm:relative absolute top-5 items-center sm:justify-center md:flex-wrap show sm:hidden">Welcome to my portfolio personal</h1>

        </section>
        <Home />
      </section>

      <Footer />
    </main>
  );
}

export default App;
