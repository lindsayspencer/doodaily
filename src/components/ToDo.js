// 'react' is default, { Component } is not default
import React, { Component } from 'react';

// define a subclass that extends a React Component (parent class)
// define a render() method on the class (required)
// the return method returns JSX - webpack parses JSX into JS during bundling - ( ) are used to avoid errors
// JSX requirements: closing or self-closing tags; use className for adding classes to element; only one root element that contains all other elements (ex: single parent <div>)
class ToDo extends Component {
  render(){
    return (
      <li> <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
      <span style={this.props.isCompleted ? {textDecoration:"line-through"} : {textDecoration: "none"}}>{ this.props.description }</span>
      <div className="btn-inline">
      
      <button className="delete-item" onClick={ this.props.toggleComplete }><i className="ion ion-md-checkmark"></i> </button>
      <button className="delete-item" onClick={ this.props.deleteTodo }><i className="ion ion-md-trash"></i> </button>
      </div>
      </li>
    );
  }
}
// contains only a single todo item because otherwise any changes would happen to every todo item instead of individually
// export the class to be used (imported) in another file
export default ToDo;
