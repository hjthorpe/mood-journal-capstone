import React, { Component } from 'react';
import {BrowserRouter as Router,
    Route, 
    NavLink, 
    Switch} from 'react-router-dom';
import Login from './Login';
import Reset from './Reset';
import Register from './Register';

class Account extends React.Component{

  render() {
    return (
      <Router>
        <div class="sign-up-nav">
            <NavLink 
            to='/Register'
            activeOnlyWhenExact={true}
            >Sign Up</NavLink>
            <NavLink 
            to='/Login'
            >Log In</NavLink>
            <NavLink 
            to='/Reset'
            >Forgot Password</NavLink>

            <Switch>
              <Route exact path='/Register' component= {Register} />
              <Route exact path='/Login' component= {Login} />
              <Route exact path='/Reset' component= {Reset} />
            </Switch>

        </div>
      </Router>
    )
  }
  



}

export default Account;