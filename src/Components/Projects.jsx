import React from 'react';
import projectImage from '/public/images/Carrito.png';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Carrito de compra', website: 'https://carritojerovic1.netlify.app/' },
    { id: 2, title: 'Project 2', description: 'This is project 2' },
    { id: 3, title: 'Project 3', description: 'This is project 3' },
  ];

  const project = projects[0]; // Obtener el primer proyecto

  return (
    <main className='flex flex-col items-center bg-transparent-lg p-6 mb-4 '>
      <section className='text-center'>
        <h1 className='font-bold p-2'>My Projects</h1>
        <div className='flex flex-col items-center  border rounded-md border-sky-300 dark:border-slate-600'>
          <ul className='hover:text-blue-500 font-semibold p-2'>
            <li key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                <img className='items-center overflow-x-scroll hover:scale-95 hover:transition-transform hover:duration-300 p-2' src={projectImage} alt="Project" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Projects;
