import React from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Environmental Regulation & Enforcement",
      description:
        "ZEMA enforces the provisions of the Zanzibar Environmental Management Act and all related environmental laws and regulations. We ensure that development projects, businesses, and communities comply with established environmental standards to protect Zanzibar’s natural resources.",
      icon: "fa-gavel",
    },
    {
      id: 2,
      title: "Environmental Assessment",
      description:
        "ZEMA coordinates, reviews, and oversees Environmental and Social Impact Assessments (ESIAs), Environmental Reports, and Environmental Audits for proposed projects and investments. These services ensure that development activities are environmentally sustainable and socially responsible.",
      icon: "fa-clipboard-check",
    },
    {
      id: 3,
      title: "Permits, Licenses & Approvals",
      description:
        "ZEMA issues environmental certificates, permits, licenses, and approvals in accordance with legal and regulatory requirements. These services facilitate responsible development while safeguarding environmental integrity.",
      icon: "fa-file-signature",
    },
    {
      id: 4,
      title: "Environmental Compliance Monitoring",
      description:
        "ZEMA conducts environmental monitoring to reduce and minimize environmental degradation and pollution. In addition, we provide Environmental Compliance Monitoring to ensure that all projects, businesses, and development activities adhere to environmental laws.",
      icon: "fa-search",
    },
    {
      id: 5,
      title: "Public Complaints & Stakeholder Engagement",
      description:
        "ZEMA receives, investigates, and addresses environmental complaints, concerns, and reports submitted by the public and relevant stakeholders. We actively engage communities and institutions to promote accountability, transparency, and participatory environmental management.",
      icon: "fa-users",
    },
    {
      id: 6,
      title: "Environmental Education & Awareness",
      description:
        "ZEMA promotes environmental education and public awareness initiatives to empower communities, institutions, and stakeholders with the knowledge and tools needed to protect and sustainably manage the environment.",
      icon: "fa-chalkboard-teacher",
    },
    {
      id: 7,
      title: "Biodiversity & Ecosystem Protection",
      description:
        "ZEMA safeguards biodiversity, ecosystems, and natural resources through proactive conservation measures, monitoring, and regulation of terrestrial, marine, and coastal zones.",
      icon: "fa-leaf",
    },
    {
      id: 8,
      title: "Data Management & Environmental Information",
      description:
        "Through the Zanzibar Environmental Information Management System (ZEIMS), ZEMA collects, manages, and disseminates environmental data to support data-driven decision-making, policy formulation, environmental planning, and reporting.",
      icon: "fa-database",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="display-6 mb-3 text-success fw-bold">Our Services</h1>
          <p className="lead">
            The Zanzibar Environmental Management Authority (ZEMA) provides a
            comprehensive range of services aimed at ensuring the protection,
            conservation, and sustainable management of Zanzibar’s environment.
          </p>
        </div>

        {/* Link to Procedural Guide */}
        <div
          className="row mb-5 justify-content-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="col-lg-8 text-center">
            <div
              className="alert alert-success d-flex align-items-center justify-content-center gap-3 shadow-sm p-4"
              role="alert"
            >
              <i className="fas fa-info-circle fa-2x"></i>
              <div className="text-start">
                <h5 className="alert-heading mb-1">
                  Looking for Permit Procedures?
                </h5>
                <p className="mb-0">
                  Check our{" "}
                  <Link
                    to="/procedural-guide"
                    className="alert-link fw-bold text-decoration-underline"
                  >
                    Procedural Guide
                  </Link>{" "}
                  for obtaining Environmental Permits for Investment and
                  Development Projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 * (index + 1)}s`}
              key={service.id}
            >
              <div className="service-item bg-light rounded h-100 p-5 shadow-sm hover-shadow transition-all">
                <div className="d-flex flex-column align-items-start h-100">
                  <div className="mb-4">
                    <div
                      className="btn-square rounded-circle bg-success text-white"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <i className={`fa ${service.icon} fa-2x`}></i>
                    </div>
                  </div>
                  <h4 className="mb-3 text-dark">{service.title}</h4>
                  <p className="mb-4 text-secondary flex-grow-1">
                    {service.description}
                  </p>
                  {/* Optional: Add a 'Read More' or specific link if needed in future */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .service-item {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .service-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .btn-square {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default OurServices;
