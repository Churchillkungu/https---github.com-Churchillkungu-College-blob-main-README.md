import React, { Component } from 'react';
import Navbar from "./Nav";
import  Employer from "./Employer";
import Main  from "./Main";
import Employee from "./Employee";
import Edge from "./Footer";
import "./Style.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Tvet extends Component {
   //state = {  } 
    render() { 
        return (
            
            <div>
                
                <Navbar></Navbar>
                <div>
                <Row>
                    <Col><Employee></Employee></Col>
                    <Col><Main></Main></Col>
                    <Col><Employer></Employer></Col>
                </Row>
                
                <Edge></Edge>
                 

                </div>
            </div>
        );
    }
}
 
export default Tvet;

/*
class Tvet extends Component {
    //  state = {  } 
      render() { 
          return (<div>
              Hello, World!
          </div>);
      }
  }
   
  export default Tvet;
  */