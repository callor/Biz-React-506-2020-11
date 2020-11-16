import React, { Component } from "react";
import BBsInsert from "./BBsInsert";
import BBsList from "./BBsList";

const BBS_INSERT_URL = "http://localhost:5000/api/insert";
const BBS_UPDATE_URL = "http://localhost:5000/api/update";
const BBS_FETCH_URL = "http://localhost:5000/api/bbsList";
const BBS_FIND_BY_ID = "http://localhost:5000/api/view/";

class BBsMain extends Component {
  timer = "";
  state = {
    state1: "",
    state2: "",
    isFetch: false,
    bbsList: [
      { id: 0, b_writer: "홍길동", b_date: "2020-11-13", b_subject: "게시판" },
      { id: 1, b_writer: "이몽룡", b_date: "2020-11-13", b_subject: "게시판" },
      { id: 2, b_writer: "성춘향", b_date: "2020-11-13", b_subject: "게시판" },
    ],
    bbsData: {
      isUpdate: false,
      b_id: 0,
      b_writer: "",
      b_subject: "",
      b_content: "",
      b_date_time: "",
    },
  };

  componentDidMount() {
    this.fetchBBsList();
    // setInterval(callback,time)
    // 최초에 callbak함수가 실행되고 이후에 time 만큼 경과하면
    // 또 callback함수를 계속해서 실행하라
    this.timer = setInterval(() => this.fetchBBsList(), 5000);
  }

  // react에서 setInterval()을 사용하여 어떤 함수를 실행하면
  // 반드시 WillUnmount() 메서드에서
  // react가 종료되기전에 timer를 제거해주어야 한다
  componentWillUnmount() {
    this.timer = null;
  }

  // JS 에 표준으로 내장된 ajax method
  fetchBBsList = () => {
    this.setState({ ...this.state, isFetch: true });
    fetch(BBS_FETCH_URL)
      .then((res) => {
        // response 객체가 통째로 수신된 상태
        // reponse 객체 중에서 body부분만 json으로 변환하여
        // return
        return res.json();
      })
      .then((result) => {
        // 앞의 then()에서 return한 데이터를 result변수에 받고
        // bbsList에 데이터를 적용
        this.setState({
          bbsList: result,
          isFetch: false,
        });
      })
      .catch((err) => console.log(err));
  };

  handleUpdate = (id) => {
    fetch(BBS_FIND_BY_ID + id)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        // 서버로 부터 가져온 게시판 데이터를 bbsData에 풀어 놓고
        // isUpdate 칼럼만 true로 만들어라
        this.setState({ bbsData: { ...result, isUpdate: true } });
        // console.log(this.state.bbsData);
      });
  };

  render() {
    const { bbsList, state1, state2 } = this.state;
    return (
      <div>
        <BBsInsert
          insertURL={BBS_INSERT_URL}
          updateURL={BBS_UPDATE_URL}
          bbsData={this.state.bbsData}
        />
        <p>{this.state.isFetch ? "데이터가져오는중..." : "완료"}</p>
        <BBsList
          bbsList={bbsList}
          fetchBBs={this.fetchBBsList}
          handleUpdate={this.handleUpdate}
          state1={state1}
          state2={state2}
        />
      </div>
    );
  }
}

export default BBsMain;
