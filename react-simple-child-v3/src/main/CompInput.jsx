import React, { useState } from "react";

function CompInput({ setNumber }) {
  // JSON데이터로 style을 선언하고
  // input 컴포넌트에 적용하기
  const inputStyle = {
    fontSize: "20px",
    padding: "1rem",
  };

  // input box에서 사용할 임시 state 변수
  const [inputValue, setInputValue] = useState(1);
  // input box에 키보드로 문자열을 입력하면
  // 화면에 입력된 값을 보여주기 위한 함수
  const onChange = (e) => {
    // 입력된 문자열을 input box에 보여주기
    setInputValue(e.target.value);
    // 입력된 문자열을 숫자로 변환하여
    // body에서 전달받은 setNumber함수의 파라메터로 넘기고
    //          실행하기
    setNumber(Number(e.target.value));
  };
  return (
    <div>
      <input
        onChange={onChange}
        style={inputStyle}
        placeholder="숫자입력"
        value={inputValue}
      />
    </div>
  );
}

export default CompInput;
