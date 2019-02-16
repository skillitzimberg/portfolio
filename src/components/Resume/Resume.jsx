import React from "react";
import Header from "../Header/Header";

function Resume(){

  return (
    <div>
    <Header pageHead={"Scott Bergler"}/>
      <div className="container">
        <div className="header">
          <h3>commandinghands@gmail.com :: 555.555.5555</h3>
        </div>

        <div className="objective">
          <p>Get job. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="work">
          <p className="color">company <span>dates</span></p>
          <p>duties</p>
          <ul>
          <li>stuff and things</li>
          <li>stuff and things</li>
          <li>stuff and things</li>
          <li>stuff and things</li>
          </ul>

          <p>company <span>dates</span></p>
          <p>duties</p>
          <ul>
          <li>stuff and things</li>
          <li>stuff and things</li>
          <li>stuff and things</li>
          <li>stuff and things</li>
          </ul>

          <p>company <span>dates</span></p>
          <p>duties</p>
          <ul>
          <li>stuff and things</li>
          <li>stuff and things</li>
          <li>stuff and things</li>
          <li>stuff and things</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Resume;