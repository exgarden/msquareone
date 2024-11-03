import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const KnowledgeSharingSection = () => {
  return (
    <div className="knowledge-sharing-section py-5">
      <Container className="knowledge-container rounded-container">
        {/* Top Container: Text on Left, Image on Right */}
        <Row className="align-items-center mb-5">
          {/* Left Side: Text */}
          <Col md={6}>
            <p className="small-text">OUR BLOG</p>
            <h2>Sharing our Knowledge</h2>
            <p className="news-description">
              Minimum Wage May Lead to Higher Levels of Poverty. Explore how minimum wage policies can unintentionally increase poverty levels. Learn more about how financial planning can mitigate these risks.
            </p>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <img 
              src="./images/working-man.png" /* Replace with your actual image path */
              alt="Knowledge Sharing" 
              className="img-fluid rounded-image card-image-size"
            />
          </Col>
        </Row>

        {/* Bottom Container: Three Clickable Cards */}
        <Row className="justify-content-start">
          {/* First Card */}
          <Col md={4} className="mb-4">
            <Card className="clickable-card no-background text-left">
              <div className="d-flex justify-content-center">
                <Card.Img 
                  variant="top" 
                  src="./images/card-image1.png" /* Replace with actual image path */
                  className="rounded-image card-image-size"
                />
              </div>
              <Card.Body>
                <p className="small-text">Fintech</p>
                <h4>The story of how Dave took the long road to become a neobank</h4>
                <p>BY ASHLEY VANCE</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Card */}
          <Col md={4} className="mb-4">
            <Card className="clickable-card no-background text-left">
              <div className="d-flex justify-content-center">
                <Card.Img 
                  variant="top" 
                  src="./images/card-image2.png" /* Replace with actual image path */
                  className="rounded-image card-image-size"
                />
              </div>
              <Card.Body>
                <p className="small-text">Fintech</p>
                <h4>The story of how Dave took the long road to become a neobank</h4>
                <p>BY ASHLEY VANCE</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Third Card */}
          <Col md={4} className="mb-4">
            <Card className="clickable-card no-background text-left">
              <div className="d-flex justify-content-center">
                <Card.Img 
                  variant="top" 
                  src="./images/working-man.png" /* Replace with actual image path */
                  className="rounded-image card-image-size"
                />
              </div>
              <Card.Body>
                <p className="small-text">Fintech</p>
                <h4>The story of how Dave took the long road to become a neobank</h4>
                <p>BY ASHLEY VANCE</p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default KnowledgeSharingSection;
