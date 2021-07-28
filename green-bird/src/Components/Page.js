import React, { useState, Component } from 'react';
import Typed from 'react-typed';
import {Table} from 'react-bootstrap';

//this is a comment so that i can push to gihub

class Page extends Component {
  constructor() {
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
                  <div  className="table">
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
            </div>

            <a className="godown" href="#lowerSection">
              <div className="box-1">
                <div className="btn btn-one">
                  <span>Why Green-Bird ?</span>
                </div>
              </div>
            </a>


            <div id="lowerSection">
              <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>


          </section>

        </main>
      </>

    )
  }
}

// import './page.css';
// import SearchCollector from './SearchCollector';
// import collectorsFound from './db.json'

// function Page({ data , data2 }) {
//   const [filterData, setfilterData] = useState([])
//   const [collectorData, setcollectorData] = useState([])

//   const handleFilter = (e) => {
//     const searchWord =  e.target.value;
//     //only works when you type in lowercase?? why?
//     const newFilter = data.filter((value) => {
//       return value.city.toLowerCase().includes(searchWord)
//     })
//     if(searchWord === ""){
//       setfilterData([])
//     }else{
//        setfilterData(newFilter)
//     }
//   }
//   return (
//     <>
//       <main id="page-wrap">
//         <section className="midSection">
//           <h4> Give your E-Waste a proper disposal and save the environment</h4>
//           <h5>Find your nearest e-waste collectors</h5>
//           <div className="input-group mb-3" >
//             <Typed className="animationBar" strings={[
//               'Mumbai',
//               'Aurangabad',
//               'Pune',
//               'Nagpur']}
//               typeSpeed={150}
//               backSpeed={40}
//               attr="placeholder"
//               loop >
//               <input type="text" className="searchBar" onChange={handleFilter}/>
//             </Typed>
//           </div>
//           {filterData.length !== 0 && (
//           <div className="dataResult">
//             {
//               filterData.map((value)=>{
//                 return <a className="dataitem">
//                   <p>{value.city}</p></a>
//               })
//             }            
//           </div>
//           )}

//           <a className="godown" href="#lowerSection">
//               <div className="box-1">
//                         <div className="btn btn-one">
//                         <span>Why Green-Bird ?</span>
//                         </div>
//                     </div> 
//               </a>


//               <div id="lowerSection">
//                     <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                     <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                    </div>
//         </section>
//       </main>
//     </>

//   )
// }


export default Page;