import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
export default function CustomNavbar() {
  return (
    <Navbar className='navbar  ' expand="lg" >
      <Container >
        <Navbar.Brand className='mx-5' href="#Home" >Asma<span className="color">  CHOHRA</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><FaBars/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
