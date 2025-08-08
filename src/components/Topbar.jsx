import React from "react";

const Topbar = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
      <div className="row gx-0 align-items-center justify-content-between">

        {/* Left: Contact Info */}
        <div className="col-lg-3 px-4 text-start">
          <div className="h-100 d-inline-flex align-items-center me-3">
            <small className="fa fa-phone-alt me-2"></small>
            <small>+255 123 456 789</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center me-3">
            <small className="far fa-envelope-open me-2"></small>
            <small>info@zema.go.tz</small>
          </div>
        </div>

        {/* Right: Search + Language + Social */}
        <div className="col-lg-3 px-4 text-end d-flex justify-content-end align-items-center">

          {/* Search box */}
          <div className="me-2">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search..."
              style={{ width: "130px" }}
            />
          </div>

          {/* Language selector */}
          <div className="dropdown me-3">
            <button
              className="btn btn-sm btn-outline-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Kiswahili</a></li>
              <li><a className="dropdown-item" href="#">English</a></li>
            </ul>
          </div>

          {/* Social icons */}
          <div className="d-inline-flex align-items-center">
            <a className="text-white-50 ms-2" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="text-white-50 ms-2" href="#"><i className="fab fa-twitter"></i></a>
            <a className="text-white-50 ms-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="text-white-50 ms-2" href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
