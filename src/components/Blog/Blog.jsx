import React from "react";
import PropTypes from "prop-types";
import Articles from "../Admin/Articles";
import Header from "../Header/Header";
// import "./blogStyles.css";
// import { postList } from "./postList";

function Blog(props){

  return (
    <div>
      <Header pageHead={"Brain Dump"} />
      <div className="container">
        <Articles postList={props.postList} />
      </div>
    </div>
  );
}

Blog.propTypes = {
  postList: PropTypes.array
};

export default Blog;
