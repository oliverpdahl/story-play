import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCharacterStore } from "../../store/characterContext";
import { useCounterStore } from "../../store/counterContext.js";
import { useLocation } from "react-router-dom";
function CharacterButton() {
  const [character, setBacklink] = useCharacterStore();
  const [count] = useCounterStore();
  const location = useLocation();
  return (
    <Link to={"/character"}>
      <div className="py-3">
        <Button
          block
          style={{ height: "20vh", maxWidth: "350px" }}
          className="btn-info mx-auto"
          onClick={() => setBacklink(location.pathname)}
        >
          <div style={{ maxWidth: "100%", height: "100%" }}>
            <p>You have {count} stars</p>
            <img
              src={character.image}
              style={{ maxWidth: "100%", height: "70%" }}
            />
          </div>
        </Button>
      </div>
    </Link>
  );
}

CharacterButton.propTypes = {};

export default CharacterButton;
