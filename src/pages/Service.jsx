import React from "react";

const zemaSections = [
  {
    title: "Sehemu ya Utawala na Fedha",
    description:
      "Inahusika na huduma za kiutawala, utumishi na fedha, ikiwa ni pamoja na maslahi ya watumishi, ajira, kumbukumbu, mafunzo, matumizi, ununuzi, jengo la Ofisi, UKIMWI, jinsia, ulemavu, mapato na fedha. Ina Kitengo cha Utawala na Kitengo cha Fedha.",
    icon: "img/icon/fnc1.png",
  },
  {
    title: "Sehemu ya Mipango na Ufuatiliaji wa Mazingira",
    description:
      "Inahusika na utekelezaji wa sheria na miongozo ya mipango na ufuatiliaji wa mazingira, kuandaa mipango ya maendeleo ya ZEMA, kuandaa miongozo, kufuatilia bayoanuwai, ikolojia ya nchi kavu, baharini, ukanda wa pwani, na taka. Ina Kitengo cha Mipango na Kitengo cha Ufuatiliaji.",
    icon: "img/icon/env3.png",
  },
  {
    title: "Sehemu ya Uzingatiaji na Utekelezaji wa Sheria",
    description:
      "Inahakikisha uzingatiaji wa sheria, kanuni na miongozo ya mazingira, kutoa ushauri wa kisheria, kuratibu operesheni za kimazingira, na kusimamia mashtaka. Ina Kitengo cha Operesheni za Kimazingira na Kitengo cha Sheria.",
    icon: "img/icon/law.avif",
  },
  {
    title: "Sehemu ya Tathmini za Kimazingira",
    description:
      "Inaratibu tathmini za athari za kimazingira, kusajili wataalam, kukusanya taarifa, kutoa vyeti na kushiriki ukaguzi wa miradi. Ina Kitengo cha Tathmini za Athari na Kitengo cha Ukaguzi wa Kimazingira.",
    icon: "img/icon/env1.avif",
  },
  {
    title: "Sehemu ya Habari za Mazingira na Mawasiliano",
    description:
      "Inatoa taarifa kwa jamii, inasimamia malalamiko, inashughulikia intaneti, tovuti ya ZEMA, na taarifa za kijografia kwa mfumo wa IT na GIS. Ina Kitengo cha Habari na Jamii na Kitengo cha IT & GIS.",
    icon: "img/icon/comm.png",
  },
  {
    title: "Ofisi ya Mamlaka Pemba",
    description:
      "Inaratibu utekelezaji wa majukumu yote ya ZEMA kwa upande wa Pemba ikiwa ni pamoja na usimamizi wa mazingira.",
    icon: "img/icon/office.png",
  },
];

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <h1 className="display-6 mb-5">SEHEMU NA VITENGO VYA ZEMA</h1>
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

export default Service;
