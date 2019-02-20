import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Home</h1>
            <span>Your name is {this.props.name}, your age is {this.props.age}</span>
            <ul>
              {this.props.user.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
            </ul>
            <div>{this.props.children}</div>
          </div>
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