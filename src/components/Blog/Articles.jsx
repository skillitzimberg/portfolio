import React from "react";
import Post from "./Post";
import Header from "../Header";
// import { posts } from "./posts";

const postList = [
  {
    title: "The Blog Begins",
    date: "August 21, 2018",
    article: "This is an article."
  },
  {
    title: "The Blog Begins Again",
    date: "August 22, 2018",
    article: "This is another article."
  },
  {
    title: "Blog: The Return",
    date: "August 23, 2018",
    article: "It's baaack!"
  }
];

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
