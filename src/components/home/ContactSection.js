import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import contactImage from "../../images/contact.jpg";

function ContactSection() {
  return (
    <div className="contact--section">
      <Container>
        <Row>
          <Col md={6}>
            <Image src={contactImage} rounded />
          </Col>
          <Col md={6}>
            <div className="profileText">
              <h2>Contact</h2>
              <h4>Get in Touch</h4>
              <p>
                If you have any questions, please feel free to contact me at
                contact form!
              </p>
              <a href="/contact">
                <Button variant="primary">Contact</Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactSection;
