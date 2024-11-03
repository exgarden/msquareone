import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

const HeroSection = () => {
  // State to store email input
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert(`Thank you for signing up! We have received: ${email}`);
    setEmail(''); // Clear the input after submission
  };

  return (
    <div className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Text Content */}
          <Col md={6}>
            <h1>Empower Your Financial Future with FinWise</h1>
            <p>Take control of your financial journey with our innovative solutions.</p>

            {/* Sign-Up Form */}
            <h4>Join Our Waitlist</h4>
            <Form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row mt-2">
              {/* Email Input */}
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                className="me-md-2 mb-3 mb-md-0" // Margin bottom for mobile, margin end for desktop
                style={{ borderRadius: '20px', flex: '1' }} // Flex-grow for responsive sizing
              />

              {/* Submit Button */}
              <Button type="submit" variant="success" style={{ borderRadius: '20px' }}>
                Sign Up
              </Button>
            </Form>
          </Col>

          {/* Right Column: Image */}
          <Col md={6} className="mt-3 mt-md-0"> {/* Add margin-top for mobile */}
            <img 
              src="./images/hero.png" 
              alt="Hero" 
              className="img-fluid"
              style={{ borderRadius: '10px' }} // Add rounded corners here
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
