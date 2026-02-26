import React from "react";

const Topbar = () => {
  return (
    <div
      className="container-fluid bg-[#939597] text-black  py-2 px-0 d-none d-lg-block"
      style={{ position: "relative", zIndex: 1050 }}
    >
      <div className="row gx-0 align-items-center justify-content-between">
        {/* Left: Contact Info */}
        <div className="col-lg-3 px-4 text-end d-flex ">
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
              className="btn btn-sm btn-outline-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Kiswahili
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Search + Language + Social */}
        <div className="col-lg-9 px-4 text-end d-flex justify-content-end align-items-center">
          <a
            href="https://eoffice.goz.go.tz/login"
            target="_blank"
            className="h-100 d-inline-flex align-items-center me-4 text-decoration-none text-black bg-white px-2 rounded"
          >
            <small className="fas fa-desktop me-2 "></small>
            <small className="fw-bold">e-office</small>
          </a>

          <a
            href="https://eprocurement.zppda.go.tz"
            target="_blank"
            className="h-100 d-inline-flex align-items-center me-4 text-decoration-none text-black bg-white px-2 rounded"
          >
            <small className="far fa-envelope-open me-2 "></small>
            <small className="fw-bold">e-Proz</small>
          </a>

          <a
            href="https://mail.zema.go.tz/"
            target="_blank"
            className="h-100 d-inline-flex align-items-center me-4 text-decoration-none text-black bg-white px-2 rounded"
          >
            <small className="far fa-envelope me-2 "></small>
            <small className="fw-bold">Staff-Mail</small>
          </a>

          <a
            href="https://zanvibali.goz.go.tz/ "
            target="_blank"
            className="h-100 d-inline-flex align-items-center me-4 text-decoration-none text-black bg-white px-2 rounded"
          >
            <small className="fas fa-file-contract me-2 "></small>
            <small className="fw-bold">ZanVibali</small>
          </a>

          <a
            href="https://billing.zanmalipo.go.tz"
            target="_blank"
            className="h-100 d-inline-flex align-items-center me-4 text-decoration-none text-black bg-white px-2 rounded"
          >
            <small className="fas fa-money-check-alt me-2 "></small>
            <small className="fw-bold">ZanMalipo</small>
          </a>

          {/* Social icons */}
          <div className="d-inline-flex align-items-center">
            <a className="text-dark ms-2" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-dark ms-2" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-dark ms-2" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-dark ms-2" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
