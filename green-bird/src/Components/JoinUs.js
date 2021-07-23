import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './comp.css';

// class JoinUs extends Component {
//     constructor()
//     {
//         super();
//         this.state={
//                 title:null,
//                 district:null,
//                 Address:null,
//                 Contact1:null,
//                 Contact2:null,
//         }
//     }
//     create()
//     {
//         fetch("http://localhost:3000/e-waste-collectors",{
//             method: "Post",
//             header:{
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify(this.state)
//         }).then((result)=>{
//             result.json().then((resp)=>{
//                 console.warn(resp);
//                 alert("Not all heores wear capes! Way to go!")
//             })
//         })
//     }
//     render()
//     {
//         return (
//             <div>
//                 <h1 className="compStyle">The Join Us page</h1>
//                 <div className="joinus">
//                     <h5>If you are an e-waste collection buisness buisness and help save the evironment!</h5>
//                     <h5>Join Us!</h5>
//                     <br />
//                     <input onChange={(event)=>{this.setState({title: event.target.value})}} placeholder = "Name of your buisness"/> <br/> <br/>
//                     <input onChange={(event)=>{this.setState({district: event.target.value})}} placeholder = "District"/> <br/> <br/>
//                     <input onChange={(event)=>{this.setState({Address: event.target.value})}} placeholder = "Address"/> <br/> <br/>
//                     <input onChange={(event)=>{this.setState({Contact1: event.target.value})}} placeholder = "Contact no. 1"/> <br/> <br/>
//                     <input onChange={(event)=>{this.setState({Contact2: event.target.value})}} placeholder = "Contact no.2"/> <br/> <br/>
//                     <button onClick={()=>{this.create()}}>Great Move!</button>
//                 </div>
//             </div>
//         )

//     }

// }

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
        <div>
            <h1 className="compStyle">The Join Us page</h1>
            <div className="joinus">
                <h5>If you are an e-waste collection buisness buisness and help save the evironment!</h5>
                <h5>Join Us!</h5>
                <br />
                <input onChange={(event) => { settitle({ title: event.target.value }) }} placeholder="Name of your buisness" /> <br /> <br />
                <input onChange={(event) => { setdistrict({ district: event.target.value }) }} placeholder="District" /> <br /> <br />
                <input onChange={(event) => { setAddress({ Address: event.target.value }) }} placeholder="Address" /> <br /> <br />
                <input onChange={(event) => { setContact1({ Contact1: event.target.value }) }} placeholder="Contact no. 1" /> <br /> <br />
                <input onChange={(event) => { setContact2({ Contact2: event.target.value }) }} placeholder="Contact no.2" /> <br /> <br />
                <button onClick={() => { create() }}> Great Move!</button>
            </div>
        </div>
    )
}



export default JoinUs;

