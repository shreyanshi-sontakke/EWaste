import React from 'react'
import './comp.css';

function About(props) {
    return (
    <div  className="compStyle">
        <br/><br/><h1 className="compStyle2">About Us</h1>

        <p className="AboutUsimg">While all of us are relatively new to programmatic technologies in computer,
             we strive to bring about a change using the same</p>

             <div>
         <h4>Team Members : </h4>
        <h5>Shreyanshi Sontakke (leader) </h5>
        <span><h5>Ketan Patil</h5><h5>Alam Ansari</h5></span>
        </div>

        <div className="AboutUsimg">
            <br /><br /><h4>Mentor and guider</h4>
            <p>Prof. Swati Khidse</p>
            <p>CSMSS college of Engineering, Aurangabad</p>
        </div>


    </div >
)
}

export default About;

