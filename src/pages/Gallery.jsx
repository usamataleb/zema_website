import React from "react";
import LightBox from "../components/LightBox";

const Gallery = () => {
  return (
      <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-6">Our Pictures</h1>
        </div>

        <div className="text-center mx-auto" style={{ maxWidth: "800px" }}></div>
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
          images={[
            {
              largeURL:
                'img/leaders/image12.jpg',
              thumbnailURL:
                'img/leaders/image12.jpg',
              // width: '100%',
              // height: "100%",
            },
            {
              largeURL:
                'img/leaders/image13.jpg',
              thumbnailURL:
                'img/leaders/image13.jpg',
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                'img/leaders/image14.jpg',
              thumbnailURL:
                'img/leaders/image14.jpg',
              width: 2500,
              height: 1666,
            },
            {
              largeURL:
                'img/leaders/image1.jpg',
              thumbnailURL:
                'img/leaders/image1.jpg',
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                'img/leaders/image4.JPG',
              thumbnailURL:
                'img/leaders/image4.JPG',
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                'img/leaders/image2.jpg',
              thumbnailURL:
                'img/leaders/image2.jpg',
              width: 1669,
              height: 2500,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Gallery;
