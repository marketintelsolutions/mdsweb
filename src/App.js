import "./App.css";
import Homepage from "./screens/Homepage";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./screens/About";
import TechnologyDistribution from "./screens/Products/TechnologyDistribution";
import Footer from "./components/Footers/Footer";
import MediaEntertainment from "./screens/Products/MediaEntertainment";
import Fintech from "./screens/Products/Fintech";
import ManagedTechnologyServices from "./screens/Products/ManagedTechnologyServices";
import ProcurementAndDistribution from "./screens/Products/ProcurementAndDistribution";
import Profile from "./screens/Profile";

function App() {
  return (
    <div className=" pt-36">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/ManagedTechnologyServices"
            element={<ManagedTechnologyServices />}
          />
          <Route
            path="/ProcurementAndDistribution"
            element={<ProcurementAndDistribution />}
          />
          <Route path="/Fintech" element={<Fintech />} />
          <Route path="/MediaEntertainment" element={<MediaEntertainment />} />
          <Route
            path="/TechnologyDistribution"
            element={<TechnologyDistribution />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
