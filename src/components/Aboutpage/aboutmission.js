import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMission = () => {
  return (
    <div className="about-mission-section py-5">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Our Mission</h2>
            <p>
              Our mission at WealthWise is to empower our clients with knowledge and tools that help them make informed financial decisions. We believe in simplifying complexity and providing innovative solutions that drive long-term success.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMission;
