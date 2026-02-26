import { useState, useEffect, useRef } from "react";
import { Collapse } from "bootstrap";
import "../assets/css/style.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const collapseRef = useRef(null);
  const bsCollapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialise Bootstrap Collapse instance (no auto-toggle)
  useEffect(() => {
    const el = collapseRef.current;
    if (!el) return;
    bsCollapseRef.current = new Collapse(el, { toggle: false });

    const onShow = () => setNavOpen(true);
    const onHide = () => setNavOpen(false);
    el.addEventListener("show.bs.collapse", onShow);
    el.addEventListener("hide.bs.collapse", onHide);
    return () => {
      el.removeEventListener("show.bs.collapse", onShow);
      el.removeEventListener("hide.bs.collapse", onHide);
    };
  }, []);

  const handleToggle = () => {
    const bs = bsCollapseRef.current;
    if (!bs) return;
    navOpen ? bs.hide() : bs.show();
  };

  const closeNav = () => {
    bsCollapseRef.current?.hide();
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light sticky-top px-4 px-lg-5 ${scrolled ? "navbar-scrolled" : ""
        }`}
      style={{
        transition: "all 0.3s ease-in-out",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
        background: "linear-gradient(135deg, #1a6a3d 0%, #2c8c5a 100%)",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-5 px-lg-5">

        {/* Left: Logo — small on mobile, large on desktop */}
        <a href="/" className="navbar-brand d-flex align-items-center pr-3">
          {/* Mobile logo */}
          <img
            className="img-fluid d-lg-none"
            src="./img/logo/SMZ2.png"
            alt="SMZ Logo"
            style={{ height: "45px" }}
          />
          {/* Desktop logo */}
          <img
            className={`img-fluid me-3 d-none d-lg-block ${scrolled ? "logo-small" : ""}`}
            src="./img/logo/SMZ2.png"
            alt="SMZ Logo"
            style={{
              maxHeight: scrolled ? "80px" : "170px",
              transition: "max-height 0.3s ease-in-out",
            }}
          />
        </a>

        {/* Mobile ONLY: ZEMA — direct flex child → truly centered between logo and toggle */}
        <h2
          className="text-light fw-bold mb-0 d-lg-none"
          style={{ flexGrow: 1, textAlign: "center" }}
        >ZEMA</h2>

        {/* Mobile ONLY: toggle button on the far right */}
        <button
          type="button"
          className="d-lg-none"
          aria-controls="navbarCollapse"
          aria-expanded={navOpen}
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          onClick={handleToggle}
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1.5px solid rgba(255,255,255,0.4)",
            borderRadius: "8px",
            padding: "8px 12px",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <i
            className={navOpen ? "fa fa-times" : "fa fa-bars"}
            style={{ color: "#fff", fontSize: "1.2rem" }}
          />
        </button>

        {/* Desktop ONLY: centered title + nav links */}
        <div className="text-center mx-auto d-none d-lg-block">
          <div className={scrolled ? "d-none" : ""}>
            <h2 className="text-light fw-bold">
              The Revolutionary Government of Zanzibar
            </h2>
            <h2 className="text-light fw-bold mb-0 mb-2">
              Zanzibar Environmental Management Authority (ZEMA)
            </h2>
          </div>

          {/* Nav links — collapse on mobile */}
          <div className="collapse navbar-collapse" id="navbarCollapse" ref={collapseRef}>

            {/* Close button — inside the overlay, always reachable */}
            <button
              className="d-lg-none"
              type="button"
              onClick={closeNav}
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
              <i className="fa fa-times" style={{ color: "#fff", fontSize: "1.2rem" }} />
            </button>

            <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">

              <a href="/" className="nav-item nav-link active" onClick={closeNav}>
                Home
              </a>

              {/* About Us dropdown */}
              <div className="nav-item dropdown">
                <a
                  href="/about"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <div className="dropdown-menu bg-light border-0 m-0">
                  <a href="/about" className="dropdown-item" onClick={closeNav}>About ZEMA</a>
                  <a href="/functions" className="dropdown-item" onClick={closeNav}>Functions Of ZEMA</a>
                  <a href="/power-of-zema" className="dropdown-item" onClick={closeNav}>Power of ZEMA</a>
                  <a href="/strategic-objectives" className="dropdown-item" onClick={closeNav}>Strategic Objectives</a>
                  <a href="/mission" className="dropdown-item" onClick={closeNav}>Mission &amp; Vision</a>
                  <a href="/organization" className="dropdown-item" onClick={closeNav}>Organizational Structure</a>
                  <a href="/core-values" className="dropdown-item" onClick={closeNav}>Core Values</a>
                  <a href="/client-service-charter" className="dropdown-item" onClick={closeNav}>Client Service Charter</a>
                </div>
              </div>

              <div className="nav-item">
                <a href="/services" className="nav-link" onClick={closeNav}>Our Services</a>
              </div>

              <a href="/project" className="nav-item nav-link" onClick={closeNav}>Our Projects</a>

              <a href="/gallery" className="nav-item nav-link" onClick={closeNav}>Gallery</a>

              <a href="/news" className="nav-item nav-link" onClick={closeNav}>News And Events</a>

              {/* Library dropdown */}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Library
                </a>
                <div className="dropdown-menu bg-light border-0 m-0">
                  <a href="/RulesAndRegulations" className="dropdown-item" onClick={closeNav}>Regulations &amp; Guidance</a>
                  <a href="/policies" className="dropdown-item" onClick={closeNav}>Policies &amp; Law</a>
                  <a href="/expert" className="dropdown-item" onClick={closeNav}>List of Expert / Firm</a>
                </div>
              </div>

              <a href="/contactus" className="nav-item nav-link" onClick={closeNav}>Contact Us</a>

            </div>
          </div>
        </div>

        {/* Right: Flag — desktop only */}
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
  );
};

export default Navbar;
