import React from "react";
import Header from "../Header/Header";
import { masterPostList } from "./masterPostList";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: masterPostList,
      selectedPost: null
    }
  }

  render() {
    return (
      <div>
      <Header pageHead={"Admin"} />
      <Articles/>
      <NewPostForm/>
      </div>
    );

  }

  handleNewPostCreation() {
    
  }

}

export default Admin;