import React, { useState, useEffect } from 'react';
import {  Nav, Button } from "react-bootstrap";

import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import { useSpring, animated } from '@react-spring/web'



const Footer = () => {

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

export default Footer;
