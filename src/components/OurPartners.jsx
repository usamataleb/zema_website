import { useEffect, useRef } from "react";
import { partners } from "../lib/constant";

const PartnersCarousel = (props) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = track.children;
    const slideCount = slides.length;
    const clones = [];

    for (let i = 0; i < slideCount; i++) {
      const clone = slides[i].cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clones.push(clone);
    }

    clones.forEach((clone) => {
      track.appendChild(clone);
    });

    let animation;
    let speed = 1;
    let position = 0;
    const slideWidth = 234;
    const gap = 30;
    const totalWidth = slideWidth + gap;

    const animate = () => {
      position -= speed;

      // Reset position when we've scrolled through all original slides
      if (-position >= totalWidth * slideCount) {
        position += totalWidth * slideCount;
      }

      track.style.transform = `translateX(${position}px)`;
      animation = requestAnimationFrame(animate);
    };

    animation = requestAnimationFrame(animate);

    // Clean up animation on component unmount
    return () => {
      if (animation) {
        cancelAnimationFrame(animation);
      }
    };
  }, []);

  return (
    <section className="partners-section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            {props.title}{" "}
          </h2>{" "}
        </div>

        <div className="partners-carousel">
          <div className="carousel-container">
            <div className="carousel-track" ref={trackRef}>
              {partners.map((partner) => (
                <div className="carousel-slide" key={partner.id}>
                  <div className="partner-logo">
                    <img src={partner.logo} alt={partner.name} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
