import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui secondary fixed menu inverted blue" style={headerStyle}>
      <div className="ui container">
        <Link
          id="header"
          className="header item"
          to="/"
          style={{ marginLeft: "-15vw" }}
        >
          <i className="fas fa-crow fa-lg">
            {" "}
            <span className="crow">Ali Erbay's Portfolio</span>
          </i>
        </Link>
        <div className="right menu">
          <NavLink
            id="about-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/about"
          >
            About Me
          </NavLink>
          <NavLink
            id="cv-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/cv"
          >
            CV
          </NavLink>
          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            id="blog-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/blog"
          >
            <div class="floating ui red label">new</div>
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
const headerStyle = {
  height: 60,
  fontSize: 18,
};

export default Header;
