import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { NewsData } from '../lib/constant';

const NewsDetails = () => {
  const { id } = useParams();



  const newsItem = NewsData.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center" role="alert">
          News article not found
        </div>
        <div className="text-center mt-3">
          <Link to="/news" className="btn btn-primary">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Back button */}
      <div className="mb-4">
        <Link to="/news" className="btn btn-outline-success">
          <i className="fas fa-arrow-left me-2"></i>
          Back to News
        </Link>
      </div>

      {/* News Title */}
      <h2 className="fw-bold mb-4 text-center text-success">
        {newsItem.title}
      </h2>

      {/* Published Time Alert */}
      <div className="alert alert-info mb-4">
        <p className="mb-0">
          <i className="fas fa-calendar-alt me-2"></i>
          <strong>Published:</strong> {newsItem.date}
        </p>
      </div>

      {/* Main News Content Card */}
      <div className="card mb-4">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">
            <i className="fas fa-newspaper me-2"></i>
            News Article
          </h4>
        </div>
        <div className="card-body">
          {/* Featured Image */}
          <div className="mb-4">
            <img 
              src={newsItem.src} 
              alt={newsItem.title} 
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
          
          {/* News Content */}
          <p className="mb-0" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            {newsItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;