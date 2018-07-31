import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../../views/Main/Main";
import WorkoutOverview from "../../views/WorkoutOverview/WorkoutOverview";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/workout/:id" component={WorkoutOverview} />
      </Switch>
    );
  }
}
