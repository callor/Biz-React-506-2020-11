import React, { Component } from "react";
import BBsInsert from "./BBsInsert";
import BBsList from "./BBsList";

class BBsMain extends Component {
  render() {
    return (
      <div>
        <BBsInsert />
        <BBsList />
      </div>
    );
  }
}

export default BBsMain;
