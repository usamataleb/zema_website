import NewsCard from "./NewsCard";
import  { NewsData } from "../lib/constant"; 

const NewsEvents = (props) => {

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5">{props.title || "News & Events"}</h1>
        </div>
        <div className="row g-4">
          {NewsData.map((news, index) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`${index * 0.1}s`}
              key={index}
            >
              <NewsCard
                image={news.image}
                title={news.title}
                description={news.description}
                buttonLink={`/newsdetails/${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;