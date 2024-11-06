import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white shadow-lg z-50">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div className="text-xl font-bold">GoGlobal</div>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500} // Duración en milisegundos
              className="text-lg hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-lg hover:text-blue-500 transition-colors duration-300"
            >
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link
              to="destinations"
              smooth={true}
              duration={500}
              className="text-lg hover:text-blue-500 transition-colors duration-300"
            >
              Destinos
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="text-lg hover:text-blue-500 transition-colors duration-300"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="text-xl cursor-pointer">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;
