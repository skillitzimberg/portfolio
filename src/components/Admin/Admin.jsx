import React from "react";
import Header from "../Header/Header";
import { postList } from "./postList";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: postList,
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