import React, { useState, useEffect } from 'react';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import styled from 'styled-components';
import './App.css';

function App() {
  const StyledComponent = styled.div`
  ;
`;

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
    <main className={`flex flex-col ${darkMode ? 'dark' : ''} min - h - screen`}>
      <Navbar
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
        toggleNavbar={toggleNavbar}
        showMobileMenu={showMobileMenu}
        navbarVisible={navbarVisible}
      />

      <section className="flex-grow bg-blue-100 dark:bg-primary dark:text-cyan-50 ">

        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <section className="my-8">
        </section>
      </section>
      <Footer />
      <StyledComponent>
        {/* Contenido del componente */}
      </StyledComponent>
    </main>
  );
}
export default App;

