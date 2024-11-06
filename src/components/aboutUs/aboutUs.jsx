import React from 'react';
import { SearchIcon, GlobeAltIcon, TranslateIcon } from '@heroicons/react/outline';
import ovaloIzquierdo from "../aboutUs/ovaloderecho.png";
import ovaloDerecho from "../aboutUs/ovaloIzquierdo.png";

const AboutUs = () => {
  return (
    <div
      className="bg-black min-h-screen flex flex-col items-center justify-start relative bg-no-repeat bg-left-top bg-cover"
      style={{
        backgroundImage: `url(${ovaloDerecho}), url(${ovaloIzquierdo})`,
        backgroundPosition: 'left top 15%, right top 15%',
        backgroundSize: 'auto',
      }}
    >
      <h1 className="text-white font-dongle pt-[8%] text-5xl sm:text-3xl md:text-4xl lg:text-8xl text-center">
        Somos <span className="font-bold p-0">GoGlobal</span>
      </h1>
      <p className="text-white font-montserrat p-[5%] mx-[23%] text-base sm:text-sm md:text-base lg:text-2xl text-center">
        Una aplicación creada para transformar la forma en la que planificas y disfrutas de tus viajes,   
        centrandonos en que siempre tengas una nueva experiencia!
      </p>

      {/* Sección de Iconos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-12 p-[6%] px-[15%]">
        {/* Columna de Búsqueda */}
        <div className="flex flex-col px-[15%] items-center text-center text-white mb-[12%]">
          <SearchIcon className="h-12 w-12 text-white mb-4" />
          <p className="text-white font-dongle text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Encuentra</p>
          <p className="text-sm sm:text-xs md:text-sm lg:text-lg">Una personalizacion de busqueda por si aun no sabes a donde ir</p>
        </div>

        {/* Columna de Exploración */}
        <div className="flex flex-col px-[15%] items-center text-center text-white mb-[12%]">
          <GlobeAltIcon className="h-12 w-12 text-white mb-4" />
          <p className="text-white font-dongle text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Explora</p>
          <p className="text-sm sm:text-xs md:text-sm lg:text-lg">Diferentes culturas y vive aventuras auténticas</p>
        </div>

        {/* Columna de Crea y comparte */}
        <div className="flex flex-col px-[15%] items-center text-center text-white mb-[12%]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-12 w-12 text-white mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          <p className="text-white font-dongle text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Crea y comparte</p>
          <p className="text-sm sm:text-xs md:text-sm lg:text-lg">Tu blog de experiencias.</p>
        </div>

        {/* Columna Multilingüe */}
        <div className="flex flex-col px-[15%] items-center text-center text-white mb-[12%]">
          <TranslateIcon className="h-12 w-12 text-white mb-4" />
          <p className="text-white font-dongle text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Multilingüe</p>
          <p className="text-sm sm:text-xs md:text-sm lg:text-lg">Accede a la app en tu idioma preferido.</p>
        </div>
      </div>
      <div className="text-white font-montserrat text-center p-[5%] px-[15%] ">
        <p className="text-white font-dongle text-4xl sm:text-4xl md:text-4xl lg:text-5xl text-center">
          Toda la información que necesitas para tu próximo viaje, está en la palma de la mano con 
          <span className="font-bold"> GoGlobal</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
