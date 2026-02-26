import React from 'react'

const ClientServiceCharter = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            Client Service Charter
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-light rounded p-5 shadow-sm">
              <p className="mb-4 text-dark" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                The Client Service Charter is designed to inform the public and stakeholders about the services provided by the Zanzibar Environmental Management Authority (ZEMA) and to clarify the standards of service that clients can expect. It serves as a commitment by ZEMA to deliver quality, transparent, and accountable environmental management services.
              </p>
              <p className="mb-4 text-dark" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                The Charter aims to enhance accountability by making available relevant information on environmental management, ZEMA’s roles and responsibilities, and the procedures through which services are delivered. It also helps the general public and stakeholders understand their rights and obligations, the quality and timeliness of services provided by ZEMA, and the mechanisms available for submitting feedback, inquiries, and environmental complaints.
              </p>
              <p className="mb-4 text-dark" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                Through the Client Service Charter, ZEMA reaffirms its commitment to responsiveness, professionalism, and continuous improvement in serving the people of Zanzibar.
              </p>
              <div className="text-center mt-5">
                <a href="./pdf/MKATABA WA HUDUMA WA ZEMA  DISEMBA 2024.pdf" target='_blank' className="btn btn-success py-3 px-5 fw-bold">Download Full Client Service Charter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientServiceCharter
