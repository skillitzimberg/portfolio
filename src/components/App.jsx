import React from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "./Blog/Articles";
import Error404 from "./Error404";
import Main from "./Main";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import "../assets/css/styles.css";

function App(){

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/blog" component={Articles} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
