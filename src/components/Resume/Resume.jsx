import React from "react";
import Header from "../Header/Header";
import "./resumeStyles.css";

function Resume(){

  return (
    <div>
      <Header pageHead={"Scott Bergler"}/>
      <div className="container">

        <div className="resumeHead">
          <p>commandinghands@gmail.com</p>
          <p>503.890.5118</p>
          <p>https://www.linkedin.com/in/scott-bergler/</p> 
          <p>https://github.com/skillitzimberg/</p>
        </div>

        <div className="work">
          <h4>PROFESSIONAL EXPERIENCE</h4>
          <div className="job">
            <p className="employer">
            Schoolhouse Electric &amp; Supply Company
            </p>
            <span>A Portland, OR born lighting and lifestyle goods designer and manufacturer.</span>
            <span className="jobTitle">Assembler</span>
            <ul>
              <li className="duty">Accurately check-in and inspect components in assembly kits.</li>
              <li className="duty">Assemble, test, and package light fixtures and other merchandise.</li>
              <li className="duty">Maintain quality control standards.</li>
              <li className="duty">Maintain up-to-date knowledge of standard operating procedures.</li>
            </ul>
          </div>

          <div className="job">
            <p className="employer">
            Schoolhouse Electric &amp; Supply Company
            </p>
            <span>A Portland, OR born lighting and lifestyle goods designer and manufacturer.</span>
            <span className="jobTitle">Assembler</span>
            <ul>
              <li className="duty">Accurately check-in and inspect components in assembly kits.</li>
              <li className="duty">Assemble, test, and package light fixtures and other merchandise.</li>
              <li className="duty">Maintain quality control standards.</li>
              <li className="duty">Maintain up-to-date knowledge of standard operating procedures.</li>
            </ul>
          </div>

          <div className="job">
            <p className="employer">
            Schoolhouse Electric &amp; Supply Company
            </p>
            <span>A Portland, OR born lighting and lifestyle goods designer and manufacturer.</span>
            <span className="jobTitle">Assembler</span>
            <ul>
              <li className="duty">Accurately check-in and inspect components in assembly kits.</li>
              <li className="duty">Assemble, test, and package light fixtures and other merchandise.</li>
              <li className="duty">Maintain quality control standards.</li>
              <li className="duty">Maintain up-to-date knowledge of standard operating procedures.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;