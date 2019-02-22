import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { masterPostList } from "./masterPostList";
import "./blogStyles.css";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: masterPostList,
      selectedPost: null
    }
  }
  return (
    <div>
      <Header pageHead={"Brain Dump"}/>
      <div className="container">
        <main>
          <h3>A web development newbie becoming not a newbie.</h3>
    
          <section className="articleList">
            <h3>Blog Posts</h3>
            {masterPostList.map((post, index) =>
              <p><Link to="/" key={index}>{post.date}</Link></p>
            )}
          </section>

        </main>
      </div>
    </div>
  );
}

export default Articles;
