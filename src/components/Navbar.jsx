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

                <div className="nav-item dropdown">
                  <a
                    href="service"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Our Services
                  </a>

                  <div className="dropdown-menu bg-light border-0 m-0">
                    <div className="btn-group dropend">
                      <a
                        href="service"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Organization Certificate
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="/EnvironmetalImpact" className="dropdown-item">
                            Environmental Impact Assessment (EIA)
                          </a>
                        </li>
                        <li>
                          <a href="/EnvironmentalAudit" className="dropdown-item">
                            Environmental Audit (EA)
                          </a>
                        </li>
                        <li>
                          <a href="/EnvironmentalReport" className="dropdown-item">
                            Environmental Report (ER)
                          </a>
                        </li>
                        <li>
                          <a href="/PreAudit" className="dropdown-item">
                            Pre Environmental Audit
                          </a>
                        </li>
                        <li>
                          <a href="/EnvironmentalDirect" className="dropdown-item">
                            Environment Direct Clearance
                          </a>
                        </li>
                      </ul>
                    </div>

                    <a href="/organization" className="dropdown-item">
                      Organizational Structure
                    </a>

                    <a href="expert" className="dropdown-item">
                      List of Expert / Firm
                    </a>
                  </div>
                </div>

                <a href="/gallery" className="nav-item nav-link">
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

                  <div className="dropdown-menu bg-ligdropdown-itemht border-0 m-0">
                    <a href="/feature" className="dropdown-item">
                      Events
                    </a>
                    <a href="/appointment" className="dropdown-item">
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
                    Library
                  </a>

                  <div className="dropdown-menu bg-light border-0 m-0">
                    <a href="/RulesAndRegulations" className="dropdown-item">
                      Rules and Regulations
                    </a>
                    <a href="/policies" className="dropdown-item">
                      Policies
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

      <style jsx>{`
        .navbar-scrolled {
          background-color: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(5px);
        }

        .navbar.sticky-top {
          top: -10px;
          transition: 0.5s;
        }

        /* Custom styles for dropend positioning */
        .btn-group.dropend .dropdown-menu {
          position: absolute;
          top: 0;
          left: 100%;
          margin-top: 0;
          margin-left: 0.125rem;
          min-width: 280px;
          white-space: nowrap;
        }

        /* Ensure proper hover behavior for dropend */
        .btn-group.dropend:hover .dropdown-menu {
          display: block;
        }

        .dropdown:hover .dropdown-menu {
          display: block;
        }

        /* Hover effects for navigation items */
        .nav-link:hover {
          background-color: rgba(0, 123, 255, 0.1) !important;
          color: #007bff !important;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .dropdown-item:hover {
          background-color: #d0e6cc !important;
          color: #0e0d0d !important;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }

        /* Better text fitting */
        .dropdown-menu {
          padding: 0.5rem 0;
        }

        .dropdown-item {
          padding: 0.5rem 1rem;
          white-space: nowrap;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        /* Responsive text adjustments */
        @media (max-width: 1200px) {
          .dropdown-item {
            font-size: 0.85rem;
            padding: 0.4rem 0.8rem;
          }

          .btn-group.dropend .dropdown-menu {
            min-width: 260px;
          }
        }

        @media (max-width: 991px) {
          .navbar-brand img {
            max-height: 80px !important;
          }

          /* On mobile, revert to normal dropdown behavior */
          .btn-group.dropend .dropdown-menu {
            position: static;
            display: none;
            margin-left: 1rem;
            min-width: auto;
          }

          .dropdown-item {
            font-size: 0.9rem;
            white-space: normal;
            word-wrap: break-word;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
