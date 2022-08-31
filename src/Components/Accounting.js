import React, { Component } from 'react';
import{Container,Form,Image, Button, option, NavLink} from 'react-bootstrap';
import {axios}   from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter, faWhatsapp,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
class Accounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    }
    if (!fields["surntName"]) {
      formIsValid = false;
      errors["surntName"] = "Cannot be empty";
    }
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Only letters";
      }
    }
    if (typeof fields["surnName"] !== "undefined") {
      if (!fields["surnName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["surnName"] = "Only letters";
      }
    }
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  evySubmit(e) {
    //e.preventDefault();

    if (this.handleValidation()) {
      alert("submitted Successfuly");
    } else {
      alert("Oop! There is an Errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
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
      }
    };

render () { 
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
      </div>
        <div>
       <Container>
            <div className='Signup'>
         <div>
             <h3>Accounting</h3>
         <h5>Welcome. Please Apply Here.</h5>
                    <Form  onSubmit={this.evySubmit.bind(this)}>
                    <Form.Group className='Name' controlId="formBasicFirstName" onSubmit={this.evySubmit.bind(this)} onChange={this.handleChange.bind(this, "firstName")}
                value={this.state.fields["firstName"]}>
                   <span>{this.state.errors["firstName"]}</span>
                        <Form.Label>Enter First Name</Form.Label>
                        <Form.Control type="First name" placeholder="First Name"  required/>
                    </Form.Group>

                <Form.Group className ='Name'controlId="formBasicSurnName" onSubmit={this.evySubmit.bind(this)} onChange={this.handleChange.bind(this, "surnName")}
                value={this.state.fields["surnName"]}>
                   <span>{this.state.errors["surnName"]}</span>
                        <Form.Label> Enter Surn Name</Form.Label>
                         <Form.Control type=" Surn Name" placeholder=" Surn Name" required/>
                </Form.Group>
                <Form.Group onChange={this.handleChange.bind(this, "phone")}
                value={this.state.fields["phone"]}>
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
              <Form.Group onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}>
                   <span>{this.state.errors["email"]}</span>
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
                    <p>
                              An accountant is a professional who is responsible for keeping and interpreting financial records. Most accountants are responsible for a wide range of finance-related tasks, either for individual clients or for larger businesses and organizations employing them.

Several other terms are often discussed in conjunction with the phrase “accountant,” which can lead to confusion on what this career actually entails. For example, “accountant” and “bookkeeper” are phrases that are sometimes used interchangeably, yet there are several key differences between these job titles.
                              </p>
                    </h6>
                </div>
                </div>
                      </div>
                      
                      </Container>
    </div>
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
 
export default Accounting;