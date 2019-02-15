import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Project from "./Project";
import { codingProjects } from "./projectList";
import { musicProjects } from "./projectList";
import "./projectStyles.css";

function Projects(){

  return (
    <main>
      <Header/>
      <div className="container">
        <h1>Projects</h1>

        <div className="codingProjects">
          <h3>Coding Projects</h3>
          {codingProjects.map((project, index) =>
            <Project 
            name={project.name}
            url={project.url}
            description={project.description}
            key={index}
            />
          )}
        </div>

        <div className="musicProjects">
          <h3>Music Projects</h3>
          {musicProjects.map((project, index) =>
            <Project 
            name={project.name}
            url={project.url}
            description={project.description}
            index={project.index}
            key={index}
            />
          )}
        </div>

      </div>
    </main>
  );
}

export default Projects;