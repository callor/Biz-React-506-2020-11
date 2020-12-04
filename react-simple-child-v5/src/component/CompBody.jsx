import React, { Component } from "react";

/**
 * class type으로 컴포넌트 시작
 * Componet를 extends해서 시작하기
 */
class CompBody extends Component {
  // react에서 view 용도로 사용하는 변수선언
  // state 변수 : view 용도로 사용하는 변수
  // react는 어딘가에서  state 변수의 값이 변동이 되면
  // 그것을 자동으로 감지하여 화면을 다시 그린다.
  // 단 react는 변화된 데이터가 표시되는 영역만 다시 그린다.
  state = { inputText: "초기값" };
  onChange = (e) => {
    // 키보드에서 입력된 문자열(e.target.value에 담긴)을
    // inputText state변수에 담아라
    this.setState({ inputText: e.target.value });
  };

  /**
   * render() 함수로 감싸서
   * 컴포넌트 본문이 시작된다.
   */
  render() {
    return (
      <div>
        {/*
            input box에 문자열을 입력하면
            입력한 문자열을 h3 tag부분에 보이기

            input box에 문자열을 입력하면
            state변수인 inputText의 값을 변화시킨다
            inputText의 값이 변화되는 것을 감지하고
            h3 tag의 inputText의 표시부분을 rendering할 것이다.
            input box에 클릭후 키보드로 문자를 입력하면
            input box에서는 onChang 이벤트가 발생할 것이다
            onChange 이벤트를 가로채서(핸들링) 
            inputText의 값을 변화킨다

            class type에서는 이벤트 핸들러 함수를 쓸때
            {this.onChange} 라고 작성해야 한다
          */}
        <input
          onChange={this.onChange}
          style={{ fontSize: "20px", padding: "5px" }}
        />
        {/*
            컴포넌트 본문에서 주석을 작성하는 방법
        */}
        {/*
            class type의 컴포넌트에서 state변수를 화면에 보이기위해서는
            {this.state.변수명} 형식으로 사용을 해야 한다.
        */}
        <h3 style={{ color: "yellow" }}>입력값 : {this.state.inputText} </h3>
      </div>
    );
  }
}

export default CompBody;
