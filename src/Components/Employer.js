import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Employer extends Component {
  state = { 
    Book: [  <a href="DisMa">Disaster Management</a>,<a href='SoWo'>Social Works</a>,<a href='CoDe'>Community Developement</a>,<a href='BuMa '> Business Management</a>,<a href='InTech'> Information Technology</a>,<a href='BuTech'> Building Technology</a>,<a href='AcNt'>Accounting</a>,<a href='JoNal'> Journalism</a>,<a href='ElEng'> Electrical Engineering</a>,<a href='SuCha'> Supply Chain Management</a>,<a href='CePu'>CPA</a>,<a href='SoEng'> Software Engineering</a>,<a href='HuRes'> Human Resource Management</a>, <a href='FaDe'>Fashion & Design</a>,<a href='KeRe'> Kenya Registered Nursing</a>,<a href='FoPro'>Food Production</a>, <a href='Bky'>Bakery</a>,<a href='ToMa'> Tourism Management</a>,<a href='AnMa'> Animal Health</a>,<a href='HoMa'> Hosipitality & Hotel Management</a>,<a href='InMech'> Industrial Mechantronics</a>,<a href='CiEng'> Civial Engineering</a>,<a href='TelCom'> Telecommunication</a>,<a href='GeAgri'>General Agriculture</a>,<a href='Plb'>Plumbing</a>]
 } 
  render() { 
 return (
  <div>
  <div>
  <h3>
                 This is the Employer's Corner.
            </h3>
           </div>
           <div>
            <div>
              Register with us to Access our services Today.
            </div>
                            <a href='Registration'>Registration</a>
          </div> 
          <div>
            
        <Container>
        <div><h6>Click Here to Search from Employee</h6></div>
                <NavDropdown bg="blue" variant="blue">
                  <h5>Search</h5>
                          
                  <ul>
                        {
                            this.state.Book.map(Book => <li key={Book}>{Book}</li>)
                        }
                    </ul>
                   
                    </NavDropdown>
        </Container>
          </div>
          
        </div>
        
 )
  
 }
}

 
export default Employer;

