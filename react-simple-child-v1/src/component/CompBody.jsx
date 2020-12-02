import React, { useState } from "react";
import CompCount from "./CompCount";
import CompButton from "./CompButton";

/**
 * CompBody에는 CompCount와 CompButton Child컴포넌트가 import되어 있다
 * 이런 상황에서 CompButton의 button을 클릭했을때
 * CompCount에 변화된 값을 rendering 하여 보여줘야 한다.
 * 같은 컴포넌트에 에서는 그냥 state변수를 선언하고
 * state변수를 변화시키는 코드를 작성하면 어렵지 않다.
 * 지금은 Count와 Button이 같은 형제지간이다
 * react에서는 형제지간에 데이터를 직접교환하거나
 * 형제의 변수를 변화시키는 행위를 절대 할수 없다.
 * Count의 변수를 변화시켜 rendering을 수행하려면
 * Button에서 변화시키는 행위를 부모에게 전달하고
 * 부모가 Count의 변수를 변화시켜 다시 Count에게 전달해주는
 * 방식을 사용해야 한다.
 *
 * 1. 부모 컴포넌트에서 state변수를 선언하기
 * 2. 선언된 state 변수를 rendering할 컴포넌트로 전달
 *      CompCount에게 전달 : 변수 = {state변수}
 *      countArg 이름으로 count state변수를 전달한다
 * 3. CompCount에서 state변수 받기 : CompCount.jsx로 jump
 *
 * 5. CompButton count변수를 변화시킬때 사용할
 *      setCount함수를 전달한다
 * 6. CompButton에서 setCount함수 받기 : CompButton.jsx jump
 */
function CompBody(props) {
  const [count, setCount] = useState(10);
  return (
    <div>
      <CompCount countArg={count} />
      <CompButton setCountFunc={setCount} countArg={count} />
    </div>
  );
}

export default CompBody;
