import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { projectList } from "./projectList";
// import "./projectStyles.css";

function Projects(){

  return (
    <main>
      <Header/>
      <div className="container">
        <h1>Projects</h1>

        <div className="projectList">
          <h3>Coding Projects</h3>
          {projectList.map((project, index) =>
            <p><Link to="/">{project.name}</Link></p>
          )}
        </div>

      </div>
    </main>
  );
}

export default Projects;