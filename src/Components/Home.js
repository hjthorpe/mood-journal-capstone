import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import EntryModal from './EntryModal';
import EditModal from './EditModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EntryContext from '../Context';

class Home extends React.Component{

  state = {
    isEntryActive: false,
    isEditActive: false,
    editEntry: ''
  }

  static contextType = EntryContext;

  componentDidMount() {
    Modal.setAppElement('body');
}

  toggleEntryModal = () => {
    this.setState({
      isEntryActive: !this.state.isEntryActive
    })
  }
  
  toggleEditModal = (entry) => {
    this.setState({
      isEditActive: !this.state.isEditActive,
      editEntry: entry
    })
  };

  getEntries = () => {
    return this.context.entries;
  }


  render() {
    const entries = this.getEntries();
    const deleteEntry = this.context.deleteEntry;

    return (
      <div className="home_container">
        <div className="home_headings">
          <h1>How was your day?</h1>
          <h2>Log below.</h2>
        </div>
        <div className="add-entry">
          <button
          className='add-button' 
          onClick={this.toggleEntryModal}>
            <FontAwesomeIcon
            icon={['fas', 'plus']}
            />
          </button>
          <Modal isOpen={this.state.isEntryActive}>
            <div>
              <EntryModal
                show = {this.state.isEntryActive}
                closeModal={this.toggleEntryModal} />
            </div>
          </Modal>
        </div>
        <div className='entries'>
          <ul className='entry_list'>
            {entries.map(entry => {
              return (
                <div 
                key={entry.id}
                className="entry_container">
                  <li key={entry.id}>
                    <h2>
                      <Link to={`/entry-details/${entry.id}`}>{entry.title}</Link>
                    </h2>
                    <p>
                      {entry.date}
                    </p>
                    <div className="button_container">
                      <button
                      className="delete_button" 
                      onClick={() => deleteEntry(entry.id)}>
                        <FontAwesomeIcon
                          icon={['fas', 'trash']}
                        />
                      </button>
                      <button 
                        className='edit_button'
                        onClick={() => this.toggleEditModal(entry)                     
                        }
                        >
                        <FontAwesomeIcon
                        icon={['far', 'edit']}
                        />
                      </button>
                      <Modal isOpen={this.state.isEditActive}>
                        <div>
                          <EditModal
                            show = {this.state.isEditActive}
                            closeModal={this.toggleEditModal} 
                            entry={this.state.editEntry}
                          />
                        </div>
                      </Modal>        
                    </div>                  
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home;