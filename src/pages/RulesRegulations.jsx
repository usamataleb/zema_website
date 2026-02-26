import { getData } from "../lib/appServices";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Loader from "../components/Loader";

const RulesAndRegulations = () => {
  const [attachmentData, setAttachmentData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAttachmentData() {
      try {
        setLoading(true);
        const data = await getData("attachments/type/REGULATIONS_AND_GUIDANCE");
        setAttachmentData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load attachment data:", error);
        setLoading(false);
      }
    }

    fetchAttachmentData();
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedDoc(null);
  };

  const handleShow = (doc) => {
    setSelectedDoc(doc);
    setShowModal(true);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-6 mb-4 text-success">
            Regulations and Guidance
          </h1>
          <p className="lead">
            Legal Framework for Environmental Governance in Zanzibar
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-10 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded h-100 p-5 border-success shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-success rounded-circle p-3 me-4">
                    <i className="fas fa-file-pdf fa-2x text-white"></i>
                  </div>
                  <h3 className="mb-0 text-success">Downloadable Documents</h3>
                </div>
                {loading ? <Loader /> : (
                <ul className="list-group list-group-flush fs-5">
                  {attachmentData.length === 0 ? (
                    <li className="list-group-item">No attachments found</li>
                  ) : (
                    attachmentData.map((item) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={item.id}
                      >
                        <div className="d-flex align-items-center me-3">
                          <i className="fas fa-file-alt text-success me-3 flex-shrink-0"></i>
                          <span>{item.title}</span>
                        </div>
                        <div className="d-flex text-nowrap flex-shrink-0">
                          <Button
                            variant="outline-success"
                            size="sm"
                            className="me-2"
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
                            style={{ color: "black" }}
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
        </div>
      </div>

      {/* Document View Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDoc?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDoc && (
            <div className="ratio ratio-16x9">
              <iframe
                src={selectedDoc.src}
                title={selectedDoc.title}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selectedDoc && (
            <Button
              variant="success"
              href={selectedDoc.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RulesAndRegulations;
