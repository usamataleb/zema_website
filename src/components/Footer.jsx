const Footer = () => {
  return (
    <div
      className="container-fluid footer mt-5 pt-5 wow fadeIn  footer "      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* contact us */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">contact us</h5>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>P.O Box 1234, Zanzibar
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i>+255 000 000 000
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>info@zema.go.tz
            </p>
          </div>

          {/* Our Partners */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Our Partners</h5>
            <a className="btn btn-link text-decoration-none" href="">
              Zanzibar Investment Promotion Authority (ZIPA)
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Zanzibar Tourism Commission (ZCT)
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Zanzibar Revenue Authority (ZRA)
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Zanzibar Utility Regulatory Authority (ZURA)
            </a>
            <a className="btn btn-link text-decoration-none" href="">
               Tanzania Revenue Authority (TRA) 
            </a>
          </div>

          {/* Related Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Related Links</h5>
            <a className="btn btn-link text-decoration-none" href="">
              Office of the First Vice President - Zanzibar
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              National Environmental Management Council (NEMC)
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Admin Portal
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Staff Mail
            </a>
          </div>

          {/* User Guide */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">User Guidance</h5>
            <a className="btn btn-link text-decoration-none" href="">
              ZEMA ACT: 2015
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Zanzibar Environmental Policy - 2013
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Zanzibar Plastic Bags Control - 2018
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              EIA Form
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              List of Experts / Companies 2022/23
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Additional Regulations and Guidelines
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Additional Legal Frameworks and Policies
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; {new Date().getFullYear()} <a>ZEMA</a>, All rights reserved.
            </div>
            <div className="col-md-6 text-center text-md-end ">
              <a>Developed by the IT Department</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;