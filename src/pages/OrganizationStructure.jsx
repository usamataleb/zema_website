import React from "react";

const zemaSections = [
  {
    title: "Administrative & Financial Services",
    description:
      "It deals with administrative, personnel, and financial services, including employee welfare, employment, records, training, expenditures, procurement, office building, HIV/AIDS, gender, disability, revenue, and finances. It has an Administration Unit and a Finance Unit.",
    icon: "img/icon/fnc1.png",
  },
  {
    title: "Environmental Planning and Monitoring Section",
    description:
      "It is responsible for the implementation of environmental planning laws and guidelines, preparation of ZEMA’s development plans, formulation of guidelines, monitoring of biodiversity, terrestrial ecology, marine and coastal zones, and waste. It has a Planning Unit and a Monitoring Unit.",
    icon: "img/icon/env3.png",
  },
  {
    title: "Compliance and Legal Implementation Section",
    description:
      "It ensures compliance with environmental laws, regulations, and guidelines, provides legal advice, coordinates environmental operations, and manages prosecutions. It has an Environmental Operations Unit and a Legal Unit.",
    icon: "img/icon/law.avif",
  },
  {
    title: "The Environmental Assessment Section",
    description:
      "It coordinates environmental impact assessments, registers experts, collects information, issues certificates, and participates in project inspections. It has an Impact Assessment Unit and an Environmental Audit Unit.",
    icon: "img/icon/env1.avif",
  },
  {
    title: "Environmental Information and Communication Section",
    description:
      "It provides information to the public, manages complaints, handles the internet, ZEMA’s website, and geographic information through IT and GIS systems. It has a Public Information and Community Unit and an IT & GIS Unit.",
    icon: "img/icon/comm.png",
  },
  {
    title: "ZEMA Pemba Office Services",
    description:
      "It coordinates the implementation of all ZEMA’s functions in Pemba, including environmental management.",
    icon: "img/icon/office.png",
  },
];

const OrganizationStructure = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            ORGANIZATION STRUCTURE{" "}
          </h2>{" "}
        </div>
        <div className="row g-4 justify-content-center">
          {zemaSections.map((section, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
              key={index}
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-rounded-end me-4">
                    <img
                      className="img-fluid"
                      src={section.icon}
                      alt={section.title}
                    />
                  </div>
                  <h4 className="mb-0">{section.title}</h4>
                </div>
                <p className="mb-4 text-justify">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationStructure;
