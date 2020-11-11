import React, { Component } from "react";
import "../css/TodoMain.css";
import "./TodoInsert";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

/**
 * class 방식의 Component
 * 반드시 react Component 클래스를 상속받아야 한다
 * render() method를 사용하여 실제 view를 구현하도록 되어있다
 * 함수방식에서 바로 나타나던 return문이 render() method 내부에 위치한다
 */
class TodoMain extends Component {
  id = 3;
  // class 방식에서 state 변수 선언하기
  state = {
    todoList: [
      { id: 0, text: "오늘은 빼빼로 데이", isComplete: false },
      { id: 1, text: "오늘은 수요일", isComplete: true },
      { id: 2, text: "TODO List만드는 날", isComplete: false },
    ],
  };

  render() {
    return (
      <main className="todo-main">
        <h3>TO-DO List</h3>
        <TodoInsert />
        <TodoList todoList={this.state.todoList} />
      </main>
    );
  }
}

export default TodoMain;
