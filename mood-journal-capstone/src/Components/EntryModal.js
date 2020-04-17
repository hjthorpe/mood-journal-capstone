import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class EntryModal extends React.Component {

  closeModal = () => {
    this.props.closeModal();
  }


  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div>
        <div className="exit-button">
          <button 
          className='placeholder'
          onClick={() => this.closeModal()}>
            <FontAwesomeIcon
            icon={['fas', 'times']}
            />
            </button>
        </div>
        <h1>Add Entry</h1>
        <form>
          <div className='title'>
            <p>Title</p>
            <div className="title-hidden">
              <input type="text" placeholder='Title' />
            </div>
            <div className="mood">
              <p>Mood</p>
              <label for="mood">Choose a mood:</label>
              <select id="mood">
                <option value="placeholder">placeholder</option>
                <option value="placeholder">placeholder</option>
                <option value="placeholder">placeholder</option>
                <option value="placeholder">placeholder</option>
              </select>
            </div>
          </div>
          <div className="description">
            <p>Description</p>
            <div className="edit">
              <i className="far fa-edit"></i>
            </div>
            <div className="description-edit-hidden">
              <textarea 
              name="description" 
              id="description" 
              cols="30" 
              rows="10" 
              value='Description'
              // onChange={()} 
              />
            </div>
          </div>
          <div className="submit-entry">
            <button onSubmit={() => this.props.history.push('/Home')}>Submit</button>
          </div>
      </form>
      </div>
    )
  }
}

export default EntryModal;