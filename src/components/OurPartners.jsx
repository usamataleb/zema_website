

const OurPartners = () => {
  const partners = [
    'img/logo/SMZ.png',
    'img/logo/znz-flag.gif',
    'img/logo/SMZ.png',
    'img/logo/SMZ.png',
    'img/logo/SMZ.png',
    'img/logo/SMZ.png'
  ];

  return (
    <div className="container text-center my-4">
      <h2 className="partners-heading">Our Partners</h2>

      <div className="row justify-content-center partners-logos">
        {partners.map((logo, index) => (
          <div className="col-2 d-flex align-items-center justify-content-center mb-3" key={index}>
            <img
              src={logo}
              alt={`partner logo ${index + 1}`}
              className="img-fluid partner-logo"
              style={{ maxHeight: '80px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
