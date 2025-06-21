import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../styles/Navbar.css";

const NavigationBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Navbar expand="lg" variant="dark" className="transparent-navbar shadow w-100">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Logo" 
            width="50" 
            height="50" 
            className="d-inline-block align-top ms-2"
          />
          <span className="ms-2">!! जय श्री राम !!</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <Nav.Link as={Link} to="/" className="nav-item-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/bhagavadgita" className="nav-item-custom">Bhagavad Gita</Nav.Link>
            <Nav.Link as={Link} to="/ramayan" className="nav-item-custom">Ramayan</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item-custom">Contact</Nav.Link>

            {isAuthenticated ? (
              <Button variant="outline-light" className="ms-3" onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="nav-item-custom">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup" className="nav-item-custom">SignUp</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
