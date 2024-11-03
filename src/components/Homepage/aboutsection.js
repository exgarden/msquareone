import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <div className="section-gradient py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <img 
              src="./images/working-man.png" 
              alt="Working Man" 
              className="img-fluid" 
              style={{ borderRadius: '10px' }} // Optional rounded corners for image
            />
          </Col>

          {/* Right Column: Text Content */}
          <Col md={6}>
            <h2 className="gold-text">Providing Innovative Services and Solutions</h2>
            <p>
              We focus on delivering financial tools and services that help you succeed in building your financial future.
              Our solutions are designed to meet the evolving needs of businesses and individuals alike.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
