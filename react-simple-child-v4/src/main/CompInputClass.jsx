import React, { Component } from "react";

export default class CompInputClass extends Component {
  state = { inputValue: "0" };
  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
    this.props.setStateFunc(e.target.value);
  };
  render() {
    const style = {
      fontSize: "20px",
      padding: "5px",
    };
    return (
      <div>
        <input
          onChange={this.onChange}
          style={style}
          placeholder="숫자입력"
          value={this.state.inputValue}
        />
      </div>
    );
  }
}
