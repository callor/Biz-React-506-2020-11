import React from "react";
import PhoneList from "./PhoneList";
import PhoneInsert from "./PhoneInsert";
import "../css/PhoneMain.css";

function PhoneMain(props) {
  return (
    <div className="phoneMain">
      <h3>나만의 전화번호부</h3>
      <PhoneList />
      <PhoneInsert />
    </div>
  );
}

export default PhoneMain;
