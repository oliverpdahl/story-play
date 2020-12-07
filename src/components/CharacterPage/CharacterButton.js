import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCharacterStore } from "../../store/characterContext";
import { useCounterStore } from "../../store/counterContext.js";
import { useLocation } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
function CharacterButton() {
  const [character, setBacklink] = useCharacterStore();
  const [count] = useCounterStore();
  const location = useLocation();
  const listStars = () => {
    for (let i = 0; i < count; i++) {
      <StarFill color="yellow" key={i} />;
    }
  };
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
            <p>{Array(count).fill(<StarFill color="yellow" />)}</p>
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
