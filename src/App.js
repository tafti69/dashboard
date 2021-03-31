import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Home } from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/post" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
