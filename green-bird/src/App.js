import './App.css';
import Page from './Components/Page';
import About from './Components/About';
import Contact from './Components/Contact';
import Information from './Components/Information';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Page}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/information" component={Information}></Route>
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
