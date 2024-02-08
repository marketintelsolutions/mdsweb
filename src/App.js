import React from "react";
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
import SmartCreative from "./screens/Products/SmartCreative";
import UIUXDesign from "./screens/Services/UIUXDesign";
import ProductMerchandiseDesignServices from "./screens/Services/ProductMerchandiseDesignServices";
import PrintDesignServices from "./screens/Services/PrintDesignServices";
import WebDesignsServices from "./screens/Services/WebDesignsServices";
import CreativeDesign from "./screens/Services/CreativeDesign";
import Animation from "./screens/Services/Animation";
import CompleteCare from "./screens/ManagedTechnologyServices/CompleteCare";
import ITConsulting from "./screens/ManagedTechnologyServices/ITConsulting";
import ManagedSecurityService from "./screens/ManagedTechnologyServices/ManagedSecurityService";
import ManagedPlatformService from "./screens/ManagedTechnologyServices/ManagedPlatformService";
import ContactUs from "./screens/ContactUs";
import Products from "./screens/Products";
import Team from "./screens/Team";
import Directors from "./screens/Directors";
import PaySharp from "./screens/Products/PaySharp";
import GaslSolutions from "./screens/Products/GaslSolutions";
import Portfolio from "./screens/Portfolio";
import SharedLayout from "./components/Shared/SharedLayout";

function App() {
  return (
    <div className=" lg:pt-36">
      <Router>
        <SharedLayout>
          <Routes>
            <Route
              path="/ManagedTechnologyServices"
              element={<ManagedTechnologyServices />}
            />
            <Route
              path="/ProcurementAndDistribution"
              element={<ProcurementAndDistribution />}
            />
            <Route
              path="/ManagedSecurityService"
              element={<ManagedSecurityService />}
            />
            <Route
              path="/ManagedPlatformService"
              element={<ManagedPlatformService />}
            />
            <Route path="/Products" element={<Products />} />
            <Route path="/Directors" element={<Directors />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/ITConsulting" element={<ITConsulting />} />
            <Route path="/CompleteCare" element={<CompleteCare />} />
            <Route path="/SmartCreative" element={<SmartCreative />} />
            <Route path="/CreativeDesign" element={<CreativeDesign />} />
            <Route path="/WebDesignsServices" element={<WebDesignsServices />} />
            <Route
              path="/PrintDesignServices"
              element={<PrintDesignServices />}
            />
            <Route
              path="/ProductMerchandiseDesignServices"
              element={<ProductMerchandiseDesignServices />}
            />
            <Route path="/UIUXDesign" element={<UIUXDesign />} />
            <Route path="/Animation" element={<Animation />} />
            <Route path="/Fintech" element={<Fintech />} />
            <Route path="/MediaEntertainment" element={<MediaEntertainment />} />
            <Route
              path="/TechnologyDistribution"
              element={<TechnologyDistribution />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />

            <Route path="/" element={<Homepage />} />
            {/* NEW */}
            <Route path="/paysharp" element={<PaySharp />} />
            <Route path="/gaslsolutions" element={<GaslSolutions />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </SharedLayout>
      </Router>
    </div>
  );
}

export default App;
