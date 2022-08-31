import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
class Employee extends Component {
    state = { 
        Gig: [  <a href="disaster">Disaster Management</a>,<a href='Social'>Social Works</a>,<a href='Community'>Community Developement</a>,<a href='Business '> Business Management</a>,<a href='IT'> Information Technology</a>,<a href='Building'> Building Technology</a>,<a href='Accounting'>Accounting</a>,<a href='Journalism'> Journalism</a>,<a href='Electrical'> Electrical Engineering</a>,<a href='Supply'> Supply Chain Management</a>,<a href='CPA'>CPA</a>,<a href='Software'> Software Engineering</a>,<a href='Human'> Human Resource Management</a>, <a href='Fashion'>Fashion & Design</a>,<a href='Kenya'> Kenya Registered Nursing</a>,<a href='Food'>Food Production</a>, <a href='Bakery'>Bakery</a>,<a href='Tourism'> Tourism Management</a>,<a href='Animal'> Animal Health</a>,<a href='Hosipitality'> Hosipitality & Hotel Management</a>,<a href='Industrial'> Industrial Mechantronics</a>,<a href='Civil'> Civial Engineering</a>,<a href='Telecommunication'> Telecommunication</a>,<a href='General'>General Agriculture</a>,<a href='Plumbing'>Plumbing</a>]
     } 
    render() { 
        return (
            <div>
                <div>
                
                      <h2>Employee's Column</h2>
                      <div>
                        <h3>Hello!</h3>Did you know that we can link you with next Job at the comfort of your livingroom?
                         </div> 
                         <div>
                            <div>
                            <a href='Signup'> Register Now!</a>
                            </div>
                            <div> 
                            <p>
                                Follow the Links Below to <h4>Apply </h4>as per Your Proffession.
                            </p>
                                    <ul>
                        {
                            this.state.Gig.map(Gig => <li key={Gig}>{Gig}</li>)
                        }
                    </ul>
                    </div>
                        
                         </div>
                    
                </div>
            </div>
        );
    }
}
 
export default Employee;