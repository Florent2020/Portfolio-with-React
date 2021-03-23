import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profileImage from "../../images/profile.jpg";
import Footer from "../Footer";

function About() {
  return (
    <>
      <div className="wrapper">
        <div id="about">
          <Container>
            <Row>
              <Col md={6}>
                <Image src={profileImage} rounded />
              </Col>
              <Col md={6}>
                <div className="about">
                  <h1>About</h1>
                  <p>
                    Hello! My name is Florent Hajdari. I am 36 years old. I am
                    married, and I have 2 children.
                  </p>
                  <p>
                    I am from Kosovo, but since 2017 I live in Norway. I have a
                    degree in civil engineering. For 6 years I worked as a civil
                    engineer (2011 - 2017).
                  </p>
                  <p>
                    Since 2018 I have started to be interested in coding. Until
                    then, I did not know anything about coding.
                  </p>
                  <p>
                    In 2019 I enrolled at Noroff College in Norway, majoring in
                    Front-end Development.
                  </p>
                  <p>
                    Design and coding make me very happy. I am very passionate
                    about this profession, where at the same time I find peace
                    and quiet.
                  </p>
                  <p>
                    I hope to be a Professional Front-end Development in a very
                    short time!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
