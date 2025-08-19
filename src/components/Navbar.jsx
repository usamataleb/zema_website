import React from "react";
// import { useState } from "react";

// const [activeTab, setActiveTab] = useState("active");


const Navbar = () => {
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

      <img
        className="navbar-brand d-flex align-items-center"
        src="./img/logo/znz-flag.gif"
        alt="Zanzibar Flag"
        height={"97px"}
      />
    </nav>
        </>
  );
};

export default Navbar;
