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
          <p>https://www.linkedin.com/in/scott-bergler/</p> 
          <p>https://github.com/skillitzimberg/</p>
          <p>503.890.5118</p>
        </div>

        <div className="education">
          <h4>EDUCATION</h4>

          <div className="school">
            <p className="degree">Bachelor of Arts &amp; Letters</p>
            <span>Portland State University • Portland, OR • 2002</span>
          </div>

          <div className="school">
            <p className="degree">Web Development: C# and React</p>
            <span>Epicodus • Portland, OR • 2019</span>
          </div>
        </div>

        <div className="work">
          <h4>PROFESSIONAL EXPERIENCE</h4>

          <div className="job">
            <p className="employer">Schoolhouse Electric &amp; Supply Company</p>
            <span>A Portland, OR born lighting and lifestyle goods designer and manufacturer.</span>
            <span className="jobTitle">Assembler</span>
            <ul className="duties">
              <li>Accurately check-in and inspect components in assembly kits.</li>
              <li>Assemble, test, and package light fixtures and other merchandise.</li>
              <li>Maintain quality control standards.</li>
              <li>Maintain up-to-date knowledge of standard operating procedures.</li>
            </ul>
          </div>

          <div className="job">
            <p className="employer">Kitchen Kaboodle</p>
            <span>A locally-owned kitchen supply, home décor, and furniture retailer.</span>
            <span className="jobTitle">Driver &amp; General Warehouse Staff</span>
            <ul className="duties">
              <li>Delivered merchandise and showroom furniture to the company’s four retail stores.</li>
              <li>Delivered and installed furniture in customers’ homes and offices.</li>
              <li>Assembled and inspected furniture.</li>
              <li>Received incoming freight.</li>
              <li>Pulled, packaged, and shipped online and store orders.</li>
            </ul>
          </div>

          <div className="job">
            <p className="employer">
            One Green World
            </p>
            <span>A family-owned plant nursery that has introduced many plants from Europe, the former Soviet Union, China, and Japan to home gardeners across North America.</span>
            <span className="jobTitle">Customer Service Representative &amp; Outreach Coordinator</span>
            <ul className="dutie">
              <li>Provided friendly, attentive, and detailed customer service with orders and product support.</li>
              <li>Helped customers problem-solve plant and growing issues.</li>
              <li>Coordinated advertising and community outreach through donations to organizations that matched company goals.</li>
              <li>Assisted the general manager in training and managing new employees.</li>
              <li>Maintained an in-depth understanding of an ever-changing inventory of plants.</li>
            </ul>
          </div>

          <div className="job">
            <p className="employer">Mountain Writers Series</p>
            <span>A seminal and leading literary presenter in the Pacific Northwest that coordinated writers’ tours in cooperation with partner organizations and schools throughout the Pacific Northwest, California, and Alaska.</span>
            <span className="jobTitle">Program Associate</span>
            <ul className="duties">
              <li>Developed and maintained relationships with customers, writers, artists, and educators.</li>
              <li>Coordinated literary programming with partners throughout the region.</li>
              <li>Assisted with grant-writing and reporting.</li>
              <li>Wrote and distributed newsletters, press releases, and email announcements.</li>
              <li>Recruited and trained volunteers and interns.</li>
              <li>Maintained the website and library.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Resume;