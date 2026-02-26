import React from "react";

const EnvironmentalReport = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className="fw-bold mb-4 text-center text-success">
          Environmental Report (ER) in Zanzibar
        </h2>

        <div className="alert alert-info mb-4">
          <p className="mb-0">
            Before any proposed project or activity that is expected to have
            lesser impacts on the environment and society is carried out, an{" "}
            <strong>Environmental Report (ER)</strong> will be prepared for that
            project.
          </p>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h4 className="mb-0">
              <i className="fas fa-user-tie me-2"></i>
              Who prepares an ER in Zanzibar?
            </h4>
          </div>
          <div className="card-body">
            <p className="mb-0">
              Like the Environmental and Social Impact Assessment (ESIA)
              process, an ER must be prepared by{" "}
              <strong>recognized experts or firms</strong> authorized to conduct
              EIA, Environmental Reports, Environmental Audits, and Pre-Audits
              in Zanzibar.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header bg-success text-white">
            <h4 className="mb-0">
              <i className="fas fa-list-ol me-2"></i>
              Procedure for conducting an ER
            </h4>
          </div>
          <div className="card-body">
            <div className="list-group">
              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">1</span> Registration
                </h5>
                <p className="mb-0">
                  The proponent must register the project with ZEMA by
                  completing registration forms and submitting proof of payment
                  for the registration fee. The fee is determined by ZEMA based
                  on the project's nature and scale.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">2</span> Selecting an
                  Expert or Firm
                </h5>
                <p className="mb-0">
                  ZEMA provides the proponent with a list of recognized
                  experts/firms authorized to conduct ERs in Zanzibar. The
                  proponent selects one firm, enters an agreement, and notifies
                  ZEMA in writing of the chosen expert/firm.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">3</span> Preparation
                  of the Environmental Report
                </h5>
                <p className="mb-0">
                  After the screening decision, the selected expert/firm
                  prepares the ER. This process includes consultations with
                  affected stakeholders to incorporate their concerns and
                  comments.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">4</span> Submission of
                  ER to ZEMA
                </h5>
                <p className="mb-0">
                  Once the ER is completed, the proponent (through the selected
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
                  become familiar with the project area and confirm the report's
                  contents. The proponent covers the costs for site verification
                  and document review.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">6</span> Review of the
                  ER
                </h5>
                <p className="mb-0">
                  A technical committee reviews the ER to evaluate its strengths
                  and weaknesses and provide comments.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">7</span>{" "}
                  Decision-making
                </h5>
                <p className="mb-0">
                  ZEMA may approve the ER, disapprove it, or request additional
                  information.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">8</span> Issuing of
                  the Certificate
                </h5>
                <p className="mb-0">
                  If the ER is approved, ZEMA issues an{" "}
                  <strong>Environmental Clearance Certificate</strong>, with
                  conditions attached.
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
                  conditions of the Environmental Clearance Certificate.
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
              Environmental Report (ER) in Zanzibar
            </h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              An ER is required for projects with lesser environmental and
              social impacts, and must be prepared by ZEMA-recognized experts or
              firms.
            </p>

            <h5 className="mt-3 text-success">Steps in the ER Process</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Register project with ZEMA (forms + fee)
              </li>
              <li className="list-group-item">
                Select recognized expert/firm and notify ZEMA
              </li>
              <li className="list-group-item">
                Preparation of the Environmental Report (with stakeholder input)
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

export default EnvironmentalReport;
