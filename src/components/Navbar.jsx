import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top px-4 px-lg-5">
      <a href="index.html" className="navbar-brand d-flex align-items-center">
        <h1 className="m-0">
          <img
            className="img-fluid me-3"
            src="./img/logo/SMZ.png"
            alt="SMZ Logo"
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
            Nyumbani
          </a>
          <a href="about" className="nav-item nav-link">
            Kuhusu Sisi
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
              <a href="feature.html" className="dropdown-item">
                Matukio
              </a>
              <a href="appointment.html" className="dropdown-item">
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

          <a href="contact.html" className="nav-item nav-link">
            Wasiliana Nasi
          </a>
        </div>
      </div>

      <img
        className="navbar-brand d-flex align-items-center"
        src="./img/logo/znz-flag.gif"
        alt="Zanzibar Flag"
        height={"97px"}
      />
    </nav>
  );
};

export default Navbar;
