import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Home } from "./pages/Home";
import Post from "./pages/Post";
import Progress from "./pages/Progress";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/progress" component={Progress} />
      </Switch>
    </Router>
  );
}

export default App;
