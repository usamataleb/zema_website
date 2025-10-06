import React, { useRef, useEffect } from "react";

const Carousel = (props) => {
    const images = props.images || [];

  const carouselRef = useRef(null);
  const carouselId = "Slider";
  const touchStart = useRef(0);
  const touchThreshold = 50; // Minimum swipe distance in pixels


  // Initialize Bootstrap carousel and touch events
  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    // Initialize Bootstrap Carousel
    const carousel = new window.bootstrap.Carousel(carouselEl, {
      interval: false,
      wrap: true,
    });

    // Touch event handlers
    const handleTouchStart = (e) => {
      touchStart.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevent scrolling during swipe
    };

    const handleTouchEnd = (e) => {
      const touchEnd = e.changedTouches[0].clientX;
      const distance = touchStart.current - touchEnd;

      if (distance > touchThreshold) {
        carousel.next();
      } else if (distance < -touchThreshold) {
        carousel.prev();
      }
    };

    // Add event listeners
    carouselEl.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    carouselEl.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    carouselEl.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup
    return () => {
      carouselEl.removeEventListener("touchstart", handleTouchStart);
      carouselEl.removeEventListener("touchmove", handleTouchMove);
      carouselEl.removeEventListener("touchend", handleTouchEnd);
      carousel.dispose();
    };
  }, []);

  return (

        <div id={carouselId} ref={carouselRef} className="carousel slide" >
          <div className="carousel-indicators">
            {images.map((_, index) => (
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

          <div className="carousel-inner">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="d-block w-100 carousel-img"
                  alt={`Nature ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            <span className="visually-hidden">Next</span>
          </button>
        </div>
  );
};

export default Carousel;
