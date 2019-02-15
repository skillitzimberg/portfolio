import React from "react";
import Post from "./Post";
import Header from "../Header";
// import { posts } from "./posts";

const posts = [
  {
    title: "The Blog Begins",
    date: "August 21, 2018",
    article: "This is an article."
  }
];

function Articles(){

  return (
    <main>
      <Header/>
      <h1>Brain Dump</h1>
      <h3>A web development newbie becoming not a newbie.</h3>

      <div className="container">
      <Post
        title={posts[0].title}
        date={posts[0].date}
        article={posts[0].article}
      />
      </div>
    </main>
  );
}

export default Articles;
