import NewsCard from "./NewsCard";
import Card from "./NewsCard";

const NewsEvents = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5">News & Events</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <NewsCard
              image="img/about.jpg"
              title="News Title 1"
              description="Brief description of news 1."
              // date="2023-10-01"
            />
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <NewsCard
              image="img/about.jpg"
              title="News Title 2"
              description="Brief description of news 2."
              // date="2023-10-02"
            />
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <NewsCard
              image="img/about.jpg"
              title="News Title 3"
              description="Brief description of news 3."
              // date="2023-10-03"
            />
          </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <NewsCard
                image="img/about.jpg"
                title="News Title 4"
                description="Brief description of news 4."
                // date="2023-10-04"
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default NewsEvents;
