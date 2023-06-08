import React from "react";
import "./mainapp.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import { Footer, Header } from "../../components";
import Blog from "../Blog";

const MainApp = () => {
  return (
    <div className="container-main-app">
      <Header />
      <div className="box-mainapp">
        <Router>
          <Switch>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
