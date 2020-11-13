import React, { Component } from "react";
import "../css/BBsInsert.css";

class BBsInsert extends Component {
  state = {
    b_writer: "",
    b_subject: "",
    b_content: "'",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { b_writer, b_subject, b_content } = this.state;
    return (
      <div className="input-form">
        <input
          name="b_writer"
          value={b_writer}
          onChange={this.handleOnChange}
          placeholder="작성자"
        />
        <input
          name="b_subject"
          value={b_subject}
          onChange={this.handleOnChange}
          placeholder="제목"
        />
        <input
          name="b_content"
          value={b_content}
          onChange={this.handleOnChange}
          placeholder="내용"
        />
        <button>저장</button>
      </div>
    );
  }
}

export default BBsInsert;
