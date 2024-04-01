import React, { useState, useEffect } from "react";
import { Nav, Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../navbar/navbar";
import "./style.css";
import { useSpring, animated } from "@react-spring/web";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../footer/index";

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
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [awardCount, setAwardCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".number"); // Change to the class of your section
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight) {
          setIsSectionVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      // Function to increment the count gradually
      const incrementCount = (targetCount, setter) => {
        let currentCount = 0;
        const interval = setInterval(() => {
          currentCount++;
          setter(currentCount);
          if (currentCount === targetCount) {
            clearInterval(interval);
          }
        }, 10); // Adjust interval time as needed for smoother animation
      };

      // Increment counts gradually when component mounts
      const interval1 = incrementCount(200, setProjectCount);
      const interval2 = incrementCount(316, setClientCount);
      const interval3 = incrementCount(30, setAwardCount);

      // Clean up the intervals when component unmounts
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }
  }, [isSectionVisible]);
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
          <Col >
        <animated.div style={springProps}>
        <p  className="sup-title ">CREATIVE AGENCY</p>
              <h1 className="title">ABOUT US</h1>
        </animated.div>
      
            </Col>
          </Row>
        </Container>
 <animated.div style={popUpSpring}>
 <Container fluid style={{ marginTop: "80px" }}>
          <Row>
            <Col className="imgss" lg={12}>
            </Col>
          </Row>
        </Container>
 </animated.div>
      </section>
      {/* end of hero section */}

      {/* start of who we are*/}
      <section className="WhoWe">
        <Container>
          <Row>
            <Col>
              <span className="WhoWe-sup">- WHO WE ARE?</span>
              <h2 className="WhoWe-title">Empowering Marketing Solutions</h2>
              <p className="WhoWe-p">
                At HodHod, we empower businesses with innovative marketing solutions.  <br />
                Our platform allows users to create and manage campaigns efficiently, <br />
                driving growth and engagement for their brands.
              </p>
              <p className="WhoWe-last">
                From concept to creation, we're your digital marketing partners.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end of who we are*/}
      {/* start of serv section */}
      <section className="serv">
      <Container>
  <Row className="rev">
    <Col>
      <ul>
        <li>+ Campaign Strategy</li>
        <li>+ Digital Experience Optimization</li>
        <li> + Social Media Management</li>
        <li> + Advertising Campaigns</li>
      </ul>
    </Col>
    <Col>
      <ul>
        <li>+ Website Development</li>
        <li>+ E-Commerce Solutions</li>
        <li> + Search Engine Optimization (SEO)</li>
        <li> + Content Creation</li>
      </ul>
    </Col>
    <Col>
      <ul>
        <li>+ Brand Identity Design</li>
        <li>+ Responsive Web Design</li>
        <li> + Visual Asset Creation</li>
        <li> + Marketing Collateral Design</li>
      </ul>
    </Col>
  </Row>
</Container>

      </section>
      {/* end of serv section */}
      {/* start of  mission and vision */}

      <Container>
        <Row>
       <Col>
  <h1 className="mission-title">MISSION & VISION</h1>
  <p className="mission-p">
  Our mission at HodHod is to empower businesses to thrive in the digital age. <br />
  We are committed to guiding companies through the rapid implementation of emerging technologies and unraveling the intricacies of digital transformation. <br />
  Whether it's creating user-centric applications or groundbreaking solutions for enterprises, we steer the journey from ideation to execution, ensuring continuity of innovation.
</p>

  <p className="WhoWe-last">
    From concept to creation, we're your partners in digital transformation.
  </p>
</Col>

        </Row>
      </Container>
      {/* end of  mission and vision */}
      {/* start of number section */}
      <section className="number">
        <Container>
<Row className="anzl">
    <Col >
    <h3>{projectCount}</h3>
        <h6>Projects Completed</h6>
    </Col>
    <Col>
        <h3>{clientCount}</h3>
        <h6>Clients Around The World</h6>
      </Col>
      <Col>
        <h3>{awardCount}</h3>
        <h6>Total Awards</h6>
      </Col>
</Row>
        </Container>
      </section>
      {/* end of number section */}
      <Footer />
      
    </>
  );
};

export default AboutUs;
