import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import OrganizationStructure from "./pages/OrganizationStructure.jsx";
import News from "./pages/News";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import NewsCard from "./components/NewsCard.jsx";
import RulesAndRegulations from "./pages/Rules and Regulations.jsx";
import Policies from "./pages/Polices.jsx";
import Expert from "./pages/Expert.jsx";
import EnvironmentalImpact from "./pages/EnvironmentalImpact.jsx";
import EnvironmentalAudit from "./pages/InvironmentalAudit.jsx";
import EnvironmntalReport from "./pages/EnvironmentalReport.jsx";
import EnvironmentalDirect from "./pages/EnvironmentalDirect.jsx";
import PreAudit from "./pages/PreAudit.jsx";
import NewsDetails from "./pages/NewsDetails.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page" className="full-page">
          <Topbar />
          <Navbar />
          <main id="content" className="site-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/expert" element={<Expert />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/organization" element={<OrganizationStructure />} />
              <Route path="/NewsCard" element={<NewsCard />} />
              <Route
                path="/RulesAndRegulations"
                element={<RulesAndRegulations />}
              />

              <Route path="/policies" element={<Policies />} />
              <Route
                path="/EnvironmetalImpact"
                element={<EnvironmentalImpact />}
              />
              <Route
                path="/EnvironmentalAudit"
                element={<EnvironmentalAudit />}
              />
              <Route
                path="/EnvironmentalReport"
                element={<EnvironmntalReport />}
              />
              <Route
                path="/EnvironmentalDirect"
                element={<EnvironmentalDirect />}
              />
              <Route path="/PreAudit" element={<PreAudit />} />
              
              <Route path="/newsdetails/:id" element={<NewsDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
