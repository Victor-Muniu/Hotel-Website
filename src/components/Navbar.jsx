import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { FaGlobe, FaUser } from 'react-icons/fa';
import Logo from '../images/Logo.jpg'
import './CustomNavbar.css'; 

function CustomNavbar() {
  return (
    <BootstrapNavbar expand="lg" className="px-4 py-2">
      <BootstrapNavbar.Brand href="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ height: '50px' }} 
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto custom-nav">
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/destinations">Destinations</Nav.Link>
          <Nav.Link href="/blog">Blogs</Nav.Link>
          <Nav.Link href="/conferences">Meetings & Events</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav className="align-items-center">
          <NavDropdown title={<><FaGlobe /> ENGLISH</>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Spanish</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="EUR" id="currency-dropdown">
            <NavDropdown.Item href="#action/4.1">USD</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">EUR</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">GBP</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">KSH</NavDropdown.Item>
          </NavDropdown>
          <Button className="custom-button mx-2">
            <FaUser /> Sign In
          </Button>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;
