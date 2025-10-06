import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const DirectorSample = () => {
  const [showModal, setShowModal] = useState(false);

  const previewText =
    "Click to read the full message from the Director General of ZEMA.";

  return (
    <>
      <div
        className="card director-card shadow-lg border-0 "
        onClick={() => setShowModal(true)}
      >
        {/* Image */}
        <img
          src="img/about.jpg"
          className="card-img-top"
          alt="Director General"
        />

        {/* Hover Overlay */}
        <div className="card-overlay d-flex flex-column justify-content-center align-items-center">
          <p>{previewText}</p>
        </div>

        {/* Footer */}
        <div className="card-body text-center bg-primary text-white">
          <small>Director General</small>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div
            className="modal show"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Director's Message</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body fs-5">
                  <p>Dear Visitors,</p>
                  <p>
                    On behalf of the Zanzibar Environmental Management Authority
                    (ZEMA), I am delighted to welcome you to our official
                    website.
                  </p>
                  <p>
                    Here you will find valuable resources regarding
                    environmental issues in Zanzibar such as the Environment
                    Policy of 2013, the Environmental Management Act, 2015,
                    regulations, and other procedures.
                  </p>
                  <p>
                    We hope this site helps you understand our work as a
                    regulatory body and the services we provide to ensure the
                    harmony of our environment and its sustainable development.
                  </p>
                  <p>
                    Thank you for visiting, and please don’t hesitate to contact
                    us for further information.
                  </p>
                  <p>I thank you,</p>
                  <p>
                    <strong>
                      Sheha M Juma <br />
                      Director General – ZEMA
                    </strong>
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default DirectorSample;
