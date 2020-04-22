import React, { Component } from 'react';

class LandingPage extends React.Component {

  


  render() {
    return (
      <div>
            <h1>Welcome to Mood Journal!</h1>
    <p>
      Mood journal is an app that promotes user wellness
      by helping to identify patterns and potential 
      triggers.  By using the app daily, it could provide
      insight to early warning signs that the user's mental 
      health is declining.
    </p>
    <p>
      To get the most use out of mood journal, the user 
      will need to add an entry at least once daily.    
      The user will be able to add entries as they see fit and
      modify them if necessary.  If the user would rather 
      delete their entry to start fresh, that is able to be done
      as well.  The user will be able to store all entries within their
      account that is later able to be filtered by mood.  To reflect 
      on a past entry, the user will click to expand the entry.
    </p>
    <button onClick={() => this.props.history.push('/Home')} >Enter</button>
      </div>
    )
  }
}

export default LandingPage;