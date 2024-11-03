import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-custom py-5">
      <Container>
        <Row>
          {/* Left Side: Brand Name */}
          <Col md={6}>
            <h3 className="text-white">WealthWise</h3>
            <p className="text-white">Simplifying Complexity with Innovative Solutions</p>
          </Col>

          {/* Right Side: Navigation Links and Social Media */}
          <Col md={6} className="d-flex justify-content-end">
            <ul className="footer-links list-unstyled d-flex">
              <li><a href="#home" className="text-white mx-3">Home</a></li>
              <li><a href="#about" className="text-white mx-3">About</a></li>
              <li><a href="#services" className="text-white mx-3">Services</a></li>
              <li><a href="#contact" className="text-white mx-3">Contact</a></li>
            </ul>

            {/* Social Media Icons */}
            <ul className="social-icons list-unstyled d-flex">
              <li><a href="#facebook" className="text-white mx-2"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#twitter" className="text-white mx-2"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#linkedin" className="text-white mx-2"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright Information */}
        <Row className="mt-4">
          <Col md={12} className="text-center text-white">
            &copy; 2023 WealthWise. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
