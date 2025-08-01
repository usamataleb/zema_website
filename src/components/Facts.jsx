import React from "react";

const Facts = () => {
  return (
    <div className="container-fluid overflow-hidden my-5 px-lg-0">
      <div className="container facts px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 px-4 ps-lg-0">
              <h1 className="text-white mb-4">For Individuals And Organisations</h1>
              <p className="text-light mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a href="" className="align-self-start btn btn-secondary py-3 px-5">
                More Details
              </a>
            </div>
          </div>
          <div className="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 px-4 pe-lg-0">
              <div className="row g-5">
                <div className="col-sm-6">
                  <h1 className="display-5" data-toggle="counter-up">
                    1234
                  </h1>
                  <p className="fs-5 text-primary">Happy Clients</p>
                </div>
                <div className="col-sm-6">
                  <h1 className="display-5" data-toggle="counter-up">
                    1234
                  </h1>
                  <p className="fs-5 text-primary">Projects Succeed</p>
                </div>
                <div className="col-sm-6">
                  <h1 className="display-5" data-toggle="counter-up">
                    1234
                  </h1>
                  <p className="fs-5 text-primary">Awards Achieved</p>
                </div>
                <div className="col-sm-6">
                  <h1 className="display-5" data-toggle="counter-up">
                    1234
                  </h1>
                  <p className="fs-5 text-primary">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
