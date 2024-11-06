// CountriesContext.js
import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto
export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((country) => ({
          name: country.name.common,
          capital: country.capital ? country.capital[0] : 'N/A', // Capital
          region: country.region,
          subregion: country.subregion,
          flag: country.flags.svg,
          currency: country.currencies ? Object.values(country.currencies).map((currency) => currency.name).join(', ') : 'N/A',
          languages: country.languages ? Object.values(country.languages).join(', ') : 'N/A', // Todos los idiomas
          population: country.population || 'N/A',
          area: country.area || 'N/A', // Tamaño del país
          borders: country.borders ? country.borders.join(', ') : 'N/A', // Fronteras
          demonym: country.demonyms ? country.demonyms.eng.m : 'N/A', // Gentilicio en inglés
        }));
        setCountries(formattedData);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  );
};
