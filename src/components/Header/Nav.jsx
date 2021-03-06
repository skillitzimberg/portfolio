import React from "react";
import { Link } from "react-router-dom";

function Nav(){
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Nav;
