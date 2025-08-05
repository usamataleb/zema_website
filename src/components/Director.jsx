import React from "react";

const Director = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                style={{ width: "200px", height: "200px" }}
              >
                <div className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3">
                  <h2 className="text-white">ZEMA</h2>
                  <h5 className="text-white mb-0">Director General</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6 mb-5">Director Message</h1>

              <div className="fs-5 mb-4 text-justify">
                <p>Dear Visitors,</p>

                <p>
                  On behalf of the Zanzibar Environmental Management Authority
                  (ZEMA), I am very much delighted to have this opportunity to
                  welcome you to our official website.
                </p>

                <p>
                  Through this website you will find useful information
                  regarding environment issues in Zanzibar such as Environment
                  Policy of 2013, Environmental Management Act, 2015,
                  Regulations and other environmental procedures.
                </p>

                <p>
                  We do hope on this website, you will find all the undertakings
                  of ZEMA as a regulatory body of our environment as well as the
                  service we provide to realize the harmony of our environment
                  and its sustainable development.
                </p>

                <p>
                  We advance our sincere thanks for your visit and don’t
                  hesitate to contact us for any extra information regarding
                  environmental management in Zanzibar.
                </p>

                <p>I thank you,</p>

                <p>
                  <strong>
                    Sheha M Juma <br />
                    Director General – ZEMA
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
