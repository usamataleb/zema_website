import Carousel from "./Carousel";
import Directorsample from "../components/Directorsample";
import { useState, useEffect } from "react";
import { getData } from "../lib/appServices";

const Panels = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getData("carousel");
        setCarousel(Array.isArray(response) ? response : []);
        console.log(response);
      } catch (error) {
        console.error("Failed to load data:", error);
        setCarousel([]);
      }
    }

    loadData();
  }, []);

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#c3c9cf" }}>
      <div className="my-5 px-0 px-md-0 px-lg-5">
        <div className="p-4" style={sliderStyles.sliderContainer}>
          <div className="row g-4">
            {/* Left Panel */}
            <div className="col-md-9 px-0 px-md-0 px-lg-5">
              <div
                className="d-flex align-items-center justify-content-center"
                style={sliderStyles.darkPanel}
              >
                {carousel.length > 0 ? (
                  <Carousel items={carousel} />
                ) : (
                  <div className="text-center p-5 text-muted">
                    <h4>No images found</h4>
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-md-3 px-0 px-md-0 px-lg-3 d-none d-md-block d-lg-block">
              <Directorsample />
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
    minHeight: "630px",
  },
  documentPanel: {
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    overflow: "hidden",
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
