import React, { useState } from 'react'
import axios from 'axios';
import './comp.css';
import './joinus.css';



function JoinUs() {
    const [title, settitle] = useState("")
    const [district, setdistrict] = useState("")
    const [Address, setAddress] = useState("")
    const [Contact1, setContact1] = useState()
    const [Contact2, setContact2] = useState()

    const create = () => {
        axios.post("http://localhost:3001/api/insert", { title: title, district: district, Address: Address,
         Contact1: Contact1, Contact2: Contact2 }).then(()=>{
             alert("Not all heroes wear capes! Successful insert!")
         })
    }

    return (
        <div className="joinuspage">
            <h5>If you are an e-waste collection buisness buisness and help save the evironment!</h5>
            <div className="joinusform">
            <h6>Join Us!</h6>
                <input  type="text" onChange={(event) => { settitle({ title: event.target.value }) }} placeholder="Name of your buisness" /> 
                <input  type="text" nChange={(event) => { setdistrict({ district: event.target.value }) }} placeholder="District" /> 
                <input  type="text" onChange={(event) => { setAddress({ Address: event.target.value }) }} placeholder="Address" /> 
                <input  type="text" onChange={(event) => { setContact1({ Contact1: event.target.value }) }} placeholder="Contact no. 1" /> 
                <input  type="text"  onChange={(event) => { setContact2({ Contact2: event.target.value }) }} placeholder="Contact no.2" /> 
                <button type="submit" onClick={() => { create() }}> Great Move!</button>
            </div>
        </div>
    )
}



export default JoinUs;