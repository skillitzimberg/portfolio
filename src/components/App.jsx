import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import Articles from "./Blog/Articles";
import Error404 from "./Error404";
import Main from "./Main";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import "../assets/css/styles.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleNewPostCreation = this.handleNewPostCreation.bind(this)
  }

  render(){
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/admin" render={()=><Admin postList={this.state.masterPostList} onNewPostCreation={this.handleNewPostCreation} />} />
        <Route exact path="/blog" render={()=><Articles postList={this.state.masterPostList} />} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route component={Error404} />
      </Switch>
    );
  }

  handleNewPostCreation() {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

}

export default App;
