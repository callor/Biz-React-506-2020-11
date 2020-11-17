import React, { Component } from "react";
import "../css/BBsInsert.css";
import axios from "axios";

class BBsInsert extends Component {
  state = {
    b_writer: "",
    b_subject: "",
    b_content: "",
    isUpdate: false,
    b_id: 0,
  };

  componentDidUpdate(preProps, preState) {
    console.log(
      preProps.bbsData.b_id,
      preState.b_id,
      this.props.bbsData.b_id,
      this.state.b_id
    );

    if (this.props.bbsData.b_id !== this.state.b_id) {
      this.setState({ ...this.props.bbsData });
    }
  }

  shouldComponentUpdate(preProps, preState) {
    console.log("Should");
    // return preProps.bbsData.b_id !== this.state.b_id;
    return true;
  }
  componentDidMount() {
    // if (this.props.bbsData.isUpdate) {
    // this.state = this.props.bbsData;
    // console.log("INSERT ", this.props.bbsData);
    // this.setState({ ...this.props });
    // console.log("INSERT PROPS ", this.props.bbsData);
    // console.log("INSERT State ", this.state);
    // console.log("update");
    // }
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  bbsSave = () => {
    const { insertURL, updateURL, fetchBBs } = this.props;
    const url = this.state.isUpdate ? updateURL : insertURL;
    axios
      .post(url, {
        b_id: this.state.b_id,
        b_writer: this.state.b_writer,
        b_subject: this.state.b_subject,
        b_content: this.state.b_content,
      })
      .then((result) => {
        console.log(result);
        fetchBBs();
      })
      .catch((err) => console.log(err));
  };

  bbsNew = () => {
    this.setState({
      b_writer: "",
      b_subject: "",
      b_content: "",
      isUpdate: false,
      b_id: 0,
    });
  };

  render() {
    const { b_writer, b_subject, b_content } = this.state;
    const { bbsData } = this.props;
    // this.setState({ ...bbsData });
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
        <button onClick={this.bbsSave}>저장</button>
        <button onClick={this.bbsNew}>새로작성</button>
      </div>
    );
  }
}

export default BBsInsert;
