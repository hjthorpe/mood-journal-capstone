import React, { Component } from 'react';

class Home extends React.Component{
  render() {
    return (
      <div>
        <h1>How was your day?</h1>
        <h2>Log below.</h2>
        <div class="account-info">
          <h3>Account-Display</h3>
        </div>
        <div class="add-entry">
          <button>Add Entry</button>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Filter</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="entry-list">
          <div class="render-entry-list">
            <p>mood entries here</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;