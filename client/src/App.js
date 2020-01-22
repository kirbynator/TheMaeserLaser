import React, { Fragment } from "react";
import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Read from "./components/Read";
import Profile from "./components/Profile";

import { Route, Switch } from "react-router-dom";

document.body.style = "background: #002755;";
const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/articles/:id" component={Read} />
      <Route exact path="/profiles/:id" component={Profile} />
    </Switch>
  </Fragment>
);

export default App;
