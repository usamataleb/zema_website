import React from "react";

const EnvironmentalImpact = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center text-success">
        Environmental Impact Assessment (EIA) in Zanzibar
      </h2>

      <div className="alert alert-info mb-4">
        <p className="mb-0">
          Before any project or activity that may have significant impacts on
          the environment as well as on social conditions can be carried out, it
          must undergo an Environmental Impact Assessment (EIA). The EIA
          identifies potential environmental and social impacts of that activity
          and provides mechanisms to minimize those impacts.
        </p>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">
            <i className="fas fa-user-tie me-2"></i>
            Who undertakes an EIA in Zanzibar?
          </h4>
        </div>
        <div className="card-body">
          <p className="mb-0">
            According to the{" "}
            <strong>Zanzibar Environmental Management Act No. 3 of 2015</strong>
            , an EIA must be carried out by recognized experts or firms
            authorized to conduct an EIA in Zanzibar. The firm or expert is
            required to register and apply for recognition by the Zanzibar
            Environmental Management Authority (ZEMA).
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">
            <i className="fas fa-list-ol me-2"></i>
            Procedures in conducting an EIA
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
                registration forms and submitting them with proof of payment for
                the registration fee. A feasibility study or concept note must
                also be submitted.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">2</span> Screening
              </h5>
              <p className="mb-0">
                ZEMA reviews the feasibility study or concept note to determine
                the magnitude of the project and whether an EIA is required, and
                at what level.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">3</span> Selecting an
                Expert or Firm
              </h5>
              <p className="mb-0">
                ZEMA provides the proponent with a list of recognized
                experts/firms eligible to conduct EIAs in Zanzibar. The
                proponent selects and signs an agreement with one firm and
                notifies ZEMA.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">4</span> Scoping
              </h5>
              <p className="mb-0">
                Conducted by the selected expert/firm, scoping defines the Terms
                of Reference (ToR) and boundaries of the study. ToR are
                submitted to ZEMA for approval.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">5</span> Preparation of
                the EIA Report
              </h5>
              <p className="mb-0">
                The study is carried out, assessing environmental and social
                impacts, with mitigation measures and public consultations
                included.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">6</span> Submission to
                ZEMA
              </h5>
              <p className="mb-0">
                The proponent (via the expert/firm) submits 18 hard copies and
                one soft copy of the EIA report for review.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">7</span> Circulation to
                Stakeholders
              </h5>
              <p className="mb-0">
                ZEMA circulates the report to stakeholders for comments, which
                must be submitted in writing before the review meeting.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">8</span> Site
                Verification
              </h5>
              <p className="mb-0">
                ZEMA and stakeholders visit the site to confirm report details.
                The proponent pays fees for verification and review.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">9</span> Review of the
                EIA Report
              </h5>
              <p className="mb-0">
                Stakeholders evaluate the strengths and weaknesses of the report
                against ZEMA's review criteria.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">10</span>{" "}
                Decision-making
              </h5>
              <p className="mb-0">
                Outcomes may be approval, rejection, or a request for further
                information.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">11</span> Issuing of
                ESIA Certificate
              </h5>
              <p className="mb-0">
                If approved, an ESIA certificate valid for 5 years is issued
                with conditions attached.
              </p>
            </div>

            <div className="list-group-item">
              <h5 className="mb-1">
                <span className="badge bg-success me-2">12</span> Monitoring
              </h5>
              <p className="mb-0">
                ZEMA monitors the project to ensure compliance with the
                environmental and social management plan and certificate
                conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalImpact;
