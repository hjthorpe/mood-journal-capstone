import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Account from './Components/Account';
// import './App.css';

function App() {
  return (
    <Router>
        <Route exact path='/' component= {LandingPage} />
        <Route exact path='/Account' component= {Account} />
        {/* <Route exact path='/Login' />
        <Route exact path='/Reset' /> */}
    </Router>
  );
}

export default App;
