import React from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./LandingPage";
import CareersPage from "./CareersPage";
import ExplorationPage from "./ExplorationPage";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* Route components are rendered if the path prop matches the current URL */}
        <Route path="/careers">
          <CareersPage />
        </Route>
        <Route path="/explore">
          <ExplorationPage />
        </Route>
        <Route path="/" exact>
          <LandingPage />
        </Route>
      </div>
    </Router>
  );
}
