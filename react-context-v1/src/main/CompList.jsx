import React, { useContext } from "react";
import CompItem from "./CompItem";
import StateProvidor from "../providor/BookContext";

function CompList(props) {
  const { books } = useContext(StateProvidor);

  const bookTdList = books.map((book) => {
    return <CompItem book={book} />;
  });

  return (
    <table>
      <tr>
        <th>No</th>
        <th>도서명</th>
        <th>출판사</th>
        <th>가격</th>
        <th>비고</th>
      </tr>
      {bookTdList}
    </table>
  );
}

export default CompList;
