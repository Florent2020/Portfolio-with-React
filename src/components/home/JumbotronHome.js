import React from "react";
import { Container, Button, Jumbotron } from "react-bootstrap";

function JumbotronHome() {
  return (
    <Jumbotron>
      <Container>
        <h3> Hello, </h3>
        <h1> I'm Florent!</h1>
        <p> Welcome to my portfolio! </p>
        <p>
          <a href="/Projects">
            <Button variant="primary"> View more! </Button>
          </a>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronHome;
