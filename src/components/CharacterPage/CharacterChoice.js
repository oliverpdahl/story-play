import React from "react";
import { useCharacterStore } from "../../store/characterContext";
import { useCounterStore } from "../../store/counterContext.js";
import { Link } from "react-router-dom";
function CharacterChoice(props) {
  const [character, setCharacter] = useCharacterStore();
  const [count] = useCounterStore();
  return (
    <Link to={"/careers"}>
      <img
        src={props.image.image}
        alt={props.image.alternate}
        onClick={() => setCharacter(props.image)}
      />
    </Link>
  );
}

CharacterChoice.propTypes = {};

export default CharacterChoice;
