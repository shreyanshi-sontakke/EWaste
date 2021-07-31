import React, { Component } from 'react';
import Typed from 'react-typed';
import { Table } from 'react-bootstrap';
import './page.css';


class Page extends Component {
  constructor() 
  {
    super()
    this.state = {
      searchData: null
    }
  }
  search(key) {
    console.warn(key)
    fetch("http://localhost:3001/ewaste-collectors?q=" + key).then((data) => {
      data.json().then((resp) => {
        console.warn('resp', resp)
        this.setState({ searchData: resp })
      })
    })
  }
  render() {
    return (
      <>
        <main id="page-wrap">
          <section className="midSection">
            <h4> Give your E-Waste a proper disposal and save the environment</h4>
            <h5>Find your nearest e-waste collectors</h5>
            <div className="input-group mb-3 " >
              <Typed className="animationBar" strings={[
                'Mumbai',
                'Aurangabad',
                'Pune',
                'Nagpur']}
                typeSpeed={150}
                backSpeed={40}
                attr="placeholder"
                loop >
                <input type="text" onChange={(event) => this.search(event.target.value)} className="searchBar" />
              </Typed>
            </div>
            {
              this.state.searchData ?
                <div className="table">
                  {
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Collector Name</th>
                          <th>District Name</th>
                          <th>Address</th>
                          <th>Contact no.1</th>
                          <th>Contact no.2</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.searchData.map((item) =>
                            <tr >
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                              <td>{item.district}</td>
                              <td>{item.Address}</td>
                              <td>{item.Contact1}</td>
                              <td>{item.Contact2}</td>
                            </tr>)
                        }
                      </tbody>
                    </Table>
                  }
                </div> : ""
            }
          </section>
        </main>
      </>
    )
  }
}

export default Page;
