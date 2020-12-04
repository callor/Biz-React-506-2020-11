import React, { useState } from "react";
import CompInput from "./CompInput";
import CompView from "./CompView";

function CompBody(props) {
  const [inputText, setInputText] = useState("초기값");

  // inputText state변수 값을 변경하는 함수를 선언
  const modifyInputText = (text) => {
    setInputText(text);
  };

  return (
    <div>
      <CompInput modifyInputText={modifyInputText} inputText={inputText} />
      <CompView inputText={inputText} />
    </div>
  );
}

export default CompBody;
