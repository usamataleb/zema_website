import { useState } from "react";

const MAPS = {
  unguja: {
    label: "Unguja Office",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313.1401428392844!2d39.21010036657249!3d-6.147855663282062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd11739b41299%3A0x9876268c3e3b0ec1!2sMAMLAKA%20YA%20USIMAMIZI%20WA%20MAZINGIRA!5e1!3m2!1ssw!2stz!4v1772105512707!5m2!1ssw!2stz",
    title: "ZEMA Unguja Office",
  },
  pemba: {
    label: "Pemba Office",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.2741626995065!2d39.77890566736363!3d-5.236369706981886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18426dd6a18233f5%3A0x4300e6d8fe59811a!2sZEMA-PEMBA%20OFIICE!5e1!3m2!1ssw!2stz!4v1772107359288!5m2!1ssw!2stz",
    title: "ZEMA Pemba Office",
  },
};

const Contact = () => {
  const [activeTab, setActiveTab] = useState("unguja");
  const activeMap = MAPS[activeTab];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* ── Left: Contact Form ── */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-6 mb-4">
              If You Have Any Query, Please Contact Us
            </h1>
            <div
              style={{
                borderRadius: "12px",
                padding: "1.8rem",
              }}
            >
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        style={{ border: "1.5px solid #adb5bd" }}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        style={{ border: "1.5px solid #adb5bd" }}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        style={{ border: "1.5px solid #adb5bd" }}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{
                          height: "120px",
                          border: "1.5px solid #adb5bd",
                        }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary py-3 px-5 w-100"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* ── Right: Tabbed Map ── */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="d-flex mb-0">
              {Object.entries(MAPS).map(([key, map]) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    style={{
                      flex: 1,
                      padding: "11px 0",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      border: "1.5px solid #dee2e6",
                      borderBottom: isActive ? "none" : "1.5px solid #dee2e6",
                      borderRadius: "8px 8px 0 0",
                      backgroundColor: isActive ? "#0d6efd" : "#f8f9fa",
                      color: isActive ? "#fff" : "#495057",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <i className="fa fa-map-marker-alt me-2"></i>
                    {map.label}
                  </button>
                );
              })}
            </div>

            {/* Map Panel */}
            <div
              style={{
                border: "1.5px solid #dee2e6",
                borderRadius: "0 0 12px 12px",
                overflow: "hidden",
                height: "430px",
              }}
            >
              <iframe
                key={activeTab}
                width="100%"
                height="100%"
                src={activeMap.src}
                frameBorder="0"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title={activeMap.title}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
