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
        entries: resJson
      }));
  }

  setEntries = entries => {
    this.setState({
      entries: entries
    });
  }

  handleAddEntry = (entry) => {
    let newEntry = JSON.parse(JSON.stringify(this.state.entries));
      newEntry.push(entry);
      this.setState({
        entries: newEntry
      });
  }

  deleteEntry = id => {
    const mood_journal_api = API_BASE_URL;
    const newEntry = this.state.entries.filter(entry => entry.id !== id);
    this.setEntries(newEntry);

    fetch(`${mood_journal_api}api/moodjournal/entries/${id}`, {
      method: 'DELETE'
    })

  }

  render() {
    const contextValue = {
      entries: this.state.entries,
      addEntry: this.handleAddEntry,
      deleteEntry: this.deleteEntry
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
