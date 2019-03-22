import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
  }

  handleClick = () => {
    axios.get("https://pdqweb.azurewebsites.net/api/brain").then(results => {
      console.log(results);
      this.setState({ info: results.data });
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}> Click to read minds</button>
      </div>
    );
  }
}

export default App;
