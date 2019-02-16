import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import "./headerStyles.css";

function Header(props){
  return (
    <header className="siteHeading">
      <Nav/>
      <h1>{props.pageHead}</h1>
    </header>
  );
}

Header.propTypes = {
  pageHead: PropTypes.string
};

export default Header;
