import React, { useState, useEffect } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import EnvironmentalImpact from "./EnvironmentalImpact";
import EnvironmentalAudit from "./InvironmentalAudit";
import EnvironmntalReport from "./EnvironmentalReport";
import EnvironmentalDirect from "./EnvironmentalDirect";
import PreAudit from "./PreAudit";

const EnvironmentalCertificates = () => {
  const location = useLocation();
  const [key, setKey] = useState("impact");

  useEffect(() => {
    if (location.state && location.state.activeTab) {
      setKey(location.state.activeTab);
    }
  }, [location.state]);

  return (
    <>
      <Container className="py-5">
        <div
          className="section-title text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="display-6 mb-2">Environmental Certificates</h1>

        </div>
        <Tabs
          id="environmental-certificates-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 custom-tabs justify-content-center"
          fill
        >
          <Tab eventKey="impact" title="Environmental Impact Assessment">
            <EnvironmentalImpact />
          </Tab>
          <Tab eventKey="audit" title="Environmental Audit">
            <EnvironmentalAudit />
          </Tab>
          <Tab eventKey="report" title="Environmental Report">
            <EnvironmntalReport />
          </Tab>
          <Tab eventKey="pre-audit" title="Pre Environmental Audit">
            <PreAudit />
          </Tab>
          <Tab eventKey="direct" title="Environment Direct Clearance">
            <EnvironmentalDirect />
          </Tab>
        </Tabs>
        <style>{`
        .custom-tabs .nav-link {
          color: #1a6a3d;
          font-weight: 600;
          border: none;
          border-bottom: 3px solid transparent;
          margin-bottom: 1rem;
        }
        .custom-tabs .nav-link:hover {
          color: #2c8c5a;
          border-color: rgba(44, 140, 90, 0.3);
        }
        .custom-tabs .nav-link.active {
          color: #1a6a3d;
          background-color: transparent;
          border-bottom: 3px solid #1a6a3d;
        }
      `}</style>
      </Container>
    </>
  );
};

export default EnvironmentalCertificates;
