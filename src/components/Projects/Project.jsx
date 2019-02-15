import React from "react";
import PropTypes from "prop-types";

function Project(props){
  return (
    <article className="project">
      <img src={props.image}/>
      <a href={props.url} target="blank">{props.name}</a>: {props.description}
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