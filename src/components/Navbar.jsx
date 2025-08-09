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
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left: Logo */}
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center"
          >
            <img
              className="img-fluid me-3 d-none d-lg-block"
              src="./img/logo/SMZ.png"
              alt="SMZ Logo"
              style={{ maxHeight: "80px" }}
            />
          </a>

          {/* Center: Navbar */}
          <div className="text-center mx-auto d-flex d-lg-block ">
            <div className="d-flex d-lg-block align-items-center">
              <h2 className="text-dark fw-bold mb-0 mb-2">
                Mamlaka ya Usimamizi wa Mazingira Zanzibar (ZEMA)
              </h2>
              <button
                type="button"
                className="navbar-toggler "
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
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
          </div>

          {/* Right: Flag */}
          <div className="d-none d-lg-flex justify-content-end ">
            <img
              src="./img/logo/znz-flag.gif"
              alt="Zanzibar Flag"
              style={{ height: "60px" }}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
