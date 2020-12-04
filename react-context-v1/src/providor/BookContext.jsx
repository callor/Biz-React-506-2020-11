import { createContext } from "react";

/**
 * context Providor
 * React의 Parents -> child -> child -> child 처럼
 * 중첩되는 컴포넌트 계층에서
 * state 변수, 함수를 전달해야하는 구조를 단순화 시킬수 있는
 * 도우미 컴포넌트 이다.
 */
const BookContext = createContext();
export default BookContext;
