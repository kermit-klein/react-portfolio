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
              <div style={{ position: "absolute", bottom: 4, right: 4 }}>
                <a href={`${project.gitLink}#readme`}>
                  <img
                    id="github-link"
                    src="./src/img/github.png"
                    height="18"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
