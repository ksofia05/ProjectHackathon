// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CountriesProvider } from './components/CountriesList.js/Countriestcontext';
import Home from './page/home';
// import Destinations from './components/Destinations';
// import NotFound from './components/NotFound';
import ImageCarousel from "./components/Carousel/CarouselImages";

function App() {
  return (
    <CountriesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */}
          {/* <Route path="/destinations" element={<Destinations />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        
        {/* Componente de carrusel, que se puede mostrar en todas las rutas */}
        <ImageCarousel />
      </Router>
    </CountriesProvider>
  );
}

export default App;

