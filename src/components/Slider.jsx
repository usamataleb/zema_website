
const Slider = () => {
  return (
    <>
      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="./img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <h1 className="display-3 text-dark mb-4 animated slideInDown">
                        Insurance Creates Wealth For Everyone
                      </h1>
                      <p className="fs-5 text-body mb-5">
                        Clita erat ipsum et lorem et sit, sed stet lorem sit
                        clita duo justo magna dolore erat amet
                      </p>
                      <a href="" className="btn btn-primary py-3 px-5">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <h1 className="display-3 text-dark mb-4 animated slideInDown">
                        The Best Insurance Begins Here
                      </h1>
                      <p className="fs-5 text-body mb-5">
                        Clita erat ipsum et lorem et sit, sed stet lorem sit
                        clita duo justo magna dolore erat amet
                      </p>
                      <a href="" className="btn btn-primary py-3 px-5">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      </div>
    </>
  );
};

export default Slider;
