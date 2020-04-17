import React from "react"
import { Link } from "react-router-dom"

const ProjectCard = ({ project }) => {
  return (
    <>
    <div className="ui link cards">
      <div className="ui card">
        <div className="image">
        {/* <a className="image" href={project.link}> */}
          <img className="prjcard" src={project.image}/>
          {/* </a> */}
        </div>
        <div className="content">
          <h3 className="ui header"><a href={project.link}>{project.name}</a></h3>
          <div className="description">{project.description}</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectCard;