import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">Features</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
