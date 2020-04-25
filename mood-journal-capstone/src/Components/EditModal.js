import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EntryContext from '../Context';
import API_BASE_URL from '../config';


class EditModal extends React.Component{

  static contextType = EntryContext;

  constructor(props) {
  super(props)

  this.state = {
    title: '',
    content: '',
    mood: ''
  }
}

handleEditEntrySubmit = (event) => {
  event.preventDefault();
  const entryTitle = this.state.title;
  const entryContent = this.state.content;
  const entryMood = this.state.mood;
  let current_datetime = new Date();
  const entry = {
    id: '',
    title: entryTitle,
    content: entryContent,
    mood: entryMood,
    date: current_datetime.toString()
  };

  const mood_journal_api = API_BASE_URL;
  fetch(`${mood_journal_api}api/moodjournal/entries/`, {
    method: 'PATCH',
    body: JSON.stringify(entry),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      this.context.addEntry(entry)
    });

    this.props.closeModal();
}

updateEntryTitle = (event) => {
  this.setState({
    title: event.target.value
  })
}

updateEntryContent = (event) => {
  this.setState({
    content: event.target.value
  })
}

updateEntryMood = (event) => {
  this.setState({
    mood: event.target.value
  })
}

  closeModal = () => {
    this.props.closeModal();
  }


  render() {
      const { entryTitle } = this.state.title;
      const { entryContent } = this.state.content;
      const { entryMood } = this.state.mood;
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
          <h1>Edit Entry</h1>
          <form className="new_entry" onSubmit={this.handleEditEntrySubmit}>
            <div className='title'>
              <p>Title</p>
              <div className="title-hidden">
                <input 
                required
                type="text" 
                placeholder='Title'
                value= { entryTitle }
                onChange= {this.updateEntryTitle} />
              </div>
              <div className="mood">
                <p>Mood</p>
                <label for="mood">Choose a mood:</label>
                <select id="mood" onChange={this.updateEntryMood}>
                  <option value={entryMood}>Select Mood</option>
                  <option value={entryMood}>Great</option>
                  <option value={entryMood}>Neutral</option>
                  <option value={entryMood}>Not so Good</option>
                  <option value={entryMood}>Terrible</option>
                </select>
              </div>
            </div>
            <div className="description">
              <p>Description</p>
              <div className="description-edit-hidden">
                <textarea 
                required
                name="description" 
                id="description" 
                cols="30" 
                rows="10" 
                placeholder='Description'
                value = { entryContent }
                onChange={this.updateEntryContent} 
                />
              </div>
            </div>
            <div className="submit-entry">
              <button>Submit</button>
            </div>
        </form>
        </div>
    )
  }
}

export default EditModal;