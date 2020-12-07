import React from "react";
import { useCharacterStore } from "../../store/characterContext";
import { useCounterStore } from "../../store/counterContext.js";
function CharacterButton(props) {
  const [character] = useCharacterStore();
  const [count] = useCounterStore();
  return <img src={props.image} alt={props.alternate} />;
}

CharacterButton.propTypes = {};

export default CharacterButton;
