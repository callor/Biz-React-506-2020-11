import React from "react";
import "../css/PhoneInsert.css";

const PhoneInsert = (props) => {
  return (
    <form class="phoneInsert">
      <input placeholder="이름을 입력하세요" />
      <input placeholder="전화번호를 입력하세요" />
      <button>저장</button>
    </form>
  );
};

export default PhoneInsert;
