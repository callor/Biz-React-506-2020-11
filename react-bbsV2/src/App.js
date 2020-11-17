import BackImg from "./Landscape.jpg";
import "./App.css";
import BBsMain from "./main/BBsMain";

import BBsAdmin from "./main/BBsAdmin";
/**
 * react-router-dom을 이용한 singepage Navigation
 * 한 화면에서 열러개의 컴포넌트를 번갈아 보여주기 위해 사용하는 메뉴시스템
 * 사용자가 선택한 메뉴에 따라 컴포넌트를 번갈아 보여주지만, 전체적인 화면은
 * rendering 되지 않기 때문에 static(정적) 페이지를 구성할때도
 * 서버에 request 를 보내고 서버가 반응하는 것에 따라 전체화면이 refresh 되는
 * 전통적인 web 서버 구성보다 통신적인 비용발생이 매우 적다
 * 실제 데이터에 따라 rendering되도록 설계된 react 이지만, 일반적인 html과 같은
 * 화면을 구성할때도 react의 가상DOM, 부분렌더링 철학이 적용된다.
 *
 * 1. BrowserRouter와 Route 컴포넌트를 사용하여 네이베이션 결과에 따라 보여줄
 * 화면 layout을 만들고
 * 2. Link 컴포넌트로 만든 Nav.jsx 컴포넌트를 생성하여, 메뉴와 렌더링 화면을 분리한다
 * <BrowserRouter>
 *    <Nav.jsx />
 *    <Route path="/" component={컴포넌트} />
 * </BrowserRouter>
 *
 */
import BBsNav from "./main/BBsNav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100wh 50vh",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>REACT BBS 2020</h3>
        <p>React로 구현하는 BBS Project</p>
      </header>
      <input placeholder="input"></input>
      <Router>
        <BBsNav />
        <Route exact path="/" component={BBsMain} />
        <Route path="/notice" component={BBsAdmin} />
      </Router>
      <footer className="footer">
        <address>CopyRigh &copy; callor@callor.com</address>
      </footer>
    </div>
  );
}

export default App;
