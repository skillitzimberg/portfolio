import React from "react";
import { Link } from "react-router-dom";

function Nav(){
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
}

export default Nav;
