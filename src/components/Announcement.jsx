import React, { useState, useEffect } from "react";
import { getData } from "../lib/appServices";
import Loader from "./Loader";
import { Button } from "react-bootstrap";

function RightPanel() {
  const [regulationData, setRegulationData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRegulationData() {
      setLoading(true);
      const data = await getData("attachments");
      setRegulationData(Array.isArray(data) ? data : []);
      setLoading(false);
    }
    fetchRegulationData();
  }, []);

  const attachments = regulationData || [];

  return (
    <>
      {/* Right Panel */}
      <div style={sliderStyles.documentPanel}>
        {/* Tab Navigation */}
        <div
          className="d-flex"
          style={{ borderBottom: "2px solid #e9ecef", background: "#f8f9fa" }}
        >
          <button
            style={{
              border: "none",
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#ffc107",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderBottom: "3px solid #ffc107",
              background: "#fff",
            }}
          >
            Attachments
          </button>
        </div>

        {/* Document Content */}
        <div className="p-4" style={sliderStyles.documentContent}>
          {/* Attachments List */}
          <div style={sliderStyles.attachmentsSection}>
            {loading ? (
              <Loader />
            ) : attachments.length === 0 ? (
              <div style={sliderStyles.noAttachments}>
                No attachments available
              </div>
            ) : (
              <ul className="list-group list-group-flush">
                {attachments.length === 0 ? (
                  <li className="list-group-item">No attachments found</li>
                ) : (
                  attachments.map((item) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center py-3"
                      key={item.id}
                    >
                      <div
                        className="d-flex align-items-center me-2"
                        style={{ overflow: "hidden" }}
                      >
                        <i className="fas fa-file-alt text-success me-3 flex-shrink-0"></i>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            lineHeight: "1.4",
                          }}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div className="d-flex text-nowrap flex-shrink-0">
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="me-1 px-2 py-1"
                          style={{ fontSize: "0.75rem" }}
                          onClick={() => handleShow(item)}
                        >
                          <i className="fas fa-eye me-1"></i> View
                        </Button>
                        <Button
                          variant="success"
                          size="sm"
                          href={item.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1"
                          style={{ color: "white", fontSize: "0.75rem" }}
                        >
                          <i className="fas fa-download me-1"></i> Download
                        </Button>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function handleShow(item) {
  if (item && item.src) {
    window.open(item.src, "_blank");
  }
}

const sliderStyles = {
  documentPanel: {
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    overflow: "auto",
    marginTop: "50px",
  },
  documentContent: {
    background: "linear-gradient(180deg, #e3f2fd, #e8f5e8)",
    minHeight: "450px",
  },
  attachmentsSection: {
    margin: "20px 0",
    overflow: "auto",
    maxHeight: "350px",
  },
  noAttachments: {
    textAlign: "center",
    color: "#6c757d",
    fontStyle: "italic",
    padding: "40px 0",
  },
};

export default RightPanel;
