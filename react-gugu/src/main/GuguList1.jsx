import React from "react";

function GuguList1({ number }) {
  const gugus = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 배열의 개수만큼 컴포넌트 생성
  const guguMaps = gugus.map((item, index) => {
    return (
      <div>
        {number} x {item} = {number * item}
      </div>
    );
  });
  return <div>{guguMaps}</div>;
}

export default GuguList1;
