import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Post from "./Post";
// import { postList } from "./postList";
import "./blogStyles.css";

function Articles(props){

  return (
    <div>
      <Header pageHead={"Brain Dump"}/>
      <div className="container">
        <main>
          <h3>A web development newbie becoming not a newbie.</h3>
    
          <section className="articleList">
            <h3>Blog Posts</h3>
            {props.postList.map((post, index) =>
              <Post title={post.title}
                date={post.date}
                article={post.article}
                key={index}/>
            )}
          </section>

        </main>
      </div>
    </div>
  );
}

Articles.propTypes = {
  postList: PropTypes.array
};

export default Articles;
