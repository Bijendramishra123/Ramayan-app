import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <Container className="contact-container">
      <h2 className="contact-title">📩 Contact Me</h2>
      
      {/* ✅ Basic Info */}
      <Row className="info-section">
        <Col md={6} className="info">
          <p><strong>Name:</strong> Bijendra Mishra</p>
          <p><strong>Email:</strong> <a href="mailto:bijendramishra123@gmail.com">bijendramishra123@gmail.com</a></p>
          <p><strong>Location:</strong> India</p>
        </Col>

        {/* ✅ Social Media Icons */}
        <Col md={6} className="social-icons">
          <a href="https://github.com/Bijendramishra123" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon github" />
          </a>
          <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin" />
          </a>
          <a href="https://twitter.com/YOUR-TWITTER" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon twitter" />
          </a>
          <a href="https://facebook.com/YOUR-FACEBOOK" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon facebook" />
          </a>
          <a href="mailto:bijendramishra123@gmail.com">
            <FaEnvelope className="icon email" />
          </a>
        </Col>
      </Row>

      {/* ✅ Google Form (Feedback / Contact Form) */}
      <Row className="form-section">
        <h3>📝 Send Me a Message</h3>
        <iframe 
          src="https://docs.google.com/forms/d/e/YOUR-GOOGLE-FORM-ID/viewform?embedded=true" 
          width="100%" 
          height="600px"
          frameBorder="0"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </Row>
    </Container>
  );
};

export default Contact;
