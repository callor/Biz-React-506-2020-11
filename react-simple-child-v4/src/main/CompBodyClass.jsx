import React, { Component } from "react";
import CompDispClass from "./CompDispClass";
import "./CompInputClass";
import "./CompInputClass";
import CompInputClass from "./CompInputClass";

export default class CompBodyClass extends Component {
  state = { number: 3, name: "홍길동", age: 22 };
  setStateFunc = (value) => {
    this.setState({ number: value });
  };

  /**
   * 라이프 사이클 method
   * 화면을 최초로 rendering 할때,
   * 중간에 데이터가 변경되었을때
   * 데이터가 변경되어 재 rendering이 되었을때
   * 각 순간순간 내부에서 호출되는 mehod 들
   * 
   */
  // 첫번째(최초) rendering이 된 후에 호출되는 method
  // 서버로부터 ajax등을 이용하여 데이터를 가져오는 code를 작성하는 곳
  componentDidMount() {
      console.log("DisMount")
  }

  // state변수가 변경되고 호출되는 method
  componentDidUpdate(preProps,preState) {

    // this.props와 preProps를 비교하는 코드를 작성할수 있는데
    // this.props는 props값을 전달받은 후 저장된 값
    // preProps 는 props값을 전달받기 전 값이 저장되어 있다

    // this.state : state변수가 변경된 후의 값이 저장
    // preState : state 변수가 변경되기 전의 값이 저장

  }

  // 만약 state변수가 변경되었는데 어떻게 할래? 를 결정하는 method
  shouldComponentUpdate(preProps, preState) {
      // pre와 this의 값을 비교하여
      // 변경이 이루어졌으면 return true를 하고
      // 그렇지 않으면 return false를 수행할수 있다.
  }

  // 연결이 종료된 후 
  // DB를 연결하거나 하는 작업이 중간에 있었을 경우
  // 연결을 종료하거나 하는 resouce를 제거하는 코드를 작성하는 부분
  componentWillUnmount() {}

  // 중간에 rendering 오류가 발생했을때
  componentDidCatch()

  

  render() {
    return (
      <div>
        <CompInputClass setStateFunc={this.setStateFunc} />
        <CompDispClass stateVar={this.state} />
      </div>
    );
  }
}
