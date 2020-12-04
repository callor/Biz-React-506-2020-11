import React from "react";
import "../css/BookList.css";
import CompItem from "./CompItem";

function CompList({ books, bookDelete }) {
  const bookTdList = books.map((item) => (
    <CompItem book={item} bookDelete={bookDelete} />
  ));

  return (
    <table className="book">
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
