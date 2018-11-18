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
      ],
      newTodoDescription: ""
    };
  }
  toggleComplete(index){
    console.log(index);
    // turns todos into its own array, not as an object of state
    const todos = this.state.todos.slice();
    // a single todo is one instance of the todos array
    const todo = todos[index];
    // use of conditional/ternary operator to flip the state -> condition ? exprT : exprF
    todo.isCompleted = todo.isCompleted ? false : true;
    // setState() allows change to this.state
    this.setState({ todos: todos });
  }
  handleSubmit(e){
    // keeps page from reloading
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    // adds newTodo to the end of the todos array, and resets newTodoDescription input to blank
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: "" });
  }
  // allows the input text value to be changed and saved
  handleChange(e){
    // allows changes to this.state; state updates are merged w/ original object
    this.setState({ newTodoDescription: e.target.value });
  }
  deleteTodo(index){
    // I need to be making sure I am not changing this.state directly, but saving it as something new, and usable by setState to replace the old this.state, and also being mindful of scope
    const deleted = this.state.todos[index];
    const todos = this.state.todos.filter(x => x !== deleted);
    this.setState({ todos: todos });
  }
  render() {
    return (
      <div className="App">
        <ul>
        { this.state.todos.map( (todo, index) =>
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => this.deleteTodo(index) } />
        )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
