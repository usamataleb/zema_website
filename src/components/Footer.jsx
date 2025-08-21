const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Wasiliana nasi */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Wasiliana nasi</h5>
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
            <h5 className="text-light mb-4">Washirika Wetu</h5>
            <a className="btn btn-link text-decoration-none" href="">
              Mamlaka ya Uwekezaji Zanzibar (ZIPA)
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Tume ya Utalii Zanzibar (ZCT)
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Mamlaka ya Udhibiti wa Mafuta Zanzibar (ZPRA)
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Mamlaka ya Udhibiti Huduma Zanzibar (ZURA)
            </a>
          </div>

          {/* Related Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Tovuti Linganifu</h5>
            <a className="btn btn-link text-decoration-none" href="">
              Ofisi ya Makamu wa Kwanza wa Rais - Zanzibar
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Baraza la Taifa la Usimamizi wa Mazingira (NEMC)
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
            <h5 className="text-light mb-4">Mwongozo wa Mtumiaji</h5>
            <a className="btn btn-link text-decoration-none" href="">
              ZEMA ACT: 2015
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Sera ya Mazingira Zanzibar - 2013
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Udhibiti wa Mifuko ya Plastiki - 2018
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Fomu ya EIA
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Orodha ya Wataalam / Kampuni 2022/23
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Kanuni na Miongozo Zaidi
            </a>
            <a className="btn btn-link text-decoration-none" href="">
              Sheria na Sera Zaidi
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; {new Date().getFullYear()} <a href="#" className="text-decoration-none">ZEMA</a>, Haki zote zimehifadhiwa.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a className="text-decoration-none">Imetengenezwa na Kitengo cha Tehama</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;