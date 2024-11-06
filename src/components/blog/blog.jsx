import React from 'react';
import rasgadoSuperior from '../blog/rasgadoSuperior.png';
import rasgadoInferior from '../blog/rasgadoInferior.png';
import imageBlog from '../blog/imageBlog.svg';

const Blog = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start relative bg-no-repeat"
      style={{
        backgroundColor: '#F8F8F8',
        backgroundImage: `url(${rasgadoSuperior}), url(${rasgadoInferior})`,
        backgroundSize: 'auto auto',
        backgroundPosition: 'top center, bottom center',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl p-5 mt-[7%] mb-[5%]">
        {/* Imagen en el lado izquierdo o arriba en pantallas pequeñas */}
        <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
        <img src={imageBlog} alt="Blog" className="max-w-[90%] h-auto" />
        </div>
        {/* Contenedor para el contenido de escritura */}
        <div className="flex-1 p-[5%] flex flex-col items-center justify-center text-center">
          <h1 className="font-dongle text-5xl font-bold">Explora, crea y comparte</h1>
          <p className='font-montserrat'>
          Este es un espacio creado para  viajeros como tú, donde comparten sus 
          experiencias auténticas, consejos locales y recomendaciones de destinos únicos.
          </p>
          <p className='font-montserrat p-3'>
          Que esperas para descubrir historias, guias practicas y hacer amigos en otros lugares del mundo!
          </p>
          <a 
            href="#" 
            className="p-2 px-4 bg-blueLight text-white font-semibold rounded-full shadow-md border-2 border-blueDark hover:bg-blue-800 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Descargar App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
