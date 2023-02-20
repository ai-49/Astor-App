import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
// import { ReactDOM } from 'react';

function Header() {
  return (
    <Navbar fixed=''  bg="dark" variant="dark" expand="lg">
      <Container className='container-fluid' >
        <Navbar.Brand href="/signup">Astor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Sign In" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login/advisor"> Client </NavDropdown.Item>
              <NavDropdown.Item href="/login/client">Advisor </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='ml-auto' href="/login/advisor/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;