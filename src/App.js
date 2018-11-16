import React, { Component } from 'react';
import './App.css';
// import our new component from another file
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: "Walk the Cat", isCompleted: true },
        { description: "Throw the dishes away", isCompleted: false },
        { description: "Buy New Dishes", isCompleted: false }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
        { this.state.todos.map( (todo, index) =>
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
        )}
        </ul>
      </div>
    );
  }
}

export default App;
