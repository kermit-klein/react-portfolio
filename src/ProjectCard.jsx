import React from "react";
// import { Link } from "react-router-dom"

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="ui link cards">
        <a href={project.link}>
          <div className="ui card">
            <div className="image">
              <img className="prjcard" src={project.image} />
            </div>

            <div className="content">
              <h3 className="ui header">
                <a href={project.link}>{project.name}</a>
              </h3>
              <div className="description">{project.description}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
