import React, { useEffect, useState } from 'react';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener todos los países
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        // Filtramos solo la información necesaria de cada país
        const formattedData = data.map((country) => ({
          name: country.name.common,
          region: country.region,
          subregion: country.subregion,
          flag: country.flags.svg,
          currency: country.currencies ? Object.values(country.currencies)[0].name : 'N/A',
          language: country.languages ? Object.values(country.languages)[0] : 'N/A',
        }));
        setCountries(formattedData);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Países</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <h2>{country.name}</h2>
            <p>Región: {country.region}</p>
            <p>Subregión: {country.subregion}</p>
            <p>Moneda: {country.currency}</p>
            <p>Idioma: {country.language}</p>
            <img src={country.flag} alt={`Bandera de ${country.name}`} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
