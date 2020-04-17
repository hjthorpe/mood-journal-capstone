import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditModal extends React.Component{

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
        <h1>Edit entry</h1>
        <div className='title'>
          <p>Title</p>
          <div className="edit">
            <i className="far fa-edit"></i>
          </div>
          <div className="title-hidden">
            <input type="text" placeholder='Title' />
          </div>
          <div className="mood">
            <p>Mood</p>
            <div className="edit">
              <i className="far fa-edit"></i>
            </div>
            <div className="mood-dropdown-hidden">
              <button className="dropbtn">Mood</button>
              <div className="dropdown-content">
                <a href="#">Mood 1</a>
                <a href="#">Mood 2</a>
                <a href="#">Mood 3</a>
              </div>
            </div>
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
        <div className="delete-entry">
          <button>
          <FontAwesomeIcon
            icon={['fas', 'trash']}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default EditModal;