import React from "react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Articles from "../Admin/Articles";
// import { postList } from "./postList";
import "./blogStyles.css";

function Blog(props){

  return (
    <div className="container">
      <Header pageHead={"Brain Dump"}/>
      <Articles postList={props.postList} />
    </div>
  );
}

Blog.propTypes = {
  postList: PropTypes.array
};

export default Blog;
