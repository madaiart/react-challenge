import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import MusicBox from "./challenge/1";
import Home from "./Home";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/MusicBox">1. Sound Box</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>}/>        
        <Route path="/MusicBox" element={<MusicBox />}/>        
      </Routes>
    </div>
  );
}

export default App;
