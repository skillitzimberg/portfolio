import React from "react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
// import { postList } from "./postList";

function Admin() {

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