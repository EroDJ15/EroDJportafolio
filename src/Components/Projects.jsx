import React from 'react';
const imagesProjects = {
  1: '/Images/Carrito.png',
  2: '/Images/Frases.png',
}
const SlideShow = () => {


  return (
    <div className='min-h-min bg-blue-100 dark:bg-primary dark:text-cyan-50'>
      <div className='border-1 border-white rounded-lg w-fit mx-auto'>
        <a href='https://carritojerovic1.netlify.app/'>
          <div className='flex flex-col items-center bg-transparent p-6 mb-2'>
            <img className='p-2 items-center overflow-x-scroll hover:scale-95 hover:transition-transform hover:duration-300 border rounded-md shadow-lg dark:border-slate-600' src={imagesProjects[1]} alt="carrito" />
            <p className='rounded-lg p-1 px-2 mt-3 dark:bg-slate-700 dark:text-cyan-50 text-sm shadow-md tracking-widest hover:bg:text-slate-300 font-light botton'>
              Carrito de compras
              <br />
              <span className='text-lg flex justify-between mt-1 font-extralight p-1'>
                <i className='bx bxl-html5 hover:text-sky-300'></i>
                <i className='bx bxl-css3 hover:text-sky-300' ></i>
                <i className='bx bxs-file-js hover:text-sky-300' ></i>
              </span>
            </p>
          </div>
        </a>
      </div>
      <div className='text-center px-1'>
        <button>
          <i className='bx bxs-chevron-left text-sky-600 hover:text-sky-700 text-2xl font-light left-6'></i>
        </button>
        <button>
          <i className='bx bxs-chevron-right text-sky-600 hover:text-sky-700 text-2xl font-light'></i>
        </button>
      </div>
    </div>
  );
};

export default SlideShow
