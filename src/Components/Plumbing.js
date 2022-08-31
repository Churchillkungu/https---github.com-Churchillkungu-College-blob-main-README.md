import React, { Component } from 'react';
import{Container,Form,image, Button, option} from 'react-bootstrap';
import {axios} from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter, faWhatsapp,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons";

class Plumbung extends Component {
    state = { 
        // Initially, no file is selected
        myCv: null
      };
      
      // On file select (from the pop up)
      onFileChange = event => {
      
        // Update the state
        this.setState({ myCv: event.target.files[0] });
      
      };
      
      // On file upload (click the upload button)
      onFileUpload = () => {
      
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          this.state.myCv,
          this.state.myCv.name
        );
      
        // Details of the uploaded file
        console.log(this.state.myCv);
      
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
      };
      
      // File content to be displayed after
      // file upload is complete
      fileData = () => {
      
        if (this.state.myCv) {
           
          return (
            <div>
              <h5>Upload Details:</h5>
               
  <p>File Name: {this.state.myCv.name}</p>
   
               
  <p>File Type: {this.state.myCv.type}</p>
   
               
  <p>
                Last Modified:{" "}
                {this.state.myCv.lastModifiedDate.toDateString()}
              </p>
   
            </div>
          );
        } else {
          return (
            <div>
              <br />
              <h6>Choose before Pressing the Upload button</h6>
            </div>
          );
        } } 
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
                    <Nav.Link href="Signup"> Sign up</Nav.Link>
                    <Nav.Link href="Update">Update</Nav.Link>
                    </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            <div>
           <Container>
                <div className='Signup'>
             <div>
                 <h3>Plumbing</h3>
             <h5>Welcome. Please Apply Here.</h5>
                        <Form>
                        <Form.Group className='Name' controlId="formBasicFirstName">
                            <Form.Label>Enter First Name</Form.Label>
                            <Form.Control type="First name" placeholder="First Name" required/>
                        </Form.Group>

                    <Form.Group className ='Name'controlId="formBasicSurnName">
                            <Form.Label> Enter Surn Name</Form.Label>
                             <Form.Control type=" Surn Name" placeholder=" Surn Name" required/>
                    </Form.Group>
                    <Form.Group>
                                    <Form.Label>
                                      Enter Phone Nunber
                                      <Form.Control type='Number' placeholder='+254..' required/>
                                    </Form.Label>
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
                  <p>
                        <h6>
                            Attach Your CV Below
                        </h6>
              </p>
            <div>
                  <input type="file" onChange={this.onFileChange} />
                    <Button variant="primary" type="Upload" onClick={this.onFileUpload} required>
                            Upload
                        </Button>
            </div>
            <Form.Group>
            <Form.Label> <h6> Working Experience:(Years)</h6>
                  <Form.Select>
                          <option value="number">0-3</option>
                          <option value="Number">3-7</option>
                        <option value="Others">7 & Above</option>
              </Form.Select>
              </Form.Label>
            </Form.Group>
            
          {this.fileData()}
                  <Form.Group>
                    <Form.Label>
                        Enter Email
                    </Form.Label>
                    <Form.Control Type ="Email" placeholder='@email.com'required/>
                  </Form.Group>
                    
                
                    <Button variant="primary" type="submit">
                        submit
                    </Button>
                    </Form>
                    <div>
                        <h6>
                            <p>
                            </p>
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
        </div>
        </div>
        );
    }
}
 
export default Plumbung;