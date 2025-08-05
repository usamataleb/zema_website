import React from "react";

const ContactUs = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5">Wasiliana Nasi</h1>
        </div>

        <div className="row g-4">
          {/* Anuani */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-light rounded p-4 text-center">
              <div className="mb-3">
                <i className="fas fa-map-marker-alt fa-2x text-success"></i>
              </div>
              <h5>Anuani</h5>
              <p>Barabara ya ......., Zanzibar, Tanzania</p>
            </div>
          </div>

          {/* Barua Pepe */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="bg-light rounded p-4 text-center">
              <div className="mb-3">
                <i className="fas fa-envelope fa-2x text-success"></i>
              </div>
              <h5>Barua Pepe</h5>
              <p>info@zema.go.tz</p>
            </div>
          </div>

          {/* Tovuti */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-light rounded p-4 text-center">
              <div className="mb-3">
                <i className="fas fa-globe fa-2x text-success"></i>
              </div>
              <h5>Tovuti</h5>
              <p>www.zema.go.tz</p>
            </div>
          </div>

          {/* Mawasiliano */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="bg-light rounded p-4 text-center">
              <div className="mb-3">
                <i className="fas fa-phone fa-2x text-success"></i>
              </div>
              <h5>Mawasiliano</h5>
              <p>+255 000 0000 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
