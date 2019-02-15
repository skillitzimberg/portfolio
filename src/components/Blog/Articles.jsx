import React from "react";
import Post from "./Post";
import Header from "../Header";
import { postList } from "./postList";

function Articles(){

  return (
    <main>
      <Header/>
      <h1>Brain Dump</h1>
      <h3>A web development newbie becoming not a newbie.</h3>

      <div className="container">
        {postList.map((post, index) =>
          <Post
            title={post.title}
            date={post.date}
            article={post.article}
            key={index}
          />
        )}
      </div>
    </main>
  );
}

export default Articles;
