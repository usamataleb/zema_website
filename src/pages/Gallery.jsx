import React from "react";

const galleryImages = [
    // Replace these URLs with your own image links or use Unsplash/Pexels
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
   
];

const Gallery = () => {
  return (
    <div style={{ padding: "2rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Online Gallery</h1>
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
            }}
        >
            {galleryImages.map((url, idx) => (
                <div key={idx} style={{ overflow: "hidden", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                    <img
                        src={url}
                        alt={`Gallery ${idx + 1}`}
                        style={{ width: "100%", height: "220px", objectFit: "cover", transition: "transform 0.3s" }}
                        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                </div>
            ))}
        </div>
    </div>
);
}

export default Gallery;
