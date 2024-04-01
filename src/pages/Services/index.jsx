import React, { useState, useEffect } from "react";
import { Nav, Button, Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../navbar/navbar";
import "./style.css";
import { useSpring, animated } from "@react-spring/web";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../footer/index";
import Card1 from "./images/01.png";
import Card2 from "./images/03.png";
import Card3 from "./images/04.png";
import Card4 from "./images/05.png";
import Card5 from "./images/06.png";
import Card6 from "./images/07.png";
import Last from "./images/08.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple,faBullseye,faPoll  } from '@fortawesome/free-solid-svg-icons'
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".your-section-class");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll); // Remove listener once animation is triggered
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 }, // Adjust duration as needed
  });
  const leftSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 }, // Adjust duration as needed
  });

  const bottomSpring = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 }, // Adjust duration as needed
  });
  const popUpSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 20, friction: 10 }, // Adjust tension and friction for slower and smoother animation
  });

  const ScrollPopUp = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.8)",
    config: { tension: 50, friction: 10 }, // Adjust tension and friction for slower and smoother animation
  });

  return (
    <>
      {/* start of nav */}
      <animated.div style={popUpSpring}>
        <Navbar />
      </animated.div>
      {/* end of nav */}
      {/* start of hero section */}
      <section className="landing">
        <Container>
          <Row>
            <Col>
              <animated.div style={springProps}>
                <p className="sup-title ">CREATIVE AGENCY</p>
                <h1 className="title">Services</h1>
              </animated.div>
            </Col>
          </Row>
        </Container>
        <animated.div style={popUpSpring}>
          <Container fluid style={{ marginTop: "80px" }}>
            <Row>
              <Col className="imgss" sm={4}></Col>
            </Row>
          </Container>
        </animated.div>
      </section>
      {/* end of hero section */}
      {/* start of services section */}
      <section className="services">
        <Container>
          <Row>
            <Col>
              <p className="sup-header">
                <span className="dot before">.</span>
                SERVICES
                <span className="dot after">.</span>
              </p>
              <h2 className="ser-title">
                Features Loved Our Digital <br />
                Marketing Services!
              </h2>
            </Col>
          </Row>
          <Row style={{ marginTop: "80px" }}>
            <Col sm={4}>
              <Card className="ser-cards">
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Title>SEO Marketing </Card.Title>
                  <Card.Text>
                    Our strategy includes consistently evolving, <br />
                    to ensure we’re SEO for business. Get more <br />
                    traffic with powerful SEO services. <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="ser-cards">
                <Card.Img variant="top" src={Card2} />
                <Card.Body>
                  <Card.Title>Content Marketing</Card.Title>
                  <Card.Text>
                    Our strategy includes consistently evolving, <br />
                    to ensure we’re SEO for business. Get more <br />
                    traffic with powerful SEO services. <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="ser-cards">
                <Card.Img variant="top" src={Card3} />
                <Card.Body>
                  <Card.Title>Digital Marketing</Card.Title>
                  <Card.Text>
                    Our strategy includes consistently evolving, <br />
                    to ensure we’re SEO for business. Get more <br />
                    traffic with powerful SEO services. <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "2.5rem" }}>
            <Col sm={4}>
              <Card className="ser-cards">
                <Card.Img variant="top" src={Card4} />
                <Card.Body>
                  <Card.Title>Email Marketing </Card.Title>
                  <Card.Text>
                    Our strategy includes consistently evolving, <br />
                    to ensure we’re SEO for business. Get more <br />
                    traffic with powerful SEO services. <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="ser-cards">
                <Card.Img variant="top" src={Card5} />
                <Card.Body>
                  <Card.Title>Marketing Strategy</Card.Title>
                  <Card.Text>
                    Our strategy includes consistently evolving, <br />
                    to ensure we’re SEO for business. Get more <br />
                    traffic with powerful SEO services. <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="ser-cards">
                <Card.Img variant="top" src={Card6} />
                <Card.Body>
                  <Card.Title>Market Analysis</Card.Title>
                  <Card.Text>
                    Our strategy includes consistently evolving, <br />
                    to ensure we’re SEO for business. Get more <br />
                    traffic with powerful SEO services. <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of services section */}
      {/* start of bar section */}
      <section>
        <Container
          className="garb"
          fluid
          style={{ overflowX: "hidden", height: "100%" }}
        >
          <Row>
            <Col>
              <div class="marquee-container">
                <div class="marquee-text">
                  <span>Analysis .</span>
                  <span>SEO .</span>
                  <span>Marketing .</span>
                  <span>Digital .</span>
                  <span>Agency .</span>
                  <span>Digital Marketing .</span>
                  <span>Business Solutions .</span>
                  <span>Marketing Strategy .</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of bar section */}
      {/* start of steps section */}
      <section >
        <Container>
          <Row className="steps">
            <Col>
              <img src={Last} alt="" />
            </Col>
            <Col className="el" style={{marginLeft:"50px"}}>
            <div className="left">
            <div className="ddd" style={{  color: '#ff6004', width: 'fit-content', padding: '30px',marginRight:"20px" }}>
      <FontAwesomeIcon icon={faChartSimple} size="4x" />
    </div>

                <h3>Research
                    <br />

                <span style={{lineHeight:"0,8"}}>
                Migrating your rank Google Analytics to <br />
                another solution.
                </span>
                </h3>
              
             
            </div>
            <div className="left" style={{marginTop:"50px"}}>
            <div className="ddd" style={{  color: '#103ce7', width: 'fit-content', padding: '30px',marginRight:"20px" }}>
            <FontAwesomeIcon icon={faBullseye} size="4x" />

    </div>

                <h3>Targeting
                    <br />

                <span style={{lineHeight:"0,8"}}>
                Migrating your rank Google Analytics to <br />
                another solution.
                </span>
                </h3>
              
             
            </div>
            <div className="left" style={{marginTop:"50px"}}>
            <div className="ddd" style={{  color: '#ff6004', width: 'fit-content', padding: '30px',marginRight:"20px" }}>
            <FontAwesomeIcon icon={faPoll} size="4x" />

    </div>

                <h3>Result
                    <br />

                <span style={{lineHeight:"0,8"}}>
                Migrating your rank Google Analytics to <br />
                another solution.
                </span>
                </h3>
              
             
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of steps section */}
      <Footer />
    </>
  );
};

export default AboutUs;
