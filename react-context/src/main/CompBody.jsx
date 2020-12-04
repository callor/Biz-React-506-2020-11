import React, { useState } from "react";
import CompList from "./CompList";

function CompBody(props) {
  const [books, setBooks] = useState([
    { id: 1, title: "자바야놀자", comp: "놀이출판사", price: 2000 },
    { id: 2, title: "뇌를 자극하는 JAV", comp: "놀이출판사", price: 2000 },
    { id: 3, title: "오라클", comp: "놀이출판사", price: 2000 },
    { id: 4, title: "HTML", comp: "놀이출판사", price: 2000 },
    { id: 5, title: "React", comp: "놀이출판사", price: 2000 },
  ]);

  const bookDelete = (id) => {
    const deleteBooks = books.filter((book) => {
      return book.id != id;
    });
    setBooks([...deleteBooks]);
  };

  return (
    <div>
      <CompList books={books} bookDelete={bookDelete} />
    </div>
  );
}

export default CompBody;
