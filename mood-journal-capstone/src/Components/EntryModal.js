import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EntryContext from '../Context';
import { API_BASE_URL } from '../config';



class EntryModal extends React.Component {

  static contextType = EntryContext;

  constructor(props) {
  super(props)

  this.state = {
    title: '',
    content: '',
    mood: '',

  }
}

handleNewNoteSubmit = (event) => {
  event.preventDefault();
  const entryTitle = this.state.title;
  const entryContent = this.state.content;
  const entryMood = this.state.mood;
  let current_datetime = new Date();
  console.log(current_datetime);
  const entry = {
    title: entryTitle,
    content: entryContent,
    mood: entryMood,
    date: current_datetime.toString()
  };

  const mood_journal_api = API_BASE_URL;
  console.log('hello');
  fetch(`${mood_journal_api}api/moodjournal/entries/post`, {
    method: 'POST',
    body: JSON.stringify(entry),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log('fetch returned')
      this.context.addEntry(entry)
    });

    this.props.closeModal();
    window.location.reload();
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
    return (
      <div className="entry_modal">
        <div className="exit-button">
          <button 
          className='exit_button'
          onClick={() => this.closeModal()}>
            <FontAwesomeIcon
            icon={['fas', 'times']}
            />
          </button>
        </div>
        <h1 className="entry_heading">Add Entry</h1>
        <form className="new_entry" onSubmit={this.handleNewNoteSubmit}>
          <div className='title'>
            <label 
            type="input" 
            className="title_field" 
            placeholder="Name" 
            name="name" 
            id='name' />
            <div className="title-hidden">
              <input 
              required
              type="text" 
              placeholder='Title'
              value= { entryTitle }
              onChange= {this.updateEntryTitle}
              className="title_label" />
            </div>
            <div className="mood">
              <label 
              className="select_mood"
              htmlFor="mood">Choose a mood:</label>
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
            <button className="entry_submit">Submit</button>
          </div>
      </form>
      </div>
    )
  }
}

export default EntryModal;