// App.js
import React from 'react';
import { CountriesProvider } from './components/CountriesList.js/Countriestcontext';
import CountriesList from './components/CountriesList.js/CountriesList';
import ImageCarousel   from "./components/Carousel/CarouselImages";


function App() {
  return (
    <CountriesProvider>
      <ImageCarousel/>
  
    </CountriesProvider>
  );
}

export default App;
