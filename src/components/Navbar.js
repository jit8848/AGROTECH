import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <img src={logo} alt="Agroconnect Logo" className="navbar-logo" />
    <ul className="navbar-links">
      <li>Home</li>
      <li>Purpose</li>
      <li>Buyer</li>
      <li>Seller</li>
    </ul>
  </nav>
);

export default Navbar;
