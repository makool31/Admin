import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">

        <Router>
          <Switch>
            <Nav />
            <Route exact path="/" component={home}/>
            <Route exact path="/About"  component={About} />
            <Route exact path="/Shop"  component={Shop} />
            </Switch>
        </Router>

    </div>
  );
}



const home =() => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
