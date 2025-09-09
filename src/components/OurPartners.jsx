import { useEffect, useRef } from 'react';

const PartnersCarousel = () => {
  const trackRef = useRef(null);
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    // Clone first few slides for infinite loop effect
    const slides = track.children;
    const slideCount = slides.length;
    const clones = [];
    
    for (let i = 0; i < slideCount; i++) {
      const clone = slides[i].cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clones.push(clone);
    }
    
    clones.forEach(clone => {
      track.appendChild(clone);
    });
    
    // Animation logic
    let animation;
    let speed = 1; // pixels per frame
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

  const partners = [
    { id: 1, logo: "./img/partners/TRA.jpg", name: "TRA" },
    { id: 2, logo: "./img/partners/ZRA.png", name: "ZRA" },
    { id: 3, logo: "./img/partners/IMMIGRATION.png", name: "IMMIGRATION" },
    { id: 4, logo: "./img/partners/ZIPA.jpeg", name: "ZIPA" },
    { id: 5, logo: "./img/partners/ZCT.png", name: "ZCT" },
  
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h2 className="partners-title">Our Partners</h2>
        </div>
        
        <div className="partners-carousel">
          <div className="carousel-container">
            <div className="carousel-track" ref={trackRef}>
              {partners.map(partner => (
                <div className="carousel-slide" key={partner.id}>
                  <div className="partner-logo">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      loading="lazy"
                    />
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