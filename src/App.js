import logo from "./logo.svg";
import "./App.css";
import Homepage from "./screens/Homepage";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./screens/About";

function App() {
  return (
    <div className="App pt-56">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
