import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import CreateProject from "./components/projects/CreateProject.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
