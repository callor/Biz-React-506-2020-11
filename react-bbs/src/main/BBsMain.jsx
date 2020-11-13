import React, { Component } from "react";
import BBsInsert from "./BBsInsert";
import BBsList from "./BBsList";

class BBsMain extends Component {
  state = {
    state1: "",
    state2: "",
    bbsList: [
      { id: 0, b_writer: "홍길동", b_date: "2020-11-13", b_subject: "게시판" },
      { id: 1, b_writer: "이몽룡", b_date: "2020-11-13", b_subject: "게시판" },
      { id: 2, b_writer: "성춘향", b_date: "2020-11-13", b_subject: "게시판" },
    ],
  };

  render() {
    const { bbsList, state1, state2 } = this.state;
    return (
      <div>
        <BBsInsert />
        <BBsList bbsList={bbsList} state1={state1} state2={state2} />
      </div>
    );
  }
}

export default BBsMain;
