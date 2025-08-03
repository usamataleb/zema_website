const Testimonial = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
                <h1 className="display-6 mb-5">What They Say About Our Insurance</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-left h-100">
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item text-center">
                            <img className="img-fluid rounded mx-auto mb-4" src="img/testimonial-1.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid rounded mx-auto mb-4" src="img/testimonial-2.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid rounded mx-auto mb-4" src="img/testimonial-3.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-right h-100">
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
          )
};

export default Testimonial;