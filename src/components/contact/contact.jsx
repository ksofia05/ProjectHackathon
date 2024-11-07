import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-black">
      {/* Título de contacto */}
      <h2 className="text-2xl font-semibold text-white mb-6">¡Contáctanos!</h2>
      
      <div className="flex space-x-6">
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/tuperfil" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook"
          className="flex justify-center items-center p-3 bg-gray-800 text-white rounded-full transform transition-all duration-300 hover:bg-blue-600 hover:scale-110"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-xl" />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/tuperfil" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="flex justify-center items-center p-3 bg-gray-800 text-white rounded-full transform transition-all duration-300 hover:bg-pink-600 hover:scale-110"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/tu-numero" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="WhatsApp"
          className="flex justify-center items-center p-3 bg-gray-800 text-white rounded-full transform transition-all duration-300 hover:bg-green-600 hover:scale-110"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
        </a>
      </div>
      
      {/* Texto adicional */}
      <p className="text-white mt-4 text-sm">Conéctate con nosotros a través de nuestras redes sociales o WhatsApp.</p>
    </div>
  );
};

export default Contact;
