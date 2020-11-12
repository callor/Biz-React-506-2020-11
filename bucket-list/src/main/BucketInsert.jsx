import React, { Component } from "react";

class BucketInsert extends Component {
  /**
   * input box에서 사용자의 입력을 받아 저장할 state변수 선언하기
   *
   */
  state = {
    bucket_title: "",
  };

  handleOnChange = (e) => {
    // this.setState({ bucket_title: e.target.value });
    /**
     * input box가 여려개 일 경우
     * input box에 state변수명을 name 속성으로 지정하고
     * <input name="bucket_title"/>
     * 아래와 같이 변수값을 세팅한다.
     * this.setState( {  [e.target.name] : e.target.value })
     */
    this.setState({ [e.target.name]: e.target.value });
  };

  /**
   * 키보드로 문자열을 입력하는 도중 Enter키를 누르면
   * @param {*} e
   */
  handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      // props, state를 분해하지 않고 직접 핸들링
      // this.props.bucketInsert(this.state.bucket_title);

      // const { bucketInsert } = this.props;
      // bucketInsert(this.state.bucket_title);

      const { bucketInsert } = this.props;
      const { bucket_title } = this.state;
      bucketInsert(bucket_title);
    }
  };

  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          <input
            name="bucket_title"
            value={this.state.bucket_title}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
            className="w3-input w3-border w3-hover-gray w3-round"
            placeholder="버킷에 추할 내용을 입력하세요..."
          />
        </div>
      </section>
    );
  }
}

export default BucketInsert;
