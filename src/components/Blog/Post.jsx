import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <article className="post">
      <h1>{ props.title }</h1>
      <h3>{ props.date }</h3>
      <div>{ props.article }</div>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired
};

export default Post;
