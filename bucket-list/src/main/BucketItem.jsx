import React, { Component } from "react";
import Moment from "react-moment";

class BucketItem extends Component {
  b_flag_text = ["일반", "중요", "매우중요", "긴급"];
  cursorStyle = { cursor: "pointer" };

  render() {
    const { bucket, handleFlagClick } = this.props;
    /**
     * 이벤트 핸들러 등록 주의!!
     * 이벤트 핸들러를 등록할때 아래와 같이 등록해 버리면
     * onClick={ handleClick(값) }
     * 이 코드는 이벤트 핸들러를 등록하는 것이 아니라 즉시 실행코드가 되어 버린다
     * 즉, 데이터가 rendering될때 데이터의 개수만큼 반복적으로
     * 함수가 즉시 호출되어 문제가 발생한다.
     *
     * 이벤트 핸들러에게 어떤 값을 전달하고 싶을때는 callback 방식으로 전달해야 한다
     * onClick=>{ ()=>{ handleClick(값) } }
     *
     */
    return (
      <tr>
        <td
          style={this.cursorStyle}
          onClick={() => {
            handleFlagClick(bucket.b_id);
          }}
        >
          {this.b_flag_text[bucket.b_flag % 4]}
        </td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{bucket.b_start_date}</Moment>
        </td>
        <td style={{ cursor: "pointer", color: "blue" }}>{bucket.b_title}</td>

        <td>
          {bucket.b_end_check ? (
            <Moment format="YYYY-MM-DD HH:mm:ss">{bucket.b_end_date}</Moment>
          ) : (
            "ⓞ"
          )}
        </td>
        <td>
          <input type="checkbox" value={bucket.b_cancel} />
        </td>
      </tr>
    );
  }
}
export default BucketItem;
