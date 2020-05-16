import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EntryContext from '../Context';



class EditModal extends React.Component{

  static contextType = EntryContext;

  constructor(props) {
  super(props)

  this.state = {
    title: props.entry.title,
    content: props.entry.content,
    mood: props.entry.mood,
    id: props.entry.id
  }
}

handleEditEntrySubmit = (event) => {
  event.preventDefault();
  const entryTitle = this.state.title;
  const entryContent = this.state.content;
  const entryMood = this.state.mood;
  let current_datetime = new Date();
  const entry = {
    id: this.props.entry.id,
    title: entryTitle,
    content: entryContent,
    mood: entryMood,
    date: current_datetime.toString()
  };
  console.log(this.props.entry);
  const mood_journal_api = 'https://mood-journal-capstone-backend.herokuapp.com/';
  fetch(`${mood_journal_api}api/moodjournal/entries/${entry.id}`, {
    method: 'PATCH',
    body: JSON.stringify(entry),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.text())
    .then(data => {
      this.context.editedEntry(entry);
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
      const {entryTitle} = this.state.title;
      const {entryContent} = this.state.content;
      const {entryMood} = this.state.mood;
      const entryTitlePlaceholder = this.state.title;
      const entryContentPlaceholder = this.state.content;
      const entryMoodPlaceholder = this.state.mood;
      return (
        <div className="edit-modal-container">
          <div className="exit-button">
            <button 
            className='close_button'
            onClick={() => this.closeModal()}>
              <FontAwesomeIcon
              icon={['fas', 'times']}
              />
            </button>
          </div>
          <h1 className="edit-heading">Edit Entry</h1>
          <form className="new_entry" onSubmit={this.handleEditEntrySubmit}>
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
              placeholder= {entryTitlePlaceholder}
              value= { entryTitle }
              onChange= {this.updateEntryTitle}
              className="title_label" />
              </div>
              <div className="mood">
                <label 
                className="select_mood"
                htmlFor="mood">Choose a mood:</label>
                <select id="mood" onChange={this.updateEntryMood}>
                  <option value={entryMood}>{entryMoodPlaceholder}</option>
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
                name="description" 
                id="description" 
                cols="30" 
                rows="10" 
                placeholder={entryContentPlaceholder}
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

export default EditModal;