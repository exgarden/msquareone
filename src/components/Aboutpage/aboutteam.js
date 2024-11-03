import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutTeam = () => {
  return (
    <div className="about-team-section py-5">
      <Container>
        <Row>
          {/* Team Member 1 */}
          <Col md={4} className="mb-4">
            <img 
              src="./images/team-member1.png" /* Replace with actual image path */
              alt="Team Member"
              className="img-fluid rounded-image"
            />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </Col>

          {/* Team Member 2 */}
          <Col md={4} className="mb-4">
            <img 
              src="./images/team-member2.png" /* Replace with actual image path */
              alt="Team Member"
              className="img-fluid rounded-image"
            />
            <h4>Jane Smith</h4>
            <p>Chief Financial Officer</p>
          </Col>

          {/* Team Member 3 */}
          <Col md={4} className="mb-4">
            <img 
              src="./images/team-member3.png" /* Replace with actual image path */
              alt="Team Member"
              className="img-fluid rounded-image"
            />
            <h4>Michael Brown</h4>
            <p>Head of Investments</p>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default AboutTeam;
