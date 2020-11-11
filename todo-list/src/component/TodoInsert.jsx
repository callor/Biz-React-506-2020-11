import React, { Component } from "react";
import "../css/TodoInsert.css";

class TodoInsert extends Component {
  render() {
    return (
      <div className="form">
        <input placeholder="할일을 입력하세요" />
        <div className="todo-insert">추가</div>
      </div>
    );
  }
}

export default TodoInsert;
