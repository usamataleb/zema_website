import React from "react";
import Message from "./Message";

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
                src="img/about.png"
                alt="Director General"
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
            <Message />    
            </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
