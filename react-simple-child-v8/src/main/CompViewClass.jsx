import React, { Component } from "react";

class CompViewClass extends Component {
  viewStyleMember = {
    color: "green",
  };

  render() {
    const viewStylePrivate = {
      color: "red",
    };
    const { inputText } = this.props;
    return (
      <div>
        {/*
          state={this.state} 로 보낸 변수를 사용하는 방법
          */}
        <h3 style={this.viewStyleMember}>
          입력값 : {this.props.state.inputText}
        </h3>
        {/*
        inputText={this.state.inputText}로 보낸 변수를 사용
        */}
        <h3 style={viewStylePrivate}>입력값 : {this.props.inputText}</h3>
        {/*
        inputText={this.state.inputText}로 보낸 변수를
        전개하여 변수만 별도로 추출하여 사용하는 방법
        */}
        <h3 style={viewStylePrivate}>입력값 : {inputText}</h3>
      </div>
    );
  }
}

export default CompViewClass;
