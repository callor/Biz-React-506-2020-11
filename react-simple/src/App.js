import "./App.css";
// component/CompLast.jsx 파일에 작성된 컴포넌트를 import하고
// CompLast라는 이름으로 사용하겠다
import CompLast from "./component/CompLast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompLast />
      </header>
    </div>
  );
}

export default App;
