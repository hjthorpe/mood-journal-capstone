import React, { Component } from 'react';
import EntryModal from './EntryModal';

class Home extends React.Component{

  state = {
    show: false
  }

  showModal = () => {
    if (this.state.show === false){
      this.setState({
        show: true
      });
    }
    else {
      this.setState({
        show: false
      });
    }
  }

  render() {

    return (
      <div>
        <h1>How was your day?</h1>
        <h2>Log below.</h2>
        <div className="account-info">
          <h3>Account-Display</h3>
        </div>
        <div className="add-entry">
          <button
          className='hide-button' 
          onClick={() => this.showModal()}>Add Entry</button>
          <EntryModal
          show={this.state.show}
          closeModal={this.showModal}
          />
        </div>
        {/* <div class="dropdown">
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
        </div> */}
      </div>
    )
  }
}

export default Home;