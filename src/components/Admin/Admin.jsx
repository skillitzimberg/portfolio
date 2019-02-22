import React from "react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import NewPostForm from "./NewPostForm";
import Articles from "../Blog/Articles";
// import { postList } from "./postList";

function Admin(props) {

  return (
    <div>
      <Header pageHead={"Admin"} />
      <Articles />
      <NewPostForm onNewPostCreation={props.onNewPostCreation}/>
    </div>
  );

}

Admin.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default Admin;