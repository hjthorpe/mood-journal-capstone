import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import EntryModal from './Components/EntryModal';
import EditModal from './Components/EditModal';


//SMOKE TEST APP COMPONENT
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//SMOKE TEST LANDINGPAGE COMPONENT
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
});


//SMOKE TEST HOME COMPONENT
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

//SMOKE TEST ENTRYMODAL COMPONENT
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EntryModal />, div);
});

//SMOKETEST EDITMODAL COMPONENT
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditModal />, div);
});