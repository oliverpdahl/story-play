import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function CharacterButton() {
  return (
    <Link to={"/character"}>
      <div className="py-3">
        <Button
          block
          style={{ height: "20vh", maxWidth: "350px" }}
          className="btn-info mx-auto"
        ></Button>
      </div>
    </Link>
  );
}

CharacterButton.propTypes = {};

export default CharacterButton;
