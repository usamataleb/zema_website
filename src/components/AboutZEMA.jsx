import React from "react";
import Intro from "./Intro";

const AboutZEMA = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <h2 className="fw-bold mb-4 text-center text-success">
            About Zema{" "}
          </h2>{" "}
        </div>
        <div className="row g-4">
          <Intro />
          <div
            className="col-lg-12 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="service-item rounded h-100 p-5">
              <div className="card-body">
                <h5 className="card-title mb-0">MAIN OBJECTIVE</h5>
                <p className="card-text">
                  The main objective of ZEMA is to oversee the implementation and enforcement of environmental laws, regulations, guidelines, and standards in order to reduce pollution and environmental degradation.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutZEMA;
