import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CountriesProvider } from './components/CountriesList.js/Countriestcontext';
import Home from './page/home';
import Navbar from './components/navbar/Navbar'; // Asegúrate de importar el Navbar
import ImageCarousel from "./components/Carousel/CarouselImages";

function App() {
  return (
    <CountriesProvider>
      <Router>
        {/* Navbar disponible en todas las rutas */}
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */}
          <Route path="/destinations" element={<ImageCarousel />} /> {/* Carrusel en la ruta /destinations */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </CountriesProvider>
  );
}

export default App;

