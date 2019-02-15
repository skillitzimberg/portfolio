import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { postList } from "./postList";
import "./blogStyles.css";

function Articles(){

  return (
    <main>
      <Header/>
      <div className="container">
        <h1>Brain Dump</h1>
        <h3>A web development newbie becoming not a newbie.</h3>

      <div className="articleList">
        <h3>Blog Posts</h3>
        {postList.map((post, index) =>
          <p><Link to="/">{post.date}</Link></p>
        )}
      </div>

      </div>
    </main>
  );
}

export default Articles;
