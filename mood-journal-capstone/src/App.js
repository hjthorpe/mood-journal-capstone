import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Account from './Components/Account';
import Home from './Components/Home';

// import './App.css';

function App() {
  return (
    <Router>
        <Route exact path='/' component= {LandingPage} />
        <Route path='/Account' component= {Account} />
        <Route path='/Home' component= {Home} />
    </Router>
  );
}

export default App;
