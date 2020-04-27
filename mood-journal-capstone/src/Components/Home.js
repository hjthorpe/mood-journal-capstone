import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EntryModal from './EntryModal';
import EditModal from './EditModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EntryContext from '../Context';
class Home extends React.Component{

  state = {
    entryShow: false,
    editShow: false
  }

  static contextType = EntryContext;

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

  showEditModal = (id) => {

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


  getEntries = () => {
    return this.context.entries;
  }

  render() {
    console.log(this.context.entries);
    const entries = this.getEntries();
    const deleteEntry = this.context.deleteEntry;

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
          onClick={() => this.showEntryModal()}>
            <FontAwesomeIcon
            icon={['fas', 'plus']}
            />
          </button>
          <EntryModal
          show={this.state.entryShow}
          closeModal={this.showEntryModal}
          />
        </div>
        <div className='entries'>
          <ul className='entry_list'>
            {entries.map(entry => {
              return (
                <li key={entry.id}>
                  <h2>
                    <Link to={`/entry-details/${entry.id}`}>{entry.title}</Link>
                  </h2>
                  <p>
                    {entry.date}
                  </p>
                  <div>
                    <button onClick={() => deleteEntry(entry.id)}>
                      <FontAwesomeIcon
                        icon={['fas', 'trash']}
                      />
                    </button>
                    <button 
                      className='edit_button'
                      onClick={() => this.showEditModal()                     
                      }
                      >
                      <FontAwesomeIcon
                      icon={['far', 'edit']}
                      />
                    </button>
                    <EditModal 
                    show = {this.state.editShow}
                    closeModal={this.showEditModal} 
                    entry = {entry}
                    />            
                  </div>                  
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home;