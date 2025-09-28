import React, { useEffect, useState } from "react";
import LightBox from "../components/LightBox";
import AppService from "../lib/appServices";

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    async function fetchGalleryData() {
      const data = await AppService.getWebsiteGallery();
      setGalleryData(data);
      console.log("Gallery Data:", data);
    }
    fetchGalleryData();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-6">Our Pictures</h1>
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

        <LightBox
          galleryID="zema-gallery"
          images={galleryData.map((image) => ({
            largeURL: image.src,
            thumbnailURL: image.src,
            width: image.width,
            height: image.height,
          }))}
        />
      </div>
    </div>
  );
}

export default Gallery;
