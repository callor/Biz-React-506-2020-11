import React from "react";

/**
 * 4. CompBody에서 보낸 countArg변수 받기
 *    가. 함수방식에서는 함수의 매개변수 {변수명} 형식으로 받는다
 *    나. 클래스방식에서는 this.props.변수명 형식으로 받는다
 * 5. 사용할 위치에 변수 배치
 */
function CompCount({ countArg }) {
  return (
    <div>
      <h3>카운트 : {countArg}</h3>
    </div>
  );
}
export default CompCount;
