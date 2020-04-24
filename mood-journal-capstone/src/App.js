import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import { API_BASE_URL} from './config';
import EntryContext from './Context';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount(){
    const mood_journal_api = API_BASE_URL;

    fetch(`${mood_journal_api}api/moodjournal/entries`)
      .then(res => res.json())
      .then(resJson => this.setState({
        // entries: 
      }));
      console.log(this.state.entries);
  }

  setEntries = entries => {
    this.setState({
      entries: entries
    });
  }

  render() {

    const contextValue = {
      entries: this.state.entries
    };

    return (
      <div>
        <EntryContext.Provider value={contextValue}>
          <Router>
            <Route exact path='/' component= {LandingPage} />
            <Route path='/Home' component= {Home} />
          </Router>
        </EntryContext.Provider>
      </div>
    )
  }
}

export default App;
