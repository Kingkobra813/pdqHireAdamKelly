import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "http://localhost:3005";

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
  }
  handleTestClick = () => {
    axios.get("https://swapi.co/api/people/1/").then(results => {
      console.log(results.data);
    });
  };

  handleClick = () => {
    axios.get(BASE_URL + "/api").then(results => {
      console.log(results);
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}> Click to read minds</button>
        <button onClick={this.handleTestClick}> testing</button>
        <div>{this.state.info}</div>
      </div>
    );
  }
}

export default App;
