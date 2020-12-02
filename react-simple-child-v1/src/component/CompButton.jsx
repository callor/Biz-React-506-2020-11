import React from "react";

/**
 * 7. CompBody에서 보낸 setCountFunc함수 받기
 *      가. 함수방식에서는 매개변수 {setCountFunc} 으로 받기
 *      나. 클래스방식에에서는 this.props.setCountFunc으로 받기
 *          const { setCountFunc } = this.props
 *
 */
function CompButton({ setCountFunc, countArg }) {
  const increment = () => {
    setCountFunc(countArg + 1);
  };
  const decrement = () => {
    setCountFunc(countArg - 1);
  };

  return (
    <div>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  );
}

export default CompButton;
