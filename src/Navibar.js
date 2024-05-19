import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TimeDisplay from "./TimeDisplay";

const CustomNavbar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="sticky-top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Weather">
                            Weather
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Recipe">
                            Recipe
                        </Nav.Link>
                        <Nav.Link as={Link} to="/About">
                            About Us
                        </Nav.Link>
                    </Nav>
                    <Navbar.Brand>
                        <TimeDisplay />
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
