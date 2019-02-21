import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: props.age,
      headerLink: props.initialName
    }
    console.log('constructor');
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })

    console.log(this);
  }

  handleGreet() {
    this.props.greet(this.state.age);
  }
  handleChangeLink() {
    this.props.headerLink(this.state.headerLink)
  }
  handleChangeName(e) {
    this.props.headerLink(e.target.value);
  }
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    console.log("component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("component should update", nextProps, nextState);
    return false;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("component will update", nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("component will unmount");
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
          <hr />
          <button onClick={this.handleGreet.bind(this)}>Greet</button>
          <br />
          <input defaultValue={this.props.initialName} onChange={(e) => this.handleChangeName(e)} />
          <button onClick={this.handleChangeLink.bind(this)}>Change link</button>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired,
  greet: PropTypes.func,
  initialName: PropTypes.string
};