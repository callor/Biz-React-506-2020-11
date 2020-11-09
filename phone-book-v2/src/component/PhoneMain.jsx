import React, { useState, useRef, useEffect } from "react";
import PhoneList from "./PhoneList";
import PhoneInsert from "./PhoneInsert";
import "../css/PhoneMain.css";

function PhoneMain(props) {
  /**
   * state 형 변수는 값이 변화가 생기면 화면이 자동으로 rendering 된다.
   */
  const [phoneBooks, setPhoneBooks] = useState([
    // { id: 1, name: "이몽룡", number: "010-111-1111", isEdit: false },
    // { id: 2, name: "성춘향", number: "010-222-1111", isEdit: false },
    // { id: 3, name: "홍길동", number: "010-333-1111", isEdit: false },
  ]);
  /**
   * ref 형 변수는 선언과 동시에 .current 라는 속성이 만들어지고
   * useRef(초기값) 초기값으로 생성이 된다
   * ref 형 변수는 current 속성을 자유롭게 변화시킬수 있고
   * 값이 변화가 되어도 화면이 rendering 되지 않는다.
   */
  const nextid = useRef(phoneBooks.length);

  const insertPhoneBook = (name, number) => {
    /**
     * 표준 JS에서 배열요소를 추가할때 push() 라는 함수를 사용한다
     * react에서는 기존의 배열요소에 어떤값을 추가하는 것이 금지되어있다
     * 기존배열 + 추가될요소를 새로운 배열로 만들고 그 배열을 기존배열로
     * 대치하는 방법을 사용해야 한다.
     */
    setPhoneBooks([
      ...phoneBooks,
      {
        id: nextid.current++,
        name: name,
        number: number,
        isEdit: false,
      },
    ]); // end setPhoneBooks
  }; // insertPhoneBook

  /**
   * Effect의 두번째 파라메터를 빈값([])으로 설정을 하면
   * 프로젝트가 시작될때(화면이 rendering 될때) 한번만 이벤트가 작동된다.
   */
  useEffect(() => {
    console.log("get");
    const localStorageBooks = window.localStorage.getItem("phoneBooks");
    setPhoneBooks(JSON.parse(localStorageBooks));
    nextid.current = phoneBooks.length;
  }, []);

  /**
   * 리액트의 시스템 이벤트
   * phoneBooks 데이터를 감시하고 있다가
   * 변화가 생기면 내부의 코드를 실행하라
   */
  useEffect(() => {
    // 추가된 데이터가 있으면 전체 phoneBooks를 브라우져의 localStorage에 저장
    // 1. 배열 데이터를 문자열화 시키기
    const stringPhoneBook = JSON.stringify(phoneBooks);
    // 2. localStorage에 phoneBooks라는 이름으로 저장하기
    window.localStorage.setItem("phoneBooks", stringPhoneBook);
    console.log("set");
  }, [phoneBooks]);

  /**
   * id 값을 기준으로 phoneBooks에서 전화번호를 제거하기
   * 전체리스트에서 id에 해당하는 전화번호만 제거한 새로운
   * 리스트를 만들고 그 리스트를 phoneBooks에 setting
   * array.filter() 함수를 사용하여 삭제할 id가 있는 데이터만
   * 제거된 새로운 리스트를 만든다
   */
  const deletePhoneBooks = (id) => {
    const deleteAfterBooks = phoneBooks.filter((phone) => {
      console.log(phone.id, id);
      // 동등비교 연산자는 값과 type모두 같아야 true
      // phone.id에 담긴 값은 숫자, id에 받아온 값은 문자열
      // 둘의 type을 일치시켜줘야 한다.
      return phone.id !== Number(id);
    });
    setPhoneBooks(deleteAfterBooks);
  };

  const editableBooks = (id) => {
    const editBooks = phoneBooks.map((phone) => {
      console.log("edit");
      if (phone.id === Number(id)) {
        return { ...phone, isEdit: true };
      } else {
        return { ...phone, isEdit: false };
      }
    });
    setPhoneBooks(editBooks);
  };

  return (
    <div className="phoneMain">
      <h3>나만의 전화번호부</h3>
      <PhoneList
        phoneBooks={phoneBooks}
        deletePhoneBooks={deletePhoneBooks}
        editableBooks={editableBooks}
      />
      <PhoneInsert insertPhoneBook={insertPhoneBook} />
    </div>
  );
}

export default PhoneMain;
