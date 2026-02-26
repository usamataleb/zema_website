import { useState, useEffect } from "react";
import LightBox from "../components/LightBox";
import { getData } from "../lib/appServices";
import ProjectCard from "../components/ProjectCard";
import Loader from "../components/Loader";

const Projects = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await getData("/attachments/type/APPROVED_PROJECTS");
        setImages(response);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    }

    loadData();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold mb-4 text-center text-success">
            Our Projects{" "}
          </h2>{" "}
        </div>

        <div
          className="text-center mx-auto"
          style={{ maxWidth: "800px" }}
        ></div>

        <div className="row">
          {loading ? (
            <Loader />
          ) : images.length > 0 ? (
            images.map((project) => (
              <div className="col-4">
                <ProjectCard
                  key={project.id}
                  image={project.src}
                  title={project.title}
                  description={project.description}
                />
              </div>
            ))
          ) : (
            <p className="text-center">No Project available</p>
          )}
        </div>

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
      </div>
    </div>
  );
};

export default Projects;
