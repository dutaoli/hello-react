import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerLink: 'Header',
      homeMounted: true
    }
  }
  onGreet(age){
    alert(age);
  }

  handleChangeLink(newLinkName){
    this.setState(() => ({
      headerLink: newLinkName
    }));
  }

  handleUnmount(){
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }
  
  render() {
    const user = {
      name: "Anna",
      hobbies: ["Running", "Writting"]
    }
    let homePage = "";
    if(this.state.homeMounted) {
      homePage = (
        <Home 
            name={"max"} 
            age={12} 
            user={user} 
            greet={this.onGreet} 
            headerLink={this.handleChangeLink.bind(this)}
            initialName={this.state.headerLink}
            handleUnmount={this.handleUnmount.bind(this)}>
          <p>son element</p>
        </Home>
      );
    }
    return (
      <div className="container">
      <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
          <Header linkName={this.state.headerLink} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            {homePage}
          </div>
        </div>
        <hr />
        <button onClick={this.handleUnmount.bind(this)}>(Un)mount the component</button>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
          <h1>Hello World!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
