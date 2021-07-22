import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import './comp.css';

class Cities extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3002/cities-covered").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    render() {
        return (
            <div>
                <h1 className="compStyle">The cities covered by green-bird</h1>
                {
                    this.state.list ?
                        <div>
                            {                     
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>District Name</th>
                                            <th>No. of collectors found</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.list.map((item) =>
                                                <tr >
                                                    <td>{item.id}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.no}</td>
                                                </tr>)          
                                        }        
                                    </tbody>            
                             </Table>                                    
                                        // <span className="city-names">{item.city}</span>
                            }
                        </div>
                        :
                        <p>
                            Please Wait...
                        </p>
                }
            </div>
        )
    }
}

export default Cities;
