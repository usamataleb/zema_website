import React from 'react'

const CoreValues = () => {
  const values = [
    {
      id: 'a',
      title: "Environmental Stewardship",
      description: "We are committed to conserving, protecting, and sustainably managing Zanzibar’s environment for the benefit of present and future generations."
    },
    {
      id: 'b',
      title: "Integrity and Accountability",
      description: "We uphold the highest standards of honesty, transparency, and responsibility in all our actions, decisions, and use of resources."
    },
    {
      id: 'c',
      title: "Professionalism and Excellence",
      description: "We strive for quality, efficiency, and innovation in delivering environmental management services and solutions."
    },
    {
      id: 'd',
      title: "Collaboration and Partnership",
      description: "We value teamwork, inclusivity, and active engagement with communities, government institutions, the private sector, civil society, and international partners."
    },
    {
      id: 'e',
      title: "Equity and Inclusiveness",
      description: "We ensure that environmental management promotes fairness, justice, and the participation of all, especially women, youth, and vulnerable groups."
    },
    {
      id: 'f',
      title: "Knowledge and Innovation",
      description: "We embrace science, research, and indigenous knowledge while promoting innovative technologies and practices for sustainable environmental solutions."
    },
    {
      id: 'g',
      title: "Sustainability and Resilience",
      description: "We are dedicated to promoting sustainable development practices that enhance ecological integrity and strengthen climate resilience."
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            Core Values
          </h2>
        </div>
        <div className="row g-4 justify-content-center">
          {values.map((item, index) => (
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

export default CoreValues
