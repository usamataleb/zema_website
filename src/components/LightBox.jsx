import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

function LightBox(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
      className="pswp-gallery"
      id={props.galleryID}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
          style={{
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={image.thumbnailURL}
            alt=""
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              transition: "transform 0.3s",
            }}
          />
        </a>
      ))}
    </div>
  );
}
export default LightBox;
