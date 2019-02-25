import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoTextInput extends Component{
    
    state = {
        text: this.props.text || ''
    };

    handleSubmit = e => {
        const text = e.target.value.trim();
        if(e.which === 13){
            this.props.onSave(text);
            if(this.props.newTodo){
                this.setState({text: ''});
            }
        }
    }
    handleChange = e => {
        this.setState({ text: e.target.value });
    } 
    handleBlur = e => {
        if(!this.props.netTodo) {
            this.props.onSave(e.target.value);
        }
    }   
    render(){
        return(
            <input type="text"
                    className="new-todo"
                    placeholder={this.state.placeholder}
                    value={this.state.text}
                    onKeyDown={this.handleSubmit}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
            />
        )
    }
}

TodoTextInput.propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string
};
