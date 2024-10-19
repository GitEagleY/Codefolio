import React from "react";
import "./Projects.css";

const ProjectAccordion = ({
  project,
  index,
  openKey,
  handleToggle,
  openImageModal,
}) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={handleToggle}>
        {project.name}
      </div>
      <div className={`accordion-body ${openKey === index ? "open" : ""}`}>
        <div className="project-image-container">
          <img
            src={project.image}
            alt={project.name}
            className="project-image"
            onClick={() => openImageModal(project.image)}
          />
        </div>
        <p className="description-text">
          <strong>Description:</strong> {project.description}
        </p>
        <p className="github-text">
          <strong>GitHub:</strong>{" "}
          <a href={project.location} target="_blank" rel="noopener noreferrer">
            {project.location}
          </a>
        </p>
        <div className="project-technologies">
          <p className="tech-stack-title">Tech stack:</p>
          <div className="separator" />
          {project.technologies.map((tech, idx) => (
            <p key={idx} className="tech-details">
              <strong>{tech.name}:</strong> {tech.details}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAccordion;
