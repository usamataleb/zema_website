import React from 'react'

const OurFunction = () => {
  const functions = [
    {
      id: 'a',
      text: "Enforce the provisions of the Zanzibar Environmental Management Act and all related environmental laws and regulations"
    },
    {
      id: 'b',
      text: "Coordinate and oversee Environmental and Social Impact Assessments (ESIAs) and environmental audit processes for all proposed development activities, projects, and investments"
    },
    {
      id: 'c',
      text: "Conduct environmental monitoring and assessment activities to support effective environmental management, conservation, and sustainable use of natural resources"
    },
    {
      id: 'd',
      text: "Issue environmental certificates, permits, licenses, and approvals in accordance with the requirements of the Act"
    },
    {
      id: 'e',
      text: "Receive, investigate, and appropriately address environmental complaints, concerns, and reports submitted by the public and relevant stakeholders"
    },
    {
      id: 'f',
      text: "Promote environmental education, public awareness, and the dissemination of environmental information to communities, institutions, and stakeholders"
    },
    {
      id: 'g',
      text: "Enforce environmental regulations and ensure compliance with applicable environmental standards, guidelines, directives, and best practices"
    },
    {
      id: 'h',
      text: "Monitor and safeguard biodiversity, terrestrial and marine ecosystems, coastal and marine zones, waste management systems, and the utilization of natural resources, as well as oversee the implementation of other environmental protection measures"
    },
    {
      id: 'i',
      text: "Establish, manage, and operate the Zanzibar Environmental Information Management System (ZEIMS) to support data-driven decision-making, environmental planning, and reporting"
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            Functions of ZEMA
          </h2>
          <p className="mb-4 text-center fs-5">
            In accordance with Section 22(1) of the Zanzibar Environmental Management Act, 2015, the Zanzibar Environmental Management Authority (ZEMA) is mandated to carry out the following key functions to ensure effective environmental protection, sustainable development, and regulatory compliance in Zanzibar:
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {functions.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.1}s`}
              key={item.id}
            >
              <div className="service-item bg-light rounded h-100 p-4 shadow-sm position-relative overflow-hidden">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-success text-white me-3" 
                       style={{width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold'}}>
                    {item.id}
                  </div>
                  <p className="mb-0 text-dark text-start" style={{lineHeight: '1.6'}}>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurFunction