const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                {/* <div className="col-lg-3 col-md-6">
                    <h1 className="text-white mb-4"><img className="img-fluid me-3" src="img/icon/icon-02-light.png" alt=""/>Insure</h1>
                    <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div> */}
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Wasiliana nasi</h5>
                    <p><i className="fa fa-map-marker-alt me-3"></i></p>
                    <p><i className="fa fa-phone-alt me-3"></i>+255 000 000 00</p>
                    <p><i className="fa fa-envelope me-3"></i>info@zema.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Tovuti linganifu</h5>
                    <a className="btn btn-link" href="">Wizara ya .....</a>
                    <a className="btn btn-link" href="">Baraza la wakilishi</a>
                    <a className="btn btn-link" href="">Wizara ya kilimo zanzibar</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Newsletter</h5>
                    <p>EKA KITU .</p>
                    <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">ZEMA</a>, Haki zote zimehifadhiwa.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        {/* <! This template is free as long as you keep the footer authors credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                         <a >Imetengenezwa na kitengo cha tehama</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
         )
}

export default Footer;
