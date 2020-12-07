import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCharacterStore } from "../../store/characterContext";
import { useCounterStore } from "../../store/counterContext.js";
function CharacterButton() {
  const [character] = useCharacterStore();
  const [count] = useCounterStore();
  return (
    <Link to={"/character"}>
      <div className="py-3">
        <p>You have {count} stars</p>
        <Button
          block
          style={{ height: "20vh", maxWidth: "350px" }}
          className="btn-info mx-auto"
        >
          <img src={character.image} />
        </Button>
      </div>
    </Link>
  );
}

CharacterButton.propTypes = {};

export default CharacterButton;
