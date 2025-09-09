import { useState, useEffect } from "react";

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
                <h2 className="text-dark fw-bold ">
                  Revolutionary Government of Zanzibar
                </h2>
                <h2 className="text-dark fw-bold mb-0 mb-2">
                  Zanzibar Environmental Management Authority (ZEMA)
                </h2>
              </div>
              <button
                type="button"
                className="navbar-toggler "
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse " id="navbarCollapse">
              <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about" className="nav-item nav-link">
                  About Us
                </a>
                <a href="service" className="nav-item nav-link">
                  Our Services
                </a>
                <a href="gallery" className="nav-item nav-link">
                  Gallery
                </a>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    News and Events
                  </a>

                  <div className="dropdown-menu bg-light border-0 m-0">
                    <a href="feature" className="dropdown-item">
                      Events
                    </a>
                    <a href="appointment" className="dropdown-item">
                      Press Releases
                    </a>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    History
                  </a>

                  <div className="dropdown-menu bg-light border-0 m-0">
                    <a href="feature.html" className="dropdown-item">
                      Reports
                    </a>
                    <a href="appointment.html" className="dropdown-item">
                      Rules and Regulations
                    </a>
                    <a href="appointment.html" className="dropdown-item">
                      Policies
                    </a>
                  </div>
                </div>

                <a href="contactus" className="nav-item nav-link">
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

      <style jsx>{`
        .navbar-scrolled {
          background-color: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(5px);
        }

        .navbar.sticky-top {
          top: -10px;
          transition: 0.5s;
        }

        @media (max-width: 991px) {
          .navbar-brand img {
            max-height: 80px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
