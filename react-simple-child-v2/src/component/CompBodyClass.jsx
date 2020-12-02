import React, { Component } from "react";
import CompCount from "./CompCountClass";
import CompButton from "./CompButtonClass";

class CompBodyClass extends Component {
  // 클래스 type 의 컴포넌트에서는 state 키워드를 사용하여
  // state 변수를 선언한다
  // state 변수에 초기값을 지정하려면 JSON 객체형식으로 작성
  // 초기값을 10으로 세팅
  state = { count: 10 };
  setCountIncrement = () => {
    // 클래스 type의 컴포넌트에서는 state변수를 변경할때
    // this.setState() 라는 내부의 method를 사용해야 한다.
    this.setState({ count: this.state.count + 1 });
  };
  setCountDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // 클래스 type 에서 state 변수를 child 컴포넌트에 전달할때
  //        변수명={ this.state.state변수 }
  render() {
    return (
      <div>
        <CompCount countArg={this.state.count} />
        <CompButton
          incFunc={this.setCountIncrement}
          decFunc={this.setCountDecrement}
        />
      </div>
    );
  }
}
export default CompBodyClass;
