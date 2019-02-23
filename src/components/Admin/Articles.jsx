import React from "react";
import PropTypes from 'prop-types';
import Post from "../Blog/Post";
// import { postList } from "./postList";

function Articles(props) {

  return (
    <div>
      <h3>Blog Posts</h3>
      {props.postList.map((post, index) =>
        <Post 
          title={post.title}
          date={post.date}
          article={post.article}
          key={post.id}/>
      )}
    </div>
  );
}

Articles.propTypes = {
  postList: PropTypes.array
};

export default Articles;
