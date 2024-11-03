import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesSection = () => {
  return (
    <div className="services-section py-5">
      <Container>
        {/* Header: Two Text Columns */}
        <Row className="mb-5">
          <Col md={6}>
            {/* Small Font Size Text */}
            <p className="small-text">Financial Plan for Long-Term Success</p>
          </Col>
          <Col md={6}>
            {/* Large Font Size Header */}
            <h2 className="large-text">Empowering Your Financial Future</h2>
          </Col>
        </Row>

        {/* Body Content */}
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Our financial planning services are designed to help you achieve long-term success.
              From money management to risk mitigation, we provide comprehensive solutions tailored to your needs.
            </p>
          </Col>

          {/* Image on Right */}
          <Col md={6}>
            <img 
              src="./images/services-image.png" /* Replace with your actual image path */
              alt="Services"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;
