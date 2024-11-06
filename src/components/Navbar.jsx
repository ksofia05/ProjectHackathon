import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">GoGlobal</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Quienes Somos</a></li>
        <li><a href="#destinations">Destinos</a></li>
        <li><a href="#contact">Contactanos</a></li>
      </ul>
      <div className="navbar-user-icon">👤</div>
    </nav>
  );
};

export default Navbar;

