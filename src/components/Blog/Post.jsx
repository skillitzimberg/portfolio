import React from "react";
import PropTypes from "prop-types";
import Moment from 'moment';

function Post(props){
  return (
    <article className="post">
      <h1>{ props.title }</h1>
      <h3>{ formatDate(props.date) }</h3>
      <div>{ props.article }</div>
    </article>
  );
}

function formatDate(date) {
  return date.from(new Moment(), true);
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Moment).isRequired,
  article: PropTypes.string.isRequired
};

export default Post;
