import React from "react";

function CompInput({ modifyInputText, inputText }) {
  const onChange = (e) => {
    modifyInputText(e.target.value);
  };
  return (
    <div>
      <input
        value={inputText}
        onChange={onChange}
        style={{ fontSize: "20px", padding: "5px" }}
      />
    </div>
  );
}
export default CompInput;
