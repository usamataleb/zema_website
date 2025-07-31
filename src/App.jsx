import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";


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
             {/*  <Route path="/gallery"  element={<Gallery />} />
              <Route path="/packages"  element={<Packages />} />
              <Route path="/package/:id"  element={<Package />} />
              <Route path="/contact"  element={<Contact />} />
              <Route path="/tanzania"  element={<Tanzania />} />
              <Route path="/zanzibar"  element={<Zanzibar />} />
              <Route path="/zanexcursion"  element={<ZanExcursion />} />
              <Route path="/tansafari"  element={<TanSafari />} /> */}
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;