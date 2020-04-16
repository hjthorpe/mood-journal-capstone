import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Account from './Components/Account';
import Login from './Components/Login';
import Register from './Components/Register';
import Reset from './Components/Reset';
import Home from './Components/Home';
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component= {LandingPage} />
          <Route path='/Account' component= {Account} />
          <Route path='/Login' component= {Login} />
          <Route path='/Register' component= {Register} />
          <Route path='/Reset' component= {Reset} />
          <Route path='/Home' component= {Home} />
        </Router>
      </div>
    )
  }
}

export default App;
