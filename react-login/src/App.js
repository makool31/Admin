
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
//import Dashboard from './components/Dashboard';
//import Auth from './components/Auth';





function App() {

 return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />
         <Route path="/dashboard" exact component={() => <Dashboard authorized={false}/>}/>
       

         
        </Switch>
      </Router>
    </div>

    
  )

  }

export default App;



