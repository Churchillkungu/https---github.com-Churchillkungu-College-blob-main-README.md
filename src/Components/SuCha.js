import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter, faWhatsapp,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

class SuCha extends Component {
    state = {  } 
    render() { 
        return (
            <div>
              <div>
                 <Navbar bg="blue" variant="blue">
        <Container>
            <div><h4>Menu</h4></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
                <NavDropdown>
                    <Nav.Link href="/"> Home</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                <Nav.Link href="Registration">Firm Registration</Nav.Link>
                    <Nav.Link href="RegUpdate">Reg-Update</Nav.Link>
                    </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
               <div>Supply Chain</div>
                <div class="social-container">
      <h3>Reach Us Through:</h3>
      <div>
      <a href="https://www.whatsapp.com/c/jamesqquick"
        className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
    </div>
            </div>
        
            </div>
        );
    }
}
 
export default SuCha;