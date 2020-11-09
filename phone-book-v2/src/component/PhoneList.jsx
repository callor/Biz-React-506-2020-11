import React from "react";
import "../css/PhoneList.css";

const PhoneList = (props) => {
  return (
    <table className="phoneList">
      <tr>
        <th>No</th>
        <th>이름</th>
        <th>전화번호</th>
        <th>&hearts;</th>
      </tr>
    </table>
  );
};

export default PhoneList;
