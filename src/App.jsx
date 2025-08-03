import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import News from  "./pages/News";


function App() {
  return (
    <Router>
      <div className="App">
        <div id="page" className="full-page">
          <Topbar />
          <Navbar />
          <main id="content" className="site-main">
            <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/about"  element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/service" element={<Service />} />
              {/* <Route path="/organiztionstructure" element={<OrganizationStructure />}
               <Route path="/gallery"  element={<Gallery />} />
              <Route path="/packages"  element={<Packages />} />
              <Route path="/package/:id"  element={<Package />} />
              <Route path="/contact"  element={<Contact />} />
              <Route path="/tanzania"  element={<Tanzania />} />
              <Route path="/zanzibar"  element={<Zanzibar />} />
              <Route path="/zanexcursion"  element={<ZanExcursion />} />
              <Route path="/tansafari"  element={<TanSafari />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;