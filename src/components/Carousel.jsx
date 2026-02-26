import React, { useRef, useEffect } from "react";

const Carousel = ({ items = [] }) => {
  const carouselRef = useRef(null);
  const carouselId = "Slider";
  const touchStart = useRef(0);
  const touchThreshold = 50;

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    // Initialize Bootstrap Carousel with 5-second auto-slide
    const carousel = new window.bootstrap.Carousel(carouselEl, {
      interval: 5000,
      ride: "carousel",
      wrap: true,
    });

    // Touch event handlers
    const handleTouchStart = (e) => {
      touchStart.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
      e.preventDefault();
    };
    const handleTouchEnd = (e) => {
      const touchEnd = e.changedTouches[0].clientX;
      const distance = touchStart.current - touchEnd;
      if (distance > touchThreshold) carousel.next();
      else if (distance < -touchThreshold) carousel.prev();
    };

    carouselEl.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    carouselEl.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    carouselEl.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      carouselEl.removeEventListener("touchstart", handleTouchStart);
      carouselEl.removeEventListener("touchmove", handleTouchMove);
      carouselEl.removeEventListener("touchend", handleTouchEnd);
      carousel.dispose();
    };
  }, []);

  return (
    <div id={carouselId} ref={carouselRef} className="carousel slide w-100">
      {/* Indicators */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{
              position: "relative",
              height: "520px",
              overflow: "hidden",
            }}
          >
            {/* Blurred background — fills side gaps for portrait images */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(18px) brightness(0.6)",
                transform: "scale(1.1)",
              }}
            />
            {/* Actual image — fully visible, never cropped */}
            <img
              src={item.image}
              className="d-block"
              alt={item.title || `Slide ${index + 1}`}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />

            {/* title Overlay */}
            {item.title && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)",
                  padding: "2.5rem 2rem 1.5rem",
                  color: "#fff",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                  }}
                >
                  {item.title}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
        style={{ width: "60px" }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
          }}
        >
          <i
            className="fa fa-chevron-left"
            style={{ color: "#fff", fontSize: "1.1rem" }}
          ></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
        style={{ width: "60px" }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
          }}
        >
          <i
            className="fa fa-chevron-right"
            style={{ color: "#fff", fontSize: "1.1rem" }}
          ></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
