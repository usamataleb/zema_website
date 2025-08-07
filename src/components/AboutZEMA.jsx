import React from "react";
import Intro from "./Intro";

const AboutZEMA = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-6">KUHUSU ZEMA</h1>
        </div>
        <div className="row g-4">
          <Intro />
          <div
            className="col-lg-12 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="service-item rounded h-100 p-5">
              <div className="card-body">
                <h5 className="card-title mb-0">LENGO KUU</h5>
                <p className="card-text">
                  Lengo kuu la ZEMA ni kusimamia utekelezaji na uzingatiaji wa
                  Sheria, kanuni, miongozo na viwango vya mazingira kwa ajili ya
                  kupunguza uchafuzi na uharibifu wa mazingira.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded h-100 p-5">
              <div className="card-body">
                <h5 className="card-title mb-0">DIRA</h5>
                <p className="card-text">
                  "Kuwa na Zanzibar yenye mazingira endelevu kwa faida ya kizazi
                  cha sasa na kijacho."
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded h-100 p-5">
              <div className="card-body">
                <h5 className="card-title mb-0">DHAMIRA</h5>
                <p className="card-text">
                  Kuimarisha usimamizi na utekelezaji bora na mzuri wa sheria ya
                  mazingira; tathmini ya athari za kimazingira; ukaguzi na
                  ufuatiliaji wa kimazingira.
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
