import React from "react";
import { Link } from "react-router-dom";
const BBsNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>자유게시판</Link>
        </li>
        <li>
          <Link>공지사항</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BBsN;
