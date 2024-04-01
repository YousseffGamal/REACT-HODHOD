import React, { useState, useEffect } from 'react';
import {  Nav, Button } from "react-bootstrap";
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
import { useSpring, animated } from '@react-spring/web'
import { Link } from "react-router-dom";
import Navbar  from '../navbar/navbar';
import Footer from "../footer/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.your-section-class');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll); // Remove listener once animation is triggered
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }, // Adjust duration as needed
  });
  const leftSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 }, // Adjust duration as needed
  });

  // const rightSpring = useSpring({
  //   from: { opacity: 0, transform: 'translateX(100px)' },
  //   to: { opacity: 1, transform: 'translateX(0)' },
  //   config: { duration: 1000 }, // Adjust duration as needed
  // });
  const bottomSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }, // Adjust duration as needed
  });
  const popUpSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 20, friction: 10 }, // Adjust tension and friction for slower and smoother animation
  });
  
  const ScrollPopUp = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    config: { tension: 50, friction: 10 }, // Adjust tension and friction for slower and smoother animation
  });

  // const [animationProps, setAnimationProps] = useSpring(() => ({
  //   x: 0,
  //   y: 0,
  //   config: { mass: 10, tension: 550, friction: 140 }
  // }));

  // const handleMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   setAnimationProps({ x: clientX, y: clientY });
  // };
  
  return (
    <>
      {/* start of nav */}
     <animated.div style={popUpSpring}>
     <Navbar />
     </animated.div>
      {/* end of nav */}
      {/* start of landing */}
      <section className="Landing">
        <Container>
          <Row>
            <Col>
            <animated.h1 style={springProps} className="landing-title">
      From Content To <br />
      Marketing Analysis
    </animated.h1>
              <animated.p style={leftSpring}>
                Create stunning photos with the AI generator <br />
                and use our state of the art analysis to <br />
                track your progress
              </animated.p>
          <animated.div style={bottomSpring }>
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
          Request a Demo
                </Button>
              </div>
          </animated.div>
            </Col>
            <Col>
            <animated.div className="anime"  style={popUpSpring}>
      <img src={LandingImg} alt="Landing" />
    </animated.div>
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
            <animated.div style={ScrollPopUp}>
      <div
        style={{
          border: '6px solid #EA8357',
          display: 'inline-block',
          marginTop: '80px',
        }}
        className="your-section-class"
      >
        <video autoPlay muted loop src={DigitalMarketingVideo}></video>
      </div>
    </animated.div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of video section */}
      {/* start of grid section */}
<animated.section style={popUpSpring} className="grid">
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
</animated.section>
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
          <animated.div style={ScrollPopUp} className="your-section-class">

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
      </animated.div>
        </Container>
      </section>
      {/* end of TESTEMONIALS */}
      {/* start of package */}
      {/* <section>
<Container>
  <Row>
<Col lg={8}>
  <div className="Cardss">
<div className='Cardd'>
<h1>
Basic
</h1>
<ul>
  <li >

      <span style={{color:"#ff6004",marginRight:"10px"}}><FontAwesomeIcon icon={faCheck} /></span> <span>
      Increase Traffic 130%
      </span>


  </li>
  <li >

      <span style={{color:"#ff6004",marginRight:"10px"}}><FontAwesomeIcon icon={faCheck} /></span> <span>
      Increase Traffic 130%
      </span>


  </li>
  <li >

      <span style={{color:"#ff6004",marginRight:"10px"}}><FontAwesomeIcon icon={faCheck} /></span> <span>
      Increase Traffic 130%
      </span>


  </li>
  <li >

      <span style={{color:"#ff6004",marginRight:"10px"}}><FontAwesomeIcon icon={faCheck} /></span> <span>
      Increase Traffic 130%
      </span>


  </li>
  <li >

      <span style={{color:"#ff6004",marginRight:"10px"}}><FontAwesomeIcon icon={faCheck} /></span> <span>
      Increase Traffic 130%
      </span>


  </li>
</ul>
</div>
  </div>
</Col>
<Col>
</Col>
  </Row>
</Container>
      </section> */}
           {/* end of package */}
      {/* start of footer */}
      <Footer />
      {/* end of footer */}
    </>
  );
};

export default Home;
