import React, { Component } from "react";

export default class CompDispClass extends Component {
  render() {
    const { stateVar } = this.props;
    const { number } = stateVar;
    return (
      <div>
        <h3>
          {number} 와 20의 합 : {Number(number) + 20}
        </h3>
        <h3>
          {number} 의 제곱 : {number * number}
        </h3>
      </div>
    );
  }
}
