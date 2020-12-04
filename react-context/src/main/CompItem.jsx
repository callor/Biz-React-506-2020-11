import React from "react";

function CompItem({ book, bookDelete }) {
  const onClick = (e) => {
    bookDelete(e.target.dataset.id);
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.comp}</td>
      <td>{book.price}</td>
      <td onClick={onClick} style={{ cursor: "pointer" }} data-id={book.id}>
        &times;
      </td>
    </tr>
  );
}

export default CompItem;
