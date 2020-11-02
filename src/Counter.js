import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    const count = this.state.count;
    return (
      <div>
        <button
          data-testid="counter-button"
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          {count}
        </button>
      </div>
    );
  }
}
