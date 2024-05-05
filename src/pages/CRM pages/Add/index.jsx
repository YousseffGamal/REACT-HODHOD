import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Nav,
  Button,
  Container,
  Row,
  Col,
  Card,
  Table,
  ProgressBar,
  Form,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import dashboard from "./images/dashboard.png";
import ProfileImg from "./images/avatar-21.jpg";
import avaF from "./images/avatar-2.png";
import avaT from "./images/avatar-3.png";
import avaS from "./images/avatar-4.png";
import avaD from "./images/avatar-5.png";
import Modal from "react-bootstrap/Modal";

import {
  faChartBar,
  faFileAlt,
  faCog,
  faHome,
  faBars,
  faBell,
  faInbox,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons"; // Import the icons you want to use
import "./add.css"; // Create a CSS file for your styles and import it here
import Logo from "./images/Frame 2.png";

function Add() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  const [campaignName, setCampaignName] = useState("");

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    setCampaignName(event.target.value);
  };

  return (
    <div>
      {/* Logo */}

      {/* Hamburger Menu */}
      <div className="hamburger-menu d-md-none">
        <div className="d-inline-block mr-4">
          <button
            style={{ border: "none" }}
            className="btn btn-dark"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "rgb(27, 99, 129)" }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Left Sidebar Navbar */}
      <nav className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <button
          style={{ backgroundColor: "transparent" }}
          className="close-btn btn btn-dark d-md-none"
          onClick={closeSidebar}
        >
          &#10006;
        </button>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <p className="title-dashbord">MENU</p>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link " href="#">
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faHome} />
              </span>{" "}
              <span className="vertical-align">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <span className="vertical-align">
                <FontAwesomeIcon icon={faPlusCircle} />{" "}
                {/* Icon for "Add Campaign" */}
              </span>
              <span className="vertical-align ">Add Campaign</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faChartBar} />
              </span>{" "}
              <span className="vertical-align">Analytics</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faFileAlt} />
              </span>{" "}
              <span className="vertical-align">Reports</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faBell} />
              </span>{" "}
              <span className="vertical-align">Notifications</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faCog} />
              </span>{" "}
              <span className="vertical-align">Settings</span>
            </a>
          </li>
          {/* New list items */}
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faChartBar} />
              </span>{" "}
              <span className="vertical-align">Sales</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faFileAlt} />
              </span>{" "}
              <span className="vertical-align">Invoices</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faBell} />
              </span>{" "}
              <span className="vertical-align">Messages</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faCog} />
              </span>{" "}
              <span className="vertical-align">Preferences</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faChartBar} />
              </span>{" "}
              <span className="vertical-align">Performance</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ gap: "5px" }}>
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faFileAlt} />
              </span>{" "}
              <span className="vertical-align">Documents</span>
            </a>
          </li>
          {/* End of new list items */}
        </ul>
      </nav>
      {/* Main Content */}
      <div className={`main-content ${sidebarActive ? "active" : ""}`}>
        <Container fluid>
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <div>
                <div
                  style={{
                    float: "right",
                    marginRight: "10px",
                    gap: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* Profile Image */}
                  {/* Bell Icon */}
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#333",
                      cursor: "pointer",
                    }}
                  />

                  {/* Inbox Icon */}
                  <FontAwesomeIcon
                    icon={faInbox}
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#333",
                      cursor: "pointer",
                    }}
                  />
                  <img
                    src={ProfileImg}
                    alt="Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    onClick={toggleDropdown}
                  />

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "60px",
                        right: "10px",
                        backgroundColor: "#ffffff",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        padding: "10px",
                        zIndex: "1000", // Ensure the dropdown is on top of other elements
                        minWidth: "120px", // Adjust width as needed
                        fontFamily: "Arial, sans-serif", // Choose your preferred font
                      }}
                    >
                      {/* Dropdown Content */}
                      <p
                        style={{
                          margin: "5px 0",
                          padding: "8px",
                          cursor: "pointer",
                          borderBottom: "1px solid #e0e0e0", // Add a divider
                          fontSize: "14px", // Customize font size
                        }}
                      >
                        Edit
                      </p>
                      <p
                        style={{
                          margin: "5px 0",
                          padding: "8px",
                          cursor: "pointer",
                          fontSize: "14px", // Customize font size
                        }}
                      >
                        Logout
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {/* first feild */}
            <Col>
              <div className="the-feild">
                <h1 className="feild-title">Campaign name</h1>
                <Form>
                  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Control
                      className="The-input"
                      type="text"
                      placeholder="Enter your campaign name here..."
                      value={campaignName}
                      onChange={handleInputChange}
                    />
                  
                    {campaignName.length === 0 && (
                      <div className="fade-out">
                        <Form.Text className="text-muted fade-out-text">
                          Campaign name is required
                        </Form.Text>
                      </div>
                    )}
                  </Form.Group>
                  <Button style={{border:"none",color:"#0d6efd"}} variant="primary" type="submit">
      Create template
      </Button>
                </Form>
              </div>
            </Col>
   
          </Row>
          <Row>
            {/* second Second */}
            <Col className="mt-5">
              <div className="the-feild">
                <h1 className="feild-title">Special ad categories</h1>
                <p className="feild-sipTitle">
                        Declare if your ads are related to credit, employment or housing, or about social issues, elections or politics. Requirements differ by country. <span style={{color:"rgba(20, 97, 204, 1);"}}>Learn more</span>

                        </p>
                <Form>
                  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <h1 className="feild-title">Categories</h1>
                    <p className="the mb-3">
                    Select the categories that best describe what this campaign will advertise.

                    </p>
                    <Form.Select style={{border:"1px solid red ",borderRadius:"6px "}} aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">Credit</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                  
               
                   
                  
                  </Form.Group>
      
                </Form>
              </div>
            </Col>
   
          </Row>
          <Row>
            {/* third feild */}
            <Col className="mt-5 Third-feild">
              <div className="the-feild">
                <h1 className="feild-title">Conversion</h1>
                <h1 style={{fontSize:"14px"}} className="feild-title mt-4">Conversion location</h1>
                <p className="feild-sipTitle">
                Choose where you want to drive sales.<span style={{color:"rgba(20, 97, 204, 1);"}}>Learn more</span>

                        </p>
                <Form>
                  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
             
   



        <Form.Check checked type="checkbox" label="Website" />
        <Form.Check disabled type="checkbox" className="mt-3" label="Website and app
" />
   
   
   <h1 className="feild-title mt-4 mb-1 p-1">Pixel</h1>
       
                      <div className="fade-out">
                  

                        <Form.Text style={{fontSize:"13px"}} className="text-muted fade-out-text ">
                        The Meta pixel is required. To publish, set up your pixel or switch to a different 
                        optimisation, such as landing page views. <br /> <span className="colors" style={{color:"rgba(20, 97, 204, 1);"}}>Learn more about Meta pixel</span>
                        </Form.Text>
                      </div>
               
                  </Form.Group>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button id="pixel" style={{border:"none",color:"#0d6efd"}} variant="primary" type="submit">
                  Create Pixel
      </Button>
            </div>
                </Form>
              </div>
            </Col>
   
          </Row>
          
        </Container>
      </div>
    </div>
  );
}

export default Add;
