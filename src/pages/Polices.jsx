const Policies = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-6 mb-4 text-success">Policies</h1>
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
                    <i className="fas fa-book fa-2x text-white"></i>
                  </div>
                  <h3 className="mb-0 text-success">
                    Zanzibar Environmental Management Act of 2015
                  </h3>
                </div>

                <p className="card-text fs-5">
                  The Zanzibar Environmental Management Act of 2015 serves as
                  the primary legal framework for environmental governance in
                  Zanzibar. It establishes the Zanzibar Environmental Management
                  Authority (ZEMA) as the central body responsible for
                  coordinating and enforcing environmental management across the
                  islands.
                </p>

                <p className="card-text fs-5">
                  Under this Act, ZEMA is mandated to oversee Environmental
                  Impact Assessments (EIAs), monitor environmental activities,
                  issue relevant permits, and take enforcement actions against
                  individuals or entities that violate environmental laws. The
                  Act is guided by fundamental principles, including the
                  precautionary principle, the polluter pays principle, and the
                  obligation to ensure a clean, safe, and healthy environment
                  for present and future generations.
                </p>

                <div className="mt-4 pt-3 border-top">
                  <h5 className="text-success mb-3">Key Principles:</h5>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-success">
                        <div className="card-body text-center">
                          <i className="fas fa-exclamation-triangle fa-2x text-success mb-2"></i>
                          <h6 className="card-title">
                            Precautionary Principle
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-success">
                        <div className="card-body text-center">
                          <i className="fas fa-money-bill-wave fa-2x text-success mb-2"></i>
                          <h6 className="card-title">
                            Polluter Pays Principle
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 border-success">
                        <div className="card-body text-center">
                          <i className="fas fa-seedling fa-2x text-success mb-2"></i>
                          <h6 className="card-title">
                            Sustainable Environment
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
