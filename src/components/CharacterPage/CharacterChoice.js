import React from "react";
import { useCharacterStore } from "../../store/characterContext";
import { useCounterStore } from "../../store/counterContext.js";
import 
function CharacterChoice(props) {
  const [character, setCharacter] = useCharacterStore();
  const [count] = useCounterStore();
  return (
    <img
      src={props.image.image}
      alt={props.image.alternate}
      onClick={() => setCharacter(props.image)}
    />
  );
}

CharacterChoice.propTypes = {};

export default CharacterChoice;
