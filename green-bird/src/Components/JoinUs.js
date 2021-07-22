import React, {Component} from 'react'
import './comp.css';


class JoinUs extends Component {
    constructor()
    {
        super();
        this.state={
                title:null,
                district:null,
                Address:null,
                Contact1:null,
                Contact2:null,
        }
    }
    create()
    {
        fetch("http://localhost:3000/e-waste-collectors",{
            method: "Post",
            header:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp);
                alert("Not all heores wear capes! Way to go!")
            })
        })
    }
    render()
    {
        return (
            <div>
                <h1 className="compStyle">The Join Us page</h1>
                <div className="joinus">
                    <h5>If you are an e-waste collection buisness buisness and help save the evironment!</h5>
                    <h5>Join Us!</h5>
                    <br />
                    <input onChange={(event)=>{this.setState({title: event.target.value})}} required placeholder = "Name of your buisness"/> <br/> <br/>
                    <input onChange={(event)=>{this.setState({district: event.target.value})}} required placeholder = "District"/> <br/> <br/>
                    <input onChange={(event)=>{this.setState({Address: event.target.value})}} required placeholder = "Address"/> <br/> <br/>
                    <input onChange={(event)=>{this.setState({Contact1: event.target.value})}} required placeholder = "Contact no. 1"/> <br/> <br/>
                    <input onChange={(event)=>{this.setState({Contact2: event.target.value})}} placeholder = "Contact no.2"/> <br/> <br/>
                    <button onClick={()=>{this.create()}}>Great Move!</button>
                </div>
            </div>
        )

    }
    
}

export default JoinUs;

