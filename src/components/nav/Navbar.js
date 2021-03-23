import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Logo from "../../images/logo.png";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { Container, Row } from "react-bootstrap";
import Nav from "./Nav";

function Navbar() {
    return (
        <Router basename={"/portfolio"}>
            <div>
                <div id="header">
                    <Container>
                        <Row>
                            <div exact to="/" className="logo mr-auto">
                                <img
                                    width={70}
                                    height={30}
                                    src={Logo}
                                    alt="logo"
                                />
                            </div>
                            {/* <BurgerIcon /> */}
                            <Nav />
                        </Row>
                    </Container>
                </div>

            <Switch>
            <Route exact to path="/">
            <Home />
            </Route>
            <Route path="/about">
            <About />
            </Route>
            <Route path="/projects">
            <Projects />
            </Route>
            <Route path="/contact">
            <Contact />
            </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default Navbar
