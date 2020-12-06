import React from "react";
import { CharacterImages } from "../data/Character";
import { useCounterStore } from "../store/index.js";
export default function CharacterImage() {
  const [count, setCount] = useCounterStore();
  return (
    <div className="CharacterImage">
      <p>You clicked {count} times</p>
      <img
        src={CharacterImages.test_character.image}
        alt={CharacterImages.test_character.alternate}
        height="auto"
        width="70%"
      />
    </div>
  );
}
