import React, { Component } from "react";

/**
 * 클래스 type의 컴포넌트 생성
 * 반드시 Compoent Super class를 extends하여 클래스를 생성한다
 * render() {  render 코드 } 형식으로 본문을 생성
 */

class CompCountClass extends Component {
  render() {
    // props로 전달받은 변수, 함수를 spread(전개)하여 변수명으로
    // 쓸수있도록 준비
    const { countArg } = this.props;
    return (
      <div>
        <h3>카운트 : {countArg}</h3>
      </div>
    );
  }
}

export default CompCountClass;
