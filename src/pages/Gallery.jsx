import React from "react";
import LightBox from "../components/lightBox";

const Gallery = () => {
  return (
    <>
 <LightBox
          galleryID="zema-gallery"
          images={[
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
              width: 1875,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666,
            },
          ]}
        />
      </>
  );
};

export default Gallery;
