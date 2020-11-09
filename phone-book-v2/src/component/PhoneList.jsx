import React, { useState } from "react";
import "../css/PhoneList.css";

const PhoneList = ({ phoneBooks, deletePhoneBooks, editableBooks }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  /**
   * tr tag를 클릭했을때 사용할 event 핸들러
   * tr tag를 클릭을 했지만 우리가 사용할 것은 td tag가 목적이므로
   * e.target.className 속성을 사용하여 어떤 td 가 클릭됬는지 확인하자
   *
   */
  const trOnClick = (e) => {
    console.log(e.target.className);
    const className = e.target.className;
    const closest = e.target.closest("TR");
    const name = closest.dataset.name; // data-name으로 설정된 값 가져오기
    const id = closest.dataset.id; // data-id로 설정된 값 가져오기

    console.log(name, id);

    if (className === "delete") {
      if (window.confirm(name + "을 정말 삭제합니다!!!")) {
        // alert(name + "데이터 삭제");
        deletePhoneBooks(id);
        return false;
      }
    }

    console.log("go Edit");
    // delete 칼럼이 아닌 부분을 클릭하면
    // edit 모드로 전환시키기
    editableBooks(id);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onNumberChange = (e) => {
    setNumber(e.target.value);
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
      setName(phone.name);
      setNumber(phone.number);

      return (
        <tr
          key={phone.id}
          onClick={trOnClick}
          data-id={phone.id}
          data-name={phone.name}
        >
          <td>{index + 1}</td>
          <td>
            <input value={name} onChange={onNameChange} />
          </td>
          <td>
            <input value={number} onChange={onNumberChange} />
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
