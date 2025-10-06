const Footer = () => {
  return (
    <footer
      className="footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        background: "linear-gradient(135deg, #1a6a3d 0%, #2c8c5a 100%)",
        color: "white",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Us */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4 d-flex align-items-center">
              <i className="fas fa-headset me-2"></i> Contact Us
            </h5>
            <div className="d-flex align-items-center mb-3">
              <div className="footer-icon-wrapper me-3">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <span>
                P.O.Box 2808 26 Malawi Road,Maruhubi, 71111 Mjini Magharib,
                Zanzibar.
              </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="footer-icon-wrapper me-3">
                <i className="fa fa-phone-alt"></i>
              </div>
              <span>+255-773-734240</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="footer-icon-wrapper me-3">
                <i className="fa fa-envelope"></i>
              </div>
              <span>info@zema.go.tz</span>
            </div>
            <div className="mt-4">
              <h6 className="text-white mb-3">Follow Us</h6>
              <div className="d-flex">
                <a href="#" className="btn btn-sm btn-light btn-square me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-sm btn-light btn-square me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-sm btn-light btn-square me-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="btn btn-sm btn-light btn-square">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Our Partners */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4 d-flex align-items-center">
              <i className="fas fa-handshake me-2"></i> Our Partners
            </h5>
            <div className="footer-links">
              <a href="#" className="d-block mb-2">
                <i className="fas fa-arrow-right me-2 small"></i> Zanzibar
                Investment Promotion Authority (ZIPA)
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-arrow-right me-2 small"></i> Zanzibar
                Tourism Commission (ZCT)
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-arrow-right me-2 small"></i> Zanzibar
                Revenue Authority (ZRA)
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-arrow-right me-2 small"></i> Zanzibar
                Utility Regulatory Authority (ZURA)
              </a>
              <a href="#" className="d-block mb-0">
                <i className="fas fa-arrow-right me-2 small"></i> Tanzania
                Revenue Authority (TRA)
              </a>
            </div>
          </div>

          {/* Related Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4 d-flex align-items-center">
              <i className="fas fa-link me-2"></i> Related Links
            </h5>
            <div className="footer-links">
              <a href="#" className="d-block mb-2">
                <i className="fas fa-arrow-right me-2 small"></i> Office of the
                First Vice President - Zanzibar
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-arrow-right me-2 small"></i> National
                Environmental Management Council (NEMC)
              </a>
              <a href="https://zema.go.tz/admin" className="d-block mb-2">
                <i className="fas fa-arrow-right me-2 small"></i> Admin Portal
              </a>
              <a href="#" className="d-block mb-0">
                <i className="fas fa-arrow-right me-2 small"></i> Staff Mail
              </a>
            </div>

            {/* Quick Contact Form */}
            <div className="mt-4">
              <h6 className="text-white mb-3">Quick Contact</h6>
              <form>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    className="form-control form-control-sm"
                    rows="2"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn btn-light btn-sm w-100">Send</button>
              </form>
            </div>
          </div>

          {/* User Guide */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4 d-flex align-items-center">
              <i className="fas fa-book me-2"></i> User Guidance
            </h5>
            <div className="footer-links">
              <a href="#" className="d-block mb-2">
                <i className="fas fa-file-alt me-2 small"></i> ZEMA ACT: 2015
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-file-alt me-2 small"></i> Zanzibar
                Environmental Policy - 2013
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-file-alt me-2 small"></i> Zanzibar Plastic
                Bags Control - 2018
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-file-alt me-2 small"></i> EIA Form
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-users me-2 small"></i> List of Experts /
                Companies 2022/23
              </a>
              <a href="#" className="d-block mb-2">
                <i className="fas fa-gavel me-2 small"></i> Additional
                Regulations
              </a>
              <a href="#" className="d-block mb-0">
                <i className="fas fa-balance-scale me-2 small"></i> Legal
                Frameworks
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        className="container-fluid copyright py-3"
        style={{
          background: "rgba(0, 0, 0, 0.2)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <span className="text-light">
                &copy; {new Date().getFullYear()}{" "}
                <a href="#" className="text-white text-decoration-none">
                  ZEMA
                </a>
                , All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span className="text-light">
                Developed by the{" "}
                <a href="#" className="text-white text-decoration-none">
                  IT Department
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-icon-wrapper {
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .footer-links a:hover {
          color: #ffffff;
          transform: translateX(5px);
        }
        .btn-square {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
        }
        .form-control {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
