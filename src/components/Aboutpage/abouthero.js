import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <div className="about-page py-5">
      <Container>
        {/* Section 1: Introduction */}
        <Row className="align-items-center mb-5">
          {/* Left Side: Image */}
          <Col md={6}>
            <img 
              src="./images/about-image.png" /* Replace with your actual image path */
              alt="About Us"
              className="img-fluid rounded-image"
            />
          </Col>

          {/* Right Side: Text */}
          <Col md={6}>
            <h2>Who We Are</h2>
            <p>
              At WealthWise, we are committed to helping individuals and businesses achieve financial success. Our team of experts provides innovative financial solutions tailored to meet your unique needs.
            </p>
            <p>
              Whether you're looking to manage your wealth, plan for retirement, or invest wisely, we have the tools and expertise to guide you every step of the way.
            </p>
          </Col>
        </Row>

        {/* Section 2: Our Mission */}
        <Row className="mb-5">
          <Col md={12}>
            <h2>Our Mission</h2>
            <p>
              Our mission at WealthWise is simple: To empower our clients with knowledge and tools that help them make informed financial decisions. We believe in simplifying complexity and providing innovative solutions that drive long-term success.
            </p>
          </Col>
        </Row>

        {/* Section 3: Call-to-Action */}
        <Row className="text-center">
          <Col md={12}>
            <h3>Ready to Take Control of Your Financial Future?</h3>
            <p>Contact us today and start your journey towards financial success.</p>
            <a href="#contact" className="btn btn-warning gold-button">Contact Us</a>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default AboutPage;
