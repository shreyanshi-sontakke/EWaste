import React, { Component } from 'react'
import Typed from 'react-typed';

class Page extends Component {
  constructor() {
    super()
    this.state = {
      searchData: null
    }
  }
  search(key) {
    console.warn(key)
    fetch("http://localhost:3000/e-waste-collectors?q=" + key).then((data) => {
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
            <h3> Give your E-Waste a proper disposal and save the environment</h3>
            <h5>Find your nearest e-waste collectors</h5>
            <div className="input-group mb-3" >
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
            <div>
                {
                  this.state.searchData ?
                    <div>
                      {
                        this.state.searchData.map((item) =>
                          <div className="search-row">
                            {item.title}
                          </div>
                        )
                      }
                    </div> :
                    ""
                }                
              </div>
          </section>
        </main>
      </>

    )
  }
}

{/* <button className="btn btn-outline-none-secondary" type="button" id="Search"><i className='bx bx-search'></i></button> */ }
export default Page;