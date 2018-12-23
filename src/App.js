import React, { Component } from "react";
import "./app.css";

export default class App extends Component {
  state = {
    i: 1,
    j: 2,
    k: 3,
    l: 4,
    answer: "water"
  };

  handleValue = event => {
    let answer = event.target.value;
    if (answer === this.state.answer) {
      this.setState({
        i: this.state.i + 4,
        j: this.state.j + 4,
        k: this.state.k + 4,
        l: this.state.l + 4,
        answer: "love"
      });
    }
  };

  render() {
    return (
      <div>
        <h1 class="title">4 Pics One Word</h1>
        <div class="container">
          <div>
            <img
              src={`images/${this.state.i}.jpg`}
              className="images"
              alt="pic"
            />
            <img
              src={`images/${this.state.j}.jpg`}
              className="images"
              alt="pic"
            />
            <img
              src={`images/${this.state.k}.jpg`}
              className="images"
              alt="pic"
            />
            <img
              src={`images/${this.state.l}.jpg`}
              className="images"
              alt="pic"
            />
          </div>
          <input
            class="input"
            placeholder={`guess the ${this.state.answer.length} letter word`}
            onChange={this.handleValue}
          />
        </div>
      </div>
    );
  }
}
