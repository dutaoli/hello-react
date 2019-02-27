import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';


export default class TodoItem extends Component{

    state = {
        editing: false
    }

    handleDoubleClick = () => {
        this.setState({editing: true});
    }

    handleSave = (id, text) => {
        if(!text.trim().length){
            this.props.deleteTodo(id);
        }else{
            this.props.editTodo(id, text);
            this.setState({editing: false});
        }
    }

    render(){
        const { todo, deleteTodo } = this.props
        let elem;
        if(this.state.editing){
            elem = (
                <TodoTextInput  onSave={(text) => this.handleSave(todo.id, text)}
                                text={todo.text}
                                editing={this.state.editing}
                
                />
            ) 
        }else{
            elem = (
                <div className="views">
                    <input type="checkbox"
                            className="toggle"
                            checked={todo.completed}
                    />
                    <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
                    <button onClick={() => deleteTodo(todo.id)}>Destory</button>
                </div>
            )
        }
        return (
            <li>{elem}</li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
}