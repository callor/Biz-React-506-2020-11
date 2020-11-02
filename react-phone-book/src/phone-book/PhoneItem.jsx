import React from "react";

const PhoneItem = (props) => {
  return (
    <tr>
      <td>{props.phone.name}</td>
      <td>{props.phone.number}</td>
    </tr>
  );
};

export default PhoneItem;
