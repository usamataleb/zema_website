import React, { useState, useEffect } from "react";
import { getData } from "../lib/appServices";
import Loader from "../components/Loader";
const Expert = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdf, setPDF] = useState([]);
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoaded(true);
  };
  useEffect(() => {
    async function fetchGalleryData() {
      setLoading(true);
      const data = await getData("attachments/type/LIST_OF_EXPERTS");
      setPDF(Array.isArray(data) ? data : []);
      setLoading(false);
    }
    fetchGalleryData();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            REGISTERED EXPERTS{" "}
          </h2>{" "}
          <div className="alert alert-info mb-4">
            <p className="mb-0">
              LIST OF REGISTERED COMPANIES/INDIVIDUAL EXPERTS FOR CONDUCTING AN
              ENVIRONMENTAL IMPACT ASSESSMENT IN ZANZIBAR:
            </p>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : pdf.length > 0 ? (
          <>
            <div className="row g-4 justify-content-center">
              <div className="col-12">
                <div className="position-relative">
                  {!iframeLoaded && (
                    <div className="text-center py-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-2">Loading document...</p>
                    </div>
                  )}

                  {iframeError ? (
                    <div
                      className="alert alert-danger text-center"
                      role="alert"
                    >
                      <h4>Document Failed to Load</h4>
                      <p>
                        The PDF document could not be loaded. Please try again
                        later or contact support.
                      </p>
                      <button
                        className="btn btn-primary mt-2"
                        onClick={() => window.location.reload()}
                      >
                        Retry
                      </button>
                    </div>
                  ) : (
                    <iframe
                      src={pdf[pdf.length - 1].src}
                      onLoad={handleIframeLoad}
                      onError={handleIframeError}
                      style={{
                        width: "100%",
                        height: "80vh",
                        border: "none",
                        display: iframeLoaded ? "block" : "none",
                      }}
                      title="Registered EIA Experts PDF"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <a
                href={pdf[pdf.length - 1].src}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download me-2"></i>
                Download PDF
              </a>
            </div>
          </>
        ) : (
          <p className="text-center">No PDF available</p>
        )}
      </div>
    </div>
  );
};

export default Expert;
