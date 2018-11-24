// 'react' is default, { Component } is not default
import React, { Component } from 'react';

// define a subclass that extends a React Component (parent class)
// define a render() method on the class (required)
// the return method returns JSX - webpack parses JSX into JS during bundling - ( ) are used to avoid errors
// JSX requirements: closing or self-closing tags; use className for adding classes to element; only one root element that contains all other elements (ex: single parent <div>)
class Total extends Component {
  render(){
    return (
      <h3><i className="ion ion-md-checkmark-circle"></i>  { this.props.completedCount } / { this.props.todoCount }</h3>
    );
  }
}
// contains only a single todo item because otherwise any changes would happen to every todo item instead of individually
// export the class to be used (imported) in another file
export default Total;
