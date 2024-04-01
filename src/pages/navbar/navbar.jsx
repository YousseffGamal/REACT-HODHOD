import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "./Frame 2.png";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

const navbar = () => {

  
  return (
    <>
   
   <Navbar style={{ backgroundColor: "#E3E8EE" }} expand="lg">
        <Navbar.Brand href="#">
     
          <Link to="/">     <img src={logo} alt="" /> </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ gap: "40px" }}>
       
            <Nav.Link className="nav-link" href="#">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            HOME
           </Link>
          
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
            
              <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
              SERVICES
            </Link>
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              OUR PRODUCTS
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
             
              <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              ABOUT US
            </Link>
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Pricing
            </Nav.Link>
          </Nav>
          <form className="form-inline my-2 my-lg-0">
          <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              className="login"
              style={{
                border: "1px solid #1B6381",
                width: "138px",
                height: "36px",
                borderRadius: "105px",
                color: "#000000",
              }}
              variant="outline-success"
            >
         
          LOG IN
    
            </Button>
            </Link>
          </form>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
};

export default navbar;
