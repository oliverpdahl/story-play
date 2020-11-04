import React from "react";
import "./App.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./LandingPage";
import CareersPage from "./CareersPage";
import ExplorationPage from "./ExplorationPage";
import { Navbar, Nav } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand href="#home">StoryPlay</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="m-2 text-dark" to="/">
              Home
            </Link>
            <Link className="m-2 text-dark" to="/careers">
              Careers
            </Link>
            <Link className="m-2 text-dark" to="/explore">
              Marine Biologist
            </Link>
            <Link className="m-2 text-dark" to="/explore">
              Zoologist
            </Link>
            <Link className="m-2 text-dark" to="/explore">
              Archeologist
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
