import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

class navbar extends Component {
    state = {  } 
    render() { 
        return (
            <Navbar bg="blue" variant="blue">
        <Container>
            <div><h4>Menu</h4></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
                <NavDropdown>
                    <Nav.Link href="/"> Home</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                    <Nav.Link href="Signup"> Sign up</Nav.Link>
                    <Nav.Link href="Update">Update</Nav.Link>
                <Nav.Link href="Registration">Firm Registration</Nav.Link>
                    <Nav.Link href="RegUpdate">Reg-Update</Nav.Link>
                    </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>);
    }
}
 
export default navbar;
  