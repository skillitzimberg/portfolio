import React from "react";
import Post from "./Post";
import Header from "../Header";
import Nav from "../Nav";
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
      {posts.map((post, index) =>
        <Post
        title={posts.title}
        date={posts.date}
        article={posts.article}
        key={index}/>
      )}
      </div>
    </main>
  );
}

export default Articles;
