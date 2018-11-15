import React, { Component } from 'react';
import './App.css';
// import our new component from another file
import ToDo from './components/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo />
          <ToDo />
        </ul>
      </div>
    );
  }
}

export default App;
