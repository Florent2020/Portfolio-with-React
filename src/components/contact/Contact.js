import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Forms from "../Forms";
import Footer from "../Footer";
import Banner from "../../images/contact_desktop.png";

function Contact() {
  return (
    <>
      <div className="wrapper">
        <div id="contact">
          <Image src={Banner} />
          <Container>
            <Row>
              <Col md={5}>
                <div className="contact--text">
                  <h1>Contact</h1>
                  <span>Follow me on:</span>
                  <a
                    href="https://www.facebook.com/florent.hajdari.84"
                    className="fb"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"> </i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fhajdari/"
                    className="linkedin"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/Florent2020/"
                    className="gh"
                    target="_blank"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                  <p>
                    Email me at: <a href="#">florent.hajdari@hotmail.com</a>
                  </p>
                  <h4>Florent Hajdari</h4>
                  <h6>Kongsbergveien 18</h6>
                  <h6>3681, Notodden</h6>
                  <h6>Norway</h6>
                </div>
              </Col>
              <Col md={6}>
                <Forms></Forms>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
