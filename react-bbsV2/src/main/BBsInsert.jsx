import React, { Component } from "react";
import "../css/BBsInsert.css";

class BBsInsert extends Component {
  state = {
    b_writer: "",
    b_subject: "",
    b_content: "",
    isUpdate: false,
    b_id: 0,
  };

  componentDidUpdate(preProps, preState) {
    if (this.props.bbsData.b_id !== this.state.b_id) {
      this.setState({ ...this.props.bbsData });
    }
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { bbsSave } = this.props;

    const { state, handleOnChange } = this;
    const { b_writer, b_subject, b_content } = state;

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
        <button onClick={() => bbsSave(this.state)}>저장</button>
      </div>
    );
  }
}

export default BBsInsert;
