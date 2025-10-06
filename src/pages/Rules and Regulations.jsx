const RulesAndRegulations = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-6 mb-4 text-success">Rules and Guidance</h1>
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

                <ul className="list-group list-group-flush fs-5">
                  <li className="list-group-item">
                    <i className="fas fa-file-alt text-success me-2"></i>
                    <a
                      href="/pdf/EIA_FORM.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      EIA Form
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-file-alt text-success me-2"></i>
                    <a
                      href="/pdf/EIA_Procedures_2022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      Procedures for Conducting EIA
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-file-alt text-success me-2"></i>
                    <a
                      href="/pdf/EIA_EXPERTS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      List of Registered Experts/Firms 2022/23
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-file-alt text-success me-2"></i>
                    <a
                      href="/pdf/COST_REVIEW.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      Cost for EIA Review and Certificate
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-file-alt text-success me-2"></i>
                    <a
                      href="/pdf/GENERAL TOR FOR ENVIRONMENTAL AUDIT .pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      General TOR for Environmental Audit in Zanzibar
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-file-alt text-success me-2"></i>
                    <a
                      href="/pdf/GENERAL TOR FOR CONDCUTING ESIA IN ZANZIBAR.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      General TOR for EIA/ESIA in Zanzibar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesAndRegulations;
