import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "./Frame 2.png";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import star from "./images/Group 12.png";
import second from "./images/second.png";
import social from "./images/Social-Media 1.png";
import LandingImg from "./images/landing.png";
import AI from "./images/for-ai 1.png";
import first from "./images/first.png";
import DigitalMarketingVideo from "./Digital Marketing Services - Promo Video.mp4"; // Import the video file
import ClientsImg from "./images/Frame 16.png";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  return (
    <>
      {/* start of nav */}
      <Navbar style={{ backgroundColor: "#E3E8EE" }} expand="lg">
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ gap: "40px" }}>
            <Nav.Link className="nav-link" href="#">
              HOME
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              SERVICES
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              OUR PRODUCTS
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Pricing
            </Nav.Link>
          </Nav>
          <form className="form-inline my-2 my-lg-0">
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
          </form>
        </Navbar.Collapse>
      </Navbar>
      {/* end of nav */}
      {/* start of landing */}
      <section className="Landing">
        <Container>
          <Row>
            <Col>
              <h1 className="landing-title">
                From Content To <br />
                Marketing Analysis
              </h1>
              <p>
                Create stunning photos with the AI generator <br />
                and use our state of the art analysis to <br />
                track your progress
              </p>
              <div style={{ display: "flex", gap: "32px" }}>
                <Button
                  className="landingBtn-f"
                  style={{
                    border: "1px solid #EA8357",
                    width: "159px",
                    height: "47px",
                    borderRadius: "105px",
                    color: "#000000",
                  }}
                  variant="outline-success"
                >
                  Join us
                </Button>
                <Button
                  className="landingBtn-s"
                  style={{
                    backgroundColor: "#EA8357",
                    border: "1px solid #EA8357",
                    width: "269px",
                    height: "47px",
                    borderRadius: "105px",
                    color: "#E3E8EE",
                  }}
                  variant="outline-success"
                >
                  Join us
                </Button>
              </div>
            </Col>
            <Col>
              <img src={LandingImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of landing */}
      {/* start of video section */}
      <section className="video">
        <Container>
          <Row>
            <h1>Your marketing companion</h1>
          </Row>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col>
              <div
                style={{
                  border: "6px solid #EA8357",
                  display: "inline-block",
                  marginTop: "80px",
                }}
              >
                <video autoPlay muted loop src={DigitalMarketingVideo}></video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of video section */}
      {/* start of grid section */}
<section className="grid">
<Container>
  <Row>
    <Col>
    <p className="gird-sup">
    OUR SERVICES
    </p>
    <h1 className="grip-title">
    Digital Success, <br />
All In One Place.
    </h1>
    <p className="grid-last"> 
    Design, market and analyze your digital <br />
presence, all in one place.

    </p>
    </Col>
    <Col> 
    <div className="grid-card">
    <br />
    
<div style={{margin:"50px",display:"block" }} className="remove">
<h1> 
Marketing Analytics <br />
To Track Progress.
</h1>
<p>

Track your actions and responses <br />
to help you improve the plans <br />
for your marketing. <br />
</p>
</div>
<img style={{width:"386px",height:"385px",position:"relative",right:"70px",marginTop:"50px"}} src={first} alt="" />
    </div>
    
    </Col>
  </Row>
  <Row style={{marginTop:"80px"}}>
  <Col> 
<div className="gridSecond-card">
<div style={{paddingTop:"30px"}}>
<h1>
AI Image <br />
Generation
</h1>
<p>
All you have to do is <br />
imagine and the rest <br />
is on us. <br />
</p>
<img style={{width:"340px", height:"340px"}} src={AI} alt="" />
</div>
</div>

    </Col>
    <Col > 
    <div className="gridThird-card">
      <br />
      <br />
    <div >
    <h1 >
      Manage Your Content <br />
Effortlessly
      </h1>
      <br />
      <p>
 
      Track your actions and responses <br />
to help you improve the plans <br />
for your marketing.
      </p>
<img style={{width:"496px",height:"332px",marginLeft:"auto",marginRight:"auto",position:"relative",bottom:"20px"}} src={second} alt="" />
    </div>
    </div>
 
    </Col>
    <Col > 
    <div className="gridFourth-card">
      <br />
      <br />
    <div >
    <h1 >
    Social Media <br />
Connection
      </h1>
      <br />
      <p>
 
      Control all your social <br />
accounts from one place
      </p>
<img style={{marginLeft:"auto",marginRight:"auto"}} src={social} alt="" />
    </div>
    </div>
    </Col>
  </Row>
