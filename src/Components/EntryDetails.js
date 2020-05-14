import React from 'react';
import EntryContext from '../Context';

class EntryDetails extends React.Component{

  static contextType = EntryContext;

  render() {

    const entry = this.context.entries.find(entry => entry.id == this.props.match.params.id);

    let title = entry.title;
    const mood = entry.mood;
    const content = entry.content;
    const date = entry.date;
  

    return (
      <div>
        <section className="Main">
          <div className="button-container">
            <button 
              className="back-button"
              onClick={() => this.props.history.push('../Home')}>Back
            </button>
          </div>
          <div className="Main__entry_header">
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{mood}</p>
            <p className="Main__entry_details">{content}</p>
          </div>
        </section>
      </div>
    )
  }
}

export default EntryDetails;