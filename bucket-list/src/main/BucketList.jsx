import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  // render 밖에 어떤 함수에서 변수를 사용하는 방법
  //    사용하고자 하는 함수내에서 parent가 보낸 변수를
  //    분해한후 사용할 준비를 해야 한다.
  f1 = () => {
    const { bucketList } = this.props;
  };

  render() {
    // parent Component에서 보낸 변수를 받아서 분해한후 사용할 준비하기
    const { bucketList, handleFlagClick } = this.props;
    const bItemList = bucketList.map((bucket) => {
      return <BucketItem bucket={bucket} handleFlagClick={handleFlagClick} />;
    });

    return (
      <section className="w3-container-fluid w3-margin">
        <table className="w3-table w3-table-all">
          <tr>
            <th>FLAG</th>
            <th>날짜</th>
            <th>BUCKET</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
          {bItemList}
        </table>
      </section>
    );
  }
}

export default BucketList;
