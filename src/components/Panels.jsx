import Carousel from "./carousel";
import Directorsample from "../components/Directorsample";
import RightPanel from "./rightpanel";
import { useEffect, useState } from "react";
import AppService from "../lib/appServices";



const Panels = () => {
  // const images = [
  //   "./img/carousel-1.jpg",
  //   "./img/carousel-2.jpg",
  //   "https://images.unsplash.com/photo-1508724735996-b41f69dfe2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80",
  // ];

    const [carrouselData, setCarrouselData] = useState([]);
  
    useEffect(() => {
      async function fetchGalleryData() {
        const data = await AppService.getCarousel();
        setCarrouselData(data);
        console.log("Carousel Data:", data.image);
      }
      fetchGalleryData();
    }, []);




  return (
    <div
      className="container-fluid p-3"
      style={{ backgroundColor: "#c3c9cf" }}
    >
      <div
        className="my-5 px-0 px-md-0 px-lg-5"
      >
        <div className="p-4" style={sliderStyles.sliderContainer}>
          <div className="row g-4">
            {/* Left Panel */}
            <div
              className="col-md-8 px-0 px-md-0 px-lg-5"
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={sliderStyles.darkPanel}
              >
                <Carousel images={carrouselData.map((item) => item.image)} />
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-md-4 px-0 px-md-0 px-lg-3 d-none d-md-block d-lg-block">
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
    minHeight: "500px",
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
