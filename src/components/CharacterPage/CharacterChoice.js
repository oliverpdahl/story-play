import React from "react";
import { useCharacterStore } from "../../store/characterContext";
import { useCounterStore } from "../../store/counterContext.js";
function CharacterChoice(props) {
  const [character] = useCharacterStore();
  const [count] = useCounterStore();
  return <img src={props.image.image} alt={props.image.alternate} />;
}

CharacterChoice.propTypes = {};

export default CharacterChoice;
