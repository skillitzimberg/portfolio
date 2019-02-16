import React from "react";
import Header from "../Header";
import Project from "./Project";
import { codingProjects } from "./projectList";
import { musicProjects } from "./projectList";
import "./projectStyles.css";

function Projects(){

  return (
    <div className="container">
      <Header pageHead={"Projects"}/>
      <main>
        <section className="codingProjects">
          <h3>Coding Projects</h3>
          {codingProjects.map((project, index) =>
            <Project 
              name={project.name}
              url={project.url}
              description={project.description}
              image={project.image}
              key={index}
            />
          )}
        </section>
  
        <section className="musicProjects">
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
        </section>
      </main>
    </div>
  );
}

export default Projects;