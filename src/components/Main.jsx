import React from "react";
import Header from "./Header/Header";

function Main(){
  return (
    <div>
      <Header pageHead={"portfolio"}/>
      <div className="container">
        <main>
          <p>Statement of Intent I guess . . . Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>
      </div>
    </div>
  );
}

export default Main;
