import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
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
            label='Sign Up' />
            <NavLink 
            to='/Login'
            label='Log In' />
            <NavLink 
            to='/Reset'
            label='Forgot Password' />

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