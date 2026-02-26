import React from 'react'

const PowerOfZema = () => {
  const powers = [
    { id: 'a', text: "Provide directives on the proper action to be taken for the effective environmental management" },
    { id: 'b', text: "Issue a stop order for any activity to any person who violates this Act" },
    { id: 'c', text: "Order an immediate closure of any activity found in violation of this Act" },
    { id: 'd', text: "Impose fees and charges for the granting of environmental certificates, permits, and approvals for services and facilities provided by the Authority" },
    { id: 'e', text: "Change, suspend, or revoke an environmental certificate, permit, or approval issued in accordance with this Act" },
    { id: 'f', text: "Enter into contracts with any person for the purpose of fulfilling the functions of the Authority" },
    { id: 'g', text: "Seek environmental information from any person when deemed necessary" },
    { id: 'h', text: "Seize any property which has been found in connection of violation of any provision of this Act" },
    { id: 'i', text: "Arrest any person who has been found in connection with a violation of any provision of this Act" }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            Power of the ZEMA
          </h2>
          <p className="mb-4 text-center fs-5">
            Section 23(1) of the Zanzibar Environmental Management Act, 2015, outlines the statutory powers of the Zanzibar Environmental Management Authority (ZEMA). In accordance with this provision, the Authority is mandated to issue directives and take appropriate actions necessary to ensure effective environmental management, protection, and compliance within Zanzibar. Under this section, the Authority is empowered to:
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {powers.map((item, index) => (
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

export default PowerOfZema
