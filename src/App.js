import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "http://localhost:3005";

// I didn't style anything at all. I was short on time and wanted to get you something before you forgot about me.
// This was the most fun I have had applying for a job. I will contiune working on this after I send it to you.
// you can check out the repo at https://github.com/Kingkobra813/pdqHireAdamKelly
// Thanks!!

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      beer: "",
      thought: "",
      dream: ""
    };
  }

  handleClick = () => {
    axios.get(BASE_URL + "/api").then(results => {
      console.log(results.data);
      this.setState({
        name: results.data.name,
        beer: results.data.currentBeer,
        thought: results.data.currentThought,
        dream: results.data.daydream
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Cabalistic Necromancer</h1>
        <button onClick={this.handleClick}> Click to read minds</button>
        <div>{this.state.name}</div>
        <div>{this.state.beer}</div>
        <div>{this.state.thought}</div>
        <img src={this.state.dream} />
      </div>
    );
  }
}

export default App;
