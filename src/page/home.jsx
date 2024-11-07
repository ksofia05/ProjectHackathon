import React, { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import '../components/homePage/home.css';
import photosData from '../data/Photos.json';
import Navbar from "../components/navbar/Navbar";
import AboutUs from '../components/aboutUs/aboutUs';
import Blog from '../components/blog/blog';
import rasgadoInferior from '../../public/images/rasgadoInferior.png';
import Contact from '../components/contact/contact';

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Cargar los datos de fotos solo si están disponibles
  useEffect(() => {
    if (photosData && photosData.length > 0) {
      setPhotos(photosData);
    }
  }, []);

  // Transición para mostrar las fotos con animación (escala y opacidad)
  const transitions = useTransition(currentPhotoIndex, {
    from: { opacity: 0, transform: 'scale(1.1)' }, // Iniciar con una ligera escala
    enter: { opacity: 1, transform: 'scale(1)' }, // Al entrar, con opacidad total
    leave: { opacity: 0, transform: 'scale(1.1)' }, // Salir con opacidad cero y escala ligera
    config: { tension: 20, friction: 30 }, // Transición más suave y lenta
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 6000); // Cambiar la imagen cada 6 segundos para una transición más lenta

    return () => clearInterval(interval);
  }, [photos.length]);

  // Verificar que photos tenga al menos un elemento antes de intentar acceder a él
  if (photos.length === 0) {
    return <div>Cargando...</div>;  // O cualquier mensaje o spinner de carga que prefieras
  }

  return (
    <div>
      <Navbar />

      {/* Contenedor principal del Home */}
      <div className="relative min-h-screen flex flex-col justify-center items-start" id="home">
        
        {/* Fondo animado y demás contenido */}
        <div className="photo-container absolute top-0 left-0 w-full h-full">
          {transitions((style, item) => (
            <animated.div
              key={photos[item].id}
              style={{
                ...style,
                backgroundImage: `url(${photos[item].url})`,
                backgroundSize: 'cover',
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: -1,
                filter: 'brightness(0.5)', // Oscurece la imagen
              }}
              className="photo-item"
            />
          ))}
        </div>

        {/* Texto de bienvenida responsivo */}
        <div className="absolute bottom-8 left-4 lg:bottom-16 lg:left-16 lg:pr-[20%]">
          <h1 className="text-white text-4xl sm:text-6xl lg:text-8xl font-bold font-dongle leading-tight">
            Bienvenido a GoGlobal
          </h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold font-montserrat">
            ¡Tu próxima aventura está cruzando la pantalla!
          </p>
        </div>

        {/* Rasgado inferior responsivo */}
        <img
          src={rasgadoInferior}
          alt="Rasgado Inferior"
          className="absolute bottom-0 left-0 w-full h-auto z-10"
        />
      </div>

      {/* Sección "Quienes Somos" */}
      <div id="about">
        <AboutUs />
      </div>

      {/* Sección "Blog" */}
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
