import logo from "./logo.svg";
import "./App.css";
import RCC from "./component/RCC";
import InOut from "./component/InOut";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RCC />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <InOut />
      </header>
    </div>
  );
}

export default App;
