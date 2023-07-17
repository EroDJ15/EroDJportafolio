import React, { useState, useEffect } from 'react';

const SlideShow = () => {


  const imagesProjects = [
    { id: 1, src: '/Images/Carrito.png', url: 'https://carritojerovic1.netlify.app/', text: 'carrito' },
    { id: 2, src: '/Images/Frases.png', url: 'https://frasesproyectoerodj.netlify.app/', text: 'Frases' },
    { id: 3, src: '/Images/clima.png', url: 'https://climaapperodj.netlify.app/', text: 'Clima' },
    { id: 4, src: '/Images/Rickymorty.png', url: 'https://rickandmortywikierodj.netlify.app/', text: 'Rick' },
    { id: 5, src: '/Images/Formulario.png', url: 'https://formularioerodjproyect.netlify.app/', text: 'Formulario' },
    { id: 6, src: '/Images/Pokedex.png', url: 'https://pokedexero.netlify.app/', text: 'Pokedex' }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Configurar el temporizador para cambiar la imagen automáticamente
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === imagesProjects.length - 1 ? 0 : prevImage + 1));
    }, 5000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearInterval(timer);
  }, []);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? imagesProjects.length - 1 : prevImage - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === imagesProjects.length - 1 ? 0 : prevImage + 1));
  };

  const image = imagesProjects[currentImage];

  return (
    <div className="flex justify-center items-center content-center ">
      <div className=" sm:mx-auto p-8 sm:p-1 sm:m-6 max-w-screen-md text-center flex flex-col sm:flex-row relativebg-black opacity-80 h-auto rounded-sm ">
        <div className="flex">
          {imagesProjects.map((image) => (
            <div
              key={image.id}
              className={`w-auto overflow-hidden relative hover:scale-95 transition-transform duration-500 ${image.id === currentImage + 1 ? '' : 'hidden'
                }`}
            >
              <a href={image.url}>
                <img src={image.src} alt="" />
              </a>
              <div className='dark:bg-slate-700  rounded-sm text-black  dark:text-white p-1'>
                {image.text}
                <div className="text-xl flex text-center font-extralight justify-center gap-8 dark:bg-slate-700  text-black dark:text-white">
                  <i className={"bx bxl-html5 ${commonClasses} hover:text-sky-700"}></i>
                  <i className={"bx bxl-css3 ${commonClasses} hover:text-sky-700"}></i>
                  <i className={"bx bxs-file-js s${commonClasses} hover:text-sky-700"}></i>
                  <i className={"bx bxl-tailwind-css {commonClasses} hover:text-sky-700"}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute flex items-center space-x-1 sm:ml-1 sm:mt-2 bg-white opacity-70 rounded-md">
          <button onClick={handlePrevImage}>
            <i className="bx bxs-chevron-left text-sky-600 hover:text-sky-700 text-md font-light hover:scale-105 transition-transform duration-300"></i>
          </button>
          <button onClick={handleNextImage}>
            <i className="bx bxs-chevron-right text-sky-600 hover:text-sky-700 text-md font-light hover:scale-105 transition-transform duration-300"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
