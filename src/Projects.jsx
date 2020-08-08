import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { UndrawMobileApps } from "react-undraw-illustrations";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./src/data/projects.json").then((response) => {
      this.setState({
        projects: response.data,
      });
    });
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map((project) => {
        return (
          <div className="column" id={"project-" + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <>
        <div className="ui main  container" style={divStyle}>
          <div className="ui stackable two column grid">
            <div className="column">
              <UndrawMobileApps primaryColor="#855B06" height="200px" />
            </div>
            <div className="column">
              <h1 id="projects-header" className="ui header">
                My Projects
              </h1>
              <p className="textstyle1">
                Here you can find the small projects that I've done while
                learning Ruby, Javascript, CSS, HTML5, Rails, ReactJS, NodeJS
                and Express. There will be more coming and hopefully new ones
                would be more complicated and purposeful. I'm currently updating
                readme files for each one of the projects.
              </p>
            </div>
          </div>
        </div>
        <div className="ui main container" style={{ width: "70%" }}>
          <div className="ui doubling four column grid">{projectsList}</div>
        </div>
      </>
    );
  }
}

const divStyle = {
  marginTop: 100,
};

export default Projects;
