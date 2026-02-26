import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import { getData } from "../lib/appServices";
import Loader from "./Loader";
const NewsEvents = (props) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGalleryData() {
      setLoading(true);
      const data = await getData("news");
      setPackages(Array.isArray(data) ? data : []);
      setLoading(false);
    }
    fetchGalleryData();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            {props.title}{" "}
          </h2>{" "}
        </div>
        <div className="row g-4">
          {loading ? (
            <Loader />
          ) : packages.length > 0 ? (
            packages.map((news, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${index * 0.1}s`}
                key={index}
              >
                <NewsCard
                  image={news.src}
                  title={news.title}
                  description={news.description}
                  buttonLink={`/newsdetails/${news.id}`}
                />
              </div>
            ))
          ) : (
            <p className="text-center">No news available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
