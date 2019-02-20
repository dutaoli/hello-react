import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: props.age
    }
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
    
    console.log(this);
  }
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Home</h1>
            <span>Your name is {this.props.name}, your age is {this.state.age}</span>
            <ul>
              {this.props.user.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
            </ul>
            <div>{this.props.children}</div>
          </div>
          <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Add age</button>
          <button className="btn btn-primary" onClick={() => {this.onMakeOlder()}}>Make me older</button>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
};