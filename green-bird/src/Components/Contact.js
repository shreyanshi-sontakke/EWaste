import React from 'react'
import './comp.css';
import { AiFillGithub } from 'react-icons/ai'


function About(props) {
    return (
        <div className="compStyle " >
            <br/><br/><h1 className="compStyle2"> Contact Us! </h1> <br />

            <h4>We would love to hear from you!</h4> <br />
            <div className="Contactp" >
                <p> Let us know how we can improve : </p>
                <p> Email us at : greenbird03@gmail.com </p>

                <br /><p>Make open source contribution here:
                    <br /><a href="https://github.com/shreyanshi-sontakke/GreenBird" target='_blank'><AiFillGithub /> </a>
                </p>

                <p>------ Coming soon ------</p>
                <p>GreenBird's E-waste blog!</p>
            </div>
        </div>
    )
}

export default About;

