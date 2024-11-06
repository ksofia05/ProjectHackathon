import React, { useState, useContext, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Globe, MapPin, Building2, Coins, Languages,  Map } from 'lucide-react';
import { CountriesContext } from '../CountriesList.js/Countriestcontext';


const ImageCarousel = () => {
  const countries = useContext(CountriesContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubregion, setSelectedSubregion] = useState('');
  const [availableSubregions, setAvailableSubregions] = useState([]);
  const [showSubregions, setShowSubregions] = useState(false);
  const itemsPerView = 4;
  const maxCountries = 12;

  // Detectar cuando se busca una región
  useEffect(() => {
    const searchLower = searchTerm.toLowerCase().trim();
    
    // Mapeo de términos de búsqueda a regiones
    const regionMappings = {
      'america': 'Americas',
      'europa': 'Europe',
      'asia': 'Asia',
      'africa': 'Africa',
      'oceania': 'Oceania'
    };

    // Encontrar la región que coincide con la búsqueda
    const matchedRegion = Object.entries(regionMappings)
      .find(([key]) => searchLower.includes(key));

    if (matchedRegion) {
      // Obtener subregiones para la región encontrada
      const subregions = [...new Set(
        countries
          ?.filter(country => country.region === matchedRegion[1])
          .map(country => country.subregion)
          .filter(Boolean)
      )].sort();

      setAvailableSubregions(subregions);
      setShowSubregions(true);
      setSelectedSubregion(''); // Reset subregión seleccionada
    } else {
      setShowSubregions(false);
      setSelectedSubregion('');
      setAvailableSubregions([]);
    }
  }, [searchTerm, countries]);

  // Filtrar países
  useEffect(() => {
    if (!countries) return;

    const filteredCountries = countries.filter((country) => {
      if (!country) return false;
      
      // Si hay una subregión seleccionada, filtrar por ella
      if (selectedSubregion) {
        return country.subregion === selectedSubregion;
      }
      
      // Si no hay subregión seleccionada pero hay término de búsqueda
      const searchLower = searchTerm.toLowerCase().trim();
      if (searchLower) {
        return (
          (country.name && country.name.toLowerCase().includes(searchLower)) ||
          (country.region && country.region.toLowerCase().includes(searchLower)) ||
          (country.subregion && country.subregion.toLowerCase().includes(searchLower))
        );
      }
      
      return true;
    });

    setVisibleCountries(filteredCountries.slice(0, maxCountries));
    setCurrentIndex(0);
  }, [searchTerm, selectedSubregion, countries]);

  const handleSubregionChange = (e) => {
    setSelectedSubregion(e.target.value);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + itemsPerView >= visibleCountries.length) ? 0 : prevIndex + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - itemsPerView < 0) ? 
        Math.max(visibleCountries.length - itemsPerView, 0) : 
        prevIndex - itemsPerView
    );
  };

  const getCurrentCountries = () => {
    return visibleCountries.slice(currentIndex, currentIndex + itemsPerView);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative">
      <div className="text-center text-black font-dongle transition-shadow duration-300 p-6 rounded-lg">
        <h1 className="text-5xl mb-1">Escoge Tu Próximo Destino</h1>
        <h2 className="text-3xl">Selecciona el País que tengas en mente</h2>
      </div>

      <div className="flex flex-col gap-4 my-4">
        {/* Búsqueda */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Busca un país o región (ej: America, Europa, Asia...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Select de Subregiones (aparece solo cuando se busca una región) */}
        {showSubregions && availableSubregions.length > 0 && (
          <div className="flex justify-center">
            <select
              value={selectedSubregion}
              onChange={handleSubregionChange}
              className="w-full max-w-md px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Selecciona una subregión</option>
              {availableSubregions.map(subregion => (
                <option key={subregion} value={subregion}>
                  {subregion}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {visibleCountries.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No se encontraron países que coincidan con tu búsqueda
        </div>
      ) : (
        <div className="relative overflow-visible py-8">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex gap-4 transition-transform duration-500 ease-in-out mt-8">
            {getCurrentCountries().map((country, index) => (
              <div key={country.name || index} className="relative">
                <div 
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-20 z-10 cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 rounded-lg bg-black/20 transform translate-y-1 blur-sm"></div>
                    <img
                      src={country.flag}
                      alt={`Bandera de ${country.name}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="flex-none w-64 h-80 relative rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${country.flag})`,
                      filter: 'brightness(0.8)'
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-xl font-bold text-center">{country.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      )}

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(visibleCountries.length / itemsPerView) }).map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerView) === idx
                ? 'bg-blue-600'
                : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(idx * itemsPerView)}
          />
        ))}
      </div>

      {selectedCountry && (
        <CountryDetails 
          country={selectedCountry} 
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
};

const CountryDetails = ({ country, onClose }) => {
  return (
    
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl w-full max-w-3xl shadow-2xl overflow-hidden transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Encabezado con gradiente */}
        <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
          {/* Botón de cerrar */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          {/* Bandera y nombre del país */}
          <div className="absolute -bottom-6 left-8 flex items-end gap-4">
            <div className="w-24 h-16 rounded-lg shadow-lg overflow-hidden border-4 border-white">
              <img 
                src={country.flag} 
                alt={`Bandera de ${country.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white pb-8">{country.name}</h2>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="pt-12 p-8 grid grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Capital</p>
                <p className="font-medium">{country.capital}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Región</p>
                <p className="font-medium">{country.region}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Subregión</p>
                <p className="font-medium">{country.subregion}</p>
              </div>
            </div>

            {/* <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Gentilicio</p>
                <p className="font-medium">{country.demonym}</p>
              </div>
            </div> */}
          </div>

          {/* Columna derecha */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Coins className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Moneda</p>
                <p className="font-medium">{country.currency}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Idiomas</p>
                <p className="font-medium">{country.languages}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Map className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Fronteras</p>
                <p className="font-medium">{country.borders}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer con estadísticas adicionales */}
        <div className="bg-gray-50 px-8 py-4 mt-4 flex justify-between text-sm text-gray-500">
          <div>
            <span className="font-medium">{country.population?.toLocaleString()}</span> habitantes
          </div>
          <div>
            <span className="font-medium">{country.area?.toLocaleString()}</span> km²
          </div>
        </div>
      </div>
    </div>
  );
};


export default ImageCarousel;