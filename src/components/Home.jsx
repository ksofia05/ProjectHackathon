import React, { useEffect, useState } from 'react';
import './Home.css';
import photosData from '../data/photos.json';
import Navbar from "./Navbar";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(photosData);
  }, []);

  return (
    <div>
      <Navbar />
      <img src="{photo.url}" alt="" />
      <section id="home" className="section home-section">
        <h1>Bienvenido a GoGlobal</h1>
        <p>Tu próxima aventura está cruzando la pantalla!</p>
      </section>

      <section id="about" className="section about-section">
        <h2>Quienes Somos</h2>
        <p>Somos una agencia de viajes dedicada a llevarte a los destinos más exóticos del mundo.</p>
      </section>

      <section id="destinations" className="section destinations-section">
        <h2>Destinos</h2>
        <p>Descubre nuestras ofertas y paquetes de viaje.</p>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Siguenos en nuestras redes sociales.</h2>
        <p></p>
        </section>

        <section id="photos" className="section photos-section">
        <h2>Fotos de Destinos</h2>
        <div className="photos-grid">
          {photosData.map((photo, index) => (
            <img key={index} src={photo.src} alt={photo.alt} className="photo-item" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

