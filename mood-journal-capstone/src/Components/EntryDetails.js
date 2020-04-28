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
        <button onClick={() => this.props.history.push('../Home')}>Back</button>
          <div className="Main__entry_header">
            <h3>{title}</h3>
            <h4>{date}</h4>
            <p>{mood}</p>
          </div>
          <p className="Main__entry_details">{content}</p>
        </section>
      </div>
    )
  }
}

export default EntryDetails;