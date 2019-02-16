import React from "react";
import PropTypes from "prop-types";

function Project(props){
  return (
    <article className="project">
      <a href={props.url} target="blank" className="projectLink">{props.name}</a>
      <img src={props.image}/>
      {props.description}
    </article>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Project;