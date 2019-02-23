import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <article className="post" key={props.key}>
      <h1>{ props.title }</h1>
      <h3>{ props.date }</h3>
      <div>{ props.article }</div>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  article: PropTypes.string.isRequired,
  key: PropTypes.number
};

export default Post;
