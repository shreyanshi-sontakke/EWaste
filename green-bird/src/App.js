import './App.css';
import Page from './Components/Page';
import Cities from './Components/Cities';
import About from './Components/About';
import Contact from './Components/Contact';
import JoinUs from './Components/JoinUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';



function App()
{
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact ><Page/></Route>
          <Route path="/cities" component={Cities}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/JoinUs" component={JoinUs}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
