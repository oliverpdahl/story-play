import React from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CareersPage from "./components/CareersPage";
import ExplorationPage from "./components/ExplorationPage";
import NavBar from "./components/Navbar/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div>
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
