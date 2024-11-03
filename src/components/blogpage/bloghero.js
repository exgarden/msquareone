import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogPage = () => {
  return (
    <div className="blog-page py-5">
      <Container>
        {/* Section 1: Blog Header */}
        <Row className="mb-5">
          <Col md={12}>
            <h2>Our Latest Blogs</h2>
            <p>Stay updated with our latest insights and articles on finance, investment strategies, and more.</p>
          </Col>
        </Row>

        {/* Section 2: Blog Posts */}
        <Row className="mb-4">
          {/* Blog Post 1 */}
          <Col md={4} className="mb-4">
            <div className="blog-card">
              <img 
                src="./images/blog-image1.png" /* Replace with actual blog image path */
                alt="Blog Post"
                className="img-fluid rounded-image"
              />
              <h4>How to Manage Your Finances Effectively</h4>
              <p>Learn how to take control of your finances with these effective strategies.</p>
              <a href="/blog-post-1" className="btn btn-primary">Read More</a>
            </div>
          </Col>

          {/* Blog Post 2 */}
          <Col md={4} className="mb-4">
            <div className="blog-card">
              <img 
                src="./images/blog-image2.png" /* Replace with actual blog image path */
                alt="Blog Post"
                className="img-fluid rounded-image"
              />
              <h4>The Importance of Financial Planning</h4>
              <p>Discover why financial planning is crucial for long-term success.</p>
              <a href="/blog-post-2" className="btn btn-primary">Read More</a>
            </div>
          </Col>

          {/* Blog Post 3 */}
          <Col md={4} className="mb-4">
            <div className="blog-card">
              <img 
                src="./images/blog-image3.png" /* Replace with actual blog image path */
                alt="Blog Post"
                className="img-fluid rounded-image"
              />
              <h4>Investment Strategies for Beginners</h4>
              <p>Get started with investment strategies designed for beginners.</p>
              <a href="/blog-post-3" className="btn btn-primary">Read More</a>
            </div>
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default BlogPage;
