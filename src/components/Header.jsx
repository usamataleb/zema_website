import React from "react";

function Header() {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-3 py-2"
      style={{ backgroundColor: "#2e7d32", color: "white" }}
    >
      <div className="d-flex align-items-center">
        {/* Badala ya import, tumia path ya moja kwa moja kutoka public */}
        <img src="/img/icon/SMZ_Logo.png" alt="ZEMA Logo" height="60" />
        <div className="ms-3">
          <h5 className="mb-0 text-uppercase">Serikali ya Mapinduzi Zanzibar</h5>
          <h6 className="mb-0">Mamlaka ya Usimamizi wa Mazingira Zanzibar (ZEMA)</h6>
        </div>
      </div>
      <div className="d-none d-md-block">
        <a href="#" className="text-white mx-2">
          e-Office
        </a>
        <a href="#" className="text-white mx-2">
          Ripoti
        </a>
        <a href="#" className="text-white mx-2">
          Huduma
        </a>
        <a href="#" className="text-white mx-2">
          Maoni
        </a>
      </div>
    </div>
  );
}

export default Header;
