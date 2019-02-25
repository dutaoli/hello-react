import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TodoItem extends Component{
    render(){
        const { todo, deleteTodo } = this.props
        let elem;
        elem = (
            <div className="views">
                <input type="checkbox"
                        className="toggle"
                        checked={todo.completed}
                />
                <label>{todo.text}</label>
                <button onClick={() => deleteTodo(todo.id)}>Destory</button>
            </div>
        )
        return (
            <li>{elem}</li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
}