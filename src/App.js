import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CareersPage from "./components/CareersPage/CareersPage";
import ExplorationPage from "./components/ExplorationPage/ExplorationPage";
import NavBar from "./components/Navbar/Navbar";
import { Careers } from "./data/Careers";
import { CounterProvider } from "./store/index";
import CharacterPage from "./components/CharacterPage";

export default function App() {
  return (
    <CounterProvider>
      <Router>
        <NavBar />
        <div>
          {/* Route components are rendered if the path prop matches the current URL */}
          <Route path="/careers">
            <CareersPage />
          </Route>
          <Route path="/character" component={CharacterPage} exact />
          <Route
            exact
            path="/explore/:slug"
            render={({ match }) => (
              <ExplorationPage
                career={Careers.find((c) => c.slug === match.params.slug)}
              />
            )}
          ></Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
        </div>
      </Router>
    </CounterProvider>
  );
}
