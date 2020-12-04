import React, { useState } from "react";

/**
 * func type의 컴포넌트
 * func type의 컴포넌트는 바닐라 JS의 표준 함수로 생성을 한다.
 */
// function ComBody(props) {

// 화살표 함수와 표준함수의 중간정도 세대
// const CompBody = function(props) {

// 화살표 함수를 사용하여 선언
const CompBody = (pros) => {
  // func type에서 state 변수를 선언할때는
  // 변수, setter가 쌍을이루는 배열방식으로 선언을 하고
  // useState(초기값) 함수로 생성을 한다
  const [inputText, setInputText] = useState("초기값");
  const inputStyle = { fontSize: "20px", padding: "5px" };
  const viewStyle = { color: "yellow" };
  const onChange = (e) => {
    // setInputText setter를 사용하여 inputText에
    // 키보드로 입력한 문자열(e.target.value)을 setting하라
    // inputText = e.target.value : 절대 금지
    setInputText(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} style={inputStyle} />
      {/*
        func type(함수 방식)에서는 state 변수를 화면에 보일때
        {변수명} 형식으로 작성한다
        
        singal-to-noise-ratio : 신호대 잡음비
        개발자 입장에서 많은 코드는 그만큼 잡음(오류)를 내기 쉽다
        가급적 짧고 간결한 코드를 사용하는 것이 유리하다
      */}
      <h3 style={viewStyle}>입력값 : {inputText}</h3>
    </div>
  );
};

export default CompBody;
