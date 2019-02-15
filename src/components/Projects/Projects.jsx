import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { codingProjects } from "./projectList";
import { musicProjects } from "./projectList";
// import "./projectStyles.css";

function Projects(){

  return (
    <main>
      <Header/>
      <div className="container">
        <h1>Projects</h1>

        <div className="codingProjects">
          <h3>Coding Projects</h3>
          {codingProjects.map((project, index) =>
            <p><a href={project.url}>{project.name}</a>: {project.description}</p>
          )}
        </div>

        <div className="musicProjects">
          <h3>Music Projects</h3>
          {musicProjects.map((project, index) =>
            <p><a href={project.url}>{project.name}</a>: {project.description}</p>
          )}
        </div>

      </div>
    </main>
  );
}

export default Projects;