import React from 'react';


class LandingPage extends React.Component {

  


  render() {
    return (
      <div className='center'>
        <div className="landing_page_container">
          <div className="landing_page_headings">
            <h1 className='landing_page_heading'>Welcome to Mood Journal!</h1>
          </div>
          <div className="landing_page_paragraphs">
            <p className="_paragraphs">
              Mood journal is an app that promotes user wellness
              by helping to identify patterns and potential 
              triggers.  By using the app daily, it could provide
              insight to early warning signs that the user's mental 
              health is declining.
            </p>
            <p className="_paragraphs">
              To get the most use out of mood journal, the user 
              will need to add an entry at least once daily.    
              The user will be able to add entries as they see fit and
              modify them if necessary.  If the user would rather 
              delete their entry to start fresh, that is able to be done
              as well.  The user will be able to store all entries within their
              account that is later able to be filtered by mood.  To reflect 
              on a past entry, the user will click to expand the entry.
            </p>
          </div>    
          <div className="landing_page_button">
          <button className="enter_here_button" onClick={() => this.props.history.push('/Home')} >Enter</button>
          </div>    
        </div>
      </div>
    )
  }
}

export default LandingPage;