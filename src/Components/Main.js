import React, { Component } from 'react';
class Main extends Component {
    state = { 
        Job: ['Disaster Management', 'Social Works', 'Community Developement',' Business Management','Information Technology','Building Technology','Accounting','Journalism','Electical Engineering','Supply Chain Management','CPA','Software Engineering','Human Resource Management','Fashion and Design','Kenya Registered Nursing','Food Production','Bakery','Tourism Management','Animal Health','Hosipitality and Hotel Management', 'Industrial Mechatronics','Plumbing','Civil Engineering','Telecommunication','General Agriculture']
     } 
    render() { 
        return (
            <div>
                <div>
                <h1>
                      Evvy.T Works
                    </h1>
                </div>
                <div>
                   <h2> Hello! Welcome to  Evvy.T works</h2>
               </div>
               <div>
                  <h5>
                      A digital Platform to Connect Employers and Employees for jobs  and  Gigs
                 </h5>
                 <p>
                    <h6>See below for your Proffession:</h6>
                 </p>
                 <ul className='Main'>
                        {
                            this.state.Job.map(Job => <li key={Job}>{Job}</li>)
                        }
                    </ul>
               </div>
            </div>
        );
    }
}
 
export default Main;