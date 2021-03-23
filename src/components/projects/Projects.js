import React from "react";
import Footer from "../Footer";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import FlowerPower from "../../images/Flower_Power.png";
import GalaxyMuseum from "../../images/Galaxy_Science_Museum.png";
import Letha from "../../images/Letha.png";
import SpaceX from "../../images/SpaceX.png";
import YayCompany from "../../images/The_YAY_Company.png";

function Projects() {
  return (
    <>
      <div className="wrapper">
        <div id="projects">
          <Container>
            <h1>Projects</h1>
            <Row>
              <Col md={5}>
                <Image src={FlowerPower} rounded />
              </Col>
              <Col md={1}></Col>
              <Col md={6}>
                <h2>1. Flower Power</h2>
                <p>
                  Design and code for project exam in Front-end development at
                  Noroff - 2nd semester!
                </p>
                <p>
                  This project is about the online flower shop - Flower Power,
                  realized with WordPress, which was my task during the study of
                  the first year, the second semester.
                </p>
                <p>
                  But, I have coded this project from the beginning, as an exam
                  task from the Portfolio 1 subject, realized with HTML, CSS and
                  JavaScript programs, using APIs from the task with WordPress.
                </p>
                <Button variant="primary">
                  <a href="http://runashost.com/Flower_Power/"></a> Visit the
                  site!
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Image src={GalaxyMuseum} rounded />
              </Col>
              <Col md={1}></Col>
              <Col md={6}>
                <h2>2. Galaxy Science Museum</h2>
                <p>
                  Design and code for project exam in Front-end development at
                  Noroff - 1st semester!
                </p>
                <p>
                  This project is about the science museum for primary and
                  secondary school children - Galaxy Science Museum.
                </p>
                <p>
                  The aim of the website is to show what kind of activities the
                  science center offers, and make science an exciting and cool
                  topic for young people.
                </p>
                <p>
                  This project was the task of the first semester exam, the
                  first year, and was realized with HTML and CSS programs.
                </p>
                <Button variant="primary">
                  <a href="http://runashost.com/Galaxy_Science_Museum/"></a>{" "}
                  Visit the site!
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Image src={Letha} rounded />
              </Col>
              <Col md={1}></Col>
              <Col md={6}>
                <h2>3. Letha Shoemaker</h2>
                <p>
                  Design and code for project exam in Front-end development at
                  Noroff - 2nd semester!
                </p>
                <p>
                  This project is about the online shoe sales website for men -
                  Letha Shoemaker.
                </p>
                <p>
                  The project was an assignment from the course Interaction
                  Design of the second semester, the first year, and was
                  realized with HTML and CSS programs, as well as the design
                  program Adobe XD.
                </p>
                <Button variant="primary">
                  <a href="http://runashost.com/Letha_Shoemaker/"></a> Visit the
                  site!
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Image src={SpaceX} rounded />
              </Col>
              <Col md={1}></Col>
              <Col md={6}>
                <h2>4. SpaceX</h2>
                <p>
                  Design and code for project exam in Front-end development at
                  Noroff - 1st semester!
                </p>
                <p>
                  The project was an assignment from the course Interaction
                  Design of the second semester, the first year, and was
                  realized with HTML and CSS programs, as well as the design
                  program Adobe XD.
                </p>
                <p>
                  The project was an assignment from the course Interaction
                  Design of the second semester, the first year, and was
                  realized with HTML and CSS programs, as well as the design
                  program Adobe XD.
                </p>
                <p>
                  The project was an assignment from the course Interaction
                  Design of the second semester, the first year, and was
                  realized with HTML and CSS programs, as well as the design
                  program Adobe XD.
                </p>
                <Button variant="primary">
                  <a href="http://runashost.com/SpaceX_Project/"></a> Visit the
                  site!
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Image src={YayCompany} rounded />
              </Col>
              <Col md={1}></Col>
              <Col md={6}>
                <h2>5. The YAY Company</h2>
                <p>
                  The project was an assignment from the course Interaction
                  Design of the second semester, the first year, and was
                  realized with HTML and CSS programs, as well as the design
                  program Adobe XD.
                </p>
                <p>
                  The project was an assignment from the course Interaction
                  Design of the second semester, the first year, and was
                  realized with HTML and CSS programs, as well as the design
                  program Adobe XD.
                </p>
                <p>
                  The project was an assignment from the course Interaction
                  Design of the second semester, the first year, and was
                  realized with HTML and CSS programs, as well as the design
                  program Adobe XD.
                </p>
                <p>
                  The project was an assignment from the course Interaction
                  Design of the second semester, the first year, and was
                  realized with HTML and CSS programs, as well as the design
                  program Adobe XD.
                </p>
                <Button variant="primary">
                  <a href="http://runashost.com/The_YAY_Company/"></a> Visit the
                  site!
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Projects;
