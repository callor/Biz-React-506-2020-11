import React, { useState } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "이몽룡", number: "010-111" },
    { id: 2, name: "성춘향", number: "010-222" },
    { id: 3, name: "홍길동", number: "010-333" },
  ]);

  return (
    <>
      <PhoneInsert />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
