import React from "react";

const Director = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
              style="min-height: 400px;"
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/about.jpg"
                alt=""
                style="object-fit: cover;"
              />
              <div
                className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                style="width: 200px; height: 200px;"
              >
                <div className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3">
                  <h1 className="text-white mb-0">25</h1>
                  <h2 className="text-white">Years</h2>
                  <h5 className="text-white mb-0">Experience</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6 mb-5">
                We're Here To Assist You With Exploring Protection
              </h1>
              <p className="fs-5 text-primary mb-4">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet
                lorem sit clita duo justo erat amet
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 me-3"
                      src="img/icon/icon-04-primary.png"
                      alt=""
                    />
                    <h5 className="mb-0">Flexible Insurance Plans</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 me-3"
                      src="img/icon/icon-03-primary.png"
                      alt=""
                    />
                    <h5 className="mb-0">Money Back Guarantee</h5>
                  </div>
                </div>
              </div>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex align-items-center">
                  <img
                    className="flex-shrink-0 rounded-circle me-3"
                    src="img/profile.jpg"
                    alt=""
                  />
                  <h5 className="mb-0">Call Us: +012 345 6789</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
