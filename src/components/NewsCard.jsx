import { Link } from 'react-router-dom';


const NewsCard = ({
  image,
  title,
  description,
  buttonLink,
}) => {
  return (
    <div className="card h-100 shadow rounded-2xl border-0">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ objectFit: "cover", height: "180px" }}
      />
      <div className="card-body text-center d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text flex-grow-1">
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>
          <Link to={buttonLink} className="btn btn-primary mt-3">
            Read More
          </Link>
      </div>
    </div>
  );
};

export default NewsCard;
