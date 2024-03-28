// ResponsiveNavbar.js

import React, { useState } from 'react';
import './style.css'; // Create a corresponding CSS file

const ResponsiveNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`responsive-navbar ${isMenuOpen ? 'open' : ''}`}>
    <div className="logo">
      {/* Add your logo image or text here */}
      <img src="path/to/your/logo.png" alt="Logo" />
    </div>
    <div className="menu-icon" onClick={handleMenuClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className="nav-links">
      {/* Add your navigation links here */}
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/products">Our Products</a>
      <a href="/about">About Us</a>
      <a href="/pricing">Pricing</a>
    </div>
  </div>
  );
};

export default ResponsiveNavbar;
