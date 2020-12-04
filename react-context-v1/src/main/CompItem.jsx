import React, { useContext } from "react";
import StateProvidor from "../providor/BookContext";

function CompItem({ book }) {
  const { bookDelete } = useContext(StateProvidor);
  const onClick = (e) => {
    alert(e.target.dataset.id);
    bookDelete(e.target.dataset.id);
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.comp}</td>
      <td>{book.price}</td>
      <td onClick={onClick} data-id={book.id}>
        &times;
      </td>
    </tr>
  );
}

export default CompItem;
