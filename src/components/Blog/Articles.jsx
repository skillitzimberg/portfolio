import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { postList } from "./postList";
import "./blogStyles.css";

function Articles(){

  return (
    <div className="container">
      <Header pageHead={"Brain Dump"}/>
      <main>
        <h3>A web development newbie becoming not a newbie.</h3>
  
        <section className="articleList">
          <h3>Blog Posts</h3>
          {postList.map((post, index) =>
            <p><Link to="/" key={index}>{post.date}</Link></p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Articles;
