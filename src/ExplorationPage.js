import React from "react";
import PropTypes from "prop-types";
import lion from "./images/lion.png";

function ExplorationPage(props) {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img src={lion} alt="lion" />
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
}

ExplorationPage.propTypes = {};

export default ExplorationPage;
