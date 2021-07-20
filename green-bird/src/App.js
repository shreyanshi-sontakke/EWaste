import './App.css';
import Page from './Components/Page';
import Cities from './Components/Cities';
import About from './Components/About';
import Contact from './Components/Contact';
import JoinUs from './Components/JoinUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    axios.get('/api')
      .then(res => {
        console.log(res);
      })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Page}></Route>
            <Route path="/cities" component={Cities}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/JoinUs" component={JoinUs}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}


// function App() {  
//   componentDidMount()
//   {
//     axios.get('/api')
//       .then(res=>{
//         console.log(res);
//       })
//   }
//   return (
//     <Router>
//       <div className="App">
//         <Nav />
//         <Switch>
//           <Route path="/" exact component={Page}></Route>
//           <Route path="/about" component={About}></Route>
//           <Route path="/contact" component={Contact}></Route>
//           <Route path="/information" component={Information}></Route>
//         </Switch>
//       </div>
//     </Router>
//   );

// }

export default App;
