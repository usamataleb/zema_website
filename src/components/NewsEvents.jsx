import NewsCard from "./NewsCard";
import Card from "./NewsCard";


const NewsData = [
  {
    image: "img/about.jpg",
    title: "News Title 1",
    description: "Brief description of news 1.",
    // date: "2023-10-01",
  },
  {
    image: "img/about.jpg",
    title: "News Title 2",
    description: "Brief description of news 2.",
    // date: "2023-10-02",
  },
  {
    image: "img/about.jpg",
    title: "News Title 3",
    description: "Brief description of news 3.",
    // date: "2023-10-03",
  },
  {
    image: "img/about.jpg",
    title: "News Title 4",
    description: "Brief description of news 4.",
    // date: "2023-10-04",
  },
];

const NewsEvents = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5">News & Events</h1>
        </div>
        <div className="row g-4">
          {NewsData.map((news, index) => (
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.1}s`} key={index}>
              <NewsCard
                image={news.image}
                title={news.title}
                description={news.description}
                // date={news.date}
              />
            </div>
          ))}
          </div>
        </div>
      </div>

  );
};

export default NewsEvents;
