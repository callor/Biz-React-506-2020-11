import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";

class BBsItem extends Component {
  handleClick = (id) => {
    const { fetchBBs } = this.props;
    if (window.confirm("정말 삭제합니다")) {
      axios
        .delete(`http://localhost:5000/api/delete/${id}`)
        .then((result) => {
          console.log(result);
          fetchBBs();
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    const { index, bbs, handleUpdate } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{bbs.b_writer}</td>

        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{bbs.b_date_time}</Moment>
        </td>
        <td
          onClick={() => handleUpdate(bbs.b_id)}
          style={{ cursor: "pointer" }}
        >
          {bbs.b_subject}
        </td>
        <td
          onClick={() => this.handleClick(bbs.b_id)}
          style={{ cursor: "pointer" }}
        >
          &times;
        </td>
      </tr>
    );
  }
}

export default BBsItem;
