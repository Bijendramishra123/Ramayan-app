import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="transparent-navbar shadow w-100">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img src="/logo.png" alt="Logo" width="50" height="50" className="d-inline-block align-top ms-2" />
          !! जय श्री राम !!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <Nav.Link as={Link} to="/" className="nav-item-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/bhagavadgita" className="nav-item-custom">Bhagavad Gita</Nav.Link>
            <Nav.Link as={Link} to="/ramayan" className="nav-item-custom">Ramayan</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
