import React, { Component } from 'react';
import{Container,Form,image, Button, option} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter, faWhatsapp,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons";

class RegUpdate extends Component {
    state = {  } 
    render() { 
        return (
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
               <Container>
                    <div className='Signup'>
                 <div>
                     <h3>Registration Update</h3>
                 <h5>Welcome. Nice to see you,please Update Here.</h5>
                            <Form>
                            <Form.Group className='Name' controlId="formBasicFirstName">
                                <Form.Label>Enter Firm's Name</Form.Label>
                                <Form.Control type="Firm's name" placeholder="Firm's Name" required />
                            </Form.Group>

                        <Form.Group className ='Number'controlId="formBasicNumber">
                                <Form.Label> Enter Registration No</Form.Label>
                                 <Form.Control type=" Registration No" placeholder=" Registration No"  required/>
                        </Form.Group>
                        
                  
                        <Form.Group>
                               <Form.Label> Enter Physical Address</Form.Label>
                               <Form.Control tyrpe ="Institution" placeholder="P.O Box..."/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>
                            Enter Email Address
                        </Form.Label>
                        <Form.Control Type ="Email" placeholder='@email.com' required/>
                      </Form.Group>
                        
                    
                        <Button variant="primary" type="submit">
                            submit
                        </Button>
                        </Form>
                        <div>
                        <h6>
                            Thank You for Your Submission. You can Update Your status <a href='Registration'>Here!</a>
                        </h6>
                        </div>
                        </div>
                              </div>
                              
                              </Container>
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
        );
    }
}
 
export default RegUpdate;