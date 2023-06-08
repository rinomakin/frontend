import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  About,
  CreateBlog,
  DetailBlog,
  Login,
  MainApp,
  Register,
} from "../../pages";
import { Contact } from "../../pages/Contact/contact";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Detail-Blog">
          <DetailBlog />
        </Route>
        <Route path="/create-Blog">
          <CreateBlog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
