import React from "react";
import PropTypes from 'prop-types';
import Articles from "./Articles";
import Header from "../Header/Header";
import NewPostForm from "./NewPostForm";
// import { postList } from "./postList";

function Admin(props) {
  return (
    <div>
      <Header pageHead={"Admin"}/>
      <div className="container">
        <Articles postList={props.postList} />
        <NewPostForm onNewPostCreation={props.onNewPostCreation}/>
      </div>
    </div>
  );
}

Admin.propTypes = {
  postList: PropTypes.array,
  onNewPostCreation: PropTypes.func
};

export default Admin;