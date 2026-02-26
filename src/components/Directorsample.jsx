import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Message from "./Message";

const DirectorSample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card director-card shadow-lg border-0" style={{ backgroundColor: "#d1cece" }} >
        <img
          src="img/about.png"
          className="card-img-top"
          alt="Director General"
          style={{ height: "500px", objectFit: "cover", objectPosition: "center 0%" }}
        />

        {/* Preview text */}
        <div className="text-center py-3" style={{ backgroundColor: "#d1cece" }} >
          <p>Click below to read the full message from the Director General of ZEMA.</p>
          <button
            className="btn btn-primary px-4"
            onClick={() => setShowModal(true)}
          >
            Open Message
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
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
              <div className="modal-body fs-5 " >
               <Message />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DirectorSample;
