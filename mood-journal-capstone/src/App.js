import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component= {LandingPage} />
          <Route path='/Home' component= {Home} />
        </Router>
      </div>
    )
  }
}

export default App;
