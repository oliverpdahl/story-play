import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Character from "../Character";

function CharacterButton() {
  return (
    <Link to={'character'}>
      <div className="py-3">
        <Button
          block
          style={{ height: "20vh", maxWidth: "650px" }}
          className="btn-info mx-auto"
        >
          <Character />
        </Button>
      </div>
    </Link>
  );
}

CharacterButton.propTypes = {};

export default CharacterButton;