import React from "react";

const PreEnvironmental = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className="fw-bold mb-4 text-center text-success">
          Pre-Audit in Zanzibar
        </h2>

        <div className="alert alert-info mb-4">
          <p className="mb-0">
            A <strong>Pre-Audit</strong> is prepared for an on-going or proposed
            project that is expected to have a lesser level of impacts on the
            environment and society.
          </p>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h4 className="mb-0">
              <i className="fas fa-user-tie me-2"></i>
              Who prepares a Pre-Audit Report in Zanzibar?
            </h4>
          </div>
          <div className="card-body">
            <p className="mb-0">
              Like the Environmental Audit (EA), the Pre-Audit Report is
              prepared by <strong>recognized experts or firms</strong>{" "}
              authorized to conduct an Environmental Impact Assessment,
              Environmental Report, and Environmental Audit in Zanzibar.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header bg-success text-white">
            <h4 className="mb-0">
              <i className="fas fa-list-ol me-2"></i>
              Procedure for conducting a Pre-Audit
            </h4>
          </div>
          <div className="card-body">
            <div className="list-group">
              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">1</span> Registration
                </h5>
                <p className="mb-0">
                  A proponent must register the project with ZEMA by filling in
                  the registration forms and submitting them together with proof
                  of payment for the registration fee. The fee is determined by
                  ZEMA, taking into consideration the nature and scale of the
                  project.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">2</span> Selecting an
                  Expert or Firm
                </h5>
                <p className="mb-0">
                  ZEMA provides the proponent with a list of recognized
                  experts/firms eligible to conduct Pre-Audits in Zanzibar. The
                  proponent selects one firm, enters an agreement, and notifies
                  ZEMA in writing of the chosen expert/firm.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">3</span> Preparation
                  of the Pre-Audit Report
                </h5>
                <p className="mb-0">
                  The selected expert/firm prepares the Pre-Audit Report. During
                  this process, stakeholder concerns and comments are taken into
                  account.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">4</span> Submission of
                  the Pre-Audit Report to ZEMA
                </h5>
                <p className="mb-0">
                  Once completed, the proponent (through the selected
                  expert/firm) submits <strong>6 hard copies</strong> and{" "}
                  <strong>1 soft copy</strong> of the report to ZEMA for review.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">5</span> Site
                  Verification
                </h5>
                <p className="mb-0">
                  Before the review meeting, ZEMA conducts a site visit to
                  confirm the contents of the report and gain familiarity with
                  the project area. The proponent covers the costs of site
                  verification and document review.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">6</span> Review of the
                  Pre-Audit Report
                </h5>
                <p className="mb-0">
                  A technical committee reviews the report to evaluate its
                  strengths and weaknesses.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">7</span>{" "}
                  Decision-making
                </h5>
                <p className="mb-0">
                  ZEMA may approve the Pre-Audit, reject it, or request further
                  information.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">8</span> Issuing of
                  Environmental Clearance Certificate
                </h5>
                <p className="mb-0">
                  If approved, an{" "}
                  <strong>Environmental Clearance Certificate</strong> is issued
                  with conditions attached.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">9</span> Monitoring by
                  ZEMA
                </h5>
                <p className="mb-0">
                  ZEMA monitors the project to ensure compliance with the
                  approved Environmental and Social Management Plan (ESMP) and
                  the conditions of the Environmental Certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="card shadow-sm border-success">
          <div className="card-header bg-success text-white">
            <h3 className="card-title fw-bold mb-0">
              <i className="fas fa-file-alt me-2"></i>
              Pre-Audit in Zanzibar
            </h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              A Pre-Audit is required for ongoing or proposed projects with
              relatively lesser environmental and social impacts. It must be
              prepared by ZEMA-recognized experts or firms.
            </p>

            <h5 className="mt-3 text-success">
              Steps in the Pre-Audit Process
            </h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Register project with ZEMA (forms + fee)
              </li>
              <li className="list-group-item">
                Select recognized expert/firm and notify ZEMA
              </li>
              <li className="list-group-item">
                Preparation of the Pre-Audit Report (with stakeholder input)
              </li>
              <li className="list-group-item">
                Submit 6 hard copies + 1 soft copy to ZEMA
              </li>
              <li className="list-group-item">
                Site verification and review by ZEMA
              </li>
              <li className="list-group-item">
                Decision-making (approval, rejection, or request for info)
              </li>
              <li className="list-group-item">
                Issuing of Environmental Clearance Certificate
              </li>
              <li className="list-group-item">
                ZEMA monitoring for compliance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreEnvironmental;
