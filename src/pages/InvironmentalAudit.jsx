import React from "react";

const InvironmentalAudit = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className="fw-bold mb-4 text-center text-success">
          Environmental Audit (EA) in Zanzibar
        </h2>

        <div className="alert alert-info mb-4">
          <p className="mb-0">
            An Environmental Audit shall be undertaken for any activity or
            project which is operating without an Environmental Impact
            Assessment (EIA) Certificate and is likely to have significant
            impacts on the environment and society; or for a project which has
            been operating with an EIA Certificate for a period of five years
            from the date of commencement of the operation phase.
          </p>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h4 className="mb-0">
              <i className="fas fa-user-tie me-2"></i>
              Who undertakes an Environmental Audit in Zanzibar?
            </h4>
          </div>
          <div className="card-body">
            <p className="mb-0">
              According to the{" "}
              <strong>
                Zanzibar Environmental Management Act No. 3 of 2015
              </strong>
              , an Environmental Audit must be carried out by recognized experts
              or firms. The firm or expert is required to register and apply for
              recognition with the Zanzibar Environmental Management Authority
              (ZEMA).
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header bg-success text-white">
            <h4 className="mb-0">
              <i className="fas fa-list-ol me-2"></i>
              Procedure for conducting an EA
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
                  on the nature and scale of the project.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">2</span> Selecting an
                  Expert or Firm
                </h5>
                <p className="mb-0">
                  ZEMA provides the proponent with a list of recognized
                  experts/firms eligible to conduct EAs in Zanzibar. The
                  proponent selects one firm, enters an agreement, and notifies
                  ZEMA in writing of the chosen expert/firm.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">3</span> Scoping
                </h5>
                <p className="mb-0">
                  The selected expert/firm develops a Scoping Report to identify
                  past and present environmental and social impacts, stakeholder
                  concerns, and the scope of the audit. The Scoping Report and
                  Terms of Reference (ToR) are submitted to ZEMA for approval.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">4</span> Preparation
                  of the EA Report
                </h5>
                <p className="mb-0">
                  After ToR approval, the audit is carried out and an EA Report
                  is prepared. The report describes project components,
                  identifies past and present impacts, and proposes mitigation
                  measures.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">5</span> Submission to
                  ZEMA
                </h5>
                <p className="mb-0">
                  The proponent (through the selected expert/firm) submits 18
                  hard copies and one soft copy of the EA Report to ZEMA for
                  review.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">6</span> Circulation
                  to Stakeholders
                </h5>
                <p className="mb-0">
                  ZEMA circulates the EA report to relevant stakeholders for
                  written comments prior to the review meeting.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">7</span> Site
                  Verification
                </h5>
                <p className="mb-0">
                  Before the review meeting, ZEMA and stakeholders conduct site
                  verification to confirm the report contents. The proponent
                  pays the verification and review fees.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">8</span> Review of the
                  EA Report
                </h5>
                <p className="mb-0">
                  Stakeholders evaluate the strengths and weaknesses of the
                  report against ZEMA's review criteria.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">9</span>{" "}
                  Decision-making
                </h5>
                <p className="mb-0">
                  ZEMA may approve the EA, disapprove it, or request further
                  information.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">10</span> Issuing of
                  EA Certificate
                </h5>
                <p className="mb-0">
                  If approved, ZEMA issues an EA Certificate (valid for five
                  years) with conditions attached.
                </p>
              </div>

              <div className="list-group-item">
                <h5 className="mb-1">
                  <span className="badge bg-success me-2">11</span> Monitoring
                  by ZEMA
                </h5>
                <p className="mb-0">
                  ZEMA monitors the project to ensure compliance with the
                  Environmental and Social Management Plan (ESMP) and conditions
                  of the EA Certificate.
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
              Environmental Audit (EA) in Zanzibar
            </h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              An EA is required where a project lacks an EIA Certificate but may
              have significant environmental/social impacts, or when a project
              has held an EIA Certificate for five years since operations began.
            </p>

            <h5 className="mt-3 text-success">Who can undertake an EA?</h5>
            <p className="mb-3">
              Only ZEMA-recognized experts or firms. Experts/firms must register
              with ZEMA to be officially recognized.
            </p>

            <h5 className="mt-3 text-success">Key steps</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Registration with ZEMA (forms + fee)
              </li>
              <li className="list-group-item">
                Select recognized expert/firm and notify ZEMA
              </li>
              <li className="list-group-item">Scoping and ToR submission</li>
              <li className="list-group-item">
                EA study and report preparation
              </li>
              <li className="list-group-item">
                Submit 18 hard copies + 1 soft copy to ZEMA
              </li>
              <li className="list-group-item">
                Circulation to stakeholders and site verification
              </li>
              <li className="list-group-item">
                Report review, decision, and issuance of EA Certificate
              </li>
              <li className="list-group-item">
                ZEMA monitoring and compliance checks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvironmentalAudit;
