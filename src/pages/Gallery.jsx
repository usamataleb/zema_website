import { useState, useEffect } from "react";
import LightBox from "../components/LightBox";
import { getData } from "../lib/appServices";
import Loader from "../components/Loader";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await getData("images");
        setImages(response);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load data:", error);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            Gallery{" "}
          </h2>{" "}
        </div>

        <div
          className="text-center mx-auto"
          style={{ maxWidth: "800px" }}
        ></div>
        {/* Inline CSS Style */}
        <style>
          {`
            #zema-gallery {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }

            #zema-gallery img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 10px;

            }
          `}
        </style>

        {loading ? (
          <Loader />
        ) : (
          <div className="row">
            {images.length > 0 ? (
              <div className="col-3">
                <LightBox
                  galleryID="zema-gallery"
                  images={images.map((image) => ({
                    largeURL: image.src,
                    thumbnailURL: image.src,
                    width: image.width,
                    height: image.height,
                  }))}
                />
              </div>
            ) : (
              <p className="text-center">No images available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
