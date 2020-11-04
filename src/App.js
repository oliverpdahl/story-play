import React from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./LandingPage";

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
        <Route path="/">
          <LandingPage />
        </Route>
      </div>
    </Router>
  );
}
