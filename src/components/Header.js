import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

// const Header = (props) => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-xs-1 col-xs-offset-11">
//         <h1>{props.linkName}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

export default class Header extends Component {

  handleSave = text => {
    if(text.length){
      this.props.addTodo(text);
    }
  }
  render() {
    return(
      <header className="header">
        <h1>Todos</h1>
        <TodoTextInput 
          placeholder="hello" 
          onSave={this.handleSave}
          newTodo 
        />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}
