import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FlowerPower from "../../images/Flower_Power.png";
import GalaxyMuseum from "../../images/Galaxy_Science_Museum.png";
import Letha from "../../images/Letha.png";
import SpaceX from "../../images/SpaceX.png";
import YayCompany from "../../images/The_YAY_Company.png";

function ProjectsSection() {
  return (
    <div className="project--section">
      <Container>
        <h2>Projects</h2>
        <Row>
          <Col md={4}>
            <Image src={FlowerPower} rounded />
            <div className="titleText">
              <h4>Flower Power</h4>
              <p>
                This project is about the online flower shop - Flower Power,
                realized with WordPress, which was my task during the study of
                the first year, the second semester.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <Image src={GalaxyMuseum} rounded />
            <div className="titleText">
              <h4>
                Galaxy <br /> Science Museum
              </h4>
              <p>
                This project was the task of the first semester exam, the first
                year, and was realized with HTML and CSS programs.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <Image src={Letha} rounded />
            <div className="titleText">
              <h4>Letha Shoemaker</h4>
              <p>
                The project was an assignment from the course Interaction Design
                of the second semester, the first year, and was realized with
                HTML and CSS programs, as well as the design program Adobe XD.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Image src={SpaceX} rounded />
            <div className="titleText">
              <h4>SpaceX</h4>
              <p>
                The project was an assignment from the course Interaction Design
                of the second semester, the first year, and was realized with
                HTML and CSS programs, as well as the design program Adobe XD.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Image src={YayCompany} rounded />
            <div className="titleText">
              <h4>The YAY Company</h4>
              <p>
                The project was an assignment from the course Interaction Design
                of the second semester, the first year, and was realized with
                HTML and CSS programs, as well as the design program Adobe XD.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsSection;
