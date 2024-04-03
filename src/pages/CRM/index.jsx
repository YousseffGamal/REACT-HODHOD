import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Button, Container, Row, Col, Card, Table,ProgressBar  } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import dashboard from "./images/dashboard.png";
import {
  faChartBar,
  faFileAlt,
  faCog,
  faHome,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; // Import the icons you want to use
import "./crm.css"; // Create a CSS file for your styles and import it here
import Logo from "./images/Frame 2.png";
import { faBell } from "@fortawesome/free-solid-svg-icons"; // Import the desired icon
function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
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
          style={{ backgroundColor: "red" }}
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
            <a className="nav-link active" href="#">
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faHome} />
              </span>{" "}
              <span className="vertical-align">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              {" "}
              <span className="vertical-align">
                <FontAwesomeIcon icon={faHome} />
              </span>{" "}
              <span className="vertical-align">Transaction</span>
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
          <Row>
            <Col style={{ height: "100%" }} sm={8}>
              <div className="Top-Cards">
                <img src={dashboard} alt="" class="left-image" />
                <div class="text-content">
                  <h1 className="text-slate-200">Welcome Hamdi 🎉</h1>
                  <p className="text-slate-400">
                    A CRM dashboard facilitates your marketing team with a{" "}
                    <br />
                    clear overview of key customer relationship management
                    metrics and enables efficient campaign creation.
                  </p>
                  <Button id="Card-btn"> Create Campaign</Button>
                </div>
              </div>
              <div
                className="rev"
                style={{ display: "flex", gap: "20px", marginTop: "20px" }}
              >
                <Col className="Ana">
                  <div className="border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="wallet-2"
                      class="lucide lucide-wallet-2"
                    >
                      <path d="M17 14h.01"></path>
                      <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path>
                    </svg>
                  </div>
                  <div className="numb" style={{ marginTop: "80px" }}>
                    <h1 className="numbers">$236.18k</h1>
                    <p>Total Campaign</p>
                  </div>
                </Col>
                <Col className="Ana">
                  <div className="border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="wallet-2"
                      class="lucide lucide-wallet-2"
                    >
                      <path d="M17 14h.01"></path>
                      <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path>
                    </svg>
                  </div>
                  <div className="numb" style={{ marginTop: "80px" }}>
                    <h1 className="numbers">$236.18k</h1>
                    <p>Total Campaign</p>
                  </div>
                </Col>
                <Col className="Ana">
                  <div className="border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="wallet-2"
                      class="lucide lucide-wallet-2"
                    >
                      <path d="M17 14h.01"></path>
                      <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path>
                    </svg>
                  </div>
                  <div className="numb" style={{ marginTop: "80px" }}>
                    <h1 className="numbers">$236.18k</h1>
                    <p>Total Campaign</p>
                  </div>
                </Col>
                <Col className="Ana">
                  <div className="border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="wallet-2"
                      class="lucide lucide-wallet-2"
                    >
                      <path d="M17 14h.01"></path>
                      <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path>
                    </svg>
                  </div>
                  <div className="numb" style={{ marginTop: "80px" }}>
                    <h1 className="numbers">$236.18k</h1>
                    <p>Total Campaign</p>
                  </div>
                </Col>
              </div>
            </Col>
            

            <Col sm={4}>
              <div id="left-card">
                <h1>Customer Service</h1>
                <p>28% of the Goal Reached ($25k)</p>
                <ProgressBar variant="success" now={40} />
                <span>Top Customer</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="rem">
              <div id="tableee">
                <h1>Product Orders</h1>
                <div class="table-responsive"> {/* Wrap the table with .table-responsive class */}
               <table class="table striped bordered hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Order ID </th>
                      <th>Customer Name </th>
                      <th>Location </th>
                      <th>Order Date </th>
                      <th>Payments </th>
                      <th>Quantity </th>
                      <th>Price </th>
                      <th>Total Amount </th>
                      <th>Status </th>
                      <th>Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                      <td>Data 5</td>
                      <td>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#d2f4ee",
                            color: "#249782",
                            borderColor: "#d2f4ee",
                          }}
                          variant="info"
                        >
                          Delivered
                        </Button>{" "}
                      </td>
                      <td>
                        <DropdownButton
                          id="dropdown-basic-button"
                          style={{ border: "none" }}
                          title={<span style={{ color: "black" }}>...</span>}
                        >
                          <Dropdown.Item href="#/action-1">
                            Overview
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Delete
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                      <td>Data 5</td>
                      <td>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#f3e8ff",
                            color: "rgb(168 85 247)",
                            borderColor: "#f3e8ff",
                          }}
                          variant="info"
                        >
                          Shipping
                        </Button>{" "}
                      </td>
                      <td>
                        <DropdownButton
                          id="dropdown-basic-button"
                          style={{ border: "none" }}
                          title={<span style={{ color: "black" }}>...</span>}
                        >
                          <Dropdown.Item href="#/action-1">
                            Overview
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Delete
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Larry</td>
                      <td>@twitter</td>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                      <td>Data 5</td>
                      <td>Data 5</td>
                      <td>
                        <Button
                          style={{
                            backgroundColor: "#e0f2fe",
                            color: "rgb(14 165 233)",
                            borderColor: "#e0f2fe",
                          }}
                          variant="info"
                        >
                          New
                        </Button>{" "}
                      </td>
                      <td>
                        <DropdownButton
                          id="dropdown-basic-button"
                          style={{ border: "none" }}
                          title={<span style={{ color: "black" }}>...</span>}
                        >
                          <Dropdown.Item href="#/action-1">
                            Overview
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Delete
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>John</td>
                      <td>Doe</td>
                      <td>@johndoe</td>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                      <td>Data 5</td>
                      <td>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#d2f4ee",
                            color: "#249782",
                            borderColor: "#d2f4ee",
                          }}
                          variant="info"
                        >
                          Delivered
                        </Button>{" "}
                      </td>
                      <td>
                        <DropdownButton
                          id="dropdown-basic-button"
                          style={{ border: "none" }}
                          title={<span style={{ color: "black" }}>...</span>}
                        >
                          <Dropdown.Item href="#/action-1">
                            Overview
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Delete
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Jane</td>
                      <td>Smith</td>
                      <td>@janesmith</td>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                      <td>Data 5</td>
                      <td>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#fef9c3",
                            color: "rgb(234 179 8)",
                            borderColor: "#fef9c3",
                          }}
                          variant="info"
                        >
                          Pending
                        </Button>{" "}
                      </td>
                      <td>
                        <DropdownButton
                          id="dropdown-basic-button"
                          style={{ border: "none" }}
                          title={<span style={{ color: "black" }}>...</span>}
                        >
                          <Dropdown.Item href="#/action-1">
                            Overview
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Delete
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>Michael</td>
                      <td>Jordan</td>
                      <td>@michaeljordan</td>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                      <td>Data 5</td>
                      <td>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#d2f4ee",
                            color: "#249782",
                            borderColor: "#d2f4ee",
                          }}
                          variant="info"
                        >
                          Delivered
                        </Button>{" "}
                      </td>
                      <td>
                        <DropdownButton
                          id="dropdown-basic-button"
                          style={{ border: "none" }}
                          title={<span style={{ color: "black" }}>...</span>}
                        >
                          <Dropdown.Item href="#/action-1">
                            Overview
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Delete
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>Maria</td>
                      <td>Garcia</td>
                      <td>@mariagarcia</td>
                      <td>Data 1</td>
                      <td>Data 2</td>
                      <td>Data 3</td>
                      <td>Data 4</td>
                      <td>Data 5</td>
                      <td>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#e0f2fe",
                            color: "rgb(14 165 233)",
                            borderColor: "#e0f2fe",
                          }}
                          variant="info"
                        >
                          New
                        </Button>{" "}
                      </td>
                      <td>
                        <DropdownButton
                          id="dropdown-basic-button"
                          style={{ border: "none" }}
                          title={<span style={{ color: "black" }}>...</span>}
                        >
                          <Dropdown.Item href="#/action-1">
                            Overview
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Delete
                          </Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                  </tbody>
                </table>
               </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
