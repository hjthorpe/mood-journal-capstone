import React, { Component } from 'react';

class Register extends React.Component{
  render() {
    return (
      <div className='register'>
        <h1>Register</h1>
        <p>Take control of your mental health. 
          Create an account to start tracking your mood patterns!
        </p>
        <form type='submit' for='account-sign-up'>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder="Password" />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Register;