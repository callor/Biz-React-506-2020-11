import BackImg from "./Landscape.jpg";
import "./App.css";
import BBsMain from "./main/BBsMain";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import BBsNav from "./main/BBsNav";

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
      <BBsMain />
      <footer className="footer">
        <address>CopyRigh &copy; callor@callor.com</address>
      </footer>
    </div>
  );
}

export default App;
