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
import RulesAndRegulations from "./pages/RulesRegulations.jsx";
import Policies from "./pages/Polices.jsx";
import Expert from "./pages/Expert.jsx";
import EnvironmentalCertificates from "./pages/EnvironmentalCertificates.jsx";
import NewsDetails from "./pages/NewsDetails.jsx";
import ContactUs from "./pages/Contactus.jsx";
import Projects from "./pages/Projects.jsx";
import MissionVision from "./pages/MissionVision.jsx";
import OurFunction from "./pages/OurFunction.jsx";
import PowerOfZema from "./pages/PowerOfZema.jsx";
import StrategicObjectives from "./pages/StrategicObjectives.jsx";
import CoreValues from "./pages/CoreValues.jsx";
import ClientServiceCharter from "./pages/ClientServiceCharter.jsx";
import OurServices from "./pages/OurServices.jsx";
import ProceduralGuide from "./pages/ProceduralGuide.jsx";
import NotFound from "./pages/NotFound.jsx";

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
              <Route path="/mission" element={<MissionVision />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/expert" element={<Expert />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/organization" element={<OrganizationStructure />} />
              <Route path="/NewsCard" element={<NewsCard />} />
              <Route path="/functions" element={<OurFunction />} />
              <Route
                path="/RulesAndRegulations"
                element={<RulesAndRegulations />}
              />

              <Route path="/policies" element={<Policies />} />
              <Route
                path="/environmental-certificates"
                element={<EnvironmentalCertificates />}
              />

              <Route path="/newsdetails/:id" element={<NewsDetails />} />
              <Route path="/power-of-zema" element={<PowerOfZema />} />
              <Route
                path="/strategic-objectives"
                element={<StrategicObjectives />}
              />
              <Route path="/core-values" element={<CoreValues />} />
              <Route
                path="/client-service-charter"
                element={<ClientServiceCharter />}
              />
              <Route path="/services" element={<OurServices />} />
              <Route path="/procedural-guide" element={<ProceduralGuide />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
