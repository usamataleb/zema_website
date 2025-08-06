import React, { useState } from "react";
import Carousel from "./carousel";

const Panels = () => {
  const [activeTab, setActiveTab] = useState("NOTICE");

  const images = [
    "./img/carousel-1.jpg",
    "./img/carousel-2.jpg",
    "https://images.unsplash.com/photo-1508724735996-b41f69dfe2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80",
  ];

  const documentData = {
    NOTICE: {
      title: "SPECIAL NOTICE",
      subtitle: "INVESTORS WITHOUT LAND LEASE AGREEMENTS",
      content: [
        "The Zanzibar Environmental Management Authority (ZEMA) kindly requests all Approved investors who have been issued and approved Investment License but do not have land lease agreement to contact ZIPA at their earliest convenience.",
        "This initiative is intended to identify challenges that may be delaying the lease process, and to ensure that all approved projects proceed smoothly with their intended projects.",
        "We appreciate your cooperation and remain committed to providing continued support throughout your investment journey in Zanzibar.",
      ],
      signedBy: "Executive Director",
      icon: "🏛️",
    },
    HABARI: {
      title: "ENVIRONMENT ANNOUNCEMENT",
      subtitle: "NEW ENVIRONMENT OPPORTUNITIES IN ZANZIBAR",
      content: [
        "The Zanzibar Environmental Management Authority announces new investment opportunities in the tourism and manufacturing sectors. We invite both local and international investors to explore these exciting prospects.",
        "Key sectors include: Tourism and hospitality, Manufacturing and processing, Agriculture and fisheries, Information and communication technology.",
        "For more information and application procedures, please contact our investment facilitation team.",
      ],
      signedBy: "Investment Director",
      icon: "📢",
    },
    "TAARIFA KWA VYOMBO VYA HABARI": {
      title: "TAARIFA KWA VYOMBO VYA HABARI",
      subtitle: "ZIPA ACHIEVEMENTS IN INVESTMENT PROMOTION",
      content: [
        "Zanzibar Environmental Management Authority reports significant growth in foreign direct investment for the current fiscal year. The authority has successfully facilitated over 150 new investment projects worth $2.5 billion.",
        "This achievement demonstrates Zanzibar's growing reputation as an attractive investment destination in East Africa. The government continues to implement investor-friendly policies and improve the ease of doing business.",
        "We remain committed to supporting investors and promoting sustainable economic development in Zanzibar.",
      ],
      signedBy: "Communications Manager",
      icon: "📰",
    },
  };

  const tabs = ["NOTICE", "HABARI", "TAARIFA KWA VYOMBO VYA HABARI"];
  const currentDocument = documentData[activeTab];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#c3c9cf" }}>
      <div className="container my-5  " style={sliderStyles.container}>
        <div className="p-4" style={sliderStyles.sliderContainer}>
          <div className="row g-4">
            {/* Left Panel */}
            <div className="col-md-6" style={sliderStyles.leftPanel}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={sliderStyles.darkPanel}
              >
                <Carousel images={images} />
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-md-6">
              <div style={sliderStyles.documentPanel}>
                {/* Tab Navigation */}
                <div className="d-flex" style={sliderStyles.tabNav}>
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabClick(tab)}
                      style={{
                        ...sliderStyles.tabButton,
                        ...(activeTab === tab
                          ? sliderStyles.tabButtonActive
                          : {}),
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== tab) {
                          Object.assign(
                            e.target.style,
                            sliderStyles.tabButtonHover
                          );
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== tab) {
                          e.target.style.color = "#6c757d";
                          e.target.style.background = "none";
                        }
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Document Content */}
                <div className="p-4" style={sliderStyles.documentContent}>
                  <div className="text-center">
                    <div style={sliderStyles.zipaHeader}>
                      🏛️ ZANZIBAR ENVIRONMENTAL MANAGEMENT AUTHORITY
                    </div>
                    <div style={sliderStyles.documentTitle}>
                      {currentDocument.title}
                    </div>
                    <div style={sliderStyles.documentSubtitle}>
                      {currentDocument.subtitle}
                    </div>
                  </div>

                  <div style={sliderStyles.documentText}>
                    {currentDocument.content.map((paragraph, index) => (
                      <p key={index} className="mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-muted small">Issued by</div>
                    <div style={sliderStyles.signatureLine}></div>
                    <div style={sliderStyles.signatureTitle}>
                      {currentDocument.signedBy}
                    </div>
                    <div style={sliderStyles.signatureOrg}>
                      ZANZIBAR ENVIRONMENTAL MANAGEMENT AUTHORITY
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={sliderStyles.documentFooter}
                  >
                    <span>www.zema.go.tz</span>
                    <span>info@zema.go.tz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const sliderStyles = {
  darkPanel: {
    background: "#d1cece",
    borderRadius: "10px",
    minHeight: "500px",
  },
  documentPanel: {
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  leftPanel: {
    maxHeight: "90px",
    padding: "20px",
  },
  tabNav: {
    borderBottom: "2px solid #e9ecef",
  },
  tabButton: {
    background: "none",
    border: "none",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#6c757d",
    cursor: "pointer",
    transition: "all 0.3s ease",
    borderBottom: "3px solid transparent",
  },
  tabButtonActive: {
    color: "#ffc107",
    borderBottomColor: "#ffc107",
    background: "#f8f9fa",
  },
  tabButtonHover: {
    color: "#495057",
    background: "#f8f9fa",
  },
  documentContent: {
    background: "linear-gradient(180deg, #e3f2fd, #e8f5e8)",
    minHeight: "450px",
  },
  zipaHeader: {
    color: "#1565c0",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  documentTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#212529",
    textDecoration: "underline",
    marginBottom: "10px",
  },
  documentSubtitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#495057",
    marginBottom: "25px",
  },
  documentText: {
    color: "#495057",
    fontSize: "14px",
    lineHeight: "1.6",
    textAlign: "justify",
    marginBottom: "30px",
  },
  signatureLine: {
    width: "120px",
    height: "1px",
    background: "#6c757d",
    margin: "10px auto",
  },
  signatureTitle: {
    fontWeight: "600",
    color: "#212529",
  },
  signatureOrg: {
    fontSize: "14px",
    color: "#6c757d",
  },
  documentFooter: {
    borderTop: "1px solid #dee2e6",
    paddingTop: "15px",
    fontSize: "12px",
    color: "#6c757d",
  },
  navDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    margin: "0 5px",
  },
  navDotActive: {
    background: "#ffc107",
  },
  iconPlaceholder: {
    fontSize: "80px",
    color: "#6c757d",
  },
};

export default Panels;
