import React, { useEffect, useState } from "react";
import "./CompInput";
import "./CompDisp";
import CompInput from "./CompInput";
import CompDisp from "./CompDisp";

function CompBody(props) {
  const [number, setNumber] = useState(3);

  // 함수형 컴포넌트에서 라이프사이클 method 대신
  // 사용하는 함수

  // 1. 수시로 화면이 rendering되거나, state변수가 변경될때 호출
  useEffect(() => {}); // 함수 본체만 있는 경우

  // 2. number state변수가 변경되었을때만 호출
  useEffect(() => {}, number); // 함수본체와 state 변수가 있는 경우

  // 3. 최초에 한번만 호출
  useEffect(() => {}, []); // 함수본체와 비어있는 배열이 있는경우

  return (
    <div>
      <CompInput setNumber={setNumber} />
      <CompDisp number={number} />
    </div>
  );
}

export default CompBody;