</Container>
</section>
      {/* end of grid section */}

      {/* start of clients section */}
      <section className="clients">
        <Container>
          <Row>
            <Col>
              <h1>PREVIOUS CLIENTS</h1>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Col>
              <img style={{ marginLeft: "140px" }} src={ClientsImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of clients section */}

      {/* start of TESTEMONIALS */}
      <section className="TESTEMONIALS">
        <Container>
          <Row>
            <h1 className="textH">TESTEMONIALS</h1>
          </Row>
          <Row>
            <Col sm={3}>
            <Card >
    
      <Card.Body>
        <Card.Title>John Doe</Card.Title>
        <Card.Img variant="top" style={{width:"144px",height:"23px" , marginLeft:"auto",marginRight:"auto"}} src={star} />
        <Card.Text>
        Increased social media <br />
following by 50%. <br />
 Generated leads <br />
and sales.
        </Card.Text>
      
      </Card.Body>
    </Card>
            </Col>
            <Col sm={3}>
            <Card >
    
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Img variant="top" style={{width:"144px",height:"23px" , marginLeft:"auto",marginRight:"auto"}} src={star} />
      <Card.Text>
      Increased social media <br />
following by 50%. <br />
Generated leads <br />
and sales.
      </Card.Text>
    
    </Card.Body>
  </Card>
            </Col>
            <Col sm={3}>
            <Card >
    
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Img variant="top" style={{width:"144px",height:"23px" , marginLeft:"auto",marginRight:"auto"}} src={star} />
      <Card.Text>
      Increased social media <br />
following by 50%. <br />
Generated leads <br />
and sales.
      </Card.Text>
    
    </Card.Body>
  </Card>
            </Col>
            <Col sm={3}>
            <Card >
    
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Img variant="top" style={{width:"144px",height:"23px" , marginLeft:"auto",marginRight:"auto"}} src={star} />
      <Card.Text>
      Increased social media <br />
following by 50%. <br />
Generated leads <br />
and sales.
      </Card.Text>
    
    </Card.Body>
  </Card>
            </Col>
          </Row>
          <Row style={{marginTop:"42px"}}>
          <Col sm={3}>
            <Card >
    
      <Card.Body>
        <Card.Title>John Doe</Card.Title>
        <Card.Img variant="top" style={{width:"144px",height:"23px" , marginLeft:"auto",marginRight:"auto"}} src={star} />
        <Card.Text>
        Increased social media <br />
following by 50%. <br />
 Generated leads <br />
and sales.
        </Card.Text>
      
      </Card.Body>
    </Card>
            </Col>
            <Col sm={3}>
            <Card >
    
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Img variant="top" style={{width:"144px",height:"23px" , marginLeft:"auto",marginRight:"auto"}} src={star} />
      <Card.Text>
      Increased social media <br />
following by 50%. <br />
Generated leads <br />
and sales.
      </Card.Text>
    
    </Card.Body>
  </Card>
            </Col>
            <Col sm={3}>
            <Card >
    
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Img variant="top" style={{width:"144px",height:"23px" , marginLeft:"auto",marginRight:"auto"}} src={star} />
      <Card.Text>
      Increased social media <br />
following by 50%. <br />
Generated leads <br />
and sales.
      </Card.Text>
    
    </Card.Body>
  </Card>
            </Col>
            <Col sm={3}>
            <Card  className="last">
    
    <Card.Body>
      <Card.Title>John Doe</Card.Title>
      <Card.Img variant="top" style={{width:"144px",height:"23px" , marginLeft:"auto",marginRight:"auto"}} src={star} />
      <Card.Text>
      Increased social media <br />
following by 50%. <br />
Generated leads <br />
and sales.
      </Card.Text>
    
    </Card.Body>
  </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of TESTEMONIALS */}
      {/* start of footer */}
      <footer>
        <Container>
          <Row>
            <Col>
            <h1>
            Make Awesome Happen
            </h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <p>
            For more information or inquiries don’t hesitate
            </p>
            </Col>
          </Row>
          <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <Button
                  className="FooterBtn"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #EA8357",
                    width: "215px",
                    height: "53px",
                    borderRadius: "100px",
                    color: "#FFFFFF",
                  }}
                  variant="outline-success"
                >
                CONTACT US
                </Button>
       </Col>
          </Row>
          <Row>
<Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<span>
Copyright © 2023 | Hodhod | All Rights Reserved
</span>
</Col>
          </Row>
        </Container>
      </footer>
      {/* end of footer */}
    </>
  );
};

export default Home;
