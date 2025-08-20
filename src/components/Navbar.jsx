import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light sticky-top px-4 px-lg-5">
      <a href="index.html" className="navbar-brand d-flex align-items-center">
        <h1 className="m-0">
          <img
            className="img-fluid me-3"
            src="./img/logo/SMZ.png"
            alt="SMZ Logo"
            style={{ width: "250px", height: "400px" }}
          />{" "}
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
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
                Press Release
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
                Policies and Regulations
              </a>
            </div>
          </div>

          <a href="contactus" className="nav-item nav-link">
            Contact Us
          </a>
        </div>
      </div>

            {scrolled && (
              <div
                className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0 mt-2 fade-in"
                id="navbarOutohide"
              >
                <a href="/" className="nav-item nav-link active">
                  Nyumbani
                </a>
                <a href="about" className="nav-item nav-link">
                  Kuhusu Zema
                </a>
                <a href="service" className="nav-item nav-link">
                  Huduma Zetu
                </a>
                <a href="gallery" className="nav-item nav-link">
                  Picha
                </a>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Habari na Matukio
                  </a>

                  <div className="dropdown-menu bg-light border-0 m-0">
                    <a href="feature" className="dropdown-item">
                      Matukio
                    </a>
                    <a href="appointment" className="dropdown-item">
                      Taarifa kwa Vyombo vya Habari
                    </a>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Kumbukumbu
                  </a>

                  <div className="dropdown-menu bg-light border-0 m-0">
                    <a href="feature.html" className="dropdown-item">
                      Ripoti
                    </a>
                    <a href="appointment.html" className="dropdown-item">
                      Kanuni na Taratibu
                    </a>
                    <a href="appointment.html" className="dropdown-item">
                      Sera na
                    </a>
                  </div>
                </div>

                <a href="contactus" className="nav-item nav-link">
                  Wasiliana Nasi
                </a>
              </div>
            )}
          {/* Right: Flag */}
          <div className="d-none d-lg-flex justify-content-end ">
            <img
              src="./img/logo/znz-flag.gif"
              alt="Zanzibar Flag"
              style={{ height: "60px" }}
            />
          </div>
      </nav>
    </>
  );
};

export default Navbar;
