import React from 'react'

const StrategicObjectives = () => {
  const objectives = [
    {
      id: 1,
      title: "Strengthen Environmental Governance and Compliance",
      description: "To enhance enforcement of environmental laws, regulations, and standards through effective monitoring, inspection, and compliance mechanisms."
    },
    {
      id: 2,
      title: "Promote Sustainable Development Through Environmental Assessment",
      description: "To ensure that all development projects, plans, and policies integrate environmental sustainability and minimize negative impacts."
    },
    {
      id: 3,
      title: "Improve Environmental Quality and Pollution Control",
      description: "To reduce pollution and degradation through monitoring, regulation, and implementation of preventive and corrective measures."
    },
    {
      id: 4,
      title: "Enhance Institutional Capacity and Operational Efficiency",
      description: "To improve human resources, infrastructure, systems, and tools that support effective environmental management."
    },
    {
      id: 5,
      title: "Strengthen Environmental Knowledge, Research, and Data Management",
      description: "To support environmental research, adopt innovative solutions, and maintain reliable data systems for informed decision-making."
    },
    {
      id: 6,
      title: "Promote Public Awareness and Stakeholder Engagement",
      description: "To increase environmental awareness, education, and participation among communities, institutions, and partners."
    },
    {
      id: 7,
      title: "Foster Partnerships and Resource Mobilization",
      description: "To enhance collaboration with local and international stakeholders and mobilize adequate financial and technical resources for environmental programmes."
    },
    {
      id: 8,
      title: "Support Climate Change Adaptation and Resilience",
      description: "To mainstream climate change mitigation and adaptation measures across all ZEMA activities to enhance community resilience and promote sustainable environmental management in Zanzibar."
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            Strategic Objectives of ZEMA
          </h2>
          <p className="mb-4 text-center fs-5">
            The following strategic objectives guide ZEMA’s operations and long-term planning:
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {objectives.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.1}s`}
              key={item.id}
            >
              <div className="service-item bg-light rounded h-100 p-4 shadow-sm position-relative overflow-hidden">
                <div className="d-flex flex-column h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-success text-white me-3" 
                         style={{width: '40px', height: '40px', fontSize: '1.2rem', fontWeight: 'bold'}}>
                      {item.id}
                    </div>
                    <h5 className="mb-0 text-dark">{item.title}</h5>
                  </div>
                  <p className="mb-0 text-dark flex-grow-1" style={{lineHeight: '1.6'}}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StrategicObjectives
