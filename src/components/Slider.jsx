import { useState, useEffect } from "react";
import  { getData } from "../lib/appServices";

const Slider = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getData('carousel');
        setCarousel(response);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    }

    loadData();
  }, []);

  return (
    <div
      id="header-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        { carousel.length ? ( carousel.map((item, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              className="carousel-img"
              src={ item.image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))) : <p>No slides available.</p> }
      </div>
      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
