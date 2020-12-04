import React, { Component } from "react";
import CompInput from "./CompInputClass";
import ComptView from "./CompViewClass";
class CompBodyClass extends Component {
  // class type에서는 class의 member 영역에
  // state라는 키워드로 변수를 선언한다
  // class type의 컴포넌트에 이미 만들어져 있는 state라는 변수에
  // inputText, name, age 변수를 추가하여
  //    state(상태관리) 하게 만들어라
  state = { inputText: "초기값", name: "홍길동", age: 33 };

  render() {
    const modifyInputText = (val) => {
      this.setState({ inputText: val });
    };

    return (
      <div>
        <CompInput modify={modifyInputText} inputText={this.state.inputText} />
        <ComptView state={this.state} inputText={this.state.inputText} />
      </div>
    );
  }
}

export default CompBodyClass;
