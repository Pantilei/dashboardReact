import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Home from "./Home";
import News from "./News";
import Sport from "./Sport";
import Photos from "./Photos";
import Tasks from "./Tasks";

import Signup from "./Signup";
import Login from "./Login";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/news" exact component={News} />
            <Route path="/sport" exact component={Sport} />
            <Route path="/photos" exact component={Photos} />
            <Route path="/tasks" exact component={Tasks} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
