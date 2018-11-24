import React, { Component } from 'react';
import './App.css';
// import our new component from another file
import ToDo from './components/ToDo.js';
import Total from './components/Total.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: "Start tracking your todos!", isCompleted: false }
      ],
      newTodoDescription: "",
      completedCount: 0,
      encouragement: "Keep up the good work!",
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
    // creating new array of only completed items
    const completedCount = this.state.todos.filter(element => element.isCompleted === true);
    // setState() allows change to this.state
    this.setState({ todos: todos, newTodoDescription: "", completedCount: completedCount.length });
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
    // fixes bug so completedCount goes back down when items are deleted
    const completedCount = this.state.todos.filter(element => element.isCompleted === true && element !== deleted);
    this.setState({ todos: todos, newTodoDescription: "", completedCount: completedCount.length });
  }
  // trying to change encouragement text NOT APPLIED
  encourage(){
    if(this.state.completedCount === 0){
      return "Time to start the day!";
    } else if(this.state.completedCount <= 3){
      return "Great job! What's next?";
    } else {
      return "Awesome job today!";
    }
  }
  render() {
    return (
      <div className="App">
        <h1>To Dos</h1>
        <Total completedCount={ this.state.completedCount } todoCount={ this.state.todos.length } encouragement={ this.state.encouragement } />

        <ul>
        { this.state.todos.map( (todo, index) =>
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => this.deleteTodo(index) } />
        )}
        </ul>

        <form onSubmit={ (e) => this.handleSubmit(e) } class="new-item-form">
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } class="new-item-text" />
          <input type="submit" value="+" class="new-item-submit" />
        </form>
        <p id="signature"><i class="icon ion-logo-twitter"></i> @lindscatspencer • <a href="https://reactjs.org/">React.js</a></p>
      </div>
    );
  }
}

export default App;
