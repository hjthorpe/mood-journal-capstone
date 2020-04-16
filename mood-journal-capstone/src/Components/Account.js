import React, { Component } from 'react';
import {BrowserRouter as Router,
    Route, 
    NavLink, 
    Switch} from 'react-router-dom';
import Login from './Login';
import Reset from './Reset';
import Register from './Register';
import Home from './Home';


class Account extends React.Component{

  render() {
    return (
      <Router>
        <div className="sign-up-nav">
            <NavLink 
            to='/Register'
            >Sign Up</NavLink>
            <NavLink 
            to='/Login'
            >Log In</NavLink>
            <NavLink 
            to='/Reset'
            >Forgot Password</NavLink>

            <Switch>
              <Route path='/Register' component= {Register} />
              <Route path='/Login' component= {Login} />
              <Route path='/Reset' component= {Reset} />
              <Route path='/Home' component= {Home} />
            </Switch>

        </div>
      </Router>
    )
  }
  



}

export default Account;