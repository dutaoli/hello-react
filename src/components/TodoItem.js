import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component{
    render(){
        const { todo } = this.props
        let elem;
        elem = (
            <div className="views">
                <input type="checkbox"
                        className="toggle"
                        checked={todo.completed}
                />
                <label>{todo.text}</label>
                <button>destory</button>
            </div>
        )
        return (
            <li>{elem}</li>
        )
    }
}