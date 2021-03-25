import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profileImage from "../../images/profile.jpg";

function Profile() {
  return (
    <div className="profile">
      <Container>
        <Row>
          <Col md={6}>
            <Image src={profileImage} rounded />
          </Col>
          <Col md={6}>
            <div className="profileText">
              <h2>About</h2>
              <p>
                I'm Florent Hajdari, 36 years old, a Front-end Developer Student
                at Noroff College, living in Notodden - Norway.
              </p>
              <p>
                My core skills are HTML, CSS, JavaScript, SASS, Bootstrap,
                React, WordPress, Adobe XD.
              </p>
              <p>
                Do you want to know more? Click <a href="/portfolio/about">here</a> or
                send me message at:
                <a href="/portfolio/contact"> florent.hajdari@hotmail.com</a>
              </p>
              <p>Follow me on:</p>
              <a href="https://www.facebook.com/florent.hajdari.84" className="fb" target="_blank" >
                <i className="fab fa-facebook-square"> </i>
              </a>
              <a href="https://www.linkedin.com/in/fhajdari/" className="linkedin" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Florent2020/" className="gh" target="_blank" >
                <i className="fab fa-github-square"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
