import React, { Component } from 'react';
import EntryModal from './EntryModal';
import EditModal from './EditModal';

class Home extends React.Component{

  state = {
    entryShow: false,
    editShow: false
  }

  showEntryModal = () => {
    if (this.state.entryShow === false){
      this.setState({
        entryShow: true
      });
    }
    else {
      this.setState({
        entryShow: false
      });
    }
  }

  showEditModal = () => {
    if (this.state.editShow === false){
      this.setState({
        editShow: true
      });
    }
    else {
      this.setState({
        editShow: false
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
          onClick={() => this.showEntryModal()}>Add Entry</button>
          <EntryModal
          show={this.state.entryShow}
          closeModal={this.showEntryModal}
          />
        </div>
        <div className='entries'>
          <p>Hard Coded Entry</p>
          <button 
          className='edit-button'
          onClick={() => this.showEditModal()}
          >Edit</button>
          <EditModal 
          show = {this.state.editShow}
          closeModal={this.showEditModal} 
          />
        </div>
      </div>
    )
  }
}

export default Home;