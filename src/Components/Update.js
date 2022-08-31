import React, { Component } from 'react';
import{Container,Form,image, Button, option} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter, faWhatsapp,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons";
class Update extends Component {
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
                    <Nav.Link href="Signup"> Sign up</Nav.Link>
                    <Nav.Link href="Update">Update</Nav.Link>
                    </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
               <Container>
                    <div className='Update'>
                 <div>
                     <h5> Please update  to current status.</h5> 
                     
                            <Form>
                            <Form.Group className='Name' controlId="formBasicFirstName">
                                <Form.Label>Enter First Name</Form.Label>
                                <Form.Control type="First name" placeholder="First Name" required />
                            </Form.Group>

                        <Form.Group className ='Name'controlId="formBasicSurnName">
                                <Form.Label> Enter Surn Name</Form.Label>
                                 <Form.Control type=" Surn Name" placeholder=" Surn Name" required />
                        </Form.Group>
                        <Form.Group>
                  <Form.Label> Select Gender:
                  <Form.Select>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        <option value="Others">Others</option>
              </Form.Select>
              </Form.Label>
                  </Form.Group>
                        <Form.Group>
                               <Form.Label> Enter Institution</Form.Label>
                               <Form.Control tyrpe ="Institution" placeholder="University/College"/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>
                            Enter Email
                        </Form.Label>
                        <Form.Control Type ="Email" placeholder='@email.com' required/>
                      </Form.Group>
                        
                    
                        <Button variant="primary" type="submit">
                            submit
                        </Button>
                        </Form>
                        <div>
                        <h6>
                            Thank You for Your Update. Click <a href='Signup'>Here</a> to go back
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
 
export default Update;
