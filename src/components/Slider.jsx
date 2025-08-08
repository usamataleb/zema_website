const slides = [
  {
    image: './img/carousel-1.jpg',
    title: 'PICHA YA 1',
    description: 'EKA MAELEZO PICHA YA 1',
    link: '#',
    isActive: true,
  },
  {
    image: './img/carousel-2.jpg',
    title: 'PICHA YA 2',
    description: 'eka maelezo kuhusus picha nyengine',
    link: '#',
    isActive: false,
  },
];

const Slider = () => {
  return (
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img className="carousel-img" src={item.image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
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
