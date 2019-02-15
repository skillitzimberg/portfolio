import React from "react";
import PropTypes from "prop-types";

function Project(props){
  return (
    <article className="project">
      <h1>{ props.name }</h1>
      <div>{ props.description }</div>
    </article>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;