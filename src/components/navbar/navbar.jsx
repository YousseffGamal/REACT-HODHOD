import React, { useState } from 'react';
import "./style.css";
import logo from "./img_thumbsup.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img
          className="logo"
          src={logo}
          alt="thumbsup"
        />
        <div className="menu-icon" onClick={toggleMenu}>
          <svg className={`hamburger ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </div>
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          <a href="#" className="dropdown-link">HOME</a>
          <a href="#" className="dropdown-link">SERVICES</a>
          <a href="#" className="dropdown-link">OUR PRODUCTS</a>
          <a href="#" className="dropdown-link">ABOUT US</a>
          <a href="#" className="dropdown-link uppercase">Pricing</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
