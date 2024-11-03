import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SolutionSection = () => {
  return (
    <div className="solution-section py-5">
      <Container>
        {/* Top Container: Text on the left, Image on the right */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2>Empowering Your Business With Financial Capabilities</h2>
            <p>
              We focus on providing innovative financial solutions that help businesses succeed in today’s competitive environment.
              Our services are designed to meet your specific needs and drive long-term success.
            </p>
          </Col>
          <Col md={6}>
            <img 
              src="./images/Investing2.png" /* Replace with your actual image path */
              alt="Solution"
              className="img-fluid"
            />
          </Col>
        </Row>

        {/* Bottom Container: Two Lists with Cards */}
        <Row>
          {/* First List with Two Cards */}
          <Col md={6} className="mb-4">
            <Card className="shadow-sm p-4 modern-card">
              <Card.Body className="text-center">
                {/* Icon replaced with PNG Image */}
                <img 
                  src="./images/icons/money-management.png" /* Replace with actual image path */
                  alt="Money Management Icon"
                  style={{ width: '60px', marginBottom: '15px' }} /* Adjust size as needed */
                />
                {/* Heading */}
                <h4>Money Management</h4>
                {/* Description */}
                <p>Effective management of your finances to ensure long-term success.</p>
              </Card.Body>
            </Card>

            <Card className="shadow-sm p-4 modern-card mt-4">
              <Card.Body className="text-center">
                {/* Icon replaced with PNG Image */}
                <img 
                  src="./images/icons/financial-planning.png" /* Replace with actual image path */
                  alt="Financial Planning Icon"
                  style={{ width: '60px', marginBottom: '15px' }} /* Adjust size as needed */
                />
                {/* Heading */}
                <h4>Financial Planning</h4>
                {/* Description */}
                <p>Plan for a secure financial future with our expert guidance.</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Second List with Two Cards */}
          <Col md={6} className="mb-4">
            <Card className="shadow-sm p-4 modern-card">
              <Card.Body className="text-center">
                {/* Icon replaced with PNG Image */}
                <img 
                  src="./images/icons/strategic-partner.png" /* Replace with actual image path */
                  alt="Strategic Partner Icon"
                  style={{ width: '60px', marginBottom: '15px' }} /* Adjust size as needed */
                />
                {/* Heading */}
                <h4>Strategic Partner</h4>
                {/* Description */}
                <p>We work closely with you to achieve your financial goals.</p>
              </Card.Body>
            </Card>

            <Card className="shadow-sm p-4 modern-card mt-4">
              <Card.Body className="text-center">
                {/* Icon replaced with PNG Image */}
                <img 
                  src="./images/icons/risk-management.png" /* Replace with actual image path */
                  alt="Risk Management Icon"
                  style={{ width: '60px', marginBottom: '15px' }} /* Adjust size as needed */
                />
                {/* Heading */}
                <h4>Risk Management</h4>
                {/* Description */}
                <p>Mitigate risks and secure your investments for long-term growth.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SolutionSection;
