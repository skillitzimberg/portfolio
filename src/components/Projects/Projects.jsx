import React from "react";
import Header from "../Header/Header";
import Project from "./Project";
import { codingProjects } from "./projectList";
import { musicProjects } from "./projectList";
import "./projectStyles.css";

function Projects(){

  return (
    <div>
      <Header pageHead={"Projects"}/>
      <div className="container">
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
                image={project.image}
                key={index}
              />
            )}
          </section>

        </main>
      </div>
    </div>
  );
}

export default Projects;