import React, { useReducer, useState } from "react";
import "../css/PhoneList.css";

const PhoneList = ({
  phoneBooks,
  deletePhoneBooks,
  editableBooks,
  updateBooks,
}) => {
  /**
   * Hook 함수
   * use*로 시작되는 함수들(useState,useRef, useEffect, useReducer)
   *
   * state 변수가 여러개일때는 useState를 사용하지 않고 useReducer를 사용한다
   *
   *
   */
  // const [name,setName] = useState("")
  // const [number,setNumber] = useState("")
  /**
   * reducer 함수
   * useReducer 로 선언된 state변수들을 통합하여 관리한는 함수이다.
   * 이 함수는 여러가지 용도로 설정하여 만들수 있다.
   * 이 함수가 호출될때 어떠한 일을 할지 설정하는 속성이 action.type 있다.
   * 즉, action.type 값을 임의로 정하여 reducer 함수가 작동되는 방법을 정의할수 있다
   * @param {*} object
   * @param {*} action
   */
  const reducer = (object, action) => {
    // 만약 action.type 이 EIDT_FORM으로 설정되어서 reducer가 호출되면
    // 실행될 코드
    if (action.type === "EDIT_FORM") {
      return { name: action.name, number: action.number };
    }
    //
    // input box에 문자열을 입력하는 change이벤트가 발생할때 default로 실행될 코드
    return { ...object, [action.name]: action.value };
  };
  const [state, dispatch] = useReducer(reducer, { name: "", number: "" });
  const { name, number } = state;
  /**
   * tr tag를 클릭했을때 사용할 event 핸들러
   * tr tag를 클릭을 했지만 우리가 사용할 것은 td tag가 목적이므로
   * e.target.className 속성을 사용하여 어떤 td 가 클릭됬는지 확인하자
   */
  const trOnClick = (e) => {
    console.log(e.target.className);
    const className = e.target.className;
    const closest = e.target.closest("TR");
    const name = closest.childNodes[1].innerText; // closest.dataset.name; // data-name으로 설정된 값 가져오기
    const number = closest.childNodes[2].innerText;
    const id = closest.dataset.id; // data-id로 설정된 값 가져오기

    console.log(name, id);

    if (className === "delete") {
      if (window.confirm(name + "을 정말 삭제합니다!!!")) {
        // alert(name + "데이터 삭제");
        deletePhoneBooks(id);
        return false;
      }
    }
    if (className === "update-ok") {
      console.log("update");
      updateBooks(id, state.name, state.number);
      return false;
    }

    console.log("go Edit");
    if (className !== "input") {
      dispatch({ type: "EDIT_FORM", name: name, number: number });
    }
    // delete 칼럼이 아닌 부분을 클릭하면
    // edit 모드로 전환시키기
    editableBooks(id);
  };

  const onChange = (e) => {
    dispatch(e.target);
  };

  /**
   * map을 사용하여 배열요소로 화면을 만들때
   * PK에 해당하는 key라는 요소를 반드시 지정해야 한다
   * 그렇지 않으면 경고가 나타나고
   * 데이터가 많을때 화면이 출렁거리는 현상이 발생한다
   * react는 key 요소를 기준으로 화면 rendering을 수행한다
   * key 가 없으면 화면전체를 매번 모두 redering을 수행하기 때문에
   * 문제가 발생할수 있다.
   */
  const phoneList = phoneBooks.map((phone, index) => {
    if (phone.isEdit) {
      console.log(phone.name);
      // 키보드로 문자열을 입력할때 화면이 rendering 되면서
      // 2개의 변수가 서로 초기화를 시도해버린다
      // 이름을 변경하고 전화번호를 변경하려고 시도하면
      // 이름이 다시 phoneBook의 데이터로 초기화가 되어 버린다
      // state.name = phone.name;
      // state.number = phone.number;

      return (
        <tr
          key={phone.id}
          onClick={trOnClick}
          data-id={phone.id}
          // data-name={phone.name}
        >
          <td>{index + 1}</td>
          <td>
            <input
              value={name}
              name="name"
              className="input"
              onChange={onChange}
            />
          </td>
          <td>
            <input
              value={number}
              name="number"
              className="input"
              onChange={onChange}
            />
          </td>
          <td className="update-ok">&#10003;</td>
        </tr>
      );
    } else {
      return (
        <tr
          key={phone.id}
          onClick={trOnClick}
          data-id={phone.id}
          data-name={phone.name}
        >
          <td>{index + 1}</td>
          <td>{phone.name}</td>
          <td>{phone.number}</td>
          <td className="delete">&times;</td>
        </tr>
      );
    }
  });

  return (
    <table className="phoneList">
      <thead>
        <tr>
          <th>No</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>&hearts;</th>
        </tr>
      </thead>
      <tbody>{phoneList}</tbody>
    </table>
  );
};

export default PhoneList;
