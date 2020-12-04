import React from "react";

/**
 * 부모 컴포넌트에서 변수, 함수 전달 받기
 * 부모 컴포넌트에서 보낸 변수, 함수들은 모두 props에 담겨서 전달된다
 * {props.변수}, {props.함수} 형식으로 사용하면 된다
 *
 * 또 다른 방법은 매개변수에서 변수, 함수를 전개하여(분해하여)
 * 각각으로 선언하고 사용할때는 변수, 함수 이름을 직접 사용한다
 * child함수({변수, 함수})방식으로 받고
 * {변수}, {함수} 방식으로 사용한다
 */
function CompView(props, { inputText }) {
  // 매개변수로 받지 않고 본문내에서 변수를 분해하기
  // const { inputText } = props;
  return (
    <div>
      <h3 style={{ color: "yellow" }}>입력값 : {props.inputText}</h3>
      <h3 style={{ color: "yellow" }}>입력값 : {inputText}</h3>
    </div>
  );
}

export default CompView;
