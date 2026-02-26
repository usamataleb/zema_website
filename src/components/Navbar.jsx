import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top px-4 px-lg-5 ${
          scrolled ? "navbar-scrolled" : ""
        }`}
        style={{
          transition: "all 0.3s ease-in-out",
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          background: "linear-gradient(135deg, #1a6a3d 0%, #2c8c5a 100%)",
        }}
      >
        {" "}
        <div className="container-fluid d-flex justify-content-between align-items-center px-5 px-lg-5">
          {/* Left: Logo */}
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center pr-3"
          >
            <img
              className={`img-fluid me-3 d-none d-lg-block ${
                scrolled ? "logo-small" : ""
              }`}
              src="./img/logo/SMZ2.png"
              alt="SMZ Logo"
              style={{
                maxHeight: scrolled ? "80px" : "170px",
                transition: "max-height 0.3s ease-in-out",
              }}
            />
          </a>

          {/* Center: Navbar */}
          <div className="text-center mx-auto d-flex d-lg-block ">
            <div
              className={`align-items-center ${
                scrolled ? "d-none" : "d-flex d-lg-block"
              } `}
            >
              <div>
                {/* Mobile: short name */}
                <h2 className="text-light fw-bold mb-0 d-lg-none">ZEMA</h2>

                {/* Desktop: full name */}
                <div className="d-none d-lg-block">
                  <h2 className="text-light fw-bold">
                    The Revolutionary Government of Zanzibar
                  </h2>
                  <h2 className="text-light fw-bold mb-0 mb-2">
                    Zanzibar Environmental Management Authority (ZEMA)
                  </h2>
                </div>
              </div>
              <button
                type="button"
                className="d-lg-none"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-bars"
                  style={{ color: "#fff", fontSize: "1.2rem" }}
                ></i>
              </button>
            </div>

            <div className="collapse navbar-collapse " id="navbarCollapse">
              {/* Close button — visible only on mobile full-screen menu */}
              <button
                className="d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-label="Close menu"
                style={{
                  position: "absolute",
                  top: "1.2rem",
                  right: "1.2rem",
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10000,
                }}
              >
                <i
                  className="fa fa-times"
                  style={{ color: "#fff", fontSize: "1.2rem" }}
                ></i>
              </button>

              <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="about"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    About Us
                  </a>

                  <div className="dropdown-menu bg-light border-0 m-0">
                    <a href="/about" className="dropdown-item">
                      About ZEMA
                    </a>
                    <a href="/functions" className="dropdown-item">
                      Functions Of ZEMA
                    </a>
                    <a href="/power-of-zema" className="dropdown-item">
                      Power of ZEMA
                    </a>
                    <a href="/strategic-objectives" className="dropdown-item">
                      Strategic Objectives
                    </a>

                    <a href="/mission" className="dropdown-item">
                      Mission & Vision
                    </a>

                    <a href="/organization" className="dropdown-item">
                      Organizational Structure
                    </a>
                    <a href="/core-values" className="dropdown-item">
                      Core Values
                    </a>
                    <a href="/client-service-charter" className="dropdown-item">
                      Client Service Charter
                    </a>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <a href="/services" className="nav-link ">
                    Our Services
                  </a>
                </div>

                <a href="project" className="nav-item nav-link">
                  Our Projects
                </a>

                <a href="/gallery" className="nav-item nav-link">
                  Gallery
                </a>

                <a href="/news" className="nav-item nav-link">
                  News And Events
                </a>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Library
                  </a>

                  <div className="dropdown-menu bg-light border-0 m-0">
                    <a href="/RulesAndRegulations" className="dropdown-item">
                      Regulations & Guidence
                    </a>
                    <a href="/policies" className="dropdown-item">
                      Policies & Law
                    </a>
                    <a href="expert" className="dropdown-item">
                      List of Expert / Firm
                    </a>
                  </div>
                </div>

                <a href="/contactus" className="nav-item nav-link">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Right: Flag */}
          <div className="d-none d-lg-flex justify-content-end">
            <img
              src="./img/logo/znz-flag.gif"
              alt="Zanzibar Flag"
              style={{
                height: scrolled ? "60px" : "95px",
                transition: "height 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
